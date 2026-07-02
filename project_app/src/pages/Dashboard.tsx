import { 
  TrendingUp, 
  CreditCard, 
  Receipt, 
  PiggyBank, 
  MoreVertical,
  User,
  Car,
  Lightbulb,
  Info,
  PieChart,
  CheckCircle2
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-gutter pb-8">
      {/* Section 1: Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {/* Card 1: Income */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-soft hover:shadow-hover transition-shadow border border-surface-container border-b-4 border-b-primary-container relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary-container rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex justify-between items-start mb-4 flex-row-reverse">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
              <TrendingUp size={24} />
            </div>
            <span className="px-2 py-1 bg-surface-container rounded font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 flex-row-reverse">
              <TrendingUp size={14} /> 2.4%
            </span>
          </div>
          <h3 className="font-label-md text-label-md text-on-surface-variant mb-1">متوسط الدخل الشهري</h3>
          <p className="font-headline-lg text-headline-lg text-on-surface font-bold">18,500 <span className="font-body-md text-on-surface-variant font-normal">ر.س</span></p>
        </div>

        {/* Card 2: Expenses */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-soft hover:shadow-hover transition-shadow border border-surface-container relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-error rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex justify-between items-start mb-4 flex-row-reverse">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-error">
              <CreditCard size={24} />
            </div>
          </div>
          <h3 className="font-label-md text-label-md text-on-surface-variant mb-1">المصاريف الشهرية</h3>
          <p className="font-headline-lg text-headline-lg text-on-surface font-bold">7,200 <span className="font-body-md text-on-surface-variant font-normal">ر.س</span></p>
        </div>

        {/* Card 3: Obligations */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-soft hover:shadow-hover transition-shadow border border-surface-container relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-secondary rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex justify-between items-start mb-4 flex-row-reverse">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
              <Receipt size={24} />
            </div>
          </div>
          <h3 className="font-label-md text-label-md text-on-surface-variant mb-1">الالتزامات المتكررة</h3>
          <p className="font-headline-lg text-headline-lg text-on-surface font-bold">6,100 <span className="font-body-md text-on-surface-variant font-normal">ر.س</span></p>
        </div>

        {/* Card 4: Surplus */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-soft hover:shadow-hover transition-shadow border border-surface-container border-t-4 border-t-secondary relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-tertiary-fixed rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex justify-between items-start mb-4 flex-row-reverse">
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-tertiary-container">
              <PiggyBank size={24} />
            </div>
            <span className="px-2 py-1 bg-surface-container rounded font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 flex-row-reverse">
              تقديري
            </span>
          </div>
          <h3 className="font-label-md text-label-md text-on-surface-variant mb-1">الفائض المتوقع</h3>
          <p className="font-headline-lg text-headline-lg text-on-surface font-bold text-tertiary-container">5,200 <span className="font-body-md text-on-surface-variant font-normal">ر.س</span></p>
        </div>
      </div>

      {/* Section 2: Capacity Widget & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Capacity Widget */}
        <div className="lg:col-span-1 bg-primary-container rounded-xl p-8 text-surface-bright flex flex-col justify-between items-center relative overflow-hidden shadow-soft hover:shadow-hover transition-shadow">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-pattern"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-30"></div>
          
          <div className="w-full flex flex-col items-center">
            <h3 className="font-title-lg text-title-lg font-bold mb-6 z-10 text-center">مؤشر قدها الأولي</h3>
            
            <div className="relative w-48 h-48 flex items-center justify-center z-10 mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="transparent" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="8"></circle>
                <circle className="transition-all duration-1000 ease-out" cx="50" cy="50" fill="transparent" r="45" stroke="#C96B4B" strokeDasharray="283" strokeDashoffset="79" strokeWidth="8"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display-lg text-display-lg font-bold text-surface-bright">72</span>
                <span className="font-label-md text-label-md text-surface-variant opacity-80">/ 100</span>
              </div>
            </div>
            
            <div className="z-10 text-center mb-8">
              <span className="inline-block px-4 py-2 bg-secondary rounded-full font-title-lg text-title-lg font-bold text-on-secondary shadow-md">مناسب بحذر</span>
            </div>
          </div>
          
          {/* Progress Indicators */}
          <div className="w-full space-y-4 z-10">
            <div>
              <div className="flex justify-between items-center mb-1 flex-row-reverse">
                <span className="text-sm font-medium text-surface-variant">الاستقرار المالي</span>
                <span className="text-xs text-secondary-fixed">جيد جداً</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-secondary-fixed h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1 flex-row-reverse">
                <span className="text-sm font-medium text-surface-variant">نسبة الالتزامات</span>
                <span className="text-xs text-error-container">مرتفعة قليلاً</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-secondary h-full rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Insight Panel */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl shadow-soft border border-surface-container flex flex-col overflow-hidden">
          <div className="bg-surface-container p-4 border-b border-surface-variant flex items-center gap-3 flex-row-reverse">
            <Lightbulb className="text-secondary" size={24} />
            <h3 className="font-title-lg text-title-lg font-bold text-on-surface">أبرز الملاحظات</h3>
          </div>
          
          <div className="p-6 flex-1 flex flex-col gap-4 justify-center">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low border border-surface-variant flex-row-reverse">
              <div className="w-8 h-8 rounded bg-surface-bright flex-shrink-0 flex items-center justify-center text-primary-container">
                <Info size={20} />
              </div>
              <div className="text-right flex-1">
                <p className="font-body-lg text-body-lg text-on-surface">الدخل جيد لكنه <span className="font-bold text-secondary">متذبذب</span>، لوحظ اختلاف بنسبة 15% بين الأشهر.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low border border-surface-variant flex-row-reverse">
              <div className="w-8 h-8 rounded bg-surface-bright flex-shrink-0 flex items-center justify-center text-primary-container">
                <PieChart size={20} />
              </div>
              <div className="text-right flex-1">
                <p className="font-body-lg text-body-lg text-on-surface">الالتزامات الحالية تمثل <span className="font-bold text-primary-container">34%</span> من متوسط الدخل، وهي ضمن النطاق الآمن.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low border border-surface-variant border-r-4 border-r-secondary flex-row-reverse shadow-sm">
              <div className="w-8 h-8 rounded bg-surface-bright flex-shrink-0 flex items-center justify-center text-secondary">
                <CheckCircle2 size={20} />
              </div>
              <div className="text-right flex-1">
                <p className="font-body-lg text-body-lg text-on-surface font-medium">الفائض المتوقع يغطي قسطًا جديدًا حتى <span className="font-bold text-secondary bg-secondary-fixed-dim px-2 py-0.5 rounded">900 ر.س</span> بحذر.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Charts & Obligations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-soft border border-surface-container flex flex-col">
          <div className="flex justify-between items-center mb-6 flex-row-reverse">
            <h3 className="font-title-lg text-title-lg font-bold text-on-surface">الالتزامات الشهرية</h3>
            <MoreVertical size={20} className="text-outline" />
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2 flex-row-reverse">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <User size={16} className="text-primary-container" />
                  <span className="font-label-md text-on-surface">قرض شخصي</span>
                </div>
                <span className="font-label-md text-on-surface-variant">3,500 ر.س</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-2">
                <div className="bg-primary-container h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2 flex-row-reverse">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <Car size={16} className="text-secondary" />
                  <span className="font-label-md text-on-surface">تمويل سيارة</span>
                </div>
                <span className="font-label-md text-on-surface-variant">1,800 ر.س</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2 flex-row-reverse">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <CreditCard size={16} className="text-tertiary-container" />
                  <span className="font-label-md text-on-surface">بطاقات ائتمان</span>
                </div>
                <span className="font-label-md text-on-surface-variant">800 ر.س</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-2">
                <div className="bg-tertiary-container h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-soft border border-surface-container flex flex-col">
          <div className="flex justify-between items-center mb-6 flex-row-reverse">
            <h3 className="font-title-lg text-title-lg font-bold text-on-surface">تصنيف المصروفات</h3>
            <MoreVertical size={20} className="text-outline" />
          </div>
          
          <div className="flex items-center justify-between gap-8 flex-row-reverse">
            <div className="relative w-32 h-32 flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#0b2341" strokeDasharray="251" strokeDashoffset="138" strokeWidth="12"></circle>
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#994629" strokeDasharray="251" strokeDashoffset="163" strokeWidth="12" transform="rotate(162 50 50)"></circle>
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#c4c0ff" strokeDasharray="251" strokeDashoffset="201" strokeWidth="12" transform="rotate(288 50 50)"></circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-on-surface">7,200</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-center justify-between flex-row-reverse">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <div className="w-2 h-2 rounded-full bg-[#0b2341]"></div>
                  <span className="text-label-md text-on-surface">السكن</span>
                </div>
                <span className="text-label-sm text-on-surface-variant">45%</span>
              </div>
              
              <div className="flex items-center justify-between flex-row-reverse">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <div className="w-2 h-2 rounded-full bg-[#994629]"></div>
                  <span className="text-label-md text-on-surface">معيشة</span>
                </div>
                <span className="text-label-sm text-on-surface-variant">35%</span>
              </div>
              
              <div className="flex items-center justify-between flex-row-reverse">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <div className="w-2 h-2 rounded-full bg-[#c4c0ff]"></div>
                  <span className="text-label-md text-on-surface">أخرى</span>
                </div>
                <span className="text-label-sm text-on-surface-variant">20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
