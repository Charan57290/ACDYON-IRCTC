import { Train, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-200 py-12 border-t border-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="bg-brand-800 p-2 rounded-lg">
                <Train className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">TrackSync</span>
            </div>
            <p className="text-brand-300 max-w-sm mb-6 leading-relaxed">
              A premium redesign concept focusing on clarity, speed, and usability for train travel planning.
            </p>
            <div className="p-4 bg-brand-900 rounded-xl border border-brand-800">
              <p className="text-xs text-brand-400 font-medium">
                DISCLAIMER: This is a frontend design concept. It is not affiliated with, endorsed by, or connected to the official IRCTC platform. No real bookings can be made.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Search Trains</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PNR Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seat Availability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation Rules</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Status</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-brand-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} TrackSync Design Concept. All rights reserved.
          </p>
          <p className="text-sm flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-current" /> for the Build It Like You Mean It assignment.
          </p>
        </div>
      </div>
    </footer>
  );
}
