import React from 'react';

interface StatCardsProps {
  totalGMV: number;
  totalQty: number;
}

export const StatCards: React.FC<StatCardsProps> = ({ totalGMV, totalQty }) => {
  const stats = [
    { label: 'Total GMV', value: `Rp ${totalGMV.toLocaleString()}`, color: 'text-blue-600' },
    { label: 'Qty Sold', value: `${totalQty} Cups`, color: 'text-green-600' },
    { label: 'Avg. Sale', value: `Rp ${totalQty > 0 ? (totalGMV / totalQty).toLocaleString() : 0}`, color: 'text-purple-600' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
          <p className={`text-2xl font-black mt-2 ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
};