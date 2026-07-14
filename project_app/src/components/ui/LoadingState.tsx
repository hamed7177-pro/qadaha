import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export function LoadingState({ message = "جاري التحميل...", className = "" }: LoadingStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center min-h-[250px] p-8 text-center animate-in fade-in duration-500 ${className}`}>
      <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-4">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface mb-2">{message}</h3>
      <p className="font-body-md text-on-surface-variant max-w-md">يرجى الانتظار قليلاً بينما نقوم بتجهيز البيانات الخاصة بك.</p>
    </div>
  );
}
