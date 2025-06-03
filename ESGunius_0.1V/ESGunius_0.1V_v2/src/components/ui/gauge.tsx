import React from 'react';
export const GaugeChart = ({ value, max = 100, label }) => (
  <div className="flex flex-col items-center w-full">
    <div className="w-24 h-24 rounded-full border-8 border-blue-400 flex items-center justify-center text-2xl font-bold">
      {value}
    </div>
    <div className="text-sm mt-1">{label}</div>
  </div>
);
