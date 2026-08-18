
export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Search your journey",
      desc: "Enter your stations and travel date."
    },
    {
      num: "02",
      title: "Compare trains",
      desc: "Review available classes and timings."
    },
    {
      num: "03",
      title: "Choose & book",
      desc: "Select your preferred seat and pay securely."
    }
  ];

  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-400 via-brand-900 to-brand-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Book in three simple steps</h2>
            <p className="text-brand-200 text-lg">We've removed the clutter so you can focus on your destination.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-brand-700"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center md:items-start">
              <div className="w-24 h-24 rounded-full bg-brand-800 border-4 border-brand-900 flex items-center justify-center text-3xl font-bold text-accent-400 mb-6 shadow-xl">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-left w-full">{step.title}</h3>
              <p className="text-brand-300 text-center md:text-left">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
