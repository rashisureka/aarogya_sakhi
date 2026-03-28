import React from 'react';
import { Card } from './Card';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface InsightCardProps {
  title: string;
  value: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon: React.ReactNode;
  colorClass?: string;
}

export const InsightCard = ({ title, value, trend, trendValue, icon, colorClass = 'text-primary bg-primary-container' }: InsightCardProps) => {
  return (
    <Card variant="elevated" padding="md" className="flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <div className={`p-2 rounded-xl ${colorClass}`}>
          {icon}
        </div>
        {trend && (
          <div className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
            trend === 'up' ? 'text-green-700 bg-green-100' :
            trend === 'down' ? 'text-secondary bg-secondary-container/50' :
            'text-on-surface-variant bg-surface-container-high'
          }`}>
            {trend === 'up' && <ArrowUpRight className="w-3 h-3 mr-1" />}
            {trend === 'down' && <ArrowDownRight className="w-3 h-3 mr-1" />}
            {trend === 'neutral' && <Minus className="w-3 h-3 mr-1" />}
            <span>{trendValue}</span>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-on-surface-variant text-sm font-medium mb-1">{title}</h3>
        <p className="text-on-surface text-2xl font-heading font-bold">{value}</p>
      </div>
    </Card>
  );
};
