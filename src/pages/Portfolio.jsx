import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="flex-1 w-full bg-background pb-20">
      <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative">
          
          {/* Left Sidebar (Sticky Profile) */}
          <div className="md:col-span-4 lg:col-span-3 space-y-8 md:sticky md:top-28 self-start">
            <div className="space-y-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-outline-variant">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj7Ua2F2G84bio60nGuO13yjJaMJiDypZw-N7_yn5ZgKyOdMu-u9I1Xwwgl7m_pEPg2TAwsfArEx4mvBS720w1dnr_j7UCN94IAN5DtC-x96q-LRPmmlqjm-ZwmbxhxFXiKSJ6OInaty4seuWrWflesmFdR6EpBfNb_75ysuYuUfMY-2e2txC4wL-XDq3Ww1mus9dQuCPeboUnfDa7cJIcsvVozt1RK2ROp5vbCxnxqOyVhQRJpnP2znGcF-YTvTm3NtDNJMkZqA" alt="Mohamed Ibrahim" className="w-full h-full object-cover grayscale" />
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2 text-[10px] font-bold text-primary uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Open to work
                </div>
                <h1 className="text-3xl font-semibold tracking-tight">Mohamed Ibrahim</h1>
                <p className="text-lg text-secondary font-medium mt-1">Senior Full-Stack Developer</p>
              </div>

              <div className="text-sm text-secondary leading-relaxed font-light">
                <p className="mb-4">
                  I'm a digital product developer focusing on crafting software development and design systems for software, web, and mobile products.
                </p>
                <p>
                  I'm passionate about applying consumer psychology for an interaction science-backed approach. Currently researching Human-Computer Interaction.
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <a href="mailto:ibrahimrasithbusiness@gmail.com" className="bg-primary text-on-primary-fixed px-5 py-3 rounded-xl text-center text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  Contact Me
                </a>
                <a href="https://www.linkedin.com/in/ibrahimrasith" target="_blank" rel="noreferrer" className="border border-outline-variant text-on-surface px-5 py-3 rounded-xl text-center text-sm font-medium hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">link</span>
                  LinkedIn
                </a>
              </div>
            </div>
            
            <div className="pt-8 border-t border-surface-container space-y-4">
               <h3 className="text-[10px] font-bold text-secondary uppercase tracking-widest">Contact Details</h3>
               <div className="text-sm text-secondary space-y-2">
                 <p className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-[16px]">phone</span>
                   (+91) 63697 18561
                 </p>
                 <p className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-[16px]">mail</span>
                   ibrahimrasith@gmail.com
                 </p>
               </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-4">Core Stack</h3>
              <div className="flex flex-wrap gap-3 text-secondary text-xl">
                 <i className="devicon-javascript-plain" title="JavaScript"></i>
                 <i className="devicon-typescript-plain" title="TypeScript"></i>
                 <i className="devicon-dart-plain" title="Dart"></i>
                 <i className="devicon-flutter-plain" title="Flutter"></i>
                 <i className="devicon-react-original" title="React"></i>
                 <i className="devicon-nextjs-plain" title="Next.js"></i>
                 <i className="devicon-nodejs-plain" title="Node.js"></i>
                 <i className="devicon-mongodb-plain" title="MongoDB"></i>
                 <i className="devicon-postgresql-plain" title="PostgreSQL"></i>
                 <i className="devicon-amazonwebservices-plain-wordmark" title="AWS"></i>
              </div>
              <p className="text-xs text-secondary mt-3 italic">And many more modern tools...</p>
            </div>
          </div>
          
          {/* Right Content Area */}
          <div className="md:col-span-8 lg:col-span-9 space-y-16">
            
            {/* Education Section */}
            <section>
               <h2 className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] mb-6">Education</h2>
               <div className="bg-surface-container-low p-6 rounded-2xl">
                 <h3 className="text-lg font-semibold">Anna University, NPR College of Engineering and Technology, Dindigul</h3>
                 <p className="text-secondary text-sm font-medium mt-1">Bachelor of Engineering | Electronics and Communication Engineering | March 2023</p>
                 <div className="flex flex-wrap gap-2 mt-4 text-xs">
                   <span className="px-2.5 py-1 bg-surface-container rounded-md">Overall CGPA 8.3</span>
                   <span className="px-2.5 py-1 bg-surface-container rounded-md">Smart India Hackathon 2022 (Grand Finalist)</span>
                   <span className="px-2.5 py-1 bg-surface-container rounded-md">Startup Tamil Nadu</span>
                 </div>
               </div>
            </section>

            {/* Skills Section */}
            <section>
               <h2 className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] mb-6">Technical Skills</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-primary">
                    <h4 className="text-sm font-semibold mb-2 text-on-surface">Programming Languages</h4>
                    <p className="text-sm text-secondary">JavaScript, TypeScript, Dart, SQL</p>
                 </div>
                 <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-blue-500">
                    <h4 className="text-sm font-semibold mb-2 text-on-surface">Frameworks & Libraries</h4>
                    <p className="text-sm text-secondary">Flutter (BLoC, clean architecture), React.js, Next.js</p>
                 </div>
                 <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-green-500">
                    <h4 className="text-sm font-semibold mb-2 text-on-surface">Backend & Databases</h4>
                    <p className="text-sm text-secondary">Node.js (Express, RESTful API), MongoDB, PostgreSQL, Firebase, Supabase</p>
                 </div>
                 <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-yellow-500">
                    <h4 className="text-sm font-semibold mb-2 text-on-surface">Cloud & DevOps</h4>
                    <p className="text-sm text-secondary">AWS, GCP, Docker, Nginx, Kubernetes, Backblaze B2</p>
                 </div>
                 <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-purple-500">
                    <h4 className="text-sm font-semibold mb-2 text-on-surface">AI/ML & Agentic Tools</h4>
                    <p className="text-sm text-secondary">Gemini Pro, Claude, Agentic AI, Antigravity, GitHub Copilot</p>
                 </div>
               </div>
            </section>

            {/* Experience Timeline */}
            <section>
              <h2 className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] mb-8">Experience</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-surface-container-high before:to-transparent">
                
                {/* Efforts Solutions */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-background bg-primary text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 -ml-[9px] md:ml-0 z-10"></div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] pl-4 md:pl-0">
                    <div className="bg-surface-container-low p-6 rounded-2xl shadow-sm border border-transparent hover:border-outline-variant transition-colors">
                      <div className="flex justify-between items-start mb-2 flex-col xl:flex-row">
                        <h3 className="font-semibold text-lg text-primary">Efforts Solutions</h3>
                        <span className="text-xs font-medium text-secondary bg-surface-container px-2 py-1 rounded">March 2024 - Present</span>
                      </div>
                      <p className="text-sm font-medium mb-4">Cross Platform Developer (Android & iOS) | Chennai, India</p>
                      <ul className="list-disc pl-4 text-sm text-secondary space-y-2 font-light">
                        <li><strong>Lead Developer for UAE Government Sectors:</strong> Spearheaded end-to-end development of "AgriGard" analytics app.</li>
                        <li><strong>Rapid Production Deployment:</strong> Managed full lifecycle for two major UAE projects in 3 months as sole developer.</li>
                        <li><strong>Sports & Membership Systems:</strong> Developed "Aldhafra Shooting Club" with sports registration and IAP.</li>
                        <li><strong>Authentication Integration:</strong> Guided junior developers on specialized integrations like UAE Pass.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Accent Techno Soft */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-background bg-surface-container-high text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 -ml-[9px] md:ml-0 z-10"></div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] pl-4 md:pl-0">
                    <div className="bg-surface-container-low p-6 rounded-2xl shadow-sm border border-transparent hover:border-outline-variant transition-colors">
                      <div className="flex justify-between items-start mb-2 flex-col xl:flex-row">
                        <h3 className="font-semibold text-lg">Accent Techno Soft</h3>
                        <span className="text-xs font-medium text-secondary bg-surface-container px-2 py-1 rounded">Aug 2023 - April 2025</span>
                      </div>
                      <p className="text-sm font-medium mb-4">Cross Platform Developer | Coimbatore, India</p>
                      <ul className="list-disc pl-4 text-sm text-secondary space-y-2 font-light">
                        <li>Developed multi-platform application for clients and deployed on AWS and Play Store.</li>
                        <li>Solved logic-based issues and provided custom solutions.</li>
                        <li>Planned and implemented mobile application projects efficiently.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Agumentik */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-background bg-surface-container-high text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 -ml-[9px] md:ml-0 z-10"></div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] pl-4 md:pl-0">
                    <div className="bg-surface-container-low p-6 rounded-2xl shadow-sm border border-transparent hover:border-outline-variant transition-colors">
                      <div className="flex justify-between items-start mb-2 flex-col xl:flex-row">
                        <h3 className="font-semibold text-lg">Agumentik Group</h3>
                        <span className="text-xs font-medium text-secondary bg-surface-container px-2 py-1 rounded">June 2023 - Aug 2023</span>
                      </div>
                      <p className="text-sm font-medium mb-4">Mobile App Developer | Bangalore, India</p>
                      <ul className="list-disc pl-4 text-sm text-secondary space-y-2 font-light">
                        <li>Developed and deployed a mobile application for food delivery with consistent and reliable code.</li>
                        <li>Maintained code and stability for a better developer experience.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* SpaceScan.io */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-background bg-surface-container-high text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 -ml-[9px] md:ml-0 z-10"></div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] pl-4 md:pl-0">
                    <div className="bg-surface-container-low p-6 rounded-2xl shadow-sm border border-transparent hover:border-outline-variant transition-colors">
                      <div className="flex justify-between items-start mb-2 flex-col xl:flex-row">
                        <h3 className="font-semibold text-lg">SpaceScan.io</h3>
                        <span className="text-xs font-medium text-secondary bg-surface-container px-2 py-1 rounded">Sept 2022 - March 2023</span>
                      </div>
                      <p className="text-sm font-medium mb-4">Performance Eng. (Intern) & React Web Dev | Canada (Remote)</p>
                      <ul className="list-disc pl-4 text-sm text-secondary space-y-2 font-light">
                        <li>Analyzed website performance for cryptocurrency data.</li>
                        <li>Implemented robust methods for JavaScript bundling processes for initial page load efficiency.</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Employment / Projects Grid */}
            <section>
              <h2 className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] mb-6">Employment & Deep Tech</h2>
              
              <div className="space-y-6">
                <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-2xl">
                   <div className="flex justify-between items-start mb-4">
                     <div>
                       <p className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">Featured Project</p>
                       <h3 className="text-2xl font-semibold">Air Bridge</h3>
                       <p className="text-sm font-medium text-secondary">Founder & Full-Stack Developer</p>
                     </div>
                     <Link to="/projects/air-bridge" className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors flex items-center">
                       View Case Study <span className="material-symbols-outlined text-[14px] ml-1">arrow_forward</span>
                     </Link>
                   </div>
                   <ul className="list-disc pl-4 text-sm text-secondary space-y-3 font-light">
                     <li><strong>Architected Multi-Platform Ecosystem:</strong> Built a file-sharing solution for Android, iOS, Windows, Linux, and macOS using Flutter (Feature-First Clean Architecture, BLoC).</li>
                     <li><strong>High-Performance Backend:</strong> Developed a Node.js/Express backend utilizing clustering and Nginx.</li>
                     <li><strong>AI-Driven Features:</strong> Integrated Python microservice using Gemma & Groq for smart file answering and summarization.</li>
                     <li><strong>Hybrid Storage & Blockchain:</strong> Local P2P WebSockets (250MB/s), Backblaze B2, and Polygon blockchain "Digital Notary".</li>
                     <li><strong>DevOps:</strong> Containerized via Docker across GCP and AWS.</li>
                   </ul>
                </div>

                <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-2xl">
                   <div className="mb-4">
                     <h3 className="text-xl font-semibold">AI-Driven Development & Intelligence</h3>
                   </div>
                   <ul className="list-disc pl-4 text-sm text-secondary space-y-3 font-light">
                     <li><strong>Agentic Workflows:</strong> Specialized in leveraging Agentic AI and Antigravity to architect autonomous task-handling logic.</li>
                     <li><strong>LLM Implementation:</strong> Integrated Gemini Pro, Gemma (Vertex AI), and Groq for high-speed document parsing and voice commands.</li>
                     <li><strong>Software Engineering Productivity:</strong> Advanced user of GitHub Copilot and Claude 3.5 Sonnet for rapid prototyping.</li>
                     <li><strong>Vector Embeddings & RAG:</strong> Implemented "Military Grade" search functionalities within local/cloud storage.</li>
                   </ul>
                </div>
              </div>
            </section>

            {/* Self Employed / Indie projects */}
            <section>
              <h2 className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] mb-6">Indie Products</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-surface-container-low p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold mb-2">Info Harvest</h3>
                  <p className="text-sm text-secondary font-light">A mobile application that provides product notification about Price, Stock or Discount changes via email. Built with Flutter, Node.js, and AWS EC2/Elastic Beanstalk utilizing scraped Amazon data stored in MongoDB.</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold mb-2">Jobbo</h3>
                  <p className="text-sm text-secondary font-light">Application showing current job trends and analytics (wanted skills, experience levels). Powered by Flutter, Node.js, Renderer, and MongoDB to deliver high-quality job analytics to thousands of users.</p>
                </div>
              </div>
            </section>

            {/* YouTuber & Socials */}
            <section>
               <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl">
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center">
                     <span className="material-symbols-outlined">play_arrow</span>
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold">YouTuber & Educator</h3>
                     <p className="text-sm text-secondary">Teaching development tutorials for modern tech stacks</p>
                   </div>
                 </div>
                 <p className="text-sm text-secondary font-light mb-6">
                   Knowledge sharing and showcasing the development process for Flutter, React JS, MERN Stack, AWS, and server development (Node.js, PostgreSQL, MongoDB).
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <a href="https://youtube.com/@ibuux?si=q9ghrKfIEXh72HSL" target="_blank" rel="noreferrer" className="text-sm font-medium border border-outline-variant bg-surface-container-low px-4 py-2 rounded-lg hover:bg-surface-container transition-colors flex items-center gap-2">
                      YouTube Channel
                    </a>
                    <a href="https://github.com/mohamed8270" target="_blank" rel="noreferrer" className="text-sm font-medium border border-outline-variant bg-surface-container-low px-4 py-2 rounded-lg hover:bg-surface-container transition-colors flex items-center gap-2">
                      GitHub
                    </a>
                    <a href="https://dribbble.com/Rasith02" target="_blank" rel="noreferrer" className="text-sm font-medium border border-outline-variant bg-surface-container-low px-4 py-2 rounded-lg hover:bg-surface-container transition-colors flex items-center gap-2">
                      Dribbble
                    </a>
                 </div>
               </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
