import React from 'react';

const Button = ({ variant = 'primary', children, onClick, className = '' }) => {
  const baseStyle = "font-body font-semibold transition-all duration-300 ease-out inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "px-8 py-4 text-sm tracking-wide bg-gradient-to-r from-primary-glow to-primary rounded-xl text-black shadow-ambient hover:shadow-[0_0_32px_rgba(255,182,147,0.3)] hover:scale-[1.02]",
    secondary: "px-6 py-4 text-sm tracking-wide bg-transparent border border-outline-variant/30 text-primary rounded-xl hover:bg-surface-container-low hover:border-outline-variant/60",
    tertiary: "px-4 py-3 text-sm tracking-wide bg-transparent text-primary hover:text-primary-glow hover:underline decoration-primary-glow/50 underline-offset-4"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
