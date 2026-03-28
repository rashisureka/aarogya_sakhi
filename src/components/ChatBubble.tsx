import React from 'react';
import { clsx } from 'clsx';
import { Sparkles, User } from 'lucide-react';

interface ChatBubbleProps {
  message: string;
  isAi?: boolean;
  time?: string;
}

export const ChatBubble = ({ message, isAi = true, time }: ChatBubbleProps) => {
  return (
    <div className={clsx('flex w-full mb-4', isAi ? 'justify-start' : 'justify-end')}>
      <div className={clsx('flex max-w-[85%] gap-2', isAi ? 'flex-row' : 'flex-row-reverse')}>
        
        <div className="flex-shrink-0 mt-auto mb-1">
          {isAi ? (
            <div className="w-8 h-8 rounded-full bg-primary-container text-primary flex items-center justify-center shadow-sm">
              <Sparkles className="w-4 h-4" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shadow-sm">
              <User className="w-4 h-4" />
            </div>
          )}
        </div>

        <div className={clsx(
            'px-5 py-3 rounded-2xl md:rounded-3xl shadow-sm text-sm font-body leading-relaxed max-w-full',
            isAi 
              ? 'bg-surface-container-lowest text-on-surface rounded-bl-sm' 
              : 'bg-primary text-on-primary rounded-br-sm glow-gradient'
          )}
        >
          <p>{message}</p>
          {time && (
            <div className={clsx(
              "text-[10px] mt-1.5 font-medium flex justify-end", 
              isAi ? "text-on-surface-variant" : "text-primary-container"
            )}>
              {time}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
