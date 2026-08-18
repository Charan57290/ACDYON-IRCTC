import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [method, setMethod] = useState<'options' | 'phone'>('options');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = () => {
    setTimeout(() => setMethod('options'), 300); // Reset after exit animation
    onClose();
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-950/40 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[101] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="bg-white w-full max-w-md rounded-3xl shadow-premium overflow-hidden relative pointer-events-auto"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="mx-auto w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h2 className="text-2xl font-bold text-brand-950 mb-2">Welcome aboard</h2>
                  <p className="text-slate-500">Create your account in seconds</p>
                </div>

                <AnimatePresence mode="wait">
                  {method === 'options' && (
                    <motion.div
                      key="options"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-3"
                    >
                      <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-3.5 rounded-xl font-medium transition-all shadow-subtle hover:shadow-md">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                        Continue with Google
                      </button>
                      <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-3.5 rounded-xl font-medium transition-all shadow-subtle hover:shadow-md">
                        <img src="https://www.svgrepo.com/show/475638/apple-color.svg" alt="Apple" className="w-5 h-5" />
                        Continue with Apple
                      </button>
                      
                      <div className="relative py-4 flex items-center">
                        <div className="flex-grow border-t border-slate-100"></div>
                        <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">or</span>
                        <div className="flex-grow border-t border-slate-100"></div>
                      </div>

                      <button
                        onClick={() => setMethod('phone')}
                        className="w-full flex items-center justify-center gap-3 bg-brand-50 hover:bg-brand-100 text-brand-700 px-4 py-3.5 rounded-xl font-medium transition-all"
                      >
                        <Smartphone className="w-5 h-5" />
                        Continue with Phone
                      </button>
                    </motion.div>
                  )}

                  {method === 'phone' && (
                    <motion.div
                      key="phone"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                        <div className="flex gap-2">
                          <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-600 font-medium flex items-center">
                            +91
                          </div>
                          <input
                            type="tel"
                            autoFocus
                            placeholder="Enter 10-digit number"
                            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent font-medium"
                          />
                        </div>
                      </div>
                      <button className="w-full bg-brand-600 hover:bg-brand-700 text-white px-4 py-3.5 rounded-xl font-semibold transition-all shadow-subtle">
                        Send OTP
                      </button>
                      <button
                        onClick={() => setMethod('options')}
                        className="w-full text-slate-500 hover:text-slate-700 text-sm font-medium py-2 transition-colors"
                      >
                        Back to options
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="mt-6 text-center text-xs text-slate-400">
                  By continuing, you agree to our{' '}
                  <a href="#" className="text-brand-600 hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-brand-600 hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
