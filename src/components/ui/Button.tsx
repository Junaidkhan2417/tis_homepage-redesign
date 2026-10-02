import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  glow = false,
  ...props
}) => {
  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#b90124] to-[#99001b] hover:from-[#a0001e] hover:to-[#830017] text-white shadow-md hover:shadow-lg shadow-[#b90124]/20 border border-white/10',
    secondary:
      'bg-[#007a83] hover:bg-[#00656d] text-white shadow-md shadow-[#007a83]/20 border border-white/10',
    gold:
      'bg-gradient-to-r from-[#dfc282] via-[#c09d59] to-[#a38038] hover:brightness-105 text-slate-950 font-semibold shadow-md shadow-[#c09d59]/25 border border-amber-300/40',
    outline:
      'bg-white/70 dark:bg-slate-900/70 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 shadow-xs hover:border-[#c09d59]',
    ghost:
      'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200',
  };

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2 font-medium',
    lg: 'text-base px-6 py-3 rounded-xl gap-2.5 font-semibold',
    xl: 'text-lg px-8 py-3.5 rounded-2xl gap-3 font-semibold',
  };

  const glowEffect = glow
    ? 'relative after:absolute after:inset-0 after:rounded-xl after:bg-[#b90124] after:blur-lg after:opacity-40 after:-z-10 hover:after:opacity-70 transition-all'
    : '';

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={`inline-flex items-center justify-center cursor-pointer transition-all duration-200 select-none ${variantStyles[variant]} ${sizeStyles[size]} ${glowEffect} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
};
