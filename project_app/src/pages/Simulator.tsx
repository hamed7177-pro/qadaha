import { useState } from "react";

export default function Simulator() {
  const [hasDownPayment, setHasDownPayment] = useState(false);

  return (
    <div className="space-y-gutter pb-8 text-right">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <div>
          <h1 className="font-display-lg text-display-lg md:text-headline-lg-mobile text-primary font-bold mb-2">محاكي الالتزام</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">قم بمحاكاة أثر الالتزامات المالية الجديدة على ميزانيتك قبل اتخاذ القرار.</p>
        </div>
      </div>

      {/* Bento Grid Layout for Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Form Column (Right - RTL) */}
        <div className="lg:col-span-5 flex flex-col gap-gutter">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant hover:shadow-[0px_8px_30px_rgba(11,35,65,0.08)] transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">add_card</span>
                <h2 className="font-title-lg text-title-lg text-primary font-bold">تفاصيل الالتزام المقترح</h2>
              </div>
              <span className="material-symbols-outlined text-outline">more_vert</span>
            </div>
            <form className="flex flex-col gap-stack-md text-right">
              {/* Commitment Type */}
              <div className="flex flex-col">
                <label className="text-label-md font-label-md text-on-surface-variant mb-stack-sm">نوع الالتزام</label>
                <div className="relative">
                  <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-10 pr-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer" dir="rtl">
                    <option value="installment">تقسيط</option>
                    <option value="loan">قرض شخصي</option>
                    <option value="car">تمويل سيارة</option>
                    <option value="mortgage">تمويل عقاري</option>
                  </select>
                  <span className="material-symbols-outlined absolute left-3 top-3 text-on-surface-variant pointer-events-none text-[20px]">keyboard_arrow_down</span>
                </div>
              </div>

              {/* Expected Monthly Installment */}
              <div className="flex flex-col">
                <label className="text-label-md font-label-md text-on-surface-variant mb-stack-sm">القسط الشهري المتوقع (ر.س)</label>
                <div className="relative">
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-12 pr-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" dir="rtl" type="text" defaultValue="1,200" />
                  <span className="absolute left-4 top-3 text-on-surface-variant text-label-md">ر.س</span>
                </div>
              </div>

              {/* Duration */}
              <div className="flex flex-col">
                <label className="text-label-md font-label-md text-on-surface-variant mb-stack-sm">مدة الالتزام (بالأشهر)</label>
                <div className="relative">
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-16 pr-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" dir="rtl" type="number" defaultValue="12" />
                  <span className="absolute left-4 top-3 text-on-surface-variant text-label-md">شهرًا</span>
                </div>
              </div>

              {/* Start Date */}
              <div className="flex flex-col">
                <label className="text-label-md font-label-md text-on-surface-variant mb-stack-sm">تاريخ بداية الالتزام</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 px-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" dir="rtl" type="date" defaultValue="2024-11-01" />
              </div>

              {/* Down Payment Toggle */}
              <div className="flex items-center justify-between mt-stack-sm bg-surface-container-low py-3 px-4 rounded-lg border border-outline-variant/30">
                <label className="text-body-md font-body-md text-on-surface cursor-pointer select-none" htmlFor="toggle">هل توجد دفعة أولية؟</label>
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-surface-container-lowest border-4 border-outline-variant appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10"
                    id="toggle"
                    name="toggle"
                    type="checkbox"
                    checked={hasDownPayment}
                    onChange={(e) => setHasDownPayment(e.target.checked)}
                  />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-outline-variant cursor-pointer transition-colors duration-200 ease-in-out" htmlFor="toggle"></label>
                </div>
              </div>

              {/* Down Payment Value Input (Conditional) */}
              {hasDownPayment && (
                <div className="flex flex-col transition-all duration-300 animate-fadeIn">
                  <label className="text-label-md font-label-md text-on-surface-variant mb-stack-sm">قيمة الدفعة الأولية (ر.س)</label>
                  <div className="relative">
                    <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-12 pr-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" dir="rtl" type="text" placeholder="أدخل قيمة الدفعة الأولية..." />
                    <span className="absolute left-4 top-3 text-on-surface-variant text-label-md">ر.س</span>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-stack-sm mt-stack-lg">
                <button className="flex-1 bg-secondary text-on-secondary font-title-lg text-label-md font-bold py-3 px-6 rounded-lg hover:bg-on-secondary-container/90 transition-all active:scale-95 shadow-sm flex items-center justify-center gap-2" type="button">
                  <span>احسب قدرتي</span>
                  <span className="material-symbols-outlined">calculate</span>
                </button>
                <button className="flex-1 bg-transparent border border-primary text-primary font-title-lg text-label-md font-bold py-3 px-6 rounded-lg hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2" type="button">
                  <span>حفظ كمسودة</span>
                  <span className="material-symbols-outlined">save</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Simulation Preview Column (Left - RTL) */}
        <div className="lg:col-span-7 flex flex-col gap-gutter">
          {/* Impact Alert */}
          <div className="bg-primary-container rounded-xl p-6 shadow-[0px_4px_20px_rgba(11,35,65,0.05)] relative overflow-hidden flex items-start gap-4 text-right border-r-4 border-secondary">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 100% 0%, #ffdbd0 0%, transparent 50%)" }}></div>
            <div className="bg-secondary p-3 rounded-full flex-shrink-0 z-10 text-on-secondary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
            </div>
            <div className="z-10">
              <h3 className="text-headline-md font-headline-md text-surface-bright mb-1">أثر الالتزام الجديد</h3>
              <p className="text-title-lg font-title-lg text-tertiary-fixed-dim leading-relaxed">
                بعد إضافة هذا الالتزام (1,200 ر.س)، ستصل نسبة الالتزامات الإجمالية إلى <span className="text-secondary-fixed font-bold">42%</span> من متوسط الدخل الشهري.
              </p>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Before Card */}
            <div className="bg-surface-container-lowest rounded-xl p-stack-lg shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant text-right flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-full bg-surface-container-low p-stack-sm rounded-lg mb-stack-md text-center border border-outline-variant/30">
                <span className="text-title-lg font-title-lg text-primary font-bold">الوضع الحالي (قبل)</span>
              </div>
              <div className="relative w-40 h-40 flex items-center justify-center mb-stack-md">
                {/* Minimalist Donut Chart Visual */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="transparent" r="40" stroke="var(--color-surface-container-high)" strokeWidth="8"></circle>
                  <circle cx="50" cy="50" fill="transparent" r="40" stroke="var(--color-primary)" strokeDasharray="251.2" strokeDashoffset="170.8" strokeLinecap="round" strokeWidth="8"></circle>
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-[36px] font-bold text-primary leading-none">32%</span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant mt-1">نسبة الالتزام</span>
                </div>
              </div>
              <div className="w-full space-y-3">
                <div className="flex justify-between items-center text-body-md font-body-md">
                  <span className="text-primary font-bold">4,500 ر.س</span>
                  <span className="text-on-surface-variant flex items-center gap-2">إجمالي الالتزامات <span className="w-3 h-3 rounded-full bg-primary block"></span></span>
                </div>
                <div className="flex justify-between items-center text-body-md font-body-md">
                  <span className="text-primary font-bold">9,500 ر.س</span>
                  <span className="text-on-surface-variant flex items-center gap-2">المتبقي للتصرف <span className="w-3 h-3 rounded-full bg-surface-container-high block"></span></span>
                </div>
              </div>
            </div>

            {/* After Card (Dark Highlight) */}
            <div className="bg-primary-container rounded-xl p-stack-lg shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-white/10 text-right flex flex-col items-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              {/* Decorative background element */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full opacity-10 blur-2xl"></div>
              <div className="w-full bg-white/10 p-stack-sm rounded-lg mb-stack-md text-center z-10 border border-white/5">
                <span className="text-title-lg font-title-lg text-secondary-fixed font-bold">الوضع المتوقع (بعد)</span>
              </div>
              <div className="relative w-40 h-40 flex items-center justify-center mb-stack-md z-10">
                {/* Minimalist Donut Chart Visual */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="transparent" r="40" stroke="rgba(255,255,255,0.15)" strokeWidth="8"></circle>
                  <circle cx="50" cy="50" fill="transparent" r="40" stroke="var(--color-secondary-container)" strokeDasharray="251.2" strokeDashoffset="145.7" strokeLinecap="round" strokeWidth="8"></circle>
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-[36px] font-bold text-secondary-container leading-none">42%</span>
                  <span className="text-label-sm font-label-sm text-surface-variant opacity-80 mt-1">نسبة الالتزام</span>
                </div>
              </div>
              <div className="w-full space-y-3 z-10">
                <div className="flex justify-between items-center text-body-md font-body-md">
                  <span className="text-surface-bright font-bold">5,700 ر.س</span>
                  <span className="text-surface-variant opacity-90 flex items-center gap-2">إجمالي الالتزامات <span className="w-3 h-3 rounded-full bg-secondary-container block shadow-[0_0_8px_rgba(254,149,114,0.6)]"></span></span>
                </div>
                <div className="flex justify-between items-center text-body-md font-body-md">
                  <span className="text-surface-bright font-bold">8,300 ر.س</span>
                  <span className="text-surface-variant opacity-90 flex items-center gap-2">المتبقي للتصرف <span className="w-3 h-3 rounded-full bg-white/20 block"></span></span>
                </div>
              </div>
              {/* Caution Indicator */}
              <div className="mt-stack-md w-full bg-[#390c00]/40 border border-secondary/30 rounded-lg p-2 flex items-center justify-center gap-2 text-secondary-fixed z-10">
                <span className="material-symbols-outlined text-sm">warning</span>
                <span className="text-label-sm font-label-sm">يقترب من الحد الأقصى الموصى به (45%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
