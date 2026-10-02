import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'highlight' | 'bordered';
  hoverEffect?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hoverEffect = true,
  className = '',
  ...props
}) => {
  const variantStyles = {
    default:
      'bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm',
    glass:
      'bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-white/40 dark:border-slate-800/80 shadow-md',
    highlight:
      'bg-gradient-to-b from-amber-500/5 to-transparent dark:from-amber-500/10 dark:to-transparent border border-amber-500/20 dark:border-amber-500/25 shadow-md',
    bordered:
      'bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-none',
  };

  const hoverAnimation = hoverEffect
    ? {
        whileHover: { y: -4, transition: { duration: 0.2 } },
      }
    : {};

  return (
    <motion.div
      {...hoverAnimation}
      className={`rounded-2xl overflow-hidden transition-all duration-200 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
