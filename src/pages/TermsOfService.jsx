import React from 'react';

const TermsOfService = () => {
  return (
    <div className="flex-1 max-w-4xl mx-auto px-6 py-20 w-full">
      <h1 className="text-4xl font-semibold mb-8">Terms of Service</h1>
      <div className="prose dark:prose-invert prose-lg max-w-none text-secondary leading-relaxed">
        <p className="mb-4"><strong>Effective Date:</strong> May 4, 2026</p>
        
        <p className="mb-6">Welcome to Quantum Tech. These Terms of Service ("Terms") govern your use of our website, our software development services, and your enrollment in Quantum Academy courses. By accessing or using our services, you agree to be bound by these Terms.</p>

        <h2 className="text-2xl font-semibold text-on-surface mt-8 mb-4">1. Services Provided</h2>
        <p className="mb-4">Quantum Tech offers two primary types of services:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Software Development:</strong> Custom architecture, web, and mobile application development for clients.</li>
          <li><strong>Educational Courses (Quantum Academy):</strong> Online learning programs in subjects like Systematic UI Design, Modern Dev Stacks, and Full Stack Development. Note: Currently, our courses are exclusively available to individuals residing in India.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-on-surface mt-8 mb-4">2. User Responsibilities</h2>
        <p className="mb-6">You agree to provide accurate, current, and complete information when filling out contact or enrollment forms. You agree not to use our website or services for any unlawful purpose, or in any way that interrupts, damages, or impairs the service.</p>

        <h2 className="text-2xl font-semibold text-on-surface mt-8 mb-4">3. Intellectual Property</h2>
        <p className="mb-4"><strong>Course Materials:</strong> All content provided in Quantum Academy courses, including videos, text, and code snippets, is the intellectual property of Quantum Tech and is for your personal, non-commercial use only. You may not distribute or reproduce these materials without explicit permission.</p>
        <p className="mb-6"><strong>Software Services:</strong> Intellectual property rights for custom software development projects will be transferred to the client upon full payment and according to the specific independent contractor agreements signed prior to project commencement.</p>

        <h2 className="text-2xl font-semibold text-on-surface mt-8 mb-4">4. Course Enrollment and Payments</h2>
        <p className="mb-6">Enrollment in Quantum Academy is subject to availability and acceptance. Payment terms, refund policies, and course access durations will be explicitly stated during the checkout and onboarding process. We reserve the right to modify course content or cancel courses if necessary.</p>

        <h2 className="text-2xl font-semibold text-on-surface mt-8 mb-4">5. Limitation of Liability</h2>
        <p className="mb-6">To the maximum extent permitted by applicable law, Quantum Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the services; or (b) any conduct or content of any third party on the services.</p>

        <h2 className="text-2xl font-semibold text-on-surface mt-8 mb-4">6. Contact Us</h2>
        <p className="mb-6">If you have any questions or suggestions about our Terms of Service, do not hesitate to contact us at <strong>ibrahimrasithbusiness@gmail.com</strong>.</p>
      </div>
    </div>
  );
};

export default TermsOfService;
