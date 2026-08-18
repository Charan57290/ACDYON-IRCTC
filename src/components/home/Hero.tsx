import { motion } from 'framer-motion';
import { BookingSearch } from '../booking/BookingSearch';

export function Hero() {
  return (
    <div className="relative w-full">
      {/* Scoped Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div className="sticky top-0 h-[100vh] w-full overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover object-center scale-[1.15]"
          >
            <source src="/acdyon.mp4" type="video/mp4" />
          </video>
          {/* Dark/Gradient Overlay */}
          <div className="absolute inset-0 bg-brand-950/60 bg-gradient-to-t from-brand-950/90 via-brand-950/50 to-transparent" />
        </div>
      </div>

      {/* Hero Content */}
      <div id="search" className="relative z-20 pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 drop-shadow-lg"
          >
            Your journey starts with a <span className="text-accent-400">simpler search.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-brand-100 mb-8 font-medium drop-shadow-md"
          >
            Find and plan your train travel with less friction. Clear availability, instant results, and a seamless booking experience.
          </motion.p>
        </div>

        {/* The interactive booking search card */}
        <div className="max-w-4xl mx-auto">
          <BookingSearch />
        </div>
      </div>
      </div>
    </div>
  );
}
