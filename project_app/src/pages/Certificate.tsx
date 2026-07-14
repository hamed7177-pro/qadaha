export default function Certificate() {
  return (
    <div className="relative w-full pb-8">
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-bg pointer-events-none -z-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="font-display-lg text-display-lg text-primary mb-2">شهادة قدها</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">التحقق الرسمي من الملاءة المالية</p>
        </div>

        {/* Certificate Card */}
        <div className="glass-card rounded-xl p-margin-mobile md:p-margin-desktop relative overflow-hidden mb-gutter group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[150px] text-primary">verified</span>
          </div>

          <div className="flex justify-between items-start mb-6 border-b border-surface-variant pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-primary">shield</span>
                <span className="font-title-lg text-title-lg text-primary">رقم الشهادة: QDA-2024-8842</span>
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

          <div className="mb-10">
            <h2 className="font-label-md text-label-md text-outline mb-2">بيانات المستفيد (محمية)</h2>
            <div className="flex items-center gap-4 bg-surface-container p-4 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary-fixed-dim flex items-center justify-center text-primary font-bold">م ع</div>
              <div>
                <p className="font-body-md text-body-md text-on-surface">م*** ع*** ا***</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">رقم الهوية: **** **** 10</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-surface p-6 rounded-lg border border-surface-variant flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-2">health_and_safety</span>
              <p className="font-label-md text-label-md text-outline mb-1">الحالة العامة</p>
              <h3 className="font-title-lg text-title-lg text-primary">مناسب بحذر</h3>
              <div className="mt-2 bg-[#FFF4E5] text-[#8A5A19] px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">warning</span>
                تحت المراجعة
              </div>
            </div>
            <div className="bg-surface p-6 rounded-lg border border-surface-variant flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary-fixed-dim/20 to-transparent pointer-events-none"></div>
              <span className="material-symbols-outlined text-4xl text-primary mb-2">speed</span>
              <p className="font-label-md text-label-md text-outline mb-1">مؤشر قدها</p>
              <h3 className="font-display-lg text-display-lg text-primary">68<span className="text-title-lg text-outline">/100</span></h3>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-surface-variant flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E8B57]">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface">متوسط الدخل ضمن نطاق موثق</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-surface-variant flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E8B57]">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface">نسبة الالتزامات ضمن نطاق قابل للتحمل</p>
            </div>
          </div>

          <div className="mb-6 pt-4 border-t border-surface-variant">
            <h2 className="font-label-md text-label-md text-outline mb-3">تفاصيل الالتزام</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <span className="text-label-sm text-on-surface-variant">نوع القسط</span>
                <span className="text-body-md font-bold text-on-surface">شخصي</span>
              </div>
              <div className="flex flex-col">
                <span className="text-label-sm text-on-surface-variant">مقدار القسط</span>
                <span className="text-body-md font-bold text-on-surface">2,450 ر.س</span>
              </div>
              <div className="flex flex-col">
                <span className="text-label-sm text-on-surface-variant">مدة التقسيم</span>
                <span className="text-body-md font-bold text-on-surface">60 شهر</span>
              </div>
              <div className="flex flex-col">
                <span className="text-label-sm text-on-surface-variant">الدفعة الأولية</span>
                <span className="text-body-md font-bold text-on-surface">0 ر.س</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-4 rounded-lg border border-surface-variant flex gap-2 items-start">
            <span className="material-symbols-outlined text-outline mt-1">info</span>
            <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
              تم التحقق من التدفق النقدي بناءً على بيانات مصرفية مفتوحة بموافقة المستخدم. لا تحتوي الشهادة على كشف الحساب الكامل. تعتبر هذه الشهادة ملخصاً للحالة المالية في وقت الإصدار ولا تمثل ضماناً مستقبلياً.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button className="bg-[#C96B4B] hover:bg-[#b05a3e] text-white font-label-md text-label-md py-3 px-6 rounded-xl shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">share</span>
            مشاركة الشهادة
          </button>
          <button className="bg-transparent border-[1.5px] border-primary text-primary hover:bg-surface-variant font-label-md text-label-md py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">download</span>
            تنزيل PDF
          </button>
          <button className="bg-transparent border-[1.5px] border-error text-error hover:bg-error-container font-label-md text-label-md py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 sm:mr-auto">
            <span className="material-symbols-outlined">cancel</span>
            إلغاء المشاركة
          </button>
        </div>
      </div>
    </div>
  );
}
