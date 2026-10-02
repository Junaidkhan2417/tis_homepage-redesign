import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Sparkles } from 'lucide-react';
import { TIS_META } from '../../data/tisData';

interface FloatingActionsProps {
  onOpenInquiry: () => void;
}

export const FloatingQuickActions: React.FC<FloatingActionsProps> = ({ onOpenInquiry }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${TIS_META.helpline}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#b90124]" />
          <span>Call Helpline</span>
        </a>

        <button
          type="button"
          onClick={onOpenInquiry}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#b90124] to-[#99001b] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-[#b90124]/30"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Enquire Now</span>
        </button>

        <a
          href="https://wa.me/919837983791?text=Hello%20Tulas%20International%20School,%20I%20would%20like%20to%20inquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp admissions chat"
          className="p-2.5 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>

      {/* Desktop Floating Right-Side Widgets */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-none">
        {/* WhatsApp Chat Floating Button */}
        <a
          href="https://wa.me/919837983791?text=Hello%20Tulas%20International%20School,%20I%20would%20like%20to%20inquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="pointer-events-auto p-3.5 rounded-full bg-[#25d366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl hover:scale-108 transition-all flex items-center justify-center group"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap pl-0 group-hover:pl-2 text-xs font-bold">
            Chat with Counselor
          </span>
        </a>

        {/* Floating Fast Inquiry Trigger */}
        <button
          type="button"
          onClick={onOpenInquiry}
          className="pointer-events-auto px-4 py-3 rounded-full bg-gradient-to-r from-[#b90124] to-[#99001b] hover:from-[#a0001e] hover:to-[#830017] text-white shadow-lg shadow-[#b90124]/30 hover:scale-105 transition-all flex items-center gap-2 text-xs font-bold border border-white/20"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Apply 2025–26</span>
        </button>

        {/* Back to top button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="pointer-events-auto p-3 rounded-full bg-slate-800/90 hover:bg-slate-900 text-white dark:bg-slate-700/90 dark:hover:bg-slate-600 shadow-md hover:scale-108 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
};
