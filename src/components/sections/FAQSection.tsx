import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../../data/tisData';
import { RevealOnScroll } from '../animation/RevealOnScroll';
import { Badge } from '../ui/Badge';
import { ChevronDown, HelpCircle, Phone, Search } from 'lucide-react';
import { TIS_META } from '../../data/tisData';

interface FAQSectionProps {
  onOpenInquiry: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenInquiry }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'boarding', label: 'Boarding & Safety' },
    { id: 'academics', label: 'Academics & JEE' },
    { id: 'sports', label: '16+ Sports' },
  ];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <RevealOnScroll direction="down">
            <Badge variant="gold" size="md">
              <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
              <span>Got Questions? We Have Answers</span>
            </Badge>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.15}>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Everything you need to know about boarding life, CBSE admissions, safety protocols, and the Modern Gurukul experience.
            </p>
          </RevealOnScroll>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="mt-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g. medical, sports, coaching, fee)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59] shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                      : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion List */}
        <div className="mt-8 space-y-3 text-left">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
              <p className="text-sm text-slate-500">
                No matching questions found for "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={onOpenInquiry}
                className="mt-3 text-xs font-bold text-[#b90124] underline"
              >
                Ask our Admissions Dean directly
              </button>
            </div>
          ) : (
            filteredFaqs.map(faq => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleOpen(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <span className="font-serif font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-slate-400"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Direct Counselor Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-amber-500/10 border border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white">
              Still have questions about our Dehradun boarding campus?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
              Speak directly with an admissions mentor: {TIS_META.helpline}
            </p>
          </div>

          <a
            href={`tel:${TIS_META.helpline}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#b90124] hover:bg-[#a0001e] text-white text-xs font-bold shadow-md transition-colors shrink-0"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
};
