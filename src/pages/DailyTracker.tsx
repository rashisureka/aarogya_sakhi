import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { TrackerCard } from '../components/TrackerCard';
import { InsightCard } from '../components/InsightCard';
import { Droplet, Flame, Moon, Footprints, ChevronRight, Apple } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

const mockData = [
  { day: 'Mon', calories: 1200 },
  { day: 'Tue', calories: 1400 },
  { day: 'Wed', calories: 1100 },
  { day: 'Thu', calories: 1600 },
  { day: 'Fri', calories: 1550 },
  { day: 'Sat', calories: 1800 },
  { day: 'Sun', calories: 1750 },
];

export const DailyTracker = () => {
  const [water, setWater] = useState(4);
  const [meals, setMeals] = useState(2);

  return (
    <div>
      <Navbar title="Daily Tracker" />
      
      <main className="px-6 py-4 max-w-lg mx-auto space-y-8">
        
        {/* Weekly Trend Chart */}
        <section>
          <div className="flex justify-between items-end mb-4 pr-1">
            <h2 className="font-heading text-xl font-bold text-on-surface">Calorie Trend</h2>
            <button className="flex items-center text-primary text-sm font-medium font-body hover:underline">This Week <ChevronRight className="w-4 h-4 ml-1" /></button>
          </div>
          
          <div className="h-48 w-full bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/30 flex flex-col justify-end overflow-hidden relative">
            <div className="absolute top-6 left-6 z-10">
              <span className="text-3xl font-heading font-bold text-on-surface">1,485</span>
              <span className="text-sm font-medium text-on-surface-variant ml-2">Avg. kcal</span>
            </div>
            <div className="h-24 w-full mt-auto -bg-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#70585b" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#70585b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="calories" stroke="#70585b" strokeWidth={3} fillOpacity={1} fill="url(#colorCalories)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Trackers */}
        <section className="space-y-4">
          <TrackerCard 
            title="Hydration" 
            current={water} 
            target={8} 
            unit="glasses" 
            icon={<Droplet className="w-6 h-6 fill-current opacity-20 stroke-current text-blue-500" />}
            onIncrement={() => setWater(w => Math.min(w + 1, 8))}
            onDecrement={() => setWater(w => Math.max(w - 1, 0))}
          />
          
          <TrackerCard 
            title="Meals & Snacks" 
            current={meals} 
            target={5} 
            unit="portion" 
            icon={<Apple className="w-6 h-6 fill-current opacity-20 stroke-current text-green-500" />}
            onIncrement={() => setMeals(m => Math.min(m + 1, 10))}
            onDecrement={() => setMeals(m => Math.max(m - 1, 0))}
          />
        </section>

        {/* Other Insights */}
        <section className="grid grid-cols-2 gap-4 pb-4">
          <InsightCard 
            title="Sleep" 
            value="6h 30m" 
            icon={<Moon className="w-5 h-5 text-indigo-500 fill-current opacity-20 stroke-current" />} 
            colorClass="bg-indigo-50 text-indigo-500"
            trend="down"
            trendValue="1h"
          />
          <InsightCard 
            title="Steps" 
            value="4,230" 
            icon={<Footprints className="w-5 h-5 text-orange-500" />} 
            colorClass="bg-orange-50 text-orange-500"
            trend="neutral"
            trendValue="-"
          />
        </section>

      </main>
    </div>
  );
};
