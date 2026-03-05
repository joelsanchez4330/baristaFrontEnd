import React from 'react';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800">{title} Dashboard</h1>
      
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-gray-900">Solomon</p>
          <p className="text-xs text-gray-500">Head Barista</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border-2 border-white shadow-md"></div>
      </div>
    </header>
  );
};

export default Navbar;