import { Ticket, CalendarClock, IndianRupee, Map } from 'lucide-react';

export function UtilityTools() {
  const tools = [
    { name: "PNR Status", icon: Ticket, desc: "Check current waitlist status" },
    { name: "Train Schedule", icon: CalendarClock, desc: "Live running status & timetable" },
    { name: "Fare Calculator", icon: IndianRupee, desc: "Estimate ticket prices" },
    { name: "Station Info", icon: Map, desc: "Amenities and platform details" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-brand-950">More railway tools</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all cursor-pointer group">
              <div className="bg-brand-50 w-12 h-12 rounded-xl flex items-center justify-center text-brand-600 mb-4 group-hover:scale-110 transition-transform">
                <tool.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-brand-950 mb-1 group-hover:text-brand-600 transition-colors">{tool.name}</h3>
              <p className="text-sm text-slate-500">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
