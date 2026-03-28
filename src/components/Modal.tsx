import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div 
        className="absolute inset-0 bg-on-surface/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div 
        className="relative w-full max-w-lg bg-surface-container-lowest rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl overflow-hidden shadow-blush-glow animate-in slide-in-from-bottom-10 sm:zoom-in-95 duration-300 fill-mode-both"
        style={{ maxHeight: '90vh' }}
      >
        <div className="sticky top-0 bg-surface-container-lowest/90 backdrop-blur pb-2 pt-6 px-6 flex items-center justify-between z-10 border-b border-surface-container-low">
          <h2 className="text-xl font-heading font-bold text-on-surface">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant transition-colors squish-effect"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 80px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
