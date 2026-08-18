import { useState } from 'react';
import { MapPin, Calendar as CalendarIcon, ArrowRightLeft, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { SearchResults } from './SearchResults';
import { cn } from '../../lib/utils';

export function BookingSearch() {
  const [from, setFrom] = useState('New Delhi (NDLS)');
  const [to, setTo] = useState('Mumbai Central (MMCT)');
  const [date] = useState<Date>(new Date(2026, 7, 18)); // 18 Aug 2026
  
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  
  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from || !to) return;
    
    setIsSearching(true);
    setHasSearched(false);
    
    // Simulate network request
    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
      
      // Scroll smoothly to results
      setTimeout(() => {
        document.getElementById('search-results-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <motion.div 
        className="bg-white rounded-3xl p-4 sm:p-6 shadow-premium border border-slate-100 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSearch} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Stations Block */}
            <div className="col-span-1 md:col-span-7 flex flex-col sm:flex-row relative bg-slate-50 rounded-2xl border border-slate-200 p-1">
              
              {/* From */}
              <div className="flex-1 relative flex items-center p-3 rounded-xl hover:bg-white transition-colors cursor-text group">
                <MapPin className="h-5 w-5 text-brand-400 mr-3" />
                <div className="flex flex-col flex-1">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">From</span>
                  <input 
                    type="text" 
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-lg font-medium text-brand-950 focus:outline-none focus:ring-0 truncate"
                    placeholder="Leaving from"
                    required
                  />
                </div>
              </div>

              {/* Swap Button */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.button
                  type="button"
                  onClick={handleSwap}
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white p-2 rounded-full shadow-md border border-slate-100 text-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  aria-label="Swap stations"
                >
                  <ArrowRightLeft className="h-5 w-5" />
                </motion.button>
              </div>

              {/* To */}
              <div className="flex-1 relative flex items-center p-3 rounded-xl hover:bg-white transition-colors cursor-text group">
                <MapPin className="h-5 w-5 text-brand-600 mr-3" />
                <div className="flex flex-col flex-1 sm:pl-4">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">To</span>
                  <input 
                    type="text" 
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full bg-transparent border-none p-0 text-lg font-medium text-brand-950 focus:outline-none focus:ring-0 truncate"
                    placeholder="Going to"
                    required
                  />
                </div>
              </div>

            </div>

            {/* Date Block */}
            <div className="col-span-1 md:col-span-3 bg-slate-50 rounded-2xl border border-slate-200 p-1">
              <div className="w-full relative flex items-center p-3 rounded-xl hover:bg-white transition-colors cursor-pointer group">
                <CalendarIcon className="h-5 w-5 text-brand-500 mr-3" />
                <div className="flex flex-col flex-1">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</span>
                  <div className="text-lg font-medium text-brand-950 truncate">
                    {format(date, 'dd MMM yyyy')}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 h-full">
              <motion.button
                type="submit"
                disabled={isSearching}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-full h-full min-h-[64px] flex items-center justify-center rounded-2xl font-semibold text-lg transition-all text-white",
                  isSearching 
                    ? "bg-brand-400 cursor-not-allowed" 
                    : "bg-accent-500 hover:bg-accent-600 shadow-[0_4px_14px_0_rgba(255,127,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,127,0,0.23)]"
                )}
              >
                {isSearching ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Searching...</span>
                  </div>
                ) : (
                  <span>Search Trains</span>
                )}
              </motion.button>
            </div>
          </div>
          
          {/* Quick Filters / Options */}
          <div className="flex flex-wrap gap-4 mt-2 px-2">
            <button type="button" className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-600 transition-colors bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
              <User className="h-4 w-4" />
              General Quota
              <ChevronDown className="h-3 w-3" />
            </button>
            <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-brand-600 transition-colors">
              <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500 bg-slate-50 border-slate-300" />
              Railway Pass Concession
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-brand-600 transition-colors">
              <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500 bg-slate-50 border-slate-300" />
              Flexible With Date
            </label>
          </div>
        </form>
      </motion.div>

      {/* Results Section Transition */}
      <AnimatePresence>
        {hasSearched && (
          <motion.div
            id="search-results-section"
            initial={{ opacity: 0, y: 30, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SearchResults from={from} to={to} date={date} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
