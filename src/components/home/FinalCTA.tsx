
export function FinalCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-brand-950 mb-6">Ready to plan your next journey?</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Experience a simpler, faster way to search and book train tickets across the country.
        </p>
        <button 
          onClick={scrollToTop}
          className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-premium hover:-translate-y-1"
        >
          Search Trains Now
        </button>
      </div>
    </section>
  );
}
