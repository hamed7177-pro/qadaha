import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({
  title = "حدث خطأ غير متوقع",
  message,
  onRetry,
  className = ""
}: ErrorStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center min-h-[250px] p-8 text-center animate-in fade-in duration-300 ${className}`}>
      <div className="w-16 h-16 bg-error-container rounded-full flex items-center justify-center mb-4 text-error">
        <AlertCircle size={32} />
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-2">{title}</h3>
      <p className="font-body-md text-on-surface-variant max-w-md mb-6">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-6 py-2 bg-primary text-on-primary rounded-full hover:bg-primary/90 transition-colors font-label-md flex-row-reverse"
        >
          <RefreshCw size={18} />
          إعادة المحاولة
        </button>
      )}
    </div>
  );
}
