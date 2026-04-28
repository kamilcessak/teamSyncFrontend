import React from 'react';
import { AlertCircle, RefreshCcw } from 'lucide-react';

interface ErrorStateProps {
    title?: string;
    retryAction: () => void;
}

export function ErrorState({
    title ="Coś poszło nie tak",
    retryAction
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[400px] border-2 border-dashed border-destructive/20 rounded-xl bg-destructive/5">
      
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 mb-6">
        <AlertCircle className="h-10 w-10 text-destructive" />
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-foreground mb-6">
        {title}
      </h3>

      <button
        onClick={retryAction}
        className="inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted focus:outline-none" >
        
        <RefreshCcw className="h-4 w-4" />
        Spróbuj ponownie
      </button>

    </div>
  );
}