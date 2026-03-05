import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = ['General', 'Product', 'Transaction'];

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen flex flex-col p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-3xl">☕</span>
        <h2 className="text-xl font-bold tracking-tight">Barista Admin</h2>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
              activeTab === item 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="pt-6 border-t border-slate-800">
        <button className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors">
          Log Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;