import { Info, TrendingUp, Activity, Briefcase, Store, Home, PieChart, ShoppingBag, Receipt, Car, Tv } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';

const data = [
  { name: 'يناير', income: 18000, expense: 7000 },
  { name: 'فبراير', income: 16000, expense: 6000 },
  { name: 'مارس', income: 19000, expense: 7500 },
  { name: 'أبريل', income: 17500, expense: 7200 },
  { name: 'مايو', income: 18500, expense: 6800 },
  { name: 'يونيو', income: 20000, expense: 8000 },
];

export default function CashFlow() {
  return (
    <div className="space-y-gutter pb-8">
      {/* Page Header & Explanation Box */}
      <div className="flex flex-col gap-4 text-right">
        <h2 className="font-headline-lg text-headline-lg text-primary-container">تحليل التدفق المالي</h2>
        <div className="bg-surface-container-highest border-l-4 border-secondary rounded-xl p-4 flex items-start gap-4 flex-row-reverse">
          <Info className="text-secondary mt-1 flex-shrink-0" size={24} />
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            يعتمد التحليل على التدفق النقدي الفعلي، وليس فقط على وجود راتب ثابت. هذا يساعد في فهم القدرة الحقيقية على الالتزام.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-gutter">
        {/* Card 1: Timeline (Col 8) */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-soft border border-outline-variant overflow-hidden flex flex-col">
          <div className="bg-surface-container p-4 border-b border-outline-variant flex justify-between items-center flex-row-reverse">
            <h3 className="font-title-lg text-title-lg text-primary-container">تدفق الدخل والمصاريف (٦ أشهر)</h3>
            <TrendingUp className="text-on-primary-container" size={24} />
          </div>
          <div className="p-6 flex-1 flex flex-col relative min-h-[300px]">
            {/* Legend */}
            <div className="flex gap-6 flex-row-reverse mb-4">
              <div className="flex items-center gap-2 flex-row-reverse">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="font-label-md text-label-sm text-on-surface-variant">الدخل</span>
              </div>
              <div className="flex items-center gap-2 flex-row-reverse">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="font-label-md text-label-sm text-on-surface-variant">المصاريف</span>
              </div>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#000d21" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#000d21" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#994629" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#994629" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#74777e', fontSize: 12}} reversed />
                  <Tooltip />
                  <CartesianGrid vertical={false} stroke="#e4e2de" strokeDasharray="3 3" />
                  <Area type="monotone" dataKey="income" stroke="#000d21" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" />
                  <Area type="monotone" dataKey="expense" stroke="#994629" strokeWidth={3} fillOpacity={1} fill="url(#colorExpense)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Card 2: Volatility (Col 4) */}
        <div className="col-span-12 lg:col-span-4 bg-primary-container rounded-xl shadow-soft border border-primary overflow-hidden flex flex-col text-surface-bright relative">
          <div className="p-4 flex justify-between items-center relative z-10 flex-row-reverse">
            <h3 className="font-title-lg text-title-lg">انتظام الدخل</h3>
            <Activity className="text-secondary" size={24} />
          </div>
          <div className="p-6 flex-1 flex flex-col items-center justify-center relative z-10">
            <div className="text-display-lg font-display-lg mb-2">٨٥٪</div>
            <p className="font-body-md text-primary-fixed-dim text-center">درجة استقرار الدخل الشهري بناءً على التذبذب خلال العام.</p>
            <div className="w-full h-16 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                   <Line type="monotone" dataKey="income" stroke="#fe9572" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Card 3: Income Sources */}
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-xl shadow-soft border border-outline-variant overflow-hidden">
          <div className="bg-surface-container p-4 border-b border-outline-variant text-right">
            <h3 className="font-title-lg text-title-lg text-primary-container">مصادر الدخل</h3>
          </div>
          <div className="p-6 flex flex-col gap-4 text-right">
            <div className="flex items-center justify-between flex-row-reverse">
              <div className="flex items-center gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <Briefcase size={16} />
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface">راتب أساسي</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">منتظم</p>
                </div>
              </div>
              <span className="font-title-lg text-body-md text-primary-container font-bold" dir="ltr">١٢,٠٠٠ ر.س</span>
            </div>
            
            <div className="w-full h-[1px] bg-surface-variant"></div>
            
            <div className="flex items-center justify-between flex-row-reverse">
              <div className="flex items-center gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-container">
                  <Store size={16} />
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface">عمل حر</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">متغير</p>
                </div>
              </div>
              <span className="font-title-lg text-body-md text-primary-container font-bold" dir="ltr">٣,٥٠٠ ر.س</span>
            </div>
            
            <div className="w-full h-[1px] bg-surface-variant"></div>
            
            <div className="flex items-center justify-between flex-row-reverse">
              <div className="flex items-center gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-container">
                  <Home size={16} />
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface">عوائد استثمار</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">نصف سنوي</p>
                </div>
              </div>
              <span className="font-title-lg text-body-md text-primary-container font-bold" dir="ltr">١,٢٠٠ ر.س</span>
            </div>
          </div>
        </div>

        {/* Card 4: Essential vs Variable Expenses */}
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-xl shadow-soft border border-outline-variant overflow-hidden">
          <div className="bg-surface-container p-4 border-b border-outline-variant flex justify-between items-center flex-row-reverse">
            <h3 className="font-title-lg text-title-lg text-primary-container">تصنيف المصاريف</h3>
            <PieChart className="text-primary" size={24} />
          </div>
          <div className="p-6 flex flex-col items-center">
            <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#e4e2de" strokeWidth="12"></circle>
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#994629" strokeDasharray="251.2" strokeDashoffset="100.48" strokeLinecap="round" strokeWidth="12"></circle>
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#c4c0ff" strokeDasharray="251.2" strokeDashoffset="200.96" strokeLinecap="round" strokeWidth="12"></circle>
              </svg>
              <div className="absolute text-center flex items-center justify-center">
                <span className="block text-headline-md font-bold text-primary">١٠٠٪</span>
              </div>
            </div>
            
            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center justify-between w-full flex-row-reverse">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <span className="text-label-md text-on-surface">أساسية (٦٠٪)</span>
                </div>
                <Home className="text-on-surface-variant" size={20} />
              </div>
              <div className="flex items-center justify-between w-full flex-row-reverse">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
                  <span className="text-label-md text-on-surface">متغيرة (٤٠٪)</span>
                </div>
                <ShoppingBag className="text-on-surface-variant" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Balance Stability */}
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-xl shadow-soft border border-outline-variant overflow-hidden flex flex-col">
          <div className="bg-surface-container p-4 border-b border-outline-variant text-right">
            <h3 className="font-title-lg text-title-lg text-primary-container">استقرار الرصيد آخر الشهر</h3>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-center items-center relative">
            <div className="w-32 h-32 relative rounded-full border-4 border-surface-variant flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle cx="60" cy="60" fill="transparent" r="56" stroke="#1a0f6d" strokeDasharray="351.8" strokeDashoffset="70.36" strokeLinecap="round" strokeWidth="8"></circle>
              </svg>
              <div className="text-center">
                <span className="block font-headline-lg text-headline-lg text-primary">إيجابي</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-center mt-6">
              الرصيد المتبقي في نهاية الشهر مستقر بمتوسط <span className="font-bold text-primary" dir="ltr">٢,٤٠٠ ر.س</span> خلال الربع الأخير.
            </p>
          </div>
        </div>

        {/* Card 6: Recurring Obligations */}
        <div className="col-span-12 bg-surface-container-lowest rounded-xl shadow-soft border border-outline-variant overflow-hidden">
          <div className="bg-surface-container p-4 border-b border-outline-variant flex justify-between items-center text-right">
            <h3 className="font-title-lg text-title-lg text-primary-container">الالتزامات المتكررة المكتشفة</h3>
          </div>
          <div className="p-6">
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 text-right">تم التعرف على هذه الالتزامات من خلال تحليل السجل البنكي:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 hover:border-secondary transition-all cursor-pointer flex-row-reverse">
                <div className="text-right">
                  <p className="text-label-sm text-on-surface-variant">إيجار</p>
                  <p className="text-title-lg font-bold text-primary" dir="ltr">٣,٠٠٠ ر.س</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                  <Home size={20} />
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 hover:border-secondary transition-all cursor-pointer flex-row-reverse">
                <div className="text-right">
                  <p className="text-label-sm text-on-surface-variant">قسط سيارة</p>
                  <p className="text-title-lg font-bold text-primary" dir="ltr">١,٥٠٠ ر.س</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
                  <Car size={20} />
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 hover:border-secondary transition-all cursor-pointer flex-row-reverse">
                <div className="text-right">
                  <p className="text-label-sm text-on-surface-variant">فاتورة كهرباء</p>
                  <p className="text-title-lg font-bold text-primary" dir="ltr">٣٥٠ ر.س</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
                  <Receipt size={20} />
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 hover:border-secondary transition-all cursor-pointer flex-row-reverse">
                <div className="text-right">
                  <p className="text-label-sm text-on-surface-variant">اشتراك سحابي</p>
                  <p className="text-title-lg font-bold text-primary" dir="ltr">٤٥ ر.س</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-on-surface-variant">
                  <Tv size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
