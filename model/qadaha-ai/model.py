import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report
import matplotlib.pyplot as plt
#!pip install shap
import shap
import joblib

df = pd.read_csv("Qadaha_Professional_Dataset.csv")

x = df.drop("affordability_label", axis=1)
y = df["affordability_label"]

x_train, x_test, y_train, y_test = train_test_split(x,y,
test_size = 0.2, random_state = 42
)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(x_train, y_train)

joblib.dump(model, "qadaha_model.pkl")

predictions = model.predict(x_test)
accuracy = accuracy_score(y_test, predictions)

importance = model.feature_importances_
importance_df = pd.DataFrame({
    "Feature": x.columns,
    "Importance": importance
})

importance_df = importance_df.sort_values(
    by = "Importance",
    ascending = False
)

"""def calculate_score(row):
  score = 100

  score -= row["obligation_to_income_ratio"] * 40

  score -= row["income_volatility_score"] * 0.2

  score += row["cashflow_stability_score"] * 0.1

  score = max(0, min(100,score))
  return round(score,1)"""

def ai_explanation(model, user):
  explainer = shap.TreeExplainer(model)
  explanation = explainer(user)

  predicted_class = model.predict(user)[0]
  class_index = list(model.classes_).index(predicted_class)

  values = explanation.values[0, :,class_index]
  feature_names = user.columns
  importance = list(zip(feature_names,values))

  importance = sorted(importance,
                      key=lambda x: abs(x[1]),
                      reverse=True)
  return importance [:3]

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

probabilities = model.predict_proba(x_test)

confidence = np.max(probabilities, axis =1)

result = pd.DataFrame({"Actual":y_test.values,
                       "Prediction":predictions,
                       "Confidence":confidence
                       })

def calculate_smart_score (model,user):
  prob = model.predict_proba(user)[0]
  classes = model.classes_

  class_weights = {
      "Not Suitable": 0.0,
      "Suitable with Caution": 0.5,
      "Suitable":1.0
  }
  predicted_class = classes[np.argmax(prob)]

  base_score = class_weights[predicted_class]

  confidence = np.max(prob)

  surplus_score = min(max(user["avg_monthly_surplus"].values[0] / 5000,0),1)
  stability_score = min(max(user["cashflow_stability_score"].values[0] / 100, 0), 1)

  obligation_score = 1 - min(
        max(user["obligation_to_income_ratio"].values[0] / 0.6, 0),
        1
    )

  final_score = (
        0.50 * base_score +
        0.30 * confidence +
        0.10 * surplus_score +
        0.10 * stability_score +
        0.10 * obligation_score
    )

  final_score = max(0, min(97, final_score * 97))

  return round(final_score, 1), predicted_class, confidence

new_user = pd.DataFrame ({
    "user_id": [1001],
    "avg_monthly_income_6m": [12000],
    "income_volatility_score": [15],
    "avg_monthly_expenses": [7000],
    "monthly_obligations": [2500],
    "ending_balance_avg": [9000],
    "cashflow_stability_score": [90],
    "proposed_installment_amount": [1000],
    "obligation_to_income_ratio": [0.21],
    "avg_monthly_surplus": [3500]
})

def Get_Recommendatoin(row,prediction):
  tips = []
  
  if prediction == "Suitable":
    tips.append("✔ استمر في الحفاظ على استقرار دخلك")
    tips.append("✔ تجنب زيادة الالتزامات المالية")
  
  elif prediction == "Suitable with Caution":
   
    if row["obligation_to_income_ratio"] > 0.4:
     tips.append("✔ حاول تقليل الالتوامات  الشهرية")
  
    if row["income_volatility_score"] > 50:
     tips.append ("✔ حاول زيادة استقرار دحلك")
  
    if row["avg_monthly_surplus"] < 1000:
     tips.append ("✔ حاول تقليل مصروفاتك لزيادة الادخار ")
    
    if row["cashflow_stability_score"] > 70:
     tips.append("✔ حاول الحفاظ على استقرار الدخل")

  else:
    tips.append("✔ حسن استقرار دخلك")
    tips.append("✔ زد الفائض الشهري")
    tips.append("✔ أجل طلب التمويل حتى يتحسن وضعك المالي")
  
  return tips

def Risk_level (score):
  if (score >= 80):
     return("🟢 مخاطرة منخفظة")
  elif (score >= 50):
     return("🟡 مخاطرة متوسطة")
  else :
     return("🔴 مخاطرة عالية")

def print_report(model, user):

  prediction = model.predict(user)[0]
  score , status, confidence= calculate_smart_score(model, user)
  reasons = explain(user.iloc[0])
  tips = Get_Recommendatoin (user.iloc[0], prediction)
  risk = Risk_level(score)

  print("╔════════════════════════════════════╗")
  print("║          Qadaha AI Report          ║")
  print("╚════════════════════════════════════╝")

  print(f"\n📊 Status: {prediction}")
  print(f"🎯 Confidence: {confidence *100:.2f}%")
  print(f"⭐ Qadaha Score: {score}/100")
  print(f"🛡️ Risk Level: {risk}")

  print("\n📋 Reasons:")

  if len(reasons) == 0:
        print("✔ لا توجد عوامل سلبية مؤثرة.")
  else:
        for r in reasons:
            print("✔", r)
  print("\n🤖 AI Explanation:")

  top_features = ai_explanation(model, user)

  for feature, value in top_features:

    arrow = "⬆️" if value > 0 else "⬇️"

    print(f"{arrow} {feature} ({value:.2f})")

  print("\n💡 Recommendations:")

  for tip in tips:
        print(tip)

  print("\n" + "=" * 35)


print_report(model, new_user)


