import React from 'react';
import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card';
import { ProgressRing } from '../components/ProgressRing';
import { ChatBubble } from '../components/ChatBubble';
import { Sparkles, TrendingUp } from 'lucide-react';

export const AIInsights = () => {
  return (
    <div>
      <Navbar title="Health Insights" showBack />
      
      <main className="px-6 py-4 max-w-lg mx-auto space-y-8">
        
        <Card variant="elevated" className="bg-primary-container text-primary text-center pb-8 pt-10">
          <Sparkles className="w-8 h-8 mx-auto mb-4 opacity-50" />
          <h2 className="font-heading font-extrabold text-2xl text-on-primary-container">Sakhi's Analysis</h2>
          <p className="font-body text-sm font-medium mt-2 px-6">Based on your activity, scans, and tracking this week.</p>
        </Card>

        {/* Dynamic score summary */}
        <div className="flex gap-4">
          <Card variant="flat" padding="md" className="flex-1 flex flex-col items-center text-center">
            <ProgressRing progress={85} size={80} strokeWidth={8}>
              <span className="font-heading font-bold text-xl">85</span>
            </ProgressRing>
            <h3 className="font-bold text-sm mt-3">Overall Score</h3>
            <p className="text-xs text-green-600 font-bold flex items-center mt-1"><TrendingUp className="w-3 h-3 mr-1" /> +5 this week</p>
          </Card>
          
          <div className="flex-1 space-y-4">
            <Card variant="flat" padding="sm" className="bg-green-50/50 border border-green-100/50">
              <h4 className="font-bold text-sm text-green-800">Strengths</h4>
              <p className="text-xs text-green-700/80 mt-1">Excellent hydration and consistent meal timing.</p>
            </Card>
            <Card variant="flat" padding="sm" className="bg-orange-50/50 border border-orange-100/50">
              <h4 className="font-bold text-sm text-orange-800">Focus Area</h4>
              <p className="text-xs text-orange-700/80 mt-1">Slightly low hemoglobin. Needs iron focus.</p>
            </Card>
          </div>
        </div>

        {/* AI Chat Summary */}
        <section className="bg-surface-container-low/50 -mx-6 px-6 py-8 rounded-t-[3rem]">
          <h3 className="font-heading font-bold text-lg mb-6 pl-2 text-on-surface">Weekly Summary</h3>
          <div className="space-y-2">
             <ChatBubble 
              isAi={true} 
              message="Hi Aditi! You've done a great job tracking your water intake this week. Your average is 6 glasses a day! 💧" 
              time="Today, 9:00 AM" 
            />
             <ChatBubble 
              isAi={false} 
              message="Thanks! I'm trying to improve my iron levels too based on that scan." 
              time="Today, 9:05 AM" 
            />
             <ChatBubble 
              isAi={true} 
              message="I noticed that! Since your level was 10.8 g/dL, I suggest adding spinach or lentils to your next meal. Would you like a quick recipe?" 
              time="Today, 9:06 AM" 
            />
          </div>
        </section>

      </main>
    </div>
  );
};
