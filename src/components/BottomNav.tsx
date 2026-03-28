import React from 'react';
import { Home, ClipboardList, Stethoscope, User, Sparkles } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: <Home className="w-6 h-6" />, label: 'Home', path: '/dashboard' },
    { icon: <ClipboardList className="w-6 h-6" />, label: 'Tracker', path: '/tracker' },
    { icon: <div className="p-3 rounded-full glow-gradient text-white shadow-blush-glow mb-4 mt-[-20px]"><Sparkles className="w-6 h-6" /></div>, label: '', path: '/scan', isFab: true },
    { icon: <Stethoscope className="w-6 h-6" />, label: 'Consult', path: '/consult' },
    { icon: <User className="w-6 h-6" />, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 glass-effect border-t border-outline-variant/20 pb-safe pb-4 pt-2 px-6 flex justify-between items-center z-40 rounded-t-[2rem]">
      {navItems.map((item, index) => {
        const isActive = location.pathname.startsWith(item.path);
        
        if (item.isFab) {
          return (
            <button
              key="fab"
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center justify-center squish-effect"
            >
              {item.icon}
            </button>
          )
        }

        return (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center min-w-[50px] p-2 rounded-xl transition-all squish-effect ${
              isActive ? 'text-primary' : 'text-on-surface-variant hover:bg-surface-container-low'
            }`}
          >
            <div className={`mb-1 transition-all ${isActive ? 'scale-110' : ''}`}>
              {item.icon}
            </div>
            <span className="text-[10px] font-medium font-body">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};
