import React from 'react';
import { TransactionHeader } from '../components/TransactionHeader';
import { TransactionList } from '../components/TransactionList';

interface Order {
  id: number;
  customer_name: string;
  coffee_name: string;
  price_per_cup: number;
  status: string;
  created_at: string;
}

interface TransactionProps {
  orders: Order[];
}

export const Transaction: React.FC<TransactionProps> = ({ orders }) => {
  return (
    <div className="flex flex-col gap-6 animate-fadeIn">
      {/* Component 1: Header with count logic */}
      <TransactionHeader count={orders.length} />

      {/* Component 2: The Data Grid */}
      {orders.length > 0 ? (
        <TransactionList orders={orders} />
      ) : (
        <div className="h-64 flex items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm text-gray-400 italic">
          Waiting for fresh beans from the database...
        </div>
      )}
    </div>
  );
};