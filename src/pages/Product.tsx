import React, { useState } from 'react';
import { ProductSearch } from '../components/ProductSearch';
import { ProductTable } from '../components/ProductTable';

export const Product: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([
    { id: 1, name: 'Gayo Arabica', origin: 'Aceh', price: 35000, isActive: true },
    { id: 2, name: 'Ijen Robusta', origin: 'Banyuwangi', price: 25000, isActive: true },
    { id: 3, name: 'Toraja Kalosi', origin: 'Sulawesi', price: 38000, isActive: false },
    { id: 4, name: 'Sidikalang', origin: 'Sumatera', price: 28000, isActive: true },
  ]);

  // Logic to toggle status
  const handleToggle = (id: number) => {
    setProducts(prev => prev.map(p => 
      p.id === id ? { ...p, isActive: !p.isActive } : p
    ));
  };

  // Logic to filter based on search
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.origin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-gray-800 tracking-tight">Menu Management</h2>
        <ProductSearch onSearch={setSearchTerm} />
      </div>

      <ProductTable products={filteredProducts} onToggleStatus={handleToggle} />
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400">No coffee beans found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};