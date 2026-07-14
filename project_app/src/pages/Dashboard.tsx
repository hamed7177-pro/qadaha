import { useState, useEffect } from "react";
import { LoadingState } from "../components/ui/LoadingState";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingState message="جاري تجهيز بيانات لوحة القيادة..." className="mt-20" />;
  }

  return (
    <div className="space-y-gutter pb-8">
      {/* Header */}
      <div className="mb-6 text-right">
        <h1 className="font-headline-lg text-headline-lg text-primary mb-2">نظرة مالية شاملة</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">تحليل دقيق لتدفقاتك النقدية وملاءتك المالية بناءً على البيانات المحدثة.</p>
      </div>

      {/* Bento Grid: Financial Summary & Score */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Left: Financial Cards (col-span-8) */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Card 1: Income */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant border-r-4 border-r-primary flex flex-col justify-between h-32 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-between items-start">
              <span className="font-label-sm text-label-sm text-on-surface-variant">متوسط الدخل الشهري</span>
              <span className="material-symbols-outlined text-primary">payments</span>
            </div>
            <div className="flex items-baseline justify-between w-full">
              <div className="flex items-baseline gap-1" dir="ltr">
                <span className="font-display-lg text-[32px] text-primary font-bold">18,500</span>
                <span className="font-caption text-caption text-on-surface-variant">ر.س</span>
              </div>
              <span className="px-2 py-0.5 bg-success-container/20 rounded font-label-sm text-label-sm text-success flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">trending_up</span> <span className="font-bold">2.4%</span>
              </span>
            </div>
          </div>

          {/* Card 2: Expenses */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant border-r-4 border-r-secondary flex flex-col justify-between h-32 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-between items-start">
              <span className="font-label-sm text-label-sm text-on-surface-variant">المصاريف الشهرية</span>
              <span className="material-symbols-outlined text-secondary">shopping_cart</span>
            </div>
            <div className="flex items-baseline gap-1" dir="ltr">
              <span className="font-display-lg text-[32px] text-primary font-bold">7,200</span>
              <span className="font-caption text-caption text-on-surface-variant">ر.س</span>
            </div>
          </div>

          {/* Card 3: Obligations */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant border-r-4 border-r-tertiary flex flex-col justify-between h-32 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-between items-start">
              <span className="font-label-sm text-label-sm text-on-surface-variant">الالتزامات المتكررة</span>
              <span className="material-symbols-outlined text-tertiary">account_balance_wallet</span>
            </div>
            <div className="flex items-baseline gap-1" dir="ltr">
              <span className="font-display-lg text-[32px] text-primary font-bold">6,100</span>
              <span className="font-caption text-caption text-on-surface-variant">ر.س</span>
            </div>
          </div>

          {/* Card 4: Surplus */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant border-r-4 border-r-secondary-container flex flex-col justify-between h-32 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-between items-start">
              <span className="font-label-sm text-label-sm text-on-surface-variant">الفائض المتوقع</span>
              <span className="material-symbols-outlined text-secondary-container">savings</span>
            </div>
            <div className="flex items-baseline justify-between w-full">
              <div className="flex items-baseline gap-1" dir="ltr">
                <span className="font-display-lg text-[32px] text-secondary-container font-bold">5,200</span>
                <span className="font-caption text-caption text-on-surface-variant">ر.س</span>
              </div>
              <span className="px-2 py-0.5 bg-surface-container rounded font-label-sm text-label-sm text-on-surface-variant">
                تقديري
              </span>
            </div>
          </div>
        </div>

        {/* Right: Qadha Score (col-span-4) */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(11,35,65,0.05)] p-6 border border-outline-variant flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-error via-tertiary-fixed-dim to-on-tertiary-container"></div>
          <h3 className="font-title-md text-title-md text-primary mb-4">مؤشر قدها</h3>
          
          <div className="relative w-48 h-24 overflow-hidden flex flex-col items-center justify-end mb-4">
            <svg className="w-full h-full absolute top-0" viewBox="0 0 100 50">
              <path className="fill-none stroke-outline-variant/30" strokeWidth="10" strokeLinecap="round" d="M 10 45 A 35 35 0 0 1 90 45" />
              <path className="fill-none stroke-secondary transition-all duration-1000 ease-out" strokeWidth="10" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset={125.6 - (125.6 * 72) / 100} d="M 10 45 A 35 35 0 0 1 90 45" />
            </svg>
            <div className="flex flex-col items-center z-10">
              <span className="text-[36px] font-bold text-primary leading-none">72</span>
              <span className="text-caption text-on-surface-variant opacity-80 mt-1">من ١٠٠</span>
            </div>
          </div>

          <div className="text-center mt-2">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm mb-2 font-bold">
              مناسب بحذر
            </div>
            <p className="font-caption text-caption text-on-surface-variant px-4">ملاءتك المالية جيدة، ولكن يفضل مراقبة الالتزامات الجديدة بدقة.</p>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant">
        <div className="flex items-center gap-2 mb-4 justify-start">
          <span className="material-symbols-outlined text-primary">lightbulb</span>
          <h3 className="font-title-md text-title-md text-primary font-bold">رؤى وتحليلات ذكية</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-surface-container-lowest rounded-lg flex items-center justify-center shadow-sm shrink-0 text-secondary">
              <span className="material-symbols-outlined text-[24px]">trending_up</span>
            </div>
            <div>
              <p className="font-body-md text-body-md text-primary font-bold">استقرار الدخل</p>
              <p className="font-caption text-caption text-on-surface-variant mt-1">الدخل جيد لكنه متذبذب بشكل طفيف بنسبة <span className="font-bold text-secondary text-[16px]">١٥٪</span> بين الأشهر.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-surface-container-lowest rounded-lg flex items-center justify-center shadow-sm shrink-0 text-secondary">
              <span className="material-symbols-outlined text-[24px]">pie_chart</span>
            </div>
            <div>
              <p className="font-body-md text-body-md text-primary font-bold">نسبة الالتزامات</p>
              <p className="font-caption text-caption text-on-surface-variant mt-1">الالتزامات الحالية تمثل <span className="font-bold text-primary-container text-[16px]">٣٤٪</span> من متوسط الدخل، وهي ضمن النطاق الآمن.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-surface-container-lowest rounded-lg flex items-center justify-center shadow-sm shrink-0 text-secondary-container">
              <span className="material-symbols-outlined text-[24px]">check_circle</span>
            </div>
            <div>
              <p className="font-body-md text-body-md text-primary font-bold">القدرة الائتمانية</p>
              <p className="font-caption text-caption text-on-surface-variant mt-1">الفائض المتوقع يغطي قسطًا جديدًا حتى <span className="font-bold text-secondary-container text-[16px]">٩٠٠ ر.س</span> بحذر لتجنب الضغوط.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cards: Recurring Commitments & Expense Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        {/* Recurring Commitments */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-title-lg text-title-lg font-bold text-on-surface">الالتزامات الشهرية</h3>
            <span className="material-symbols-outlined text-outline">more_vert</span>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">person</span>
                  <span className="font-label-md text-on-surface">قرض شخصي</span>
                </div>
                <span className="font-label-md text-on-surface-variant font-bold">3,500 ر.س</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">directions_car</span>
                  <span className="font-label-md text-on-surface">تمويل سيارة</span>
                </div>
                <span className="font-label-md text-on-surface-variant font-bold">1,800 ر.س</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-secondary h-full rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container text-[18px]">credit_card</span>
                  <span className="font-label-md text-on-surface">بطاقات ائتمان</span>
                </div>
                <span className="font-label-md text-on-surface-variant font-bold">800 ر.س</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-secondary-container h-full rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Expense Breakdown */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-title-lg text-title-lg font-bold text-on-surface">تصنيف المصروفات</h3>
            <span className="material-symbols-outlined text-outline">more_vert</span>
          </div>
          
          <div className="flex items-center justify-between gap-8 flex-row-reverse">
            <div className="relative w-32 h-32 flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#e4e2de" strokeWidth="12"></circle>
                {/* السكن - 45% */}
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#000d21" strokeDasharray="113 251" strokeDashoffset="0" strokeLinecap="round" strokeWidth="12"></circle>
                {/* معيشة - 35% */}
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#994629" strokeDasharray="87.8 251" strokeDashoffset="-113" strokeLinecap="round" strokeWidth="12"></circle>
                {/* أخرى - 20% */}
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#c4c0ff" strokeDasharray="50.2 251" strokeDashoffset="-200.8" strokeLinecap="round" strokeWidth="12"></circle>
              </svg>
              <div className="absolute text-center">
                <span className="text-[18px] font-bold text-on-surface">7,200</span>
                <span className="block text-[10px] text-on-surface-variant">ر.س</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                  <span className="text-label-md text-on-surface">السكن</span>
                </div>
                <span className="text-label-md font-bold text-on-surface">٤٥٪</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
                  <span className="text-label-md text-on-surface">معيشة</span>
                </div>
                <span className="text-label-md font-bold text-on-surface">٣٥٪</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#c4c0ff]"></div>
                  <span className="text-label-md text-on-surface">أخرى</span>
                </div>
                <span className="text-label-md font-bold text-on-surface">٢٠٪</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
