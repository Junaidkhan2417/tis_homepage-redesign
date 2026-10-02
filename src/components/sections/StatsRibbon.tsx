import React from 'react';
import { SCHOOL_STATS } from '../../data/tisData';
import { AnimatedCounter } from '../animation/AnimatedCounter';
import { RevealOnScroll } from '../animation/RevealOnScroll';

export const StatsRibbon: React.FC = () => {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800/80">
          {SCHOOL_STATS.map((stat, idx) => (
            <RevealOnScroll
              key={stat.label}
              direction="up"
              delay={idx * 0.08}
              className={`text-center flex flex-col justify-center items-center ${
                idx > 0 && idx % 2 === 0 ? 'pt-4 lg:pt-0' : ''
              } ${idx > 0 ? 'lg:pl-4' : ''}`}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#b90124] dark:text-rose-400 font-serif tracking-tight">
                <AnimatedCounter
                  to={stat.value}
                  suffix={stat.suffix}
                  duration={1.8}
                />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 mt-1">
                {stat.label}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2 max-w-[150px]">
                {stat.description}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
