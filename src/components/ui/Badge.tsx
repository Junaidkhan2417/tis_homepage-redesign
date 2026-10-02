import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'crimson' | 'teal' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
  dot = true,
}) => {
  const variantStyles = {
    gold: 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/25',
    crimson: 'bg-[#b90124]/10 text-[#b90124] dark:text-rose-300 border-[#b90124]/25',
    teal: 'bg-[#007a83]/10 text-[#007a83] dark:text-teal-300 border-[#007a83]/25',
    neutral: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700',
    outline: 'bg-transparent text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700',
  };

  const dotColors = {
    gold: 'bg-amber-500',
    crimson: 'bg-[#b90124]',
    teal: 'bg-[#007a83]',
    neutral: 'bg-slate-400',
    outline: 'bg-amber-400',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-xs md:text-sm px-3.5 py-1 gap-2',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border shadow-xs tracking-wide backdrop-blur-xs transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant]}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};
