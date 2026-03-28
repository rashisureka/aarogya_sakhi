import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { NailScan } from './pages/NailScan';
import { DailyTracker } from './pages/DailyTracker';
import { Consult } from './pages/Consult';
import { Profile } from './pages/Profile';
import { AIInsights } from './pages/AIInsights';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tracker" element={<DailyTracker />} />
          <Route path="/scan" element={<NailScan />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/insights" element={<AIInsights />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
