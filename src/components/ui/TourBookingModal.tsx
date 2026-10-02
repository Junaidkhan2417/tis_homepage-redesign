import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { Calendar, Clock, MapPin, CheckCircle, Video } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TourBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TourBookingModal: React.FC<TourBookingModalProps> = ({ isOpen, onClose }) => {
  const [tourType, setTourType] = useState<'campus' | 'virtual'>('campus');
  const [date, setDate] = useState('2025-04-12');
  const [slot, setSlot] = useState('10:30 AM – Morning Session');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#c09d59', '#007a83', '#b90124'],
      });
    } catch {
      // Fallback
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={isSuccess ? 'Tour Scheduled!' : 'Book an Experience Day'}
      subtitle={
        isSuccess
          ? 'We look forward to hosting your family.'
          : 'Experience the 22-acre scenic campus, meet our Gurus, and dine in our organic mess.'
      }
      maxWidth="max-w-lg"
    >
      {isSuccess ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 mx-auto flex items-center justify-center">
            <CheckCircle className="w-10 h-10" />
          </div>

          <h4 className="text-xl font-bold text-slate-900 dark:text-white">
            {tourType === 'campus' ? 'On-Campus Visit Confirmed' : 'Live Virtual Tour Scheduled'}
          </h4>

          <p className="text-sm text-slate-600 dark:text-slate-300">
            A confirmation pass and Google Maps navigation invite have been sent to{' '}
            <strong className="text-[#007a83] dark:text-teal-300">{phone}</strong>.
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-left text-xs space-y-2 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            <p className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#c09d59]" /> Date: {date}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c09d59]" /> Time: {slot}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#b90124]" /> Venue: TIS Main Reception, Selaqui, Dehradun
            </p>
          </div>

          <Button variant="gold" onClick={handleReset} className="w-full mt-4">
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Toggle Tour Type */}
          <div className="grid grid-cols-2 gap-3 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setTourType('campus')}
              className={`flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-xl transition-all ${
                tourType === 'campus'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <MapPin className="w-4 h-4 text-[#b90124]" /> On-Campus Visit
            </button>
            <button
              type="button"
              onClick={() => setTourType('virtual')}
              className={`flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-xl transition-all ${
                tourType === 'virtual'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Video className="w-4 h-4 text-[#007a83]" /> 1-on-1 Virtual Tour
            </button>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Parent Full Name *
            </label>
            <input
              type="text"
              required
              value={parentName}
              onChange={e => setParentName(e.target.value)}
              placeholder="e.g. Suman Sengupta"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Contact Number *
            </label>
            <input
              type="tel"
              required
              maxLength={10}
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="9812345678"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Date *
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={e => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Time Slot *
              </label>
              <select
                value={slot}
                onChange={e => setSlot(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#c09d59]"
              >
                <option value="10:00 AM – Morning Session">10:00 AM – Morning Session</option>
                <option value="11:30 AM – Academic Tour">11:30 AM – Academic Tour</option>
                <option value="02:30 PM – Afternoon Session">02:30 PM – Afternoon Session</option>
                <option value="04:00 PM – Sports & Stables Tour">04:00 PM – Sports & Stables Tour</option>
              </select>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200">
            💡 <strong>Special Courtesy:</strong> Complimentary campus lunch in our Annapurna organic dining hall is included for all visiting families.
          </div>

          <div className="pt-2">
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Confirm Campus Tour Booking
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
