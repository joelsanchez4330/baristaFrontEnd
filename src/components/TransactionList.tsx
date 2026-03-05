import React from 'react';

interface Order {
  id: number;
  customer_name: string;
  coffee_name: string;
  price_per_cup: number;
  status: string;
  created_at: string;
}

interface ListProps {
  orders: Order[];
}

export const TransactionList: React.FC<ListProps> = ({ orders }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black">
          <tr>
            <th className="px-6 py-3">Order ID</th>
            <th className="px-6 py-3">Customer</th>
            <th className="px-6 py-3">Product</th>
            <th className="px-6 py-3">Amount</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Timestamp</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {orders.map((order) => (
            <tr key={order.id} className="bg-white hover:bg-blue-50/30 transition-colors group">
              <td className="px-6 py-4 font-mono text-gray-400 group-hover:text-blue-600">
                #{order.id.toString().padStart(4, '0')}
              </td>
              <td className="px-6 py-4 font-bold text-gray-800">{order.customer_name}</td>
              <td className="px-6 py-4 text-gray-600">
                <span className="px-2 py-1 bg-gray-100 rounded text-xs">{order.coffee_name}</span>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900">
                Rp {order.price_per_cup.toLocaleString()}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    order.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                  }`} />
                  <span className="capitalize font-medium">{order.status}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-gray-400 text-xs">
                {new Date(order.created_at).toLocaleDateString('id-ID', {
                  day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};