import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Typewriter = ({ words, delay = 100, pause = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, delay / 2);
      }
    } else {
      if (currentText === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, delay);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, delay, pause]);

  return (
    <span className="text-secondary-fixed relative">
      {currentText}
      <span className="absolute -right-2 top-0 bottom-0 w-[3px] bg-secondary-fixed animate-pulse"></span>
    </span>
  );
};

const CountUp = ({ end, decimals = 0, suffix = '', duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(easeProgress * end);
      
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };
    
    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span>{(count).toFixed(decimals)}{suffix}</span>;
};

function Home() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <div className="flex-1 w-full">
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-background">
        <div className="max-w-4xl mx-auto z-10 hero-reveal mt-20">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-[1.1] flex flex-col">
            <span>Architecture of</span>
            <span className="block mt-4 md:mt-6 text-secondary-fixed">
              <Typewriter words={['Digital Flow.', 'Intelligent Systems.', 'Kinetic Spaces.', 'Future Solutions.']} />
            </span>
          </h1>
          <p className="text-base md:text-lg text-secondary max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Quantum Tech designs high-performance digital ecosystems where form meets function with monolithic precision.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-primary text-on-primary-fixed px-5 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-all flex items-center justify-center group">
              Start Your Journey
              <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link to="/portfolio" className="border border-outline-variant px-5 py-2.5 rounded-full font-medium text-sm hover:bg-surface-container-low transition-all">
              View Portfolio
            </Link>
          </div>
        </div>
        <div className="mt-20 w-full max-w-6xl aspect-[21/9] bg-surface-container-low rounded-xl overflow-hidden relative hero-reveal" style={{ animationDelay: '0.3s' }}>
          <img className="w-full h-full object-cover grayscale opacity-80" alt="Minimalist modern office space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZjKKGSXBjoGi1vhxz88yubiOB9WpawN0GScL1Io8hwOChxtje_Lc9vn2QUbYbOMnXcwNjO3SxTjKJvTgV2QMOXMwgkpRI-Qi2cl4quhiytbp8UZKtg9ABKr6d30wjSO7IvhqWQu18EMorcHPg7LHOTatRiq7EV9uUS4P07VWxEujtIIEZChZp6iHrw5Gl9OHqYQQgLFD4VkF3FIXERmvEGpqtWRFXKyqhPURzWpqJviuUMy4LXrAq6c7ALPHRRXz6k36TU0wK4Q" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
      </section>

      <section className="py-20 px-6 bg-surface-container-lowest">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div>
              <span className="text-xs tracking-widest text-secondary font-bold">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 leading-tight">We build kinetic systems that adapt to your growth.</h2>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="h-12 w-12 shrink-0 bg-surface-container-high rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">visibility</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Vision</h3>
                  <p className="text-secondary text-sm leading-relaxed">To become the invisible engine behind the world's most influential digital brands, prioritizing performance over noise.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="h-12 w-12 shrink-0 bg-surface-container-high rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">rocket_launch</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Mission</h3>
                  <p className="text-secondary text-sm leading-relaxed">Crafting bespoke architectural solutions that accelerate digital transformation through precision engineering and minimalist design.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-square max-w-[400px] ml-auto">
            <img className="w-full h-full object-cover grayscale" alt="Abstract architectural shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj7Ua2F2G84bio60nGuO13yjJaMJiDypZw-N7_yn5ZgKyOdMu-u9I1Xwwgl7m_pEPg2TAwsfArEx4mvBS720w1dnr_j7UCN94IAN5DtC-x96q-LRPmmlqjm-ZwmbxhxFXiKSJ6OInaty4seuWrWflesmFdR6EpBfNb_75ysuYuUfMY-2e2txC4wL-XDq3Ww1mus9dQuCPeboUnfDa7cJIcsvVozt1RK2ROp5vbCxnxqOyVhQRJpnP2znGcF-YTvTm3NtDNJMkZqA" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <span className="text-xs tracking-[0.2em] text-secondary font-bold">Capabilities</span>
            <h2 className="text-4xl font-semibold mt-4 tracking-tight">Engineered Excellence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
            <div className="md:col-span-2 bg-surface-container-low p-8 rounded-xl transition-colors group cursor-pointer relative overflow-hidden text-on-surface">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient transition-opacity duration-700 z-0"></div>
              <div className="relative z-10 group-hover:text-white transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl mb-5 group-hover:scale-110 transition-transform">memory</span>
                <h3 className="text-xl font-semibold mb-3">AI & ML</h3>
                <p className="text-sm opacity-80">AI & ML based solution for brands. Architecting intuitive interfaces that prioritize user flow and brand identity through minimalist aesthetics.</p>
              </div>
            </div>
            <div className="bg-primary text-on-primary p-8 rounded-xl group cursor-pointer">
              <span className="material-symbols-outlined text-3xl mb-5">code</span>
              <h3 className="text-xl font-semibold mb-3">Custom Dev</h3>
              <p className="text-on-primary/70 text-sm">High-performance, scalable code bases tailored to unique business logic.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl transition-colors group cursor-pointer relative overflow-hidden text-on-surface">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient transition-opacity duration-700 z-0"></div>
              <div className="relative z-10 group-hover:text-white transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl mb-5">cloud_queue</span>
                <h3 className="text-lg font-semibold mb-2">Cloud Solutions</h3>
                <p className="text-[13px] opacity-80">Resilient infrastructure for the modern era.</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl transition-colors group cursor-pointer relative overflow-hidden text-on-surface">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient transition-opacity duration-700 z-0"></div>
              <div className="relative z-10 group-hover:text-white transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl mb-5">fingerprint</span>
                <h3 className="text-lg font-semibold mb-2">Brand Identity</h3>
                <p className="text-[13px] opacity-80">Visual storytelling that resonates.</p>
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container-low p-8 rounded-xl transition-colors group cursor-pointer relative overflow-hidden text-on-surface flex flex-col justify-between">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient transition-opacity duration-700 z-0"></div>
              <div className="relative z-10 group-hover:text-white transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl mb-5">insights</span>
                <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
                <p className="text-sm opacity-80">Transforming raw data into actionable intelligence through custom dashboards and AI-driven insights.</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl transition-colors group cursor-pointer relative overflow-hidden text-on-surface">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient transition-opacity duration-700 z-0"></div>
              <div className="relative z-10 group-hover:text-white transition-colors duration-500">
                <span className="material-symbols-outlined text-3xl mb-5">query_stats</span>
                <h3 className="text-lg font-semibold mb-2">SEO Strategy</h3>
                <p className="text-[13px] opacity-80">Dominate search results with precision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs tracking-widest text-secondary font-bold">Success Stories</span>
              <h2 className="text-4xl font-semibold mt-4 tracking-tight">Applied Intelligence</h2>
            </div>
            <Link to="/portfolio" className="text-primary font-medium text-sm flex items-center group">
              Explore Case Studies
              <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/projects/air-bridge" className="bg-white rounded-xl overflow-hidden group block">
              <div className="aspect-[16/9] overflow-hidden">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Air Bridge system" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnqL8C0-ZqgPq4VmlzobLMCJ1JxYeHcqRJTm91jUbgvD3j2xbpSvjreqIzBlY-FL4OsLkimPSyi9ykh7dCK6G8FaGiLcmd5N7ukRbnkyBTsWHgy9Pkj4ZecwfT-T-Z-arFmwcuBi3PX-RIwJYUH1FtOVqg_aBeqUjQurYGA4KxzIzPiMxChm1lYFfLQjAWfWMuj3x_QzgaovUpESsJOV5cCrdeL2JrXPlzU82WcMExgAmK9Du6YMTB-Bpc-k_ElbSJwkI9ph0aMg" />
              </div>
              <div className="p-8">
                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-2">Cross-Platform Cloud Ecosystem</p>
                <h3 className="text-2xl font-semibold mb-3">Air Bridge</h3>
                <p className="text-secondary text-base leading-relaxed">A comprehensive file-sharing and cloud storage solution across Android, iOS, Windows, Linux, MacOS, and Web. Featuring AI document intelligence, blockchain-backed ownership, and dual-storage architecture with WebSocket P2P transfers.</p>
              </div>
            </Link>
            
            <Link to="/projects/azezun-server" className="bg-white rounded-xl overflow-hidden group block">
              <div className="aspect-[16/9] overflow-hidden">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Azezun Server infrastructure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCljjHW6UFiFJg7__kG68NkPe8t7vy2wTCyyF--eV4injiNNDQBXuopBMeasPjBDwRaRHXW3aWiH6KA92op9jKUWiDMbd8m5YFPzwKZqX29weQ991v_9hRVYRDGLlZJY8PEBqA9WIpnvG1PLPtOLY3qO8fru-vhFNZDOrV0hYQklsefYVhyz_CI2-nXpTdEFZVUBFI7qSaI5XAUqe3LhjTsGpXauBFLGNYfvZMF21YahPhSy6Wix2sNtTh-MeX5p9HbGuA4h66GIg" />
               </div>
              <div className="p-8">
                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-2">Blockchain Payment Infrastructure</p>
                <h3 className="text-2xl font-semibold mb-3">Azezun Server</h3>
                <p className="text-secondary text-base leading-relaxed">A highly scalable backend architecture utilizing Node.js, Express, clustering, and Nginx load balancing. It integrates Razorpay for processing blockchain certification credits and manages state transitions seamlessly.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-inverse-surface text-on-primary">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.2em] text-outline-variant font-bold">Watch our process</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-6 mb-10">See how we transform complexity into clarity.</h2>
          <div className="relative aspect-video bg-[#0f1115] rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-white/5">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/1RkP65clT1I?si=8U3z_UgkMlyNQVw1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-widest text-secondary font-bold">Quantum Academy</span>
              <h2 className="text-4xl font-semibold mt-4 tracking-tight mb-8 leading-tight">Master the art of <br />digital architecture.</h2>
              <p className="text-lg text-secondary font-light mb-10 leading-relaxed">Join our elite courses designed for forward-thinking designers and developers who want to push the boundaries of the digital medium.</p>
              <div className="space-y-4">
                <Link to="/courses?course=Systematic%20UI%20Design" className="p-5 bg-surface-container-low rounded-xl flex justify-between items-center group cursor-pointer hover:bg-surface-container transition-colors">
                  <div>
                    <h4 className="font-semibold text-base">Systematic UI Design</h4>
                    <p className="text-xs text-secondary mt-1">Advanced architectural patterns</p>
                  </div>
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform">chevron_right</span>
                </Link>
                <Link to="/courses?course=Modern%20Dev%20Stacks" className="p-5 bg-surface-container-low rounded-xl flex justify-between items-center group cursor-pointer hover:bg-surface-container transition-colors">
                  <div>
                    <h4 className="font-semibold text-base">Modern Dev Stacks</h4>
                    <p className="text-xs text-secondary mt-1">Scalable architecture & performance</p>
                  </div>
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform">chevron_right</span>
                </Link>
              </div>
              <div className="mt-8">
                 <Link to="/courses" className="text-sm font-medium border border-outline-variant px-5 py-2.5 rounded-full hover:bg-surface-container-low transition-all">View All Courses</Link>
              </div>
            </div>
            
            <div ref={statsRef} className="grid grid-cols-2 gap-4 h-[320px] items-end">
              <div 
                className={`bg-surface-container-low rounded-xl flex flex-col justify-end p-6 overflow-hidden relative origin-bottom transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${statsVisible ? 'h-full opacity-100 scale-y-100' : 'h-[20%] opacity-0 scale-y-[0.8]'}`}
              >
                <div className="relative z-10 transition-opacity duration-700 delay-300">
                  <h4 className="text-3xl font-semibold mb-2">
                     <CountUp end={12} suffix="k+" isVisible={statsVisible} duration={2500} />
                  </h4>
                  <p className="text-secondary text-[11px] font-bold tracking-tight">Students completed</p>
                </div>
              </div>
              
              <div 
                className={`bg-primary text-on-primary rounded-xl flex flex-col justify-end p-6 overflow-hidden relative transition-all duration-[1200ms] delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${statsVisible ? 'h-full opacity-100 scale-y-100' : 'h-[20%] opacity-0 scale-y-[0.8]'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-0"></div>
                <div className="relative z-10 transition-opacity duration-700 delay-500">
                  <h4 className="text-3xl font-semibold mb-2">
                    <CountUp end={4.9} decimals={1} suffix="/5" isVisible={statsVisible} duration={2500} />
                  </h4>
                  <p className="text-on-primary/70 text-[11px] font-bold tracking-tight">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
