export default function Chat() {
  return (
    <div className="h-[calc(100vh-180px)] max-w-[1200px] w-full mx-auto flex flex-col overflow-hidden gap-stack-lg">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <h2 className="text-headline-lg font-headline-lg text-primary-container">شات قدها</h2>
        <div className="bg-surface-container px-4 py-2 rounded-full flex items-center gap-2 border border-outline-variant">
          <div className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></div>
          <span className="text-label-sm font-label-sm text-on-surface-variant">متصل - جاهز للمساعدة</span>
        </div>
      </div>

      {/* Chat Container (Glassmorphism inspired) */}
      <div className="flex-1 bg-surface-container-lowest rounded-[24px] border border-surface-variant flex flex-col overflow-hidden relative shadow-md">
        {/* Decorative background pattern (subtle) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0b2341 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

        {/* Messages Area */}
        <div className="flex-1 p-8 overflow-y-auto chat-scroll flex flex-col gap-6 relative z-10">
          {/* Timestamp */}
          <div className="flex justify-center">
            <span className="text-label-sm font-label-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">اليوم، 10:42 ص</span>
          </div>

          {/* Bot Welcome Message */}
          <div className="flex items-end gap-4 flex-row-reverse max-w-[85%] self-end">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shrink-0 shadow-sm border-2 border-surface-container-lowest">
              <span className="material-symbols-outlined text-tertiary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>robot_2</span>
            </div>
            {/* Bubble Content */}
            <div className="flex flex-col gap-2 items-end">
              <span className="text-label-sm font-label-sm text-on-surface-variant px-2">شات قدها</span>
              <div className="bg-surface-container-high text-on-surface p-5 rounded-2xl rounded-tr-none shadow-sm text-body-md font-body-md leading-relaxed border border-outline-variant">
                مرحبًا، أنا شات قدها. يمكنني مساعدتك في فهم نتائج تحليلك المالي واقتراح طرق لتحسين قدرتك على الالتزام.
              </div>
            </div>
          </div>

          {/* Suggested Questions (Bento-ish layout for prompts) */}
          <div className="flex flex-col gap-3 mt-4 mr-16">
            <p className="text-label-sm font-label-sm text-on-surface-variant mb-1">أسئلة مقترحة:</p>
            <div className="flex flex-wrap gap-3 flex-row-reverse justify-end">
              <button className="bg-surface border border-outline-variant text-on-surface hover:bg-tertiary-fixed hover:text-on-tertiary-container hover:border-tertiary-fixed transition-all px-5 py-3 rounded-full text-label-md font-label-md flex items-center gap-2 group shadow-sm">
                <span>لماذا حصلت على "مناسب بحذر"؟</span>
                <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity -ml-2">arrow_left_alt</span>
              </button>
              <button className="bg-surface border border-outline-variant text-on-surface hover:bg-tertiary-fixed hover:text-on-tertiary-container hover:border-tertiary-fixed transition-all px-5 py-3 rounded-full text-label-md font-label-md flex items-center gap-2 group shadow-sm">
                <span>كيف أرفع مؤشر الملاءة؟</span>
                <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity -ml-2">arrow_left_alt</span>
              </button>
              <button className="bg-surface border border-outline-variant text-on-surface hover:bg-tertiary-fixed hover:text-on-tertiary-container hover:border-tertiary-fixed transition-all px-5 py-3 rounded-full text-label-md font-label-md flex items-center gap-2 group shadow-sm">
                <span>هل أستطيع تحمل قسط 1,500 ر.س؟</span>
                <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity -ml-2">arrow_left_alt</span>
              </button>
            </div>
          </div>
        </div>

        {/* Input Area (Sticky Bottom) */}
        <div className="bg-surface-container-lowest p-6 border-t border-surface-variant z-10 flex flex-col gap-4">
          <div className="relative flex items-center bg-surface rounded-2xl border border-outline-variant focus-within:border-primary-container focus-within:ring-2 focus-within:ring-tertiary-fixed transition-all shadow-sm bg-surface-container-low">
            {/* Input */}
            <input className="w-full bg-transparent border-none py-4 px-6 text-body-md font-body-md placeholder-on-surface-variant focus:ring-0 outline-none pr-16" dir="rtl" placeholder="اكتب سؤالك هنا..." type="text" />
            {/* Actions */}
            <div className="absolute right-2 flex items-center gap-1">
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-[22px]">attach_file</span>
              </button>
            </div>
            {/* Send Button */}
            <div className="absolute left-2">
              <button className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-md transform active:scale-95">
                <span className="material-symbols-outlined text-[20px] transform rotate-180">send</span>
              </button>
            </div>
          </div>
          {/* Disclaimer */}
          <div className="text-center px-4">
            <p className="text-[11px] font-label-sm text-on-surface-variant leading-relaxed opacity-70">
              يعتمد شات قدها على البيانات التي وافق المستخدم على مشاركتها فقط لغرض التحليل وتقديم الرؤى.
              المعلومات المقدمة هي للإرشاد المالي ولا تمثل قرارًا ائتمانيًا أو موافقة على التمويل من أي جهة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
