import React, { useState } from "react";
import { LoadingState } from "../components/ui/LoadingState";

const getFundingTypeArabic = (type: string) => {
  switch (type) {
    case "personal":
      return "شخصي";
    case "car":
      return "تمويل سيارة";
    case "real_estate":
      return "تمويل عقاري";
    case "installment":
      return "تقسيط سلع";
    case "credit_card":
      return "بطاقة ائتمانية";
    default:
      return "أخرى";
  }
};

export default function Certificate() {
  const [step, setStep] = useState<"form" | "loading" | "certificate">("form");
  const [fundingType, setFundingType] = useState<string>("personal");
  const [monthlyInstallment, setMonthlyInstallment] = useState<string>("2,450");
  const [duration, setDuration] = useState<string>("60");
  const [hasDownPayment, setHasDownPayment] = useState<boolean>(false);
  const [downPayment, setDownPayment] = useState<string>("");
  const [shareEntity, setShareEntity] = useState<string>("");
  const [certificateNo] = useState<string>(() => `QDA-2024-${Math.floor(1000 + Math.random() * 9000)}`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");
    setTimeout(() => {
      setStep("certificate");
    }, 1500);
  };

  return (
    <div className="relative w-full pb-8">
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-bg pointer-events-none -z-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-right">
        {step === "loading" && (
          <div className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant p-12 mt-10">
            <LoadingState message="جاري إنشاء شهادة قدها وتوثيق الملاءة المالية..." className="my-10" />
          </div>
        )}

        {step === "form" && (
          <div className="w-full max-w-3xl mx-auto mt-stack-md">
            {/* Page Header */}
            <div className="mb-8 text-right">
              <h1 className="font-display-lg text-display-lg text-primary mb-2">إنشاء شهادة قدها</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                أدخل تفاصيل الالتزام الذي ترغب في توثيق قدرتك عليه لإصدار شهادة موثوقة تعكس متانتك المالية.
              </p>
            </div>

            {/* Creation Form Card */}
            <div className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant overflow-hidden hover:shadow-[0px_8px_30px_rgba(11,35,65,0.08)] transition-all duration-300">
              {/* Card Header */}
              <div className="bg-surface-container-low p-6 border-b border-outline-variant flex justify-between items-center rounded-t-xl flex-row-reverse">
                <div className="flex items-center gap-3 flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      assignment
                    </span>
                  </div>
                  <div>
                    <h3 className="font-title-lg text-title-lg text-primary">تفاصيل الالتزام المستهدف</h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">الخطوة 1 من 1</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6 text-right">
                {/* Funding Type Grid */}
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface font-semibold text-right block w-full">
                    نوع التمويل المطلوب توثيقه
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { value: "personal", label: "شخصي", icon: "person" },
                      { value: "car", label: "سيارة", icon: "directions_car" },
                      { value: "real_estate", label: "عقاري", icon: "home" },
                      { value: "installment", label: "تقسيط سلع", icon: "shopping_bag" },
                      { value: "credit_card", label: "بطاقة ائتمانية", icon: "credit_card" },
                      { value: "other", label: "أخرى", icon: "more_horiz" },
                    ].map((item) => (
                      <label key={item.value} className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="funding_type"
                          value={item.value}
                          checked={fundingType === item.value}
                          onChange={(e) => setFundingType(e.target.value)}
                          className="peer sr-only"
                        />
                        <div className="p-4 rounded-lg border border-outline-variant bg-surface-container-lowest peer-checked:border-primary peer-checked:bg-primary-fixed/20 peer-checked:ring-1 peer-checked:ring-primary transition-all flex flex-col items-center gap-2 hover:bg-surface-container-low text-on-surface-variant peer-checked:text-primary shadow-sm">
                          <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                          <span className="font-label-md text-label-md">{item.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Numeric Inputs Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Monthly Installment */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface font-semibold text-right block" htmlFor="monthly_installment">
                      قيمة القسط الشهري المتوقع
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="monthly_installment"
                        value={monthlyInstallment}
                        onChange={(e) => setMonthlyInstallment(e.target.value)}
                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-right pr-12"
                        placeholder="0"
                        required
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-md text-label-md">ر.س</span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface font-semibold text-right block" htmlFor="duration">
                      مدة التمويل
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-right pr-16"
                        placeholder="0"
                        required
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-md text-label-md">أشهر</span>
                    </div>
                  </div>
                </div>

                {/* Downpayment Toggle & Optional Input */}
                <div className="flex flex-col gap-2 border-t border-outline-variant/30 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-label-md text-label-md text-on-surface font-semibold">هل توجد دفعة أولية؟</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">اختياري، يساهم في تحسين نسبة القبول.</p>
                    </div>
                    {/* Custom Toggle */}
                    <label className="relative inline-flex items-center cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={hasDownPayment}
                        onChange={(e) => setHasDownPayment(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary shadow-sm"></div>
                    </label>
                  </div>
                  {/* Expandable Input */}
                  {hasDownPayment && (
                    <div className="relative mt-2 animate-fadeIn">
                      <input
                        type="text"
                        value={downPayment}
                        onChange={(e) => setDownPayment(e.target.value)}
                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-right pr-12"
                        placeholder="مبلغ الدفعة الأولية"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-label-md text-label-md">ر.س</span>
                    </div>
                  )}
                </div>

                {/* Share With Input */}
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface font-semibold text-right block flex justify-between" htmlFor="share_entity">
                    <span>الجهة المراد مشاركة الشهادة معها</span>
                    <span className="text-on-surface-variant font-normal text-label-sm">(اختياري)</span>
                  </label>
                  <input
                    type="text"
                    id="share_entity"
                    value={shareEntity}
                    onChange={(e) => setShareEntity(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-right"
                    placeholder="مثال: البنك الأهلي السعودي، شركة اليسر..."
                  />
                </div>

                {/* Submit Action */}
                <div className="mt-4 pt-6 border-t border-outline-variant/30 flex justify-end">
                  <button
                    type="submit"
                    className="bg-secondary text-on-secondary hover:bg-secondary/90 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-sm rounded-lg px-8 py-3 font-title-lg text-title-lg font-bold flex items-center gap-2 cursor-pointer animate-in fade-in"
                  >
                    <span>إنشاء شهادة قدها</span>
                    <span className="material-symbols-outlined text-[20px]">magic_button</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {step === "certificate" && (
          <div className="relative z-10 max-w-4xl mx-auto w-full animate-fadeIn">
            {/* Header */}
            <div className="mb-10 text-center">
              <h1 className="font-display-lg text-display-lg text-primary mb-2 animate-in fade-in">شهادة قدها</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">التحقق الرسمي من الملاءة المالية</p>
            </div>

            {/* Certificate Card */}
            <div className="glass-card rounded-xl p-margin-mobile md:p-margin-desktop relative overflow-hidden mb-gutter group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[150px] text-primary">verified</span>
              </div>

              <div className="flex justify-between items-start mb-6 border-b border-outline-variant/30 pb-4 flex-row-reverse">
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1 flex-row-reverse">
                    <span className="material-symbols-outlined text-primary">shield</span>
                    <span className="font-title-lg text-title-lg text-primary">رقم الشهادة: {certificateNo}</span>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">تاريخ الإصدار: 24 مايو 2024 | صالحة حتى: 24 أغسطس 2024</p>
                </div>
                <div className="w-16 h-16 bg-surface-variant rounded-lg flex items-center justify-center p-2 relative">
                  <div
                    className="w-full h-full bg-grid-pattern opacity-50 relative"
                    style={{
                      backgroundImage: "repeating-linear-gradient(45deg, #0b2341 25%, transparent 25%, transparent 75%, #0b2341 75%, #0b2341), repeating-linear-gradient(45deg, #0b2341 25%, #fbf9fc 25%, #fbf9fc 75%, #0b2341 75%, #0b2341)",
                      backgroundPosition: "0 0, 4px 4px",
                      backgroundSize: "8px 8px"
                    }}
                  ></div>
                  <span className="material-symbols-outlined absolute text-on-surface-variant text-sm bg-surface p-1 rounded">qr_code</span>
                </div>
              </div>

              {shareEntity && (
                <div className="mb-6 bg-primary/5 p-4 rounded-lg border border-outline-variant/30 flex gap-2 items-center text-right flex-row-reverse">
                  <span className="material-symbols-outlined text-primary shrink-0">corporate_fare</span>
                  <p className="font-label-sm text-label-sm text-on-surface-variant flex-1">
                    هذه الشهادة مخصصة لمشاركتها مع جهة: <span className="font-bold text-primary">{shareEntity}</span>
                  </p>
                </div>
              )}

              <div className="mb-10 text-right">
                <h2 className="font-label-md text-label-md text-outline mb-2">بيانات المستفيد (محمية)</h2>
                <div className="flex items-center gap-4 bg-surface-container p-4 rounded-lg flex-row-reverse">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed-dim flex items-center justify-center text-primary font-bold">م ع</div>
                  <div className="text-right flex-1">
                    <p className="font-body-md text-body-md text-on-surface">م*** ع*** ا***</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">رقم الهوية: **** **** 10</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="bg-surface p-6 rounded-lg border border-outline-variant flex flex-col justify-center items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">health_and_safety</span>
                  <p className="font-label-md text-label-md text-outline mb-1">الحالة العامة</p>
                  <h3 className="font-title-lg text-title-lg text-primary font-bold">مناسب بحذر</h3>
                  <div className="mt-2 bg-[#FFF4E5] text-[#8A5A19] px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">warning</span>
                    تحت المراجعة
                  </div>
                </div>
                <div className="bg-surface p-6 rounded-lg border border-outline-variant flex flex-col justify-center items-center text-center relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary-fixed-dim/20 to-transparent pointer-events-none"></div>
                  <span className="material-symbols-outlined text-4xl text-primary mb-2">speed</span>
                  <p className="font-label-md text-label-md text-outline mb-1">مؤشر قدها</p>
                  <h3 className="font-display-lg text-display-lg text-primary font-bold">68<span className="text-title-lg text-outline">/100</span></h3>
                </div>
                <div className="bg-surface p-4 rounded-lg border border-outline-variant flex items-center gap-3 justify-start flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E8B57] shrink-0">
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface flex-1 text-right">متوسط الدخل ضمن نطاق موثق</p>
                </div>
                <div className="bg-surface p-4 rounded-lg border border-outline-variant flex items-center gap-3 justify-start flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E8B57] shrink-0">
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface flex-1 text-right">نسبة الالتزامات ضمن نطاق قابل للتحمل</p>
                </div>
              </div>

              <div className="mb-6 pt-4 border-t border-outline-variant/30 text-right">
                <h2 className="font-label-md text-label-md text-outline mb-3">تفاصيل الالتزام</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-row-reverse">
                  <div className="flex flex-col">
                    <span className="text-label-sm text-on-surface-variant">نوع التمويل</span>
                    <span className="text-body-md font-bold text-on-surface">{getFundingTypeArabic(fundingType)}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-sm text-on-surface-variant">مقدار القسط</span>
                    <span className="text-body-md font-bold text-on-surface">{monthlyInstallment} ر.س</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-sm text-on-surface-variant">مدة التقسيط</span>
                    <span className="text-body-md font-bold text-on-surface">{duration} شهر</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-sm text-on-surface-variant">الدفعة الأولية</span>
                    <span className="text-body-md font-bold text-on-surface">
                      {hasDownPayment && downPayment ? `${downPayment} ر.س` : "0 ر.س"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/30 flex gap-2 items-start text-right">
                <span className="material-symbols-outlined text-outline mt-1">info</span>
                <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
                  تم التحقق من التدفق النقدية بناءً على بيانات مصرفية مفتوحة بموافقة المستخدم. لا تحتوي الشهادة على كشف الحساب الكامل. تعتبر هذه الشهادة ملخصاً للحالة المالية في وقت الإصدار ولا تمثل ضماناً مستقبلياً.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <button className="bg-[#C96B4B] hover:bg-[#b05a3e] text-white font-label-md text-label-md py-3 px-6 rounded-xl shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined">share</span>
                مشاركة الشهادة
              </button>
              <button className="bg-transparent border-[1.5px] border-primary text-primary hover:bg-surface-variant font-label-md text-label-md py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined">download</span>
                تنزيل PDF
              </button>
              <button
                onClick={() => setStep("form")}
                className="bg-transparent border-[1.5px] border-outline text-on-surface-variant hover:bg-surface-variant font-label-md text-label-md py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 sm:mr-auto cursor-pointer"
              >
                <span className="material-symbols-outlined">edit</span>
                تعديل البيانات
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
