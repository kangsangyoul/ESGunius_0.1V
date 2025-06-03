import React from 'react';
import Dashboard from './features/dashboard/MainDashboard';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', background: '#111', color: '#fff' }}>
      <h1 style={{ textAlign: 'center' }}>ESGunius 실시간 대시보드</h1>
      <Dashboard />
    </div>
  );
}
export default App;
