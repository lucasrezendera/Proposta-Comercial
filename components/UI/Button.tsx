import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "font-display font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-dark-950 rounded-lg relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-orange-600 text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] border border-transparent hover:border-orange-400",
    outline: "bg-transparent border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      )}
    </button>
  );
};