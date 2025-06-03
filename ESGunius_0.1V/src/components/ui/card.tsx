import React from 'react';
export const Card = ({ children, ...props }) => (
  <div className="bg-white/10 rounded-2xl shadow p-4 mb-2" {...props}>{children}</div>
);
export const CardHeader = ({ children }) => <div className="mb-2">{children}</div>;
export const CardContent = ({ children }) => <div>{children}</div>;
export const CardTitle = ({ children }) => <h2 className="font-bold text-lg mb-1">{children}</h2>;
