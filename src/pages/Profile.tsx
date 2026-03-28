import React from 'react';
import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card';
import { Settings, LogOut, Heart, Activity, FileText, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar title="My Profile" />
      
      <main className="px-6 py-4 max-w-lg mx-auto space-y-6">
        
        {/* Profile Info */}
        <div className="flex items-center gap-5 mt-2 mb-8">
          <div className="w-24 h-24 rounded-[2rem] border-4 border-surface-container-lowest shadow-blush-glow shrink-0 overflow-hidden relative group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <div>
            <h1 className="text-2xl font-heading font-extrabold text-on-surface">Aditi K.</h1>
            <p className="text-on-surface-variant font-medium">+91 98765 43210</p>
            <div className="mt-2 text-xs font-bold px-3 py-1 bg-primary-container text-primary w-max rounded-full">
              Premium Sakhi
            </div>
          </div>
        </div>

        {/* Action List */}
        <Card variant="flat" padding="none" className="overflow-hidden divide-y divide-outline-variant/10">
          {[
            { icon: <Heart className="w-5 h-5" />, label: 'Health Profile' },
            { icon: <Activity className="w-5 h-5" />, label: 'Scan History' },
            { icon: <FileText className="w-5 h-5" />, label: 'Medical Reports' }
          ].map((item, i) => (
            <button key={i} className="flex items-center w-full p-5 hover:bg-surface-container-high transition-colors text-on-surface group">
              <div className="p-2 bg-surface rounded-xl text-primary shadow-sm mr-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="font-semibold text-[15px]">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-on-surface-variant opacity-50 ml-auto" />
            </button>
          ))}
        </Card>

        <Card variant="flat" padding="none" className="overflow-hidden divide-y divide-outline-variant/10 mt-6">
          <button className="flex items-center w-full p-5 hover:bg-surface-container-high transition-colors text-on-surface group">
            <div className="p-2 bg-surface rounded-xl text-on-surface-variant shadow-sm mr-4 group-hover:scale-110 transition-transform">
              <Settings className="w-5 h-5" />
            </div>
            <span className="font-semibold text-[15px]">Settings & Privacy</span>
            <ChevronRight className="w-5 h-5 text-on-surface-variant opacity-50 ml-auto" />
          </button>
          
          <button 
            className="flex items-center w-full p-5 hover:bg-red-50 transition-colors text-red-600 group"
            onClick={() => navigate('/login')}
          >
            <div className="p-2 bg-surface rounded-xl shadow-sm mr-4 group-hover:scale-110 transition-transform">
              <LogOut className="w-5 h-5" />
            </div>
            <span className="font-semibold text-[15px]">Sign Out</span>
          </button>
        </Card>

      </main>
    </div>
  );
};
