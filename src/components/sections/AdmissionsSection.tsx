import React, { useState } from 'react';
import { ADMISSION_STEPS, TIS_META } from '../../data/tisData';
import { RevealOnScroll } from '../animation/RevealOnScroll';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Sparkles, Phone, Mail, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AdmissionsSectionProps {
  onOpenTour: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onOpenTour }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    grade: 'Class IX',
    state: 'Delhi NCR',
    otp: '',
    consent: true,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSendOtp = () => {
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setOtpSent(true);
    setTimeout(() => {
      setFormData(prev => ({ ...prev, otp: '8492' }));
      setOtpVerified(true);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#b90124', '#c09d59', '#007a83'],
      });
    } catch {
      // Fallback
    }
  };

  return (
    <section id="admissions" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#b90124]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <RevealOnScroll direction="down">
            <Badge variant="crimson" size="md">
              <Sparkles className="w-3.5 h-3.5 text-[#b90124]" />
              <span>Admissions Session 2025–2026</span>
            </Badge>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Begin Your Journey to Excellence
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.15}>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Admissions are open for boarding and day scholars from <strong>Class IV to IX and Class XI</strong>. Our simple 4-step admission framework guarantees transparent, merit-grounded entry.
            </p>
          </RevealOnScroll>
        </div>

        {/* 4 Steps Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 text-left">
          {ADMISSION_STEPS.map((step, index) => (
            <RevealOnScroll key={step.step} direction="up" delay={index * 0.1}>
              <div className="h-full bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#c09d59] transition-all duration-300 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="text-3xl font-black font-serif text-[#b90124] dark:text-rose-400">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#c09d59] mt-0.5">
                      {step.subtitle}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-medium text-slate-400">
                  Step {index + 1} of 4
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* High Converting Fast Application Form & Helpline Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-16 text-left">
          {/* Left Column: Direct Helpline & Trust */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl space-y-6">
            <div className="space-y-3">
              <Badge variant="gold" size="sm">
                Direct Admissions Desk
              </Badge>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Speak With An Admissions Dean
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Have specific queries regarding hostel room allocation, CBSE subject combinations, or scholarships? Our admissions office is ready to guide you.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-sm text-slate-200">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400">Toll-Free Helpline</div>
                  <a href={`tel:${TIS_META.helpline}`} className="font-bold text-base hover:text-amber-300">
                    {TIS_META.helpline}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400">Direct Admissions Email</div>
                  <a href={`mailto:${TIS_META.email}`} className="font-medium hover:text-amber-300">
                    {TIS_META.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Ragging Tolerance • 24/7 Monitored Campus</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Merit-based scholarships available for sports champions</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="md"
              onClick={onOpenTour}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white border-slate-700"
            >
              Plan An On-Campus Visit
            </Button>
          </div>

          {/* Right Column: Embedded Interactive Application Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                  Application Successfully Registered!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you, <strong>{formData.parentName}</strong>. Our Dehradun admissions team will contact you on <strong>{formData.phone}</strong> within 2 hours with the syllabus and prospectus for <strong>{formData.grade}</strong>.
                </p>
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => {
                    setSubmitted(false);
                    setOtpSent(false);
                    setOtpVerified(false);
                  }}
                  className="mt-4"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                    Quick Admission Application 2025–26
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Fill this quick form to reserve an aptitude slot and receive the digital prospectus.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={e => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Vikramaditya Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Number (10 Digits) *
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="9837983791"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59]"
                      />
                      {!otpVerified && (
                        <button
                          type="button"
                          onClick={handleSendOtp}
                          className="shrink-0 px-3 py-2 text-xs font-semibold rounded-xl bg-[#007a83] hover:bg-[#00656d] text-white transition-colors"
                        >
                          {otpSent ? 'Resend' : 'Send OTP'}
                        </button>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Grade Applying For *
                    </label>
                    <select
                      value={formData.grade}
                      onChange={e => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59]"
                    >
                      <option value="Class IV">Class IV (Middle Gurukul)</option>
                      <option value="Class V">Class V</option>
                      <option value="Class VI">Class VI</option>
                      <option value="Class VII">Class VII</option>
                      <option value="Class VIII">Class VIII</option>
                      <option value="Class IX">Class IX (CBSE Foundation)</option>
                      <option value="Class X">Class X</option>
                      <option value="Class XI - Science">Class XI - Science</option>
                      <option value="Class XI - Commerce">Class XI - Commerce</option>
                      <option value="Class XI - Humanities">Class XI - Humanities</option>
                      <option value="Class XII">Class XII</option>
                    </select>
                  </div>
                </div>

                {otpSent && (
                  <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/50 flex items-center justify-between text-xs">
                    <span className="text-teal-800 dark:text-teal-300 font-medium">
                      {otpVerified ? '✓ Verified Mobile (Auto-OTP: 8492)' : 'Simulating OTP delivery...'}
                    </span>
                    <span className="text-teal-600 dark:text-teal-400 font-mono font-bold">
                      {formData.otp || 'Sending...'}
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="section-consent"
                    checked={formData.consent}
                    onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                    required
                    className="mt-1 rounded border-slate-300 text-[#b90124] focus:ring-[#b90124]"
                  />
                  <label htmlFor="section-consent" className="text-xs text-slate-600 dark:text-slate-400">
                    I agree to receive communications from Tula's International School regarding my application.
                  </label>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="xl"
                    className="w-full"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Submit Application & Secure Prospectus
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
