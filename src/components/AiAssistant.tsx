import React, { useState, useEffect } from 'react';
import { Sparkles, Mic, Activity } from 'lucide-react';
import { Modal } from './Modal';

export const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [pulsing, setPulsing] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isListening) {
      interval = setInterval(() => {
        setPulsing(p => !p);
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isListening]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 w-14 h-14 rounded-full glow-gradient text-white shadow-blush-glow flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-40 group"
      >
        <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-400 border-2 border-surface rounded-full animate-pulse" />
      </button>

      <Modal isOpen={isOpen} onClose={() => { setIsOpen(false); setIsListening(false); }} title="Aarogya Sakhi">
        <div className="flex flex-col items-center py-6">
          
          <div className="text-center mb-8">
            <h3 className="text-on-surface font-heading font-bold text-lg mb-2">How can I help you today?</h3>
            <p className="text-on-surface-variant text-sm font-body">Ask about your health, nutrition, or recent scans.</p>
          </div>

          <div className="relative w-32 h-32 flex items-center justify-center mb-8">
            {/* Animated Rings */}
            <div className={`absolute inset-0 rounded-full border-4 border-primary-container ${isListening ? 'animate-ping' : ''} opacity-20`} />
            <div className={`absolute inset-4 rounded-full border-4 border-primary-container ${isListening ? 'animate-pulse' : ''} opacity-40`} />
            
            <button 
              onClick={() => setIsListening(!isListening)}
              className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                isListening ? 'bg-secondary text-white shadow-lg scale-110' : 'glow-gradient text-white shadow-blush-glow'
              }`}
            >
              {isListening ? (
                <Activity className={`w-8 h-8 ${pulsing ? 'scale-125' : 'scale-100'} transition-transform`} />
              ) : (
                <Mic className="w-8 h-8" />
              )}
            </button>
          </div>

          <p className="text-sm font-medium text-primary mb-4 h-5">
            {isListening ? "Listening..." : "Tap to speak"}
          </p>

          {!isListening && (
            <div className="flex flex-wrap gap-2 justify-center mt-4 w-full">
              {['Log my meals', 'What does my scan mean?', 'Tips for cramps'].map(suggestion => (
                <button key={suggestion} className="px-4 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-xs font-medium hover:bg-surface-container-high transition-colors">
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
