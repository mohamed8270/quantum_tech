import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out w-11/12 max-w-4xl">
      <div className={`
        flex items-center justify-between py-4 px-8 rounded-full
        bg-surface/50 backdrop-blur-[24px] 
        ${scrolled ? 'shadow-ambient bg-surface/70 border border-white/5' : 'border border-transparent'}
        transition-all duration-500
      `}>
        <div className="text-white font-display font-bold text-2xl tracking-tighter">
          Kinetic<span className="text-primary border-b-[3px] border-primary pb-0.5 ml-0.5">.</span>
        </div>
        
        <ul className="hidden md:flex items-center gap-10 text-on-surface/70 text-sm font-body font-medium">
          <li className="hover:text-white transition-colors cursor-pointer tracking-[0.1em] uppercase text-xs">Orbit</li>
          <li className="hover:text-white transition-colors cursor-pointer tracking-[0.1em] uppercase text-xs">Modules</li>
          <li className="hover:text-white transition-colors cursor-pointer tracking-[0.1em] uppercase text-xs">Telemetry</li>
        </ul>

        <div className="flex items-center gap-6">
          <button className="text-xs font-body font-semibold text-primary uppercase tracking-[0.1em] hover:text-primary-glow transition-colors pt-0.5">
            Initialize
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
