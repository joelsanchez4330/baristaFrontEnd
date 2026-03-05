import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 px-8 bg-white border-t border-gray-200 text-center text-gray-500 text-xs">
      <div className="flex justify-between items-center">
        <p>© 2026 Barista Mastery System. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="hover:text-blue-600 cursor-pointer text-[10px] uppercase tracking-widest font-bold">Privacy</span>
          <span className="hover:text-blue-600 cursor-pointer text-[10px] uppercase tracking-widest font-bold">Support</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;