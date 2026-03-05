import React from 'react';

interface HeaderProps {
  count: number;
}

export const TransactionHeader: React.FC<HeaderProps> = ({ count }) => {
  return (
    <div className="flex justify-between items-end pb-4 border-b border-gray-100">
      <div>
        <h2 className="text-2xl font-black text-gray-800 tracking-tight">Orders History</h2>
        <p className="text-sm text-gray-500 mt-1">Showing {count} total transactions from Tokyo Database</p>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
        <span>📥</span> Export CSV
      </button>
    </div>
  );
};