import React from 'react';
import { MapPin, Phone, Mail, Award, Shield, Heart, ArrowUpRight } from 'lucide-react';
import { TIS_META, NAV_ITEMS } from '../../data/tisData';

interface FooterProps {
  onOpenInquiry: () => void;
  onOpenTour: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onOpenTour }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#b90124]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c09d59]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: School Identity */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#b90124] to-[#800018] p-0.5 shadow-md flex items-center justify-center shrink-0 border border-amber-400/40">
                <div className="w-full h-full rounded-[10px] bg-slate-900 flex items-center justify-center font-serif font-black text-[#c09d59] text-lg">
                  TIS
                </div>
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl text-white tracking-tight">
                  Tula's International School
                </h3>
                <p className="text-xs text-amber-400/90 tracking-widest uppercase font-medium">
                  The Modern Gurukul • Dehradun
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Established in 2012 under Rishabh Educational Trust, TIS is a top-ranked CBSE co-ed boarding school combining ancient Gurukul mentorship with contemporary global excellence, 16+ sports, and holistic character building.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-300">
                <Award className="w-3.5 h-3.5 text-amber-400" /> CBSE Affiliated ({TIS_META.affiliationNo})
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-emerald-300">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> 22+ Acres Safe Campus
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Admissions & Life */}
          <div className="text-left space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Admissions 2025–26
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenInquiry}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Online Application Form
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTour}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Book Campus Visit Day
                </button>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-300 transition-colors">
                  CBSE Curriculum & Labs
                </a>
              </li>
              <li>
                <a href="#sports" className="hover:text-amber-300 transition-colors">
                  16+ Olympic Sports
                </a>
              </li>
              <li>
                <a href="#boarding" className="hover:text-amber-300 transition-colors">
                  Pastoral Care & Organic Dining
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-amber-300 transition-colors">
                  Parent Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus */}
          <div className="text-left space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Connect With Us
            </h4>

            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#b90124] shrink-0 mt-0.5" />
                <span>{TIS_META.address}</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${TIS_META.helpline}`} className="hover:text-white font-medium">
                  Helpline: {TIS_META.helpline}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Landline: {TIS_META.landlines.join(', ')}</span>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${TIS_META.email}`} className="hover:text-white">
                  {TIS_META.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Tula's International School, Dehradun. Managed by Rishabh Educational Trust. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <a href="#hero" className="hover:text-white transition-colors">
              Mandatory Public Disclosure
            </a>
            <span>•</span>
            <a href="#hero" className="hover:text-white transition-colors">
              CBSE Affiliation
            </a>
            <span>•</span>
            <a href="#hero" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              Nurturing <Heart className="w-3 h-3 text-[#b90124] fill-[#b90124]" /> in the Doon Valley
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
