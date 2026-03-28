import React from 'react';
import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { AiAssistant } from './AiAssistant';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background pb-28 relative overflow-x-hidden">
      <Outlet />
      <BottomNav />
      <AiAssistant />
    </div>
  );
};
