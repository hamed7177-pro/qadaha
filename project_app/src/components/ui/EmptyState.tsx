import React from "react";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({ 
  icon, 
  title, 
  description, 
  action, 
  className = "" 
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center min-h-[250px] p-8 text-center animate-in fade-in duration-300 ${className}`}>
      <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mb-6 text-on-surface-variant shadow-sm border border-outline-variant/20">
        {icon || <Inbox size={32} />}
      </div>
      <h3 className="font-title-lg text-title-lg text-on-surface font-bold mb-2">{title}</h3>
      {description && (
        <p className="font-body-md text-on-surface-variant max-w-md mb-6 leading-relaxed">{description}</p>
      )}
      
      {action && (
        <button 
          onClick={action.onClick}
          className="px-6 py-2.5 bg-secondary text-on-secondary rounded-full hover:bg-secondary/90 transition-colors font-label-md shadow-sm"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
