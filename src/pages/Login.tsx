import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-center px-6 relative overflow-hidden">
      
      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary-container/40 blur-3xl opacity-60" />
      <div className="absolute bottom-[-10%] left-[-20%] w-[600px] h-[600px] rounded-full bg-surface-container-low/80 blur-3xl opacity-60" />

      <div className="relative z-10 space-y-12 max-w-md mx-auto w-full mt-10">
        
        {/* Branding header */}
        <div className="flex flex-col gap-4">
          <div className="w-16 h-16 rounded-[2rem] glow-gradient flex items-center justify-center shadow-blush-glow">
            <Heart className="w-8 h-8 text-on-primary fill-current" />
          </div>
          <div>
            <h1 className="text-[3.5rem] leading-[1.1] font-heading font-extrabold text-on-surface tracking-tight">
              Aarogya <br className="hidden sm:block" />
              <span className="text-primary">Sakhi</span>
            </h1>
            <p className="text-on-surface-variant font-body mt-3 text-lg">Your health sanctuary.</p>
          </div>
        </div>

        {/* Form container */}
        <div className="p-8 pb-10 rounded-[2rem] bg-surface-container-lowest/70 backdrop-blur-[20px] shadow-sm flex flex-col gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-on-surface-variant text-sm font-semibold font-body">Mobile Number</label>
              <input 
                type="tel" 
                placeholder="+91 99999 99999" 
                className="w-full bg-surface-container-low border-transparent focus:border-outline-variant focus:bg-surface-container-lowest focus:ring-4 focus:ring-primary-container/50 rounded-xl px-5 py-4 outline-none transition-all placeholder:text-on-surface-variant/50 text-on-surface font-medium font-body"
              />
            </div>
          </div>
          
          <button 
            type="button"
            className="w-full glow-gradient text-on-primary font-bold font-body rounded-full py-4 shadow-blush-glow mt-2 squish-effect"
            onClick={() => navigate('/dashboard')}
          >
            Continue
          </button>

          <p className="text-center text-xs text-on-surface-variant font-body">
            By continuing, you agree to our <a href="#" className="text-primary underline underline-offset-2">Terms of Service</a> & <a href="#" className="text-primary underline underline-offset-2">Privacy Policy</a>
          </p>
        </div>
      </div>

    </div>
  );
};
