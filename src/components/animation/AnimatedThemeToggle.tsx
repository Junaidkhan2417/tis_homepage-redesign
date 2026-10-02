import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface AnimatedThemeToggleProps {
  className?: string;
}

export const AnimatedThemeToggle: React.FC<AnimatedThemeToggleProps> = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-between w-14 h-8 p-1 rounded-full border border-amber-500/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#c09d59] focus:ring-offset-2 ${
        isDark ? 'bg-slate-900 shadow-inner' : 'bg-amber-50/80 shadow-sm'
      } ${className}`}
    >
      {/* Background Icons */}
      <div className="w-full flex items-center justify-between px-1 text-xs select-none">
        <Sun className={`w-3.5 h-3.5 transition-colors ${isDark ? 'text-slate-500' : 'text-amber-500'}`} />
        <Moon className={`w-3.5 h-3.5 transition-colors ${isDark ? 'text-amber-300' : 'text-slate-400'}`} />
      </div>

      {/* Floating Animated Thumb */}
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gradient-to-tr from-[#b90124] to-[#c09d59] flex items-center justify-center text-white shadow-md pointer-events-none"
        animate={{
          x: isDark ? 24 : 0,
          rotate: isDark ? 360 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 450,
          damping: 25,
        }}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-amber-200" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-yellow-100" />
        )}
      </motion.div>
    </button>
  );
};
