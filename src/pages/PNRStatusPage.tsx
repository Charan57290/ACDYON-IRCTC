import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Search, Train, Ticket } from 'lucide-react';

export function PNRStatusPage() {
  const [pnr, setPnr] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (pnr.length !== 10) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      // Mock result logic would go here
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-50">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 relative isolate flex flex-col justify-center">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-200 via-brand-50 to-brand-50 opacity-50" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-subtle mb-6 text-brand-600"
            >
              <Ticket className="w-10 h-10" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-brand-950 mb-4"
            >
              Check PNR Status
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Get live status updates, coach position, and platform numbers for your upcoming journey.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-premium border border-white/60 max-w-2xl mx-auto"
          >
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <Train className="h-6 w-6 text-slate-400" />
                </div>
                <input
                  type="text"
                  maxLength={10}
                  value={pnr}
                  onChange={(e) => setPnr(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="Enter 10-digit PNR number"
                  className="w-full bg-slate-50 border border-slate-200 text-brand-950 rounded-2xl pl-16 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent font-medium text-lg placeholder:font-normal"
                />
              </div>
              <button
                type="submit"
                disabled={pnr.length !== 10 || isSearching}
                className="bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-subtle hover:shadow-md flex items-center justify-center min-w-[160px]"
              >
                {isSearching ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Check
                  </>
                )}
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-slate-500">
                You can find the PNR number on the top left corner of your ticket.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
