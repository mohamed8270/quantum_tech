import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CourseForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCourse = queryParams.get('course') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    course: initialCourse
  });

  useEffect(() => {
    if (initialCourse) {
      setFormData(prev => ({ ...prev, course: initialCourse }));
    }
  }, [initialCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bodyText = `Learner Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Qualification: ${formData.qualification}
Desired Course: ${formData.course}

Note: Currently courses are provided only for individuals in India.`;
    const mailtoLink = `mailto:ibrahimrasithbusiness@gmail.com?subject=Course Enrollment: ${encodeURIComponent(formData.course)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex-1 w-full flex items-center justify-center py-20 px-6 bg-surface-container-lowest">
      <div className="max-w-2xl w-full bg-white dark:bg-surface-container-low p-10 rounded-2xl shadow-xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold mb-3">Quantum Academy Enrollment</h1>
          <p className="text-secondary text-sm">Please fill out the form below. Note: Currently courses are provided only for Indians.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">Learner's Name</label>
              <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
              <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
              <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="+91 9876543210" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="qualification">Qualification</label>
              <input required type="text" id="qualification" name="qualification" value={formData.qualification} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="B.E Computer Science" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="course">Desired Course</label>
            <select required id="course" name="course" value={formData.course} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-transparent focus:outline-none focus:border-primary transition-colors appearance-none">
              <option value="" disabled>Select a course</option>
              <option value="Systematic UI Design">Systematic UI Design</option>
              <option value="Modern Dev Stacks">Modern Dev Stacks</option>
              <option value="UI & UX Designing">UI & UX Designing</option>
              <option value="Full Stack Development">Full Stack Development</option>
              <option value="Front End Development">Front End Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="System Designing">System Designing</option>
              <option value="DevOps">DevOps</option>
            </select>
          </div>
          
          <button type="submit" className="w-full bg-primary text-on-primary-fixed py-4 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
