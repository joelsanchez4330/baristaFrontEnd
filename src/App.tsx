import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Your Page Components
import { General } from './pages/General';
import { Product } from './pages/Product';
import { Transaction } from './pages/Transaction';

export default function App() {
  const [currentPage, setCurrentPage] = useState('General');
  const [orders, setOrders] = useState([]); // This holds your Tokyo data
  const [loading, setLoading] = useState(true);

  // Use the environment variable, or fallback to localhost for dev
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  // 1. Connect to the Backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Ensure this matches your Express port!
        const response = await axios.get(`${API_URL}/api/orders`);
        setOrders(response.data);
      } catch (error) {
        console.error("Connection to Barista Backend failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Empty array means "Run once on load"

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar activeTab={currentPage} setActiveTab={setCurrentPage} />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar title={currentPage} />

        <main className="flex-1 p-8 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin text-4xl">☕</div>
              <p className="ml-4 text-gray-500 font-medium">Grinding beans...</p>
            </div>
          ) : (
            <>
              {/* 2. Pass the live data to your pages */}
              {currentPage === 'General' && <General orders={orders} />}
              {currentPage === 'Product' && <Product />}
              {currentPage === 'Transaction' && <Transaction orders={orders} />}
            </>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}