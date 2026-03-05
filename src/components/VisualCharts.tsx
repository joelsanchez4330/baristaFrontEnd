import React from 'react';

export const VisualCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-80 flex flex-col">
        <h4 className="text-sm font-bold text-gray-700 mb-4">Weekly Revenue</h4>
        <div className="flex-1 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 italic">
          Line Chart Component Here
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-80 flex flex-col">
        <h4 className="text-sm font-bold text-gray-700 mb-4">Popular Beans</h4>
        <div className="flex-1 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 italic">
          Donut Chart Component Here
        </div>
      </div>
    </div>
  );
};