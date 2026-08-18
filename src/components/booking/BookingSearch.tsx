import { useState, useRef, useEffect } from 'react';
import { MapPin, Calendar as CalendarIcon, ArrowRightLeft, User, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { SearchResults } from './SearchResults';
import { cn } from '../../lib/utils';
import { stations, quotas } from '../../data/stations';

export function BookingSearch() {
  const [from, setFrom] = useState('New Delhi (NDLS)');
  const [to, setTo] = useState('Mumbai Central (MMCT)');
  const [date, setDate] = useState<Date>(new Date());
  
  const dateInputRef = useRef<HTMLInputElement>(null);
  
  const [activeDropdown, setActiveDropdown] = useState<'from' | 'to' | null>(null);
  const [quota, setQuota] = useState('General Quota');
  const [isQuotaOpen, setIsQuotaOpen] = useState(false);
  
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Handle outside click to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsQuotaOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    
    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
      setTimeout(() => {
        document.getElementById('search-results-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 1200);
  };

  const filteredFromStations = stations.filter(s => 
    s.name.toLowerCase().includes(from.toLowerCase()) || 
    s.code.toLowerCase().includes(from.toLowerCase())
  ).slice(0, 50);
  
  const filteredToStations = stations.filter(s => 
    s.name.toLowerCase().includes(to.toLowerCase()) || 
    s.code.toLowerCase().includes(to.toLowerCase())
  ).slice(0, 50);

  return (
    <div className="w-full flex flex-col gap-8" ref={containerRef}>
      <motion.div 
        className="bg-white/80 backdrop-blur-xl rounded-3xl p-4 sm:p-6 shadow-premium border border-white/40 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSearch} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center relative z-20">
            
            {/* Stations Block */}
            <div className="col-span-1 md:col-span-7 flex flex-col sm:flex-row relative bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60 p-1 z-30">
              
              {/* From */}
              <div className="flex-1 relative flex items-center p-3 sm:pr-8 rounded-xl hover:bg-white/70 transition-colors cursor-text group">
                <MapPin className="h-5 w-5 text-brand-500 mr-3" />
                <div className="flex flex-col flex-1 relative">
                  <span className="text-xs font-semibold text-brand-700/70 uppercase tracking-wider">From</span>
                  <input 
                    type="text" 
                    value={from}
                    onChange={(e) => {
                      setFrom(e.target.value);
                      setActiveDropdown('from');
                    }}
                    onFocus={() => {
                      setActiveDropdown('from');
                      setIsQuotaOpen(false);
                    }}
                    className="w-full bg-transparent border-none p-0 text-lg font-medium text-brand-950 focus:outline-none focus:ring-0 truncate placeholder:text-brand-900/40"
                    placeholder="Leaving from"
                    required
                  />
                  
                  {/* From Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === 'from' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-4 w-full sm:w-80 bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden z-50 max-h-64 overflow-y-auto"
                      >
                        {filteredFromStations.length > 0 ? (
                          filteredFromStations.map((station) => (
                            <div 
                              key={station.code}
                              onClick={() => {
                                setFrom(`${station.name} (${station.code})`);
                                setActiveDropdown(null);
                              }}
                              className="px-4 py-3 hover:bg-slate-50 cursor-pointer flex items-center justify-between border-b border-slate-50 last:border-0"
                            >
                              <span className="font-medium text-brand-900">{station.name}</span>
                              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">{station.code}</span>
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-3 text-sm text-slate-500">No stations found</div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
              <div className="flex-1 relative flex items-center p-3 sm:pl-8 rounded-xl hover:bg-white/70 transition-colors cursor-text group">
                <MapPin className="h-5 w-5 text-brand-600 mr-3" />
                <div className="flex flex-col flex-1 sm:pl-2 relative">
                  <span className="text-xs font-semibold text-brand-700/70 uppercase tracking-wider">To</span>
                  <input 
                    type="text" 
                    value={to}
                    onChange={(e) => {
                      setTo(e.target.value);
                      setActiveDropdown('to');
                    }}
                    onFocus={() => {
                      setActiveDropdown('to');
                      setIsQuotaOpen(false);
                    }}
                    className="w-full bg-transparent border-none p-0 text-lg font-medium text-brand-950 focus:outline-none focus:ring-0 truncate placeholder:text-brand-900/40"
                    placeholder="Going to"
                    required
                  />

                  {/* To Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === 'to' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-4 w-full sm:w-80 bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden z-50 max-h-64 overflow-y-auto"
                      >
                        {filteredToStations.length > 0 ? (
                          filteredToStations.map((station) => (
                            <div 
                              key={station.code}
                              onClick={() => {
                                setTo(`${station.name} (${station.code})`);
                                setActiveDropdown(null);
                              }}
                              className="px-4 py-3 hover:bg-slate-50 cursor-pointer flex items-center justify-between border-b border-slate-50 last:border-0"
                            >
                              <span className="font-medium text-brand-900">{station.name}</span>
                              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">{station.code}</span>
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-3 text-sm text-slate-500">No stations found</div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>

            {/* Date Block */}
            <div className="col-span-1 md:col-span-3 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60 p-1">
              <div 
                className="w-full relative flex items-center p-3 rounded-xl hover:bg-white/70 transition-colors cursor-pointer group"
                onClick={() => {
                  if (dateInputRef.current) {
                    try {
                      dateInputRef.current.showPicker();
                    } catch (e) {
                      dateInputRef.current.focus();
                    }
                  }
                }}
              >
                <input
                  ref={dateInputRef}
                  type="date"
                  value={format(date, 'yyyy-MM-dd')}
                  min={format(new Date(), 'yyyy-MM-dd')}
                  onChange={(e) => {
                    if (e.target.value) {
                      const [year, month, day] = e.target.value.split('-');
                      setDate(new Date(parseInt(year), parseInt(month) - 1, parseInt(day)));
                    }
                  }}
                  className="absolute bottom-0 left-1/2 opacity-0 pointer-events-none -z-10"
                />
                <CalendarIcon className="h-5 w-5 text-brand-500 mr-3 pointer-events-none" />
                <div className="flex flex-col flex-1 pointer-events-none">
                  <span className="text-xs font-semibold text-brand-700/70 uppercase tracking-wider">Date</span>
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
          <div className="flex flex-wrap gap-4 mt-2 px-2 relative z-10">
            <div className="relative">
              <button 
                type="button" 
                onClick={() => {
                  setIsQuotaOpen(!isQuotaOpen);
                  setActiveDropdown(null);
                }}
                className="flex items-center gap-2 text-sm text-brand-900/80 hover:text-brand-900 font-medium transition-colors bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/60 shadow-sm hover:bg-white/60"
              >
                <User className="h-4 w-4" />
                {quota}
                <ChevronDown className="h-3 w-3" />
              </button>
              
              {/* Quota Dropdown */}
              <AnimatePresence>
                {isQuotaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden z-50"
                  >
                    {quotas.map((q) => (
                      <div 
                        key={q}
                        onClick={() => {
                          setQuota(q);
                          setIsQuotaOpen(false);
                        }}
                        className="px-4 py-3 hover:bg-brand-50 cursor-pointer flex items-center justify-between text-sm font-medium text-slate-700 transition-colors"
                      >
                        {q}
                        {quota === q && <Check className="h-4 w-4 text-brand-600" />}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <label className="flex items-center gap-2 text-sm font-medium text-brand-900/80 cursor-pointer hover:text-brand-900 transition-colors bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/60 shadow-sm hover:bg-white/60">
              <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500 bg-white border-brand-200" />
              Railway Pass Concession
            </label>
            <label className="flex items-center gap-2 text-sm font-medium text-brand-900/80 cursor-pointer hover:text-brand-900 transition-colors bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/60 shadow-sm hover:bg-white/60">
              <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500 bg-white border-brand-200" />
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
