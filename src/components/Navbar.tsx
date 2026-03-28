import React from 'react';
import { ArrowLeft, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  title: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
}

export const Navbar = ({ title, showBack = false, rightAction }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 px-5 pt-8 pb-4 bg-surface/80 backdrop-blur-md flex items-center justify-between">
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full bg-surface-container-low/50 hover:bg-surface-container-low transition-colors squish-effect"
          >
            <ArrowLeft className="w-5 h-5 text-on-surface" />
          </button>
        )}
        <h1 className="text-xl font-heading font-extrabold tracking-tight text-on-surface">{title}</h1>
      </div>
      <div>
        {rightAction || (
          <button className="p-2 -mr-2 rounded-full hover:bg-surface-container-low transition-colors squish-effect">
            <MoreVertical className="w-5 h-5 text-on-surface-variant" />
          </button>
        )}
      </div>
    </nav>
  );
};
