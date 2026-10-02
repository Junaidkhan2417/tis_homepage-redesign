import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAMPUS_FACILITIES, type Facility } from '../../data/tisData';
import { RevealOnScroll } from '../animation/RevealOnScroll';
import { Badge } from '../ui/Badge';
import { Eye, MapPin, Sparkles, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface CampusTourSectionProps {
  onOpenTour: () => void;
}

export const CampusTourSection: React.FC<CampusTourSectionProps> = ({ onOpenTour }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const categories = [
    { id: 'all', label: 'All Campus Highlights' },
    { id: 'academic', label: 'Academic & Smart Labs' },
    { id: 'sports', label: 'Sports Complex & Arenas' },
    { id: 'residential', label: 'Hostels & Annapurna Mess' },
    { id: 'culture', label: 'Arts & Kala Kendra' },
  ];

  const filteredFacilities =
    activeCategory === 'all'
      ? CAMPUS_FACILITIES
      : CAMPUS_FACILITIES.filter(f => f.category === activeCategory);

  return (
    <section id="campus" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <RevealOnScroll direction="down">
            <Badge variant="teal" size="md">
              <Sparkles className="w-3.5 h-3.5 text-teal-500" />
              <span>22-Acre Himalayan Sanctuary</span>
            </Badge>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              World-Class Infrastructure
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.15}>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore our state-of-the-art academic complexes, SIEMENS-powered innovation labs, Olympic-grade sports zones, and serene residential facilities in Dehradun.
            </p>
          </RevealOnScroll>
        </div>

        {/* Filter Pills */}
        <RevealOnScroll direction="up" delay={0.2} className="my-10">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {categories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#007a83] to-[#60bab1] text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Facilities Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <AnimatePresence>
            {filteredFacilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedFacility(facility)}
                className="group cursor-pointer bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                data-cursor="view"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px]">
                      <Eye className="w-3.5 h-3.5 text-amber-300" /> Click to Inspect
                    </span>
                    <span className="bg-[#b90124] px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {facility.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#b90124] dark:group-hover:text-rose-400 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                      {facility.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-[#007a83] dark:text-teal-300">
                    {facility.specs}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Live Tour Booking CTA */}
        <div className="mt-14 text-center">
          <Button
            variant="gold"
            size="lg"
            onClick={onOpenTour}
            icon={<MapPin className="w-4 h-4" />}
          >
            Book Personalized 1-on-1 Campus Tour
          </Button>
        </div>
      </div>

      {/* Facility Lightbox Modal */}
      <AnimatePresence>
        {selectedFacility && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFacility(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              role="dialog"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-200 dark:border-slate-800 text-left"
            >
              <div className="relative aspect-[16/9] w-full">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                    {selectedFacility.title}
                  </h3>
                  <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#007a83]/15 text-[#007a83] dark:text-teal-300">
                    {selectedFacility.category}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedFacility.description}
                </p>

                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Facility Specs: {selectedFacility.specs}</span>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <Button variant="outline" size="md" onClick={() => setSelectedFacility(null)}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => {
                      setSelectedFacility(null);
                      onOpenTour();
                    }}
                  >
                    Schedule Physical Visit
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
