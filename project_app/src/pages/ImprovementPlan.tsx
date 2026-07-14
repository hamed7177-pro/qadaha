export default function ImprovementPlan() {
  return (
    <div className="max-w-container-max mx-auto space-y-gutter pb-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <div>
          <h1 className="font-display-lg text-display-lg md:text-headline-lg-mobile text-primary-container font-bold mb-2">خطة تحسين الملاءة</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">خطوات عملية ومخصصة لرفع قدرتك المالية وتحسين مؤشر قدها الخاص بك.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-on-secondary font-title-lg text-label-md font-bold hover:bg-on-secondary-container transition-all shadow-sm active:scale-95">
          <span className="material-symbols-outlined" data-icon="calculate">calculate</span>
          أعد حساب مؤشر قدها بعد شهر
        </button>
      </div>

      {/* AI Guidance Panel */}
      <div className="bg-tertiary-fixed-dim bg-opacity-20 rounded-2xl p-6 border border-tertiary-fixed flex items-start gap-4 shadow-soft-card">
        <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center flex-shrink-0 shadow-sm border border-outline-variant">
          <span className="material-symbols-outlined text-tertiary-container" data-icon="psychology" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
        </div>
        <div className="flex flex-col">
          <h3 className="font-title-lg text-title-lg text-tertiary-container font-bold mb-1">نصيحة المساعد المالي</h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            لقد قمنا بتحليل تدفقاتك المالية الحالية. التركيز على تخفيض المصروفات المتغيرة بنسبة 15% سيمنحك مرونة عالية لبناء احتياطي نقدي قوي خلال الأشهر الثلاثة القادمة. اتبع الخطوات أدناه للبدء.
          </p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Left Column (Action Plan - Larger Span) */}
        <div className="col-span-1 md:col-span-7 flex flex-col gap-gutter">
          {/* Action Plan Checklist */}
          <div className="bg-surface rounded-2xl shadow-soft-card border border-surface-variant overflow-hidden hover:shadow-soft-hover transition-shadow">
            <div className="bg-surface-container-high px-6 py-4 border-b border-surface-variant flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" data-icon="checklist">checklist</span>
              <h2 className="font-title-lg text-title-lg text-primary-container font-bold">قائمة المهام التنفيذية</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  { title: "إلغاء اشتراك غير مستخدم", desc: "اشتراكات الترفيه التي لم تستخدم في آخر 30 يوم." },
                  { title: "تخفيض مصروف المطاعم 15%", desc: "حدد ميزانية أسبوعية وتجنب الطلبات اليومية المتكررة." },
                  { title: "تخصيص 500 ر.س كاحتياطي", desc: "استقطاع آلي بداية الشهر لحساب الادخار." },
                  { title: "مراجعة الالتزامات المتكررة", desc: "التحقق من الفواتير وإعادة جدولتها لتناسب وقت نزول الراتب." }
                ].map((task, idx) => (
                  <li key={idx}>
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-1">
                        <input className="plan-checkbox opacity-0 absolute w-full h-full cursor-pointer z-10" type="checkbox" />
                        <div className="w-6 h-6 border-2 border-primary-container rounded flex items-center justify-center transition-colors group-hover:border-secondary">
                          <span className="material-symbols-outlined text-on-secondary text-sm opacity-0 transition-opacity" data-icon="check">check</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body-lg text-body-lg text-on-background font-semibold group-hover:text-secondary transition-colors">{task.title}</span>
                        <span className="font-label-md text-label-md text-on-surface-variant">{task.desc}</span>
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Optional Share Panel */}
          <div className="bg-surface rounded-2xl shadow-sm border border-outline-variant p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-on-primary-container" data-icon="ios_share">ios_share</span>
              <div className="flex flex-col">
                <span className="font-title-lg text-body-md font-bold text-primary-container">مشاركة التوثيق</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">شارك توثيق قدها مع جهة مالية عند جاهزيتك.</span>
              </div>
            </div>
            <button className="px-5 py-2.5 rounded border border-primary-container text-primary-container hover:bg-primary-container hover:text-surface transition-colors font-label-md text-label-md font-bold">
              تصدير التقرير
            </button>
          </div>
        </div>

        {/* Right Column (Improvement Cards) */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-gutter">
          {/* High Impact Card */}
          <div className="bg-surface rounded-2xl shadow-soft-card border-l-4 border-l-secondary border border-surface-variant p-6 hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary" data-icon="trending_down">trending_down</span>
                <h3 className="font-title-lg text-title-lg text-primary-container font-bold">خفض المصاريف المتغيرة</h3>
              </div>
              <span className="bg-error-container text-on-error-container px-2 py-1 rounded text-label-sm font-bold">تأثير عالي</span>
            </div>
            <div className="bg-surface-container-low rounded-lg p-4 flex flex-col gap-2">
              <span className="font-label-md text-label-md text-on-surface-variant text-center">أثر التحسين على القدرة المتاحة</span>
              <div className="flex items-center justify-center gap-4">
                <span className="font-headline-md text-headline-md text-primary-container font-bold">900</span>
                <span className="material-symbols-outlined text-outline" data-icon="arrow_forward">arrow_forward</span>
                <span className="font-headline-md text-headline-md text-secondary font-bold">1150</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">ر.س</span>
              </div>
              {/* Micro Chart Visual */}
              <div className="w-full h-8 mt-2 flex items-end gap-1 opacity-80">
                <div className="flex-1 bg-surface-container-highest h-[40%] rounded-t-sm"></div>
                <div className="flex-1 bg-surface-container-highest h-[50%] rounded-t-sm"></div>
                <div className="flex-1 bg-tertiary-fixed h-[60%] rounded-t-sm relative">
                  <div className="absolute -top-1 left-0 w-full border-t-2 border-dashed border-secondary"></div>
                </div>
                <div className="flex-1 bg-tertiary-fixed h-[80%] rounded-t-sm"></div>
                <div className="flex-1 bg-secondary h-[100%] rounded-t-sm"></div>
              </div>
            </div>
          </div>

          {/* Secondary Cards Wrapper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-gutter">
            {/* Card 2 */}
            <div className="bg-surface rounded-2xl shadow-soft-card border border-surface-variant p-5 hover:border-outline-variant transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container text-sm" data-icon="call_split">call_split</span>
                </div>
                <h3 className="font-title-lg text-body-md font-bold text-primary-container">تقليل الالتزامات الصغيرة</h3>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant pr-11">
                دمج أو سداد الأقساط الصغيرة أقل من 200 ر.س لتقليل العبء الشهري المشتت.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-surface rounded-2xl shadow-soft-card border border-surface-variant p-5 hover:border-outline-variant transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container text-sm" data-icon="savings">savings</span>
                </div>
                <h3 className="font-title-lg text-body-md font-bold text-primary-container">بناء احتياطي نقدي</h3>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant pr-11">
                البدء بإنشاء محفظة طوارئ تغطي على الأقل شهر واحد من الالتزامات الأساسية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
