import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'يناير', income: 18000, expense: 7000 },
  { name: 'فبراير', income: 16000, expense: 6000 },
  { name: 'مارس', income: 19000, expense: 7500 },
  { name: 'أبريل', income: 17500, expense: 7200 },
  { name: 'مايو', income: 18500, expense: 6800 },
  { name: 'يونيو', income: 20000, expense: 8000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface-container border border-outline-variant p-3 rounded-lg shadow-md text-right" style={{ direction: 'rtl' }}>
        <p className="text-label-md font-bold text-primary-container mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex justify-between items-center gap-4 text-body-sm my-1 flex-row-reverse">
            <span className="text-on-surface-variant flex items-center gap-1.5 flex-row-reverse">
              <span
                className="w-2.5 h-2.5 rounded-full block"
                style={{ backgroundColor: entry.stroke || entry.color }}
              ></span>
              {entry.name === 'income' ? 'الدخل:' : 'المصاريف:'}
            </span>
            <span className="font-bold text-on-surface" dir="ltr">
              {Number(entry.value).toLocaleString('ar-SA')} ر.س
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function CashFlow() {
  return (
    <div className="space-y-gutter pb-8 text-right">
      {/* Header */}
      <div className="mb-6 text-right">
        <h1 className="font-headline-lg text-headline-lg text-primary mb-2">تحليل التدفق المالي</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          يعتمد التحليل على التدفق النقدي الفعلي، وليس فقط على وجود راتب ثابت. هذا يساعد في فهم القدرة الحقيقية على الالتزام.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-gutter">
        {/* Card 1: Timeline (Col 8) */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
          <div className="p-6 flex flex-col flex-1">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">monitoring</span>
                تدفق الدخل والمصاريف (٦ أشهر)
              </h3>
              <span className="material-symbols-outlined text-outline">more_vert</span>
            </div>

            <div className="relative min-h-[250px] flex-1 flex flex-col">
              {/* Legend with RTL alignment */}
              <div className="absolute right-0 top-0 flex gap-6 flex-row-reverse z-10">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <div className="w-3 h-3 rounded-full bg-[#000d21]"></div>
                  <span className="font-label-md text-label-sm text-on-surface-variant">الدخل</span>
                </div>
                <div className="flex items-center gap-2 flex-row-reverse">
                  <div className="w-3 h-3 rounded-full bg-[#994629]"></div>
                  <span className="font-label-md text-label-sm text-on-surface-variant">المصاريف</span>
                </div>
              </div>

              <div className="h-64 w-full mt-10">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 30, left: 30, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#000d21" stopOpacity={0.1} />
                        <stop offset="95%" stopColor="#000d21" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#994629" stopOpacity={0.1} />
                        <stop offset="95%" stopColor="#994629" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#73777e' }} interval={0} reversed />
                    <Tooltip content={<CustomTooltip />} />
                    <CartesianGrid vertical={false} stroke="#e4e2de" strokeDasharray="3 3" />
                    <Area type="monotone" dataKey="income" name="income" stroke="#000d21" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" />
                    <Area type="monotone" dataKey="expense" name="expense" stroke="#994629" strokeWidth={3} fillOpacity={1} fill="url(#colorExpense)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Balance Stability (Col 4) */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-tertiary"></div>
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-title-md text-title-md text-primary font-bold">استقرار الرصيد</h3>
              <span className="material-symbols-outlined text-outline">more_vert</span>
            </div>
            <p className="text-caption text-on-surface-variant opacity-80 mb-6">متوسط الرصيد المتبقي نهاية الشهر</p>
            <div className="text-[36px] font-bold mb-2 text-primary flex items-baseline gap-1" dir="ltr">
              <span>١٢,٤٥٠</span>
              <span className="text-lg font-normal text-on-surface-variant">ر.س</span>
            </div>
            <div className="flex items-center gap-1.5 text-success">
              <span className="material-symbols-outlined text-[16px]">trending_up</span>
              <span className="text-caption font-bold">تحسن بنسبة ١٥٪ عن الشهر السابق</span>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-3/4 rounded-full"></div>
            </div>
            <div className="flex justify-between mt-2 text-caption text-on-surface-variant">
              <span className="font-bold">ممتاز</span>
              <span>مستوى الأمان</span>
            </div>
          </div>
        </div>

        {/* Card 3: Income Sources */}
        <div className="col-span-12 md:col-span-6 bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-title-lg text-title-lg font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">payments</span>
              مصادر الدخل
            </h3>
            <span className="material-symbols-outlined text-outline">more_vert</span>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4">
            <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl border border-outline-variant/10">
              <div className="flex flex-col text-right">
                <span className="font-label-sm text-label-sm text-primary font-bold">الراتب الأساسي</span>
                <span className="text-caption text-on-surface-variant">انتظام: ١٠٠٪</span>
              </div>
              <span className="font-bold text-[18px] text-primary" dir="ltr">١٥,٠٠٠ ر.س</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl border border-outline-variant/10">
              <div className="flex flex-col text-right">
                <span className="font-label-sm text-label-sm text-primary font-bold">دخل إضافي (عمل حر)</span>
                <span className="text-caption text-on-surface-variant">انتظام: ٦٥٪</span>
              </div>
              <span className="font-bold text-[18px] text-primary" dir="ltr">٣,٢٠٠ ر.س</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl border border-outline-variant/10">
              <div className="flex flex-col text-right">
                <span className="font-label-sm text-label-sm text-primary font-bold">عوائد استثمارية</span>
                <span className="text-caption text-on-surface-variant">انتظام: ٩٠٪</span>
              </div>
              <span className="font-bold text-[18px] text-primary" dir="ltr">٨٥٠ ر.س</span>
            </div>
          </div>
        </div>

        {/* Card 4: Essential vs Variable Expenses */}
        <div className="col-span-12 md:col-span-6 bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant p-6 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-title-lg text-title-lg font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">pie_chart</span>
              تصنيف المصاريف
            </h3>
            <span className="material-symbols-outlined text-outline">more_vert</span>
          </div>
          <div className="p-6 flex flex-col items-center">
            <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#e4e2de" strokeWidth="12"></circle>
                {/* أساسية - 50% */}
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#994629" strokeDasharray="125.6 251.2" strokeDashoffset="0" strokeLinecap="round" strokeWidth="12"></circle>
                {/* ترفيه - 20% */}
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#000d21" strokeDasharray="50.2 251.2" strokeDashoffset="-125.6" strokeLinecap="round" strokeWidth="12"></circle>
                {/* مطاعم ومقاهي - 15% */}
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#fe9572" strokeDasharray="37.7 251.2" strokeDashoffset="-175.8" strokeLinecap="round" strokeWidth="12"></circle>
                {/* أخرى - 15% */}
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#c4c0ff" strokeDasharray="37.7 251.2" strokeDashoffset="-213.5" strokeLinecap="round" strokeWidth="12"></circle>
              </svg>
              <div className="absolute text-center flex items-center justify-center">
                <span className="block text-[36px] font-bold text-primary">١٠٠٪</span>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#994629]"></div>
                  <span className="text-label-md text-on-surface">أساسية (<span className="font-bold text-[#994629]">٥٠٪</span>)</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">home</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#000d21]"></div>
                  <span className="text-label-md text-on-surface">ترفيه (<span className="font-bold text-primary-container">٢٠٪</span>)</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">sports_esports</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#fe9572]"></div>
                  <span className="text-label-md text-on-surface">مطاعم ومقاهي (<span className="font-bold text-secondary-container">١٥٪</span>)</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">local_cafe</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#c4c0ff]"></div>
                  <span className="text-label-md text-on-surface">أخرى (<span className="font-bold text-tertiary">١٥٪</span>)</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">more_horiz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Scheduled & Outstanding Commitments Chips */}
        <div className="col-span-12 bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(11,35,65,0.05)] border border-outline-variant p-6 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-title-lg text-title-lg font-bold text-on-surface">الالتزامات المجدولة والقائمة</h3>
            <span className="material-symbols-outlined text-outline">more_vert</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-start">
            <div className="flex items-center gap-3 px-4 py-3 bg-error/10 rounded-full border border-error/20 hover:bg-error/20 transition-all cursor-default">
              <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
              <span className="font-label-sm text-label-sm text-error">إيجار سكني</span>
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
              <span className="font-bold text-error">٤,٥٠٠ ر.س</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-secondary/10 rounded-full border border-secondary/20 hover:bg-secondary/20 transition-all cursor-default">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>directions_car</span>
              <span className="font-label-sm text-label-sm text-secondary">قسط سيارة</span>
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
              <span className="font-bold text-secondary">١,٨٥٠ ر.س</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-tertiary-fixed-dim/20 rounded-full border border-tertiary-fixed-dim/30 hover:bg-tertiary-fixed-dim/30 transition-all cursor-default">
              <span className="material-symbols-outlined text-on-tertiary-fixed-variant" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              <span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant">فاتورة كهرباء</span>
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
              <span className="font-bold text-on-tertiary-fixed-variant">٤٢٠ ر.س</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-surface-container-high rounded-full border border-outline-variant hover:bg-surface-container-highest transition-all cursor-default">
              <span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1" }}>subscriptions</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">اشتراك نادي</span>
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
              <span className="font-bold text-on-surface">٣٥٠ ر.س</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
