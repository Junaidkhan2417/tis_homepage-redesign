import React, { useState } from 'react';
import { Phone, Mail, Menu, X, ArrowRight, Award } from 'lucide-react';
import { NAV_ITEMS, TIS_META } from '../../data/tisData';
import { AnimatedThemeToggle } from '../animation/AnimatedThemeToggle';
import { Button } from '../ui/Button';
import { useScrollProgress } from '../../hooks/useScrollProgress';

interface NavbarProps {
  onOpenInquiry: (grade?: string) => void;
  onOpenTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onOpenTour }) => {
  const { isScrolled, activeSection } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Admissions Announcement Bar */}
      <div className="bg-[#b90124] text-white text-xs py-2 px-4 sm:px-8 flex items-center justify-between border-b border-rose-900/40">
        <div className="flex items-center gap-4 sm:gap-6 mx-auto sm:mx-0">
          <a
            href={`tel:${TIS_META.helpline}`}
            className="flex items-center gap-1.5 hover:text-amber-200 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Admissions Helpline:</span>
            <span>{TIS_META.helpline}</span>
          </a>

          <a
            href={`mailto:${TIS_META.email}`}
            className="hidden md:flex items-center gap-1.5 hover:text-amber-200 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{TIS_META.email}</span>
          </a>

          <span className="hidden lg:inline-flex items-center gap-1 text-amber-200">
            <Award className="w-3.5 h-3.5" />
            <span>CBSE Affiliated No. {TIS_META.affiliationNo}</span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <span className="text-[11px] text-rose-100 bg-rose-900/60 px-2.5 py-0.5 rounded-full border border-rose-500/30">
            Admissions Open 2025–26 (Grades IV – XII)
          </span>
          <button
            onClick={onOpenTour}
            className="text-xs font-semibold text-amber-200 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
          >
            Campus Visit
          </button>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav
        className={`px-4 sm:px-8 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800'
            : 'py-4 bg-white/70 dark:bg-slate-950/70 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            {/* Crest Emblem */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#b90124] to-[#800018] p-0.5 shadow-md flex items-center justify-center shrink-0 border border-amber-400/40 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-[10px] bg-white dark:bg-slate-900 flex items-center justify-center font-serif font-black text-[#b90124] text-base tracking-tighter">
                TIS
              </div>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-[#b90124] transition-colors leading-none">
                Tula's International School
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-[#c09d59] uppercase mt-0.5">
                The Modern Gurukul • Dehradun
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map(item => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-all relative py-1 ${
                    isActive
                      ? 'text-[#b90124] dark:text-rose-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-[#b90124] dark:hover:text-rose-400'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b90124] dark:bg-rose-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Elements */}
          <div className="flex items-center gap-3">
            {/* Dark/Light Animated Theme Switcher */}
            <AnimatedThemeToggle />

            {/* Desktop Apply CTA */}
            <Button
              variant="primary"
              size="md"
              className="hidden sm:inline-flex"
              onClick={() => onOpenInquiry()}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Apply Now
            </Button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 text-left">
            {NAV_ITEMS.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 dark:text-slate-100 hover:text-[#b90124] dark:hover:text-rose-400 flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-3">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
              >
                Apply for 2025–26 Session
              </Button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTour();
                }}
                className="w-full py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-center"
              >
                Schedule Campus Tour
              </button>

              <div className="text-xs text-slate-500 dark:text-slate-400 text-center pt-2">
                Helpline: <a href={`tel:${TIS_META.helpline}`} className="font-bold text-[#b90124]">{TIS_META.helpline}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
