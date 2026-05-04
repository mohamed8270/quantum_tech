import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#f9f9fb]/80 dark:bg-[#1a1c1d]/80 backdrop-blur-xl transition-all duration-300 border-b border-surface-container/50">
        <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo-full.png" alt="Quantum Tech" className="h-5" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-[#000000] dark:text-[#ffffff] hover:opacity-70 transition-colors font-medium text-[13px] tracking-tight" to="/">Services</Link>
            <Link className="text-[#5f5e60] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors font-medium text-[13px] tracking-tight" to="/portfolio">Portfolio</Link>
            <Link className="text-[#5f5e60] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors font-medium text-[13px] tracking-tight" to="/courses">Courses</Link>
            <Link className="text-[#5f5e60] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors font-medium text-[13px] tracking-tight" to="/contact">Contact</Link>
          </div>
          <Link to="/contact" className="bg-primary text-on-primary-fixed px-5 py-2 rounded-full text-sm font-medium hover:opacity-70 transition-opacity duration-300 active:scale-95">
            Inquire
          </Link>
        </div>
      </nav>

      <main className="pt-20 min-h-screen flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-[#f3f3f5] dark:bg-[#2f3132] w-full mt-12 rounded-t-[1.5rem]">
        <div className="flex flex-col md:flex-row justify-between items-center px-10 py-12 w-full max-w-6xl mx-auto">
          <div className="mb-8 md:mb-0 text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <img src="/logo-slogan.png" alt="Quantum Tech: Architecting tomorrow's technology" className="h-12 mb-3 ml-[-0.5rem] drop-shadow-sm opacity-90 dark:invert" />
            <p className="text-[10px] text-[#5f5e60] dark:text-[#c6c6c6] uppercase tracking-widest pl-1 mt-1">© 2026 Quantum Technologies</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <Link className="text-xs text-[#5f5e60] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors" to="/privacy-policy">Privacy Policy</Link>
            <Link className="text-xs text-[#5f5e60] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors" to="/terms-of-service">Terms of Service</Link>
            <a className="text-xs text-[#5f5e60] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors" href="https://youtube.com/@ibuux?si=eo74LQSIVS08fLnN" target="_blank" rel="noreferrer">YouTube</a>
            <a className="text-xs text-[#5f5e60] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors" href="https://www.linkedin.com/in/ibrahimrasith" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-xs text-[#5f5e60] dark:text-[#c6c6c6] hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors" href="https://open.spotify.com/show/0FXGa6q3CZLeBHKJPuvxTq?si=521875f29aad44a7" target="_blank" rel="noreferrer">Spotify</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
