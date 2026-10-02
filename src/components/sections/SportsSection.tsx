import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPORTS_LIST } from '../../data/tisData';
import { RevealOnScroll } from '../animation/RevealOnScroll';
import { Badge } from '../ui/Badge';
import { Trophy, Compass, Shield } from 'lucide-react';

export const SportsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 16+ Sports' },
    { id: 'precision', label: 'Archery & Shooting' },
    { id: 'equestrian', label: 'Horse Riding & Polo' },
    { id: 'aquatic', label: 'Swimming & Water Sports' },
    { id: 'court', label: 'Tennis, Squash & Badminton' },
    { id: 'field', label: 'Cricket & Football' },
  ];

  const filteredSports =
    filter === 'all'
      ? SPORTS_LIST
      : SPORTS_LIST.filter(sport => sport.category === filter);

  return (
    <section id="sports" className="py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(185,1,36,0.15),_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(192,157,89,0.1),_transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header with Official School Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <RevealOnScroll direction="down">
            <Badge variant="crimson" size="md">
              <Trophy className="w-3.5 h-3.5 text-rose-400" />
              <span>Olympic Sporting Culture</span>
            </Badge>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Sports? It’s not just a facility. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-teal-300">
                At Tulas, it’s the foundation!
              </span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.15}>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              16+ sports disciplines curated to cultivate mental resilience, tactical clarity, and lifelong physical vigor in the invigorating Himalayan air.
            </p>
          </RevealOnScroll>
        </div>

        {/* Category Pill Filters */}
        <RevealOnScroll direction="up" delay={0.2} className="my-10">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {categories.map(cat => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#b90124] to-[#c09d59] text-white shadow-lg shadow-rose-950/40'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Sports Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
          <AnimatePresence>
            {filteredSports.map((sport, index) => (
              <motion.div
                key={sport.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="group relative rounded-3xl overflow-hidden bg-slate-800/60 border border-slate-700/80 shadow-lg hover:border-[#c09d59] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Badge */}
                  {sport.badge && (
                    <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 shadow-md">
                      {sport.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {sport.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {sport.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-teal-300">
                      <Compass className="w-3.5 h-3.5" />
                      {sport.facility}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Shield className="w-3 h-3 text-amber-400" /> NIS Coaches
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
