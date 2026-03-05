import React from 'react';

interface ProductItem {
  id: number;
  name: string;
  origin: string;
  price: number;
  isActive: boolean;
}

interface TableProps {
  products: ProductItem[];
  onToggleStatus: (id: number) => void;
}

export const ProductTable: React.FC<TableProps> = ({ products, onToggleStatus }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-gray-600 font-semibold uppercase text-[10px] tracking-widest">
          <tr>
            <th className="p-4">Product Info</th>
            <th className="p-4">Origin</th>
            <th className="p-4">Price</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm">
          {products.map((p) => (
            <tr key={p.id} className={`hover:bg-gray-50 transition-colors ${!p.isActive ? 'opacity-50' : ''}`}>
              <td className="p-4 font-bold text-gray-800">{p.name}</td>
              <td className="p-4 text-gray-500">{p.origin}</td>
              <td className="p-4 font-mono text-blue-600">Rp {p.price.toLocaleString()}</td>
              <td className="p-4">
                <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${p.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                  {p.isActive ? 'ACTIVE' : 'INACTIVE'}
                </span>
              </td>
              <td className="p-4 text-right">
                <button 
                  onClick={() => onToggleStatus(p.id)}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                    p.isActive ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {p.isActive ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};