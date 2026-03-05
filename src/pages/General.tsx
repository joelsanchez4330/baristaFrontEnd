import React from 'react';
import { StatCards } from '../components/StatCards';
import { VisualCharts } from '../components/VisualCharts';

interface Order {
  id: number;
  price_per_cup: number;
}

interface GeneralProps {
  orders: Order[];
}

export const General: React.FC<GeneralProps> = ({ orders }) => {
  const totalGMV = orders.reduce((sum, order) => sum + order.price_per_cup, 0);

  return (
    <div className="flex flex-col gap-8">
      {/* Section 1: Top Stats */}
      <section>
        <StatCards totalGMV={totalGMV} totalQty={orders.length} />
      </section>

      {/* Section 2: Visualizations */}
      <section>
        <VisualCharts />
      </section>

      {/* Section 3: Recent Activity (Optional placeholder) */}
      <section className="bg-blue-900 text-white p-8 rounded-2xl shadow-lg overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold">Barista Insights</h2>
          <p className="opacity-80 mt-2 max-w-md">Your Gayo Arabica sales are up 12% this week. Consider stocking more beans from Aceh.</p>
        </div>
        <div className="absolute right-[-20px] bottom-[-20px] text-9xl opacity-10">☕</div>
      </section>
    </div>
  );
};