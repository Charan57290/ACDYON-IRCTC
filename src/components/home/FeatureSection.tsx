import { Search, CheckCircle2, Navigation } from 'lucide-react';

export function FeatureSection() {
  const features = [
    {
      title: "Smarter train discovery",
      description: "Find the best routes instantly with our optimized search engine. No more waiting or complex queries.",
      icon: Search,
    },
    {
      title: "Clear availability info",
      description: "See exact seat availability across all classes at a glance. Honest, real-time status updates.",
      icon: CheckCircle2,
    },
    {
      title: "Easy journey planning",
      description: "Compare durations, arrival times, and prices on a single screen without endless clicking.",
      icon: Navigation,
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-950 mb-4">A better way to book</h2>
          <p className="text-lg text-slate-600">
            We redesigned the experience to focus on what matters most: getting you to your destination with zero friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-brand-50 transition-colors">
              <div className="bg-brand-100 text-brand-600 p-4 rounded-2xl mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-950 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
