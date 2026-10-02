import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Modal } from './Modal';
import { Button } from './Button';
import { CheckCircle2, Phone, Sparkles, Send } from 'lucide-react';
import { TIS_META } from '../../data/tisData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGrade?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultGrade = 'Class IX',
}) => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    grade: defaultGrade,
    state: 'Uttarakhand',
    otp: '',
    consent: true,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSendOtp = () => {
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setOtpSent(true);
    // Simulating auto-fill or OTP notification
    setTimeout(() => {
      setFormData(prev => ({ ...prev, otp: '7842' }));
      setOtpVerified(true);
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Trigger festive celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#b90124', '#c09d59', '#007a83'],
        });
      } catch {
        // Fallback gracefully
      }
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setOtpSent(false);
    setOtpVerified(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={isSuccess ? "Application Received!" : "Admissions Inquiry 2025–26"}
      subtitle={
        isSuccess
          ? "Welcome to the TIS Gurukul journey."
          : "Secure your child's seat at India's premier residential Gurukul in Dehradun."
      }
      maxWidth="max-w-xl"
    >
      {isSuccess ? (
        <div className="text-center py-6 space-y-5">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              Thank You, {formData.parentName || 'Parent'}!
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto">
              Our Admissions Counselor has received your inquiry for{' '}
              <strong className="text-[#b90124] dark:text-rose-400">
                {formData.studentName || 'your child'} ({formData.grade})
              </strong>
              . You will receive an SMS and a personalized prospectus on{' '}
              <span className="font-semibold">{formData.phone}</span> within 2 hours.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-left space-y-1.5 text-xs text-amber-900 dark:text-amber-200">
            <p className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" /> Reference Application ID: TIS-2025-
              {Math.floor(100000 + Math.random() * 900000)}
            </p>
            <p>Direct Admissions Desk: {TIS_META.helpline}</p>
            <p>Campus Address: Chakrata Road, Dhoolkot, Dehradun</p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="gold"
              onClick={handleReset}
            >
              Done & Explore More
            </Button>
            <a
              href={`tel:${TIS_META.helpline}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#b90124]" /> Call Admissions Desk
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Parent / Guardian Name *
              </label>
              <input
                type="text"
                required
                value={formData.parentName}
                onChange={e => setFormData({ ...formData, parentName: e.target.value })}
                placeholder="e.g. Rajesh Sharma"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Student Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.studentName}
                onChange={e => setFormData({ ...formData, studentName: e.target.value })}
                placeholder="e.g. Aarav Sharma"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="parent@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59]"
              />
            </div>

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
                  placeholder="9876543210"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59]"
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
          </div>

          {otpSent && (
            <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/50 flex items-center justify-between text-xs">
              <span className="text-teal-800 dark:text-teal-300 font-medium">
                {otpVerified ? '✓ Mobile Verified (OTP Auto-checked: 7842)' : 'Simulating OTP delivery...'}
              </span>
              <span className="text-teal-600 dark:text-teal-400 font-mono font-bold">
                {formData.otp || 'Sending...'}
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Seeking Admission In *
              </label>
              <select
                value={formData.grade}
                onChange={e => setFormData({ ...formData, grade: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59]"
              >
                <option value="Class IV">Class IV (Middle Gurukul)</option>
                <option value="Class V">Class V</option>
                <option value="Class VI">Class VI</option>
                <option value="Class VII">Class VII</option>
                <option value="Class VIII">Class VIII</option>
                <option value="Class IX">Class IX (CBSE Foundation)</option>
                <option value="Class X">Class X</option>
                <option value="Class XI - Science">Class XI - Science (JEE/NEET Integrated)</option>
                <option value="Class XI - Commerce">Class XI - Commerce</option>
                <option value="Class XI - Humanities">Class XI - Humanities</option>
                <option value="Class XII">Class XII (Lateral Entry)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                State / Country *
              </label>
              <select
                value={formData.state}
                onChange={e => setFormData({ ...formData, state: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59]"
              >
                <option value="Uttarakhand">Uttarakhand (Host State)</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Haryana">Haryana</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Bihar">Bihar</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="International / NRI">International / NRI Student</option>
              </select>
            </div>
          </div>

          <div className="flex items-start gap-2.5 pt-2">
            <input
              type="checkbox"
              id="tis-consent"
              checked={formData.consent}
              onChange={e => setFormData({ ...formData, consent: e.target.checked })}
              required
              className="mt-1 rounded border-slate-300 text-[#b90124] focus:ring-[#b90124]"
            />
            <label htmlFor="tis-consent" className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              I agree to receive the official TIS 2025–26 prospectus, fee structure, and admissions schedule via WhatsApp & SMS.
            </label>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
              icon={<Send className="w-4 h-4" />}
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Inquiry & Download Prospectus'}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
