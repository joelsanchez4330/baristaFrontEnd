import React from 'react';

interface SearchProps {
  onSearch: (term: string) => void;
}

export const ProductSearch: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <div className="relative max-w-md">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
        🔍
      </span>
      <input
        type="text"
        placeholder="Search beans or origin..."
        className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm transition-all"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};