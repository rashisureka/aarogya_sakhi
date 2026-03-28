import React from 'react';
import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card';
import { ProgressRing } from '../components/ProgressRing';
import { Activity, Droplet, Coffee, Apple, Sparkles, LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar title="Good Morning, Aditi" />
      
      <main className="px-6 py-4 space-y-8 max-w-lg mx-auto">
        
        {/* Main Health Card */}
        <Card variant="elevated" className="glow-gradient text-on-primary">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-primary-container font-medium text-sm mb-1">Overall Health</p>
              <h2 className="font-heading font-bold text-3xl">Great</h2>
              <button 
                onClick={() => navigate('/insights')}
                className="mt-4 px-4 py-2 bg-surface-container-lowest/20 hover:bg-surface-container-lowest/30 transition-colors backdrop-blur-sm rounded-full text-xs font-semibold flex items-center gap-1 squish-effect"
              >
                <Sparkles className="w-3 h-3" />
                View Insights
              </button>
            </div>
            
            <ProgressRing progress={85} size={110} color="#ffffff" trackColor="rgba(255,255,255,0.2)" strokeWidth={12}>
              <div className="flex flex-col items-center">
                <span className="font-heading font-bold text-2xl">85</span>
                <span className="text-[10px] text-primary-container uppercase font-bold tracking-wider">Score</span>
              </div>
            </ProgressRing>
          </div>
        </Card>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card variant="flat" padding="md" className="cursor-pointer squish-effect group" onClick={() => navigate('/tracker')}>
            <div className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-secondary mb-3 group-hover:scale-110 transition-transform">
              <Droplet className="w-5 h-5 fill-current opacity-20 stroke-current text-blue-500" />
            </div>
            <h3 className="font-body text-sm text-on-surface-variant font-semibold">Water</h3>
            <p className="font-heading text-xl font-bold mt-1">4<span className="text-sm font-medium text-on-surface-variant ml-1">/8 glasses</span></p>
          </Card>
          
          <Card variant="flat" padding="md" className="cursor-pointer squish-effect group" onClick={() => navigate('/scan')}>
            <div className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-body text-sm text-on-surface-variant font-semibold">Hemoglobin</h3>
            <p className="font-heading text-xl font-bold mt-1">11.5<span className="text-sm font-medium text-on-surface-variant ml-1">g/dL</span></p>
          </Card>
        </div>

        {/* Daily Tasks */}
        <section>
          <div className="flex justify-between items-end mb-4 pr-1">
            <h2 className="font-heading text-xl font-bold text-on-surface">Today's To-Do</h2>
            <button className="text-primary text-sm font-medium font-body hover:underline">See all</button>
          </div>
          
          <div className="space-y-3">
            <Card variant="flat" padding="sm" className="flex items-center gap-4 bg-surface-container-lowest border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                <Coffee className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-on-surface">Morning Supplements</h4>
                <p className="text-xs text-on-surface-variant mt-0.5">Iron & Folic Acid</p>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-outline-variant mr-2" />
            </Card>
            
            <Card variant="flat" padding="sm" className="flex items-center gap-4 bg-surface-container-lowest border border-outline-variant/30">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                <Apple className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-on-surface">Eat a Citrus Fruit</h4>
                <p className="text-xs text-on-surface-variant mt-0.5">Boosts iron absorption</p>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-outline-variant mr-2" />
            </Card>
          </div>
        </section>

      </main>
    </div>
  );
};
