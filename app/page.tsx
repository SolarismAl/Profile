'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeTab, setActiveTab] = useState('experience');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Smooth scroll functionality for anchor links
    const handleAnchorClick = (e: Event) => {
      const href = (e.target as HTMLAnchorElement).getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    // Cleanup event listeners on component unmount
    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    // { id: 'projects', label: 'Projects' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-950 to-green-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 flex justify-center mb-8 md:mb-0"
          >
            <div className="rounded-full overflow-hidden border-4 border-white h-64 w-64 relative">
              <Image 
                src="/alfonso_solar.jpg" 
                alt="Alfonso A. Solar" 
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-2/3 md:pl-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Alfonso A. Solar</h1>
            <h2 className="text-xl md:text-2xl mb-6">Software Developer at City Government of Surigao</h2>
            <p className="text-lg mb-8">
              23 years old passionate developer with expertise in web development and entrepreneurial experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:alsolarapole@gmail.com" className="bg-white text-blue-800 px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition duration-300">
                Contact Me
              </a>
              <a href="#about" className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-800 transition duration-300 learn-more-btn">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">About Me</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              I'm Alfonso A. Solar, a Software Developer currently working at the City Government of Surigao. 
              I graduated with a Bachelor of Science in Information Technology from Surigao del Norte State University.
            </p>
            <p className="text-gray-700 mb-4">
              My expertise includes web application development with HTML, CSS, and PHP with Laravel Framework.
              I also have knowledge in React Native for mobile applications.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-16 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex border-b">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex-1 py-4 font-medium transition-colors duration-300 ${
                      activeTab === tab.id
                        ? 'bg-blue-800 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'experience' && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Experience & Trainings</h3>
                    
                    <div className="space-y-8">
                      <div className="relative pl-8 border-l-2 border-blue-800 animate-slide-in" style={{ animationDelay: '0.1s' }}>
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-800"></div>
                        <h4 className="text-xl font-semibold text-gray-900">Software Developer</h4>
                        <p className="text-gray-900">City Government of Surigao | Present</p>
                      </div>

                      <div className="relative pl-8 border-l-2 border-blue-800 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-800"></div>
                        <h4 className="text-xl font-semibold text-gray-900">Call Center Associate</h4>
                        <p className="text-gray-900">TeleSupportBPO | 3 Months</p>
                      </div>
                      
                      <div className="relative pl-8 border-l-2 border-blue-800 animate-slide-in" style={{ animationDelay: '0.3s' }}>
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-800"></div>
                        <h4 className="text-xl font-semibold text-gray-900">App Development</h4>
                        <p className="text-gray-900">SNSU WAVES-TBI | February 2024 - Present</p>
                        <p className="text-gray-700 mt-2">Front-end developer and hustler of the ePlete App.</p>
                      </div>
                      
                      <div className="relative pl-8 border-l-2 border-blue-800 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-800"></div>
                        <h4 className="text-xl font-semibold text-gray-900">Start-Up Incubatees</h4>
                        <p className="text-gray-900">SNSU WAVES-TBI | November 2023 - Present</p>
                        <p className="text-gray-700 mt-2">Member of ePlete (Electronic Fare Payment for Leisure Expenses and Transportation Expenditures).</p>
                      </div>
                      
                      <div className="relative pl-8 border-l-2 border-blue-800 animate-slide-in" style={{ animationDelay: '0.5s' }}>
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-800"></div>
                        <h4 className="text-xl font-semibold text-gray-900">Prototype Validation</h4>
                        <p className="text-gray-900">San Jose, Dinagat Islands | April 26, 2024</p>
                        <p className="text-gray-700 mt-2">Presented prototype to possible early adopters of the ePlete App.</p>
                      </div>
                      
                      <div className="relative pl-8 border-l-2 border-blue-800 animate-slide-in" style={{ animationDelay: '0.6s' }}>
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-800"></div>
                        <h4 className="text-xl font-semibold text-gray-900">Caraga Startup Week</h4>
                        <p className="text-gray-900">Caraga State University Ampayon | November 20-24, 2023</p>
                        <p className="text-gray-700 mt-2">Participated in Caraga State University Ampayon for Caraga Rise Startup Week.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold mb-6">Education</h3>
                    
                    <div className="space-y-8">
                      <div className="relative pl-8 border-l-2 border-blue-800 animate-slide-in" style={{ animationDelay: '0.1s' }}>
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-800"></div>
                        <h4 className="text-xl font-semibold">College</h4>
                        <p className="text-gray-900">Surigao del Norte State University</p>
                        <p className="text-gray-700 mt-2">Bachelor of Science in Information Technology</p>
                      </div>
                      
                      <div className="relative pl-8 border-l-2 border-blue-800 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-800"></div>
                        <h4 className="text-xl font-semibold">High School (Senior High)</h4>
                        <p className="text-gray-900">Amando A. Fabio National High School</p>
                      </div>
                      
                      {/* <div className="relative pl-8 border-l-2 border-blue-800 animate-slide-in" style={{ animationDelay: '0.3s' }}>
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-800"></div>
                        <h4 className="text-xl font-semibold">High School (Junior High)</h4>
                        <p className="text-gray-900">Amando A. Fabio National High School</p>
                      </div>
                      
                      <div className="relative pl-8 border-l-2 border-blue-800 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-800"></div>
                        <h4 className="text-xl font-semibold">Elementary</h4>
                        <p className="text-gray-900">Lower Libas Elementary School</p>
                      </div> */}
                    </div>
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold mb-6">Skills</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
                        <h4 className="text-xl font-semibold mb-4 flex items-center">
                          <svg className="w-6 h-6 mr-2 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          Programming
                        </h4>
                        <p className="text-gray-700">
                          Experienced beginner to intermediate programming in web application with HTML, CSS, 
                          and PHP with Laravel Framework. Also knowledgeable with basic React Native for mobile applications.
                        </p>
                      </div>
                      
                      {/* <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
                        <h4 className="text-xl font-semibold mb-4 flex items-center">
                          <svg className="w-6 h-6 mr-2 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                          </svg>
                          Computer Servicing
                        </h4>
                        <p className="text-gray-700">
                          Knowledgeable in computer hardware and software service that specifies in computer 
                          assembly and disassembly, OS Installing, and reformatting.
                        </p>
                      </div> */}
                      
                      <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
                        <h4 className="text-xl font-semibold mb-4 flex items-center">
                          <svg className="w-6 h-6 mr-2 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                          Entrepreneurial & Pitching Skills
                        </h4>
                        <p className="text-gray-700">
                          Basic pitching throughout OJT experience. Presentation of startup ideas 
                          persuading audience to be pioneering users.
                        </p>
                      </div>
                      
                      <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
                        <h4 className="text-xl font-semibold mb-4 flex items-center">
                          <svg className="w-6 h-6 mr-2 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                          Project Proposal Development
                        </h4>
                        <p className="text-gray-700">
                          Capable of creating detailed project proposals, including objectives, 
                          timelines, and resource requirements.
                        </p>
                      </div>
                      
                      <div className="animate-slide-in" style={{ animationDelay: '0.5s' }}>
                        <h4 className="text-xl font-semibold mb-4 flex items-center">
                          <svg className="w-6 h-6 mr-2 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd" />
                          </svg>
                          Marketing Awareness
                        </h4>
                        <p className="text-gray-700">
                          Understanding of basic marketing principles and strategies. Ability to integrate 
                          marketing concepts into project proposals and presentations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 container mx-auto px-4 text-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>09675133468</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>alsolarapole@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-blue-800 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>P-2 Lower Libas Tagana-an<br />Surigao del Norte</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <ul className="space-y-2">
                  <li>English (Basic)</li>
                  <li>Filipino</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-4">Hobbies</h3>
                <ul className="space-y-2">
                  <li>Reading</li>
                  <li>Watching</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Alfonso A. Solar. All rights reserved.</p>
        </div>
      </footer>

      {/* Optional: Add this style for a visual indication when the Learn More button is clicked */}
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .learn-more-btn:active {
          animation: pulse 0.3s;
        }
      `}</style>
    </main>
  );
}