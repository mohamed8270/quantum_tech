# Quantum Tech Portfolio

![Quantum Tech Banner](/public/logo-full.png)

> **Architecting tomorrow's technology.**

Quantum Tech is a state-of-the-art portfolio website showcasing cutting-edge software engineering, robust AI integrations, and innovative technology solutions. Built with modern web technologies, this platform serves as the central hub for our services, portfolio projects, professional courses, and contact information.

## 🚀 Overview

This repository contains the source code for the Quantum Tech Portfolio, a fully responsive, visually stunning web application built to highlight our expertise in Next-Gen Software Engineering, Agentic AI Stacks, and scalable cloud deployments. 

The application is containerized using Docker and Nginx for optimized serving, and uses a CI/CD pipeline via GitHub Actions for automated deployment to the GitHub Container Registry.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Containerization**: [Docker](https://www.docker.com/) & [Nginx](https://www.nginx.com/)
- **CI/CD**: GitHub Actions

## 💡 Our Services

We specialize in delivering high-performance, forward-thinking technological solutions:

1. **Next-Gen Software Engineering**
   - Full-stack web and mobile application development.
   - Scalable architecture design and implementation.
   - High-performance, responsive UI/UX development.

2. **Agentic AI Integrations**
   - Integration of advanced AI models (Gemini Pro, Antigravity) into existing workflows.
   - Development of intelligent agents that automate complex tasks.
   - Custom AI solutions tailored for enterprise needs.

3. **Cloud & DevOps**
   - Docker containerization for reliable deployments.
   - Automated CI/CD pipelines.
   - Cloud infrastructure management and optimization.

4. **Professional Courses**
   - Comprehensive training in modern software development.
   - Deep dives into AI integration and Agentic AI workflows.
   - Mentorship and practical, hands-on learning experiences.

## 📂 Project Structure

```text
quantum_tech/
├── .github/workflows/      # CI/CD pipelines (Docker publish)
├── public/                 # Static assets (logos, images)
├── src/                    # Source code
│   ├── components/         # Reusable UI components (Layout, etc.)
│   ├── pages/              # Route pages (Home, Portfolio, Courses, Contact)
│   ├── index.css           # Global styles and Tailwind configuration
│   └── main.jsx            # Application entry point
├── Dockerfile              # Multi-stage Docker build configuration
├── nginx.conf              # Nginx configuration for serving the app
├── package.json            # Project metadata and dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

## ⚙️ Local Development

To run this project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamed8270/quantum_tech.git
   cd quantum_tech
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 🐳 Docker Deployment

This project includes a multi-stage `Dockerfile` optimized for production.

To build and run the Docker container locally:

1. Build the Docker image:
   ```bash
   docker build -t quantum-tech-portfolio .
   ```

2. Run the container:
   ```bash
   docker run -p 8080:80 quantum-tech-portfolio
   ```

3. Access the application at `http://localhost:8080`.

## 📜 License & Legal

- [Privacy Policy](/src/pages/PrivacyPolicy.jsx)
- Terms of Service

© 2026 Quantum Technologies. All rights reserved.

---

*For inquiries, please visit the [Contact Page](#) on our website.*
