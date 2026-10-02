import React from 'react';
import { RevealOnScroll } from '../animation/RevealOnScroll';
import { Badge } from '../ui/Badge';
import { Home, Utensils, HeartPulse, ShieldCheck, Mountain, Users, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface BoardingLifeSectionProps {
  onOpenTour: () => void;
  onOpenInquiry: () => void;
}

export const BoardingLifeSection: React.FC<BoardingLifeSectionProps> = ({ onOpenTour, onOpenInquiry }) => {
  const highlights = [
    {
      icon: <Users className="w-5 h-5 text-[#b90124]" />,
      title: 'Pastoral Care & Housemasters',
      description: 'Each boarding house is nurtured by resident Housemasters and Matrons who act as surrogate parents, tracking each child’s emotional and academic welfare.',
      tag: '24/7 Family Environment',
    },
    {
      icon: <Utensils className="w-5 h-5 text-amber-500" />,
      title: 'Annapurna Organic Dining',
      description: 'Four freshly prepared hot meals daily designed by certified nutritionists. Pure vegetarian and wholesome protein dishes sourced from local organic valley farms.',
      tag: 'HACCP Hygiene Certified',
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-rose-500" />,
      title: 'On-Campus Medical Infirmary',
      description: '4-bed dedicated campus medical clinic staffed 24/7 with qualified resident nurses, attending doctors, and an emergency ambulance on standby.',
      tag: 'Immediate Care Ready',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: '3-Tier Gated Campus Security',
      description: '22-acre campus fortified with biometric check-in, 100+ high-definition CCTV cameras, night patrols, and strict visitor verification protocols.',
      tag: '100% Secure Sanctuary',
    },
    {
      icon: <Mountain className="w-5 h-5 text-[#007a83]" />,
      title: 'Himalayan Weekend Treks',
      description: 'Weekend camping, rafting on the Ganges, nature trails in Mussoorie, stargazing club, and community service projects across Garhwal villages.',
      tag: 'Experiential Growth',
    },
    {
      icon: <Home className="w-5 h-5 text-indigo-500" />,
      title: 'Air-Conditioned Modern Suites',
      description: 'Comfortable, well-ventilated shared rooms with private ergonomic study tables, spacious wardrobes, and dedicated recreational common rooms.',
      tag: 'Peaceful Rest & Study',
    },
  ];

  return (
    <section id="boarding" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <RevealOnScroll direction="down">
            <Badge variant="gold" size="md">
              Pastoral Care • Home Away From Home
            </Badge>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Life at the TIS Gurukul
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.15}>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Living on campus is a masterclass in independence, camaraderie, and character. We ensure every boy and girl thrives in an affectionate, structured, and joyful community.
            </p>
          </RevealOnScroll>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 text-left">
          {highlights.map((item, idx) => (
            <RevealOnScroll key={item.title} direction="up" delay={idx * 0.08}>
              <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#b90124] dark:group-hover:text-rose-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-xs font-semibold text-[#007a83] dark:text-teal-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Learn about pastoral routine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Call to Action Banner */}
        <RevealOnScroll direction="up" delay={0.25} className="mt-16">
          <div className="bg-gradient-to-r from-[#b90124] to-[#800018] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Experience A Day As A TIS Boarder
              </h3>
              <p className="text-sm sm:text-base text-rose-100 leading-relaxed">
                We invite prospective parents and students to visit our campus in Dehradun, dine with our students, and interact directly with Housemasters.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <Button
                variant="gold"
                size="lg"
                onClick={onOpenTour}
              >
                Schedule Experience Day
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onOpenInquiry}
                className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white"
              >
                Inquire For Admissions
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
