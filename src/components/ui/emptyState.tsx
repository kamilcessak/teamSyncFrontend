import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon: LucideIcon;
  action?: React.ReactNode; // action jest opcjonalne (znak zapytania)
}

export function EmptyState({ title, description, icon: Icon, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[400px] border-2 border-dashed border-muted rounded-xl bg-background">

      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
        <Icon className="h-10 w-10 text-muted-foreground" />
      </div>
      
      <h3 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mt-2 mb-6 max-w-[400px]">
        {description}
      </p>
      
      {action && <div>{action}</div>}
    </div>
  );
}