import React from 'react';
import { Card } from './Card';
import { Plus, Minus } from 'lucide-react';

interface TrackerCardProps {
  title: string;
  current: number;
  target: number;
  unit: string;
  icon: React.ReactNode;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export const TrackerCard = ({ title, current, target, unit, icon, onIncrement, onDecrement }: TrackerCardProps) => {
  const progress = Math.min((current / target) * 100, 100);

  return (
    <Card variant="flat" padding="md" className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-surface-container-lowest shadow-sm text-secondary">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-on-surface font-semibold">{title}</h3>
          <p className="text-on-surface-variant text-sm text-xs mt-0.5">Target: {target} {unit}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={onDecrement}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest text-on-surface shadow-sm squish-effect"
          >
            <Minus className="w-5 h-5" />
          </button>
          
          <div className="w-20 text-center">
            <span className="text-2xl font-heading font-bold text-on-surface">{current}</span>
            <span className="text-sm text-on-surface-variant ml-1">{unit}</span>
          </div>
          
          <button 
            onClick={onIncrement}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-on-primary shadow-sm squish-effect"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="w-full bg-surface-container-lowest h-2.5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-500 rounded-full" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </Card>
  );
};
