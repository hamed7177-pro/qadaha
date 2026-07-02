import pandas as pd
import numpy as np
import shap
import joblib
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
import uvicorn
import os
import sys
sys.stdout.reconfigure(encoding='utf-8')
###### lkj
app = FastAPI(title="Qadaha AI API")

# Load the trained model
MODEL_PATH = "qadaha_model.pkl"
try:
    model = joblib.load(MODEL_PATH)
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

# Serve static files for frontend
if not os.path.exists("static"):
    os.makedirs("static")
app.mount("/static", StaticFiles(directory="static"), name="static")

class UserData(BaseModel):
    user_id: int = 1001
    avg_monthly_income_6m: float
    income_volatility_score: float
    avg_monthly_expenses: float
    monthly_obligations: float
    ending_balance_avg: float
    cashflow_stability_score: float
    proposed_installment_amount: float
    obligation_to_income_ratio: float
    avg_monthly_surplus: float

def ai_explanation(model, user_df):
    explainer = shap.TreeExplainer(model)
    explanation = explainer(user_df)

    predicted_class = model.predict(user_df)[0]
    class_index = list(model.classes_).index(predicted_class)

    values = explanation.values[0, :, class_index]
    feature_names = user_df.columns
    importance = list(zip(feature_names, values))

    importance = sorted(importance, key=lambda x: abs(x[1]), reverse=True)
    return importance[:3]

def explain(row):
    reasons = []
    if row["obligation_to_income_ratio"] > 0.4:
        reasons.append("ارتفاع نسبة الالتزامات إلى الدخل")
    if row["income_volatility_score"] > 50:
        reasons.append("الدخل متذبذب")
    if row["cashflow_stability_score"] > 70:
        reasons.append("التدفق النقدي مستقر")
    if row["avg_monthly_surplus"] > 2000:
        reasons.append("يوجد فائض شهري جيد")
    return reasons

def calculate_smart_score(model, user_df):
    prob = model.predict_proba(user_df)[0]
    classes = model.classes_

    class_weights = {
        "Not Suitable": 0.0,
        "Suitable with Caution": 0.5,
        "Suitable": 1.0
    }
    predicted_class = classes[np.argmax(prob)]
    base_score = class_weights[predicted_class]
    confidence = np.max(prob)

    surplus_score = min(max(user_df["avg_monthly_surplus"].values[0] / 5000, 0), 1)
    stability_score = min(max(user_df["cashflow_stability_score"].values[0] / 100, 0), 1)
    obligation_score = 1 - min(max(user_df["obligation_to_income_ratio"].values[0] / 0.6, 0), 1)

    final_score = (
        0.50 * base_score +
        0.30 * confidence +
        0.10 * surplus_score +
        0.10 * stability_score +
        0.10 * obligation_score
    )

    final_score = max(0, min(97, final_score * 97))
    return round(final_score, 1), predicted_class, confidence

def Get_Recommendatoin(row, prediction):
    tips = []
    if prediction == "Suitable":
        tips.append("✔ استمر في الحفاظ على استقرار دخلك")
        tips.append("✔ تجنب زيادة الالتزامات المالية")
    elif prediction == "Suitable with Caution":
        if row["obligation_to_income_ratio"] > 0.4:
            tips.append("✔ حاول تقليل الالتزامات الشهرية")
        if row["income_volatility_score"] > 50:
            tips.append("✔ حاول زيادة استقرار دخلك")
        if row["avg_monthly_surplus"] < 1000:
            tips.append("✔ حاول تقليل مصروفاتك لزيادة الادخار")
        if row["cashflow_stability_score"] > 70:
            tips.append("✔ حاول الحفاظ على استقرار الدخل")
    else:
        tips.append("✔ حسّن استقرار دخلك")
        tips.append("✔ زد الفائض الشهري")
        tips.append("✔ أجّل طلب التمويل حتى يتحسن وضعك المالي")
    return tips

def Risk_level(score):
    if score >= 80:
        return "🟢 مخاطرة منخفضة"
    elif score >= 50:
        return "🟡 مخاطرة متوسطة"
    else:
        return "🔴 مخاطرة عالية"

@app.get("/")
def read_index():
    return FileResponse("static/index.html")

@app.post("/predict")
def predict(data: UserData):
    if model is None:
        return {"error": "Model not loaded"}
    
    # Convert input to DataFrame matching model features
    user_df = pd.DataFrame([data.dict()])
    # Exclude user_id from prediction features since model doesn't use it, wait...
    # In model.py, x = df.drop("affordability_label", axis=1)
    # The dataset has user_id? Let's check features.
    
    prediction = model.predict(user_df)[0]
    score, status, confidence = calculate_smart_score(model, user_df)
    reasons = explain(user_df.iloc[0])
    tips = Get_Recommendatoin(user_df.iloc[0], prediction)
    risk = Risk_level(score)
    top_features = ai_explanation(model, user_df)
    
    explanation_formatted = [{"feature": f, "value": round(v, 2), "direction": "up" if v > 0 else "down"} for f, v in top_features]

    return {
        "status": str(prediction),
        "confidence": float(confidence),
        "score": float(score),
        "risk_level": risk,
        "reasons": reasons,
        "ai_explanation": explanation_formatted,
        "recommendations": tips
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
