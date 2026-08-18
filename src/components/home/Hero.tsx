import { BookingSearch } from '../booking/BookingSearch';

export function Hero() {
  return (
    <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-brand-50 -z-10" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-brand-100 rounded-l-[100px] opacity-50 -z-10 transform translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-950 tracking-tight leading-tight mb-6">
            Your journey starts with a <span className="text-brand-600">simpler search.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-700 mb-8">
            Find and plan your train travel with less friction. Clear availability, instant results, and a seamless booking experience.
          </p>
        </div>

        {/* The interactive booking search card */}
        <div className="max-w-4xl mx-auto">
          <BookingSearch />
        </div>
      </div>
    </div>
  );
}
