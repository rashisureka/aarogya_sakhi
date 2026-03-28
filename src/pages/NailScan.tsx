import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card';
import { Camera, RefreshCw, AlertCircle, Sparkles } from 'lucide-react';

export const NailScan = () => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const handleScan = () => {
    setScanning(true);
    setResult(null);
    
    // Simulate AI scan delay
    setTimeout(() => {
      setScanning(false);
      setResult(10.8); // Mock hemoglobin level
    }, 2500);
  };

  return (
    <div>
      <Navbar title="Smart Hemoglobin Scan" showBack />
      
      <main className="px-6 py-4 max-w-lg mx-auto space-y-8 flex flex-col h-[calc(100vh-140px)]">
        
        <div className="flex-1 flex flex-col items-center justify-center">
          {scanning ? (
            <div className="relative w-64 h-64 flex flex-col items-center justify-center">
              <div className="absolute inset-0 rounded-[3rem] border-4 border-primary/20 animate-pulse" />
              <div className="absolute inset-4 rounded-[2.5rem] border-4 border-primary/40 animate-ping" />
              <div className="w-20 h-20 rounded-full bg-surface-container-lowest shadow-blush-glow flex items-center justify-center text-primary z-10">
                <RefreshCw className="w-8 h-8 animate-spin" />
              </div>
              <p className="absolute -bottom-12 text-primary font-medium">Analyzing nail bed...</p>
            </div>
          ) : result !== null ? (
            <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card variant="elevated" className="text-center py-10">
                <p className="text-on-surface-variant font-semibold mb-2">Estimated Hemoglobin</p>
                <div className="flex items-baseline justify-center gap-1 text-primary">
                  <span className="font-heading font-extrabold text-[4rem] leading-none">{result}</span>
                  <span className="font-bold text-xl">g/dL</span>
                </div>
                
                <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                  <AlertCircle className="w-4 h-4" />
                  Slightly Low
                </div>
              </Card>

              <Card variant="flat" className="bg-primary/5 border border-primary/10">
                <div className="flex gap-4">
                  <Sparkles className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">AI Recommendation</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Your levels are slightly below the optimal range (12.0 - 15.5 g/dL). Consider increasing your intake of iron-rich foods today.
                    </p>
                  </div>
                </div>
              </Card>
              
              <button 
                onClick={() => setResult(null)}
                className="w-full font-bold font-body text-primary py-4 rounded-full border-2 border-primary/20 hover:bg-primary/5 transition-colors"
              >
                Scan Again
              </button>
            </div>
          ) : (
            <div className="w-full max-w-xs aspect-[3/4] relative mx-auto rounded-[2.5rem] overflow-hidden bg-surface-container-high border-4 border-surface-container-lowest shadow-blush-glow">
              {/* Dummy Image for viewfinder */}
              <img 
                src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=600&auto=format&fit=crop" 
                alt="Hand" 
                className="w-full h-full object-cover opacity-60 grayscale-[30%]"
              />
              
              {/* Target overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full aspect-square border-2 border-dashed border-white rounded-[2rem] flex flex-col items-center justify-center p-4">
                  <div className="w-16 h-1 rounded-full bg-white/50 mb-auto" />
                  <p className="text-white text-center font-bold text-shadow text-lg">Position your index finger here</p>
                  <div className="w-16 h-1 rounded-full bg-white/50 mt-auto" />
                </div>
              </div>
            </div>
          )}
        </div>

        {!scanning && result === null && (
          <div className="pb-8">
            <button 
              className="w-full glow-gradient text-on-primary font-bold font-body rounded-full py-5 shadow-blush-glow squish-effect flex items-center justify-center gap-2 text-lg"
              onClick={handleScan}
            >
              <Camera className="w-6 h-6" />
              Capture & Analyze
            </button>
            <p className="text-center text-xs text-on-surface-variant mt-4 font-medium">Ensure good lighting for accurate results</p>
          </div>
        )}

      </main>
    </div>
  );
};
