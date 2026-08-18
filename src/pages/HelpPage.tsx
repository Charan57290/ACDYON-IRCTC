import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HowItWorks } from '../components/home/HowItWorks';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Mail, MessageCircle, Phone, Search, ChevronRight } from 'lucide-react';

export function HelpPage() {
  const [activeCategory, setActiveCategory] = useState('All Topics');
  const categories = ['All Topics', 'Booking & Tickets', 'Cancellations', 'PNR & Status', 'Payments'];

  const faqs = [
    {
      category: "Booking & Tickets",
      q: "How do I book a train ticket?",
      a: "Simply use the search bar on the home page, select your stations and date, and click 'Search Trains'. You'll see a list of available trains where you can choose your preferred class and book instantly."
    },
    {
      category: "Booking & Tickets",
      q: "Can I book a ticket for someone else?",
      a: "Yes, you can book tickets for family and friends. Just make sure to enter their correct details as per their government ID during the passenger details step."
    },
    {
      category: "Cancellations",
      q: "Can I cancel my ticket?",
      a: "Yes, you can cancel your ticket up to 4 hours before the scheduled departure of the train. Cancellation charges apply as per the railway rules."
    },
    {
      category: "Cancellations",
      q: "How long does a refund take after cancellation?",
      a: "Refunds are typically processed within 3-5 business days and credited back to the original payment method used during booking."
    },
    {
      category: "PNR & Status",
      q: "How do I check my PNR status?",
      a: "Navigate to the 'PNR Status' page using the menu at the top. Enter your 10-digit PNR number to get live updates on your booking status and coach position."
    },
    {
      category: "Payments",
      q: "What payment methods are accepted?",
      a: "We accept all major Credit/Debit cards, UPI, Net Banking, and popular mobile wallets for secure and seamless transactions."
    }
  ];

  const filteredFaqs = activeCategory === 'All Topics' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-brand-50">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 relative isolate">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-subtle mb-6 text-brand-600"
          >
            <HelpCircle className="w-10 h-10" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-brand-950 mb-4"
          >
            How can we help?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Find answers to common questions, learn how to use our platform, or reach out to our support team.
          </motion.p>
          
          {/* Help Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto mt-10 relative"
          >
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-400 w-6 h-6" />
            <input 
              type="text" 
              placeholder="Search for articles, guides, or FAQs..." 
              className="w-full bg-white/80 backdrop-blur-md border border-white/60 focus:border-brand-300 shadow-premium rounded-2xl py-5 pl-16 pr-32 text-brand-950 font-medium focus:outline-none focus:ring-4 focus:ring-brand-500/20 transition-all text-lg"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-subtle hover:shadow-md">
              Search
            </button>
          </motion.div>
          
          {/* Help Categories */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mt-12">
            {categories.map((category, idx) => (
              <motion.button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className={`rounded-full px-6 py-3 font-semibold transition-all hover:shadow-md ${
                  activeCategory === category 
                    ? 'bg-brand-600 text-white shadow-brand-500/30' 
                    : 'bg-white/60 hover:bg-white backdrop-blur-sm border border-brand-100 hover:border-brand-300 text-brand-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* How it Works Section - Reused from Home but works great here */}
        <div className="mb-20">
          <HowItWorks />
        </div>

        {/* FAQ Section */}
        <div id="faq-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-32">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-brand-950">
              {activeCategory === 'All Topics' ? 'Frequently Asked Questions' : `${activeCategory} FAQs`}
            </h2>
            {activeCategory !== 'All Topics' && (
              <button 
                onClick={() => setActiveCategory('All Topics')}
                className="text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors"
              >
                View All
              </button>
            )}
          </div>
          <div className="space-y-6 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.map((faq, idx) => (
                <motion.div 
                  key={faq.q}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-200 hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 bg-brand-50 text-brand-600 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                        {faq.category}
                      </span>
                      <h3 className="text-xl font-semibold text-brand-900 mb-3 group-hover:text-brand-600 transition-colors">{faq.q}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">{faq.a}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-500 transition-colors flex-shrink-0 mt-8" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredFaqs.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white rounded-2xl border border-slate-100"
              >
                <p className="text-slate-500 text-lg">No frequently asked questions found for this category.</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Contact Support */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-premium">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-400 via-transparent to-transparent"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Still need help?</h2>
            <p className="text-brand-100 mb-10 max-w-2xl mx-auto relative z-10 text-lg">
              Our dedicated support team is available 24/7 to assist you with any queries regarding your train bookings or account.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <a href="#" className="flex flex-col items-center p-6 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl transition-colors border border-white/20">
                <MessageCircle className="w-8 h-8 mb-3 text-brand-200" />
                <span className="font-semibold">Live Chat</span>
                <span className="text-sm text-brand-200 mt-1">Available 24/7</span>
              </a>
              <a href="#" className="flex flex-col items-center p-6 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl transition-colors border border-white/20">
                <Phone className="w-8 h-8 mb-3 text-brand-200" />
                <span className="font-semibold">Call Us</span>
                <span className="text-sm text-brand-200 mt-1">1800-111-2222</span>
              </a>
              <a href="#" className="flex flex-col items-center p-6 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl transition-colors border border-white/20">
                <Mail className="w-8 h-8 mb-3 text-brand-200" />
                <span className="font-semibold">Email Support</span>
                <span className="text-sm text-brand-200 mt-1">support@tracksync.com</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
