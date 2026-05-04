import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projects = {
  'air-bridge': {
    title: 'Air Bridge',
    subtitle: 'Cross-Platform Cloud Ecosystem',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnqL8C0-ZqgPq4VmlzobLMCJ1JxYeHcqRJTm91jUbgvD3j2xbpSvjreqIzBlY-FL4OsLkimPSyi9ykh7dCK6G8FaGiLcmd5N7ukRbnkyBTsWHgy9Pkj4ZecwfT-T-Z-arFmwcuBi3PX-RIwJYUH1FtOVqg_aBeqUjQurYGA4KxzIzPiMxChm1lYFfLQjAWfWMuj3x_QzgaovUpESsJOV5cCrdeL2JrXPlzU82WcMExgAmK9Du6YMTB-Bpc-k_ElbSJwkI9ph0aMg',
    content: `
      <p class="mb-4">Air Bridge is a comprehensive file-sharing and cloud storage solution engineered for modern, cross-platform environments. It supports Android, iOS, Windows, Linux, MacOS, and Web.</p>
      <p class="mb-4"><strong>Key Features:</strong></p>
      <ul class="list-disc pl-5 mb-4">
        <li><strong>AI Document Intelligence:</strong> Leverages Gemma (Vertex AI) and Groq models for high-speed document parsing, voice-command processing, and smart file-answering systems.</li>
        <li><strong>Blockchain-Backed Ownership:</strong> Engineered a "Digital Notary" feature on the Polygon blockchain, allowing users to secure and hash files for military-grade defense.</li>
        <li><strong>Dual-Storage Architecture:</strong> Implemented a dual-storage system featuring local P2P transfers using WebSockets with peak speeds up to 250MB/s, alongside cost-effective cloud storage via Backblaze B2.</li>
        <li><strong>Tech Stack:</strong> Built using Flutter with a Feature-First Clean Architecture and BLoC state management for the client. The backend is powered by Node.js/Express, containerized via Docker and deployed across GCP and AWS.</li>
      </ul>
    `
  },
  'azezun-server': {
    title: 'Azezun Server',
    subtitle: 'Blockchain Payment Infrastructure',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCljjHW6UFiFJg7__kG68NkPe8t7vy2wTCyyF--eV4injiNNDQBXuopBMeasPjBDwRaRHXW3aWiH6KA92op9jKUWiDMbd8m5YFPzwKZqX29weQ991v_9hRVYRDGLlZJY8PEBqA9WIpnvG1PLPtOLY3qO8fru-vhFNZDOrV0hYQklsefYVhyz_CI2-nXpTdEFZVUBFI7qSaI5XAUqe3LhjTsGpXauBFLGNYfvZMF21YahPhSy6Wix2sNtTh-MeX5p9HbGuA4h66GIg',
    content: `
      <p class="mb-4">The Azezun Server forms the robust backend infrastructure that powers the blockchain certification and payment processing ecosystem.</p>
      <p class="mb-4"><strong>Key Features:</strong></p>
      <ul class="list-disc pl-5 mb-4">
        <li><strong>Payment Integration:</strong> Seamlessly integrates with Razorpay to handle the purchase of certification credits, processing transactions and allocating balance to user accounts.</li>
        <li><strong>Blockchain State Management:</strong> Built on a scalable architecture that manages state transitions for the BlockchainOrderPaymentBloc, ensuring accurate tracking of file hashing and credit consumption.</li>
        <li><strong>High Availability:</strong> Developed using Node.js and Express, utilizing clustering and load balancing via Nginx to ensure maximum uptime and future scalability.</li>
        <li><strong>Security:</strong> Focuses on secure routing and maintaining independent endpoints for different platform clients (e.g., dedicated Razorpay URLs for desktop devices).</li>
      </ul>
    `
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/" className="text-primary hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="flex-1 max-w-5xl mx-auto px-6 py-20 w-full">
      <Link to="/" className="inline-flex items-center text-secondary hover:text-primary mb-10 transition-colors text-sm font-medium">
        <span className="material-symbols-outlined mr-2 text-sm">arrow_back</span>
        Back to Home
      </Link>
      
      <div className="rounded-2xl overflow-hidden aspect-video mb-12 relative group">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <p className="text-xs tracking-widest uppercase font-bold text-white/70 mb-2">{project.subtitle}</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{project.title}</h1>
        </div>
      </div>

      <div className="prose dark:prose-invert prose-lg max-w-3xl mx-auto text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: project.content }}>
      </div>
    </div>
  );
};

export default ProjectDetails;
