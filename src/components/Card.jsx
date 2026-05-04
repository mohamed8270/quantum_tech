import React from 'react';

const Card = ({ children, header, className = '' }) => {
  return (
    <div className={`bg-surface-container rounded-2xl overflow-hidden flex flex-col ${className}`}>
      {header && (
        <div className="bg-surface-container-highest p-8 relative">
          {/* Subtle top light reflection */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div>
          {header}
        </div>
      )}
      <div className="p-8 grow">
        {children}
      </div>
    </div>
  );
};

export default Card;
