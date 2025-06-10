"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState("experience");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Check user's preferred color scheme
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    }

    // Smooth scroll functionality for anchor links
    const handleAnchorClick = (e: Event) => {
      const href = (e.target as HTMLAnchorElement).getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      } transition-colors duration-300`}
    >
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 ${
          isDarkMode
            ? "bg-gray-900/90 backdrop-blur-lg"
            : "bg-white/90 backdrop-blur-lg"
        } shadow-sm`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            Alfonso
            <span
              className={`${
                isDarkMode ? "text-emerald-400" : "text-emerald-600"
              }`}
            >
              .Solar
            </span>
          </a>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              <a
                href="#about"
                className={`${
                  isDarkMode
                    ? "hover:text-emerald-400"
                    : "hover:text-emerald-600"
                } transition-colors`}
              >
                About
              </a>
              <a
                href="#resume"
                className={`${
                  isDarkMode
                    ? "hover:text-emerald-400"
                    : "hover:text-emerald-600"
                } transition-colors`}
              >
                Resume
              </a>
              <a
                href="#contact"
                className={`${
                  isDarkMode
                    ? "hover:text-emerald-400"
                    : "hover:text-emerald-600"
                } transition-colors`}
              >
                Contact
              </a>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`relative ${
          isDarkMode
            ? "bg-gradient-to-r from-emerald-900 to-emerald-700"
            : "bg-gradient-to-r from-emerald-600 to-emerald-400"
        } overflow-hidden`}
      >
        {/* Abstract shapes background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20"></div>
          <div className="absolute top-32 right-64 w-64 h-64 rounded-full bg-white/20"></div>
          <div className="absolute -bottom-20 right-10 w-80 h-80 rounded-full bg-white/20"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="md:w-1/3 flex justify-center mb-10 md:mb-0"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white blur-xl opacity-20 transform -translate-x-2 translate-y-2"></div>
              <div
                className={`rounded-full overflow-hidden border-4 ${
                  isDarkMode ? "border-emerald-400" : "border-white"
                } h-64 w-64 relative shadow-2xl`}
              >
                <Image
                  src="/alfonso_solar.jpg"
                  alt="Alfonso A. Solar"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/3 md:pl-16 text-white"
          >
            <div className="space-y-4">
              <h2
                className={`text-sm uppercase tracking-wider ${
                  isDarkMode ? "text-emerald-300" : "text-emerald-100"
                }`}
              >
                Software Developer
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold">
                Alfonso A. Solar
              </h1>
              {/* <p className="text-xl md:text-2xl opacity-90 max-w-lg">
                Building digital solutions at the City Government of Surigao
              </p> */}
              <p className="text-lg opacity-80 max-w-lg">
                23 years old passionate developer with expertise in web
                development and entrepreneurial experience.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="mailto:alsolarapole@gmail.com"
                  className={`${
                    isDarkMode
                      ? "bg-emerald-400 text-gray-900 hover:bg-emerald-300"
                      : "bg-white text-emerald-900 hover:bg-emerald-50"
                  } px-6 py-3 rounded-full font-medium transition duration-300 shadow-lg`}
                >
                  Contact Me
                </a>
                <a
                  href="#about"
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-emerald-900 transition duration-300 learn-more-btn"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div
          className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none ${
            isDarkMode ? "text-gray-900" : "text-gray-50"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-24"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V59.27C57.1,66.9,114.97,76.66,170.25,78.94Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-24 container mx-auto px-4 ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div
              className={`h-px w-12 ${
                isDarkMode ? "bg-emerald-400" : "bg-emerald-600"
              }`}
            ></div>
            <h2 className="text-3xl font-bold">About Me</h2>
            <div
              className={`h-px w-12 ${
                isDarkMode ? "bg-emerald-400" : "bg-emerald-600"
              }`}
            ></div>
          </div>

          <div
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl`}
          >
            <div className="space-y-6">
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-lg leading-relaxed`}
              >
                I&apos;m Alfonso A. Solar, a Software Developer currently
                working at the City Government of Surigao. I graduated with a
                Bachelor of Science in Information Technology from Surigao del
                Norte State University.
              </p>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-lg leading-relaxed`}
              >
                My expertise includes web application development with HTML,
                CSS, and PHP using the Laravel Framework. I also have experience
                with Next.js for building modern React-based web applications
                and Tailwind CSS for crafting responsive, utility-first UI
                designs. Additionally, I have knowledge in React Native for
                mobile application development.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div
                  className={`${
                    isDarkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-50 hover:bg-gray-100"
                  } p-6 rounded-lg transition-colors`}
                >
                  <div
                    className={`inline-flex p-3 rounded-full mb-4 ${
                      isDarkMode
                        ? "bg-emerald-400/20 text-emerald-400"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Web Development
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Creating modern, responsive web applications using Laravel
                    and React
                  </p>
                </div>

                <div
                  className={`${
                    isDarkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-50 hover:bg-gray-100"
                  } p-6 rounded-lg transition-colors`}
                >
                  <div
                    className={`inline-flex p-3 rounded-full mb-4 ${
                      isDarkMode
                        ? "bg-emerald-400/20 text-emerald-400"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Developing cross-platform mobile solutions with React Native
                  </p>
                </div>

                <div
                  className={`${
                    isDarkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-50 hover:bg-gray-100"
                  } p-6 rounded-lg transition-colors`}
                >
                  <div
                    className={`inline-flex p-3 rounded-full mb-4 ${
                      isDarkMode
                        ? "bg-emerald-400/20 text-emerald-400"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Entrepreneurship
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Transforming innovative ideas into viable startup ventures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Resume/Tabbed Content Section */}
      <section
        id="resume"
        className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-12">
              <div
                className={`h-px w-12 ${
                  isDarkMode ? "bg-emerald-400" : "bg-emerald-600"
                }`}
              ></div>
              <h2
                className={`text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                My Resume
              </h2>
              <div
                className={`h-px w-12 ${
                  isDarkMode ? "bg-emerald-400" : "bg-emerald-600"
                }`}
              ></div>
            </div>

            <div
              className={`${
                isDarkMode ? "bg-gray-900" : "bg-white"
              } rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Tab Navigation */}
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex-1 py-5 font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? isDarkMode
                          ? "bg-emerald-700 text-white"
                          : "bg-emerald-600 text-white"
                        : isDarkMode
                        ? "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === "experience" && (
                  <div className="animate-fade-in">
                    <h3
                      className={`text-2xl font-bold mb-8 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Experience & Trainings
                    </h3>

                    <div className="space-y-10">
                      <div
                        className={`relative pl-10 ${
                          isDarkMode
                            ? "border-l-2 border-emerald-500"
                            : "border-l-2 border-emerald-600"
                        } animate-slide-in`}
                        style={{ animationDelay: "0.1s" }}
                      >
                        <div
                          className={`absolute -left-2.5 top-0 h-5 w-5 rounded-full ${
                            isDarkMode
                              ? "bg-emerald-500 ring-4 ring-gray-900"
                              : "bg-emerald-600 ring-4 ring-white"
                          }`}
                        ></div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                          <h4
                            className={`text-xl font-semibold ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Software Developer
                          </h4>
                          <div
                            className={`px-3 py-1 rounded-full text-sm ${
                              isDarkMode
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-emerald-100 text-emerald-800"
                            }`}
                          >
                            Present
                          </div>
                        </div>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-400" : "text-gray-700"
                          } mb-2`}
                        >
                          City Government of Surigao
                        </p>
                      </div>

                      <div
                        className={`relative pl-10 ${
                          isDarkMode
                            ? "border-l-2 border-emerald-500"
                            : "border-l-2 border-emerald-600"
                        } animate-slide-in`}
                        style={{ animationDelay: "0.2s" }}
                      >
                        <div
                          className={`absolute -left-2.5 top-0 h-5 w-5 rounded-full ${
                            isDarkMode
                              ? "bg-emerald-500 ring-4 ring-gray-900"
                              : "bg-emerald-600 ring-4 ring-white"
                          }`}
                        ></div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                          <h4
                            className={`text-xl font-semibold ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Call Center Associate
                          </h4>
                          <div
                            className={`px-3 py-1 rounded-full text-sm ${
                              isDarkMode
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-emerald-100 text-emerald-800"
                            }`}
                          >
                            August 2024 - November 2024
                          </div>
                        </div>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-400" : "text-gray-700"
                          } mb-2`}
                        >
                          TeleSupportBPO
                        </p>
                      </div>

                      <div
                        className={`relative pl-10 ${
                          isDarkMode
                            ? "border-l-2 border-emerald-500"
                            : "border-l-2 border-emerald-600"
                        } animate-slide-in`}
                        style={{ animationDelay: "0.3s" }}
                      >
                        <div
                          className={`absolute -left-2.5 top-0 h-5 w-5 rounded-full ${
                            isDarkMode
                              ? "bg-emerald-500 ring-4 ring-gray-900"
                              : "bg-emerald-600 ring-4 ring-white"
                          }`}
                        ></div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                          <h4
                            className={`text-xl font-semibold ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            App Development
                          </h4>
                          <div
                            className={`px-3 py-1 rounded-full text-sm ${
                              isDarkMode
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-emerald-100 text-emerald-800"
                            }`}
                          >
                            Feb 2024 - May -2024
                          </div>
                        </div>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-400" : "text-gray-700"
                          } mb-2`}
                        >
                          SNSU WAVES-TBI
                        </p>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-400" : "text-gray-700"
                          } mt-2`}
                        >
                          Front-end developer and hustler of the ePlete App.
                        </p>
                      </div>

                      <div
                        className={`relative pl-10 ${
                          isDarkMode
                            ? "border-l-2 border-emerald-500"
                            : "border-l-2 border-emerald-600"
                        } animate-slide-in`}
                        style={{ animationDelay: "0.4s" }}
                      >
                        <div
                          className={`absolute -left-2.5 top-0 h-5 w-5 rounded-full ${
                            isDarkMode
                              ? "bg-emerald-500 ring-4 ring-gray-900"
                              : "bg-emerald-600 ring-4 ring-white"
                          }`}
                        ></div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-2">
                          <h4
                            className={`text-xl font-semibold ${
                              isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            Start-Up Incubatees
                          </h4>
                          <div
                            className={`px-3 py-1 rounded-full text-sm ${
                              isDarkMode
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-emerald-100 text-emerald-800"
                            }`}
                          >
                            Nov 2023 - May 2024
                          </div>
                        </div>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-400" : "text-gray-700"
                          } mb-2`}
                        >
                          SNSU WAVES-TBI
                        </p>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-400" : "text-gray-700"
                          } mt-2`}
                        >
                          Member of ePlete (Electronic Fare Payment for Leisure
                          Expenses and Transportation Expenditures).
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "education" && (
                  <div className="animate-fade-in">
                    <h3
                      className={`text-2xl font-bold mb-8 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Education
                    </h3>

                    <div className="space-y-10">
                      <div
                        className={`relative pl-10 ${
                          isDarkMode
                            ? "border-l-2 border-emerald-500"
                            : "border-l-2 border-emerald-600"
                        } animate-slide-in`}
                        style={{ animationDelay: "0.1s" }}
                      >
                        <div
                          className={`absolute -left-2.5 top-0 h-5 w-5 rounded-full ${
                            isDarkMode
                              ? "bg-emerald-500 ring-4 ring-gray-900"
                              : "bg-emerald-600 ring-4 ring-white"
                          }`}
                        ></div>
                        <h4
                          className={`text-xl font-semibold ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Bachelor of Science in Information Technology
                        </h4>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-400" : "text-gray-700"
                          } mt-2 text-lg`}
                        >
                          Surigao del Norte State University
                        </p>
                        <div
                          className={`inline-block px-3 py-1 mt-3 rounded-full text-sm ${
                            isDarkMode
                              ? "bg-emerald-500/20 text-emerald-400"
                              : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          2019 - 2023
                        </div>
                      </div>

                      <div
                        className={`relative pl-10 ${
                          isDarkMode
                            ? "border-l-2 border-emerald-500"
                            : "border-l-2 border-emerald-600"
                        } animate-slide-in`}
                        style={{ animationDelay: "0.2s" }}
                      >
                        <div
                          className={`absolute -left-2.5 top-0 h-5 w-5 rounded-full ${
                            isDarkMode
                              ? "bg-emerald-500 ring-4 ring-gray-900"
                              : "bg-emerald-600 ring-4 ring-white"
                          }`}
                        ></div>
                        <h4
                          className={`text-xl font-semibold ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Senior High School
                        </h4>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-400" : "text-gray-700"
                          } mt-2 text-lg`}
                        >
                          Amando A. Fabio National High School
                        </p>
                        <div
                          className={`inline-block px-3 py-1 mt-3 rounded-full text-sm ${
                            isDarkMode
                              ? "bg-emerald-500/20 text-emerald-400"
                              : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          2017 - 2019
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold mb-6">Skills</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div
                        className="animate-slide-in"
                        style={{ animationDelay: "0.1s" }}
                      >
                        <h4 className="text-xl font-semibold mb-4 flex items-center">
                          <svg
                            className="w-6 h-6 mr-2 text-blue-800"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Programming
                        </h4>
                        <p className="text-gray-700">
                          Experienced beginner to intermediate in web
                          application development using HTML, CSS, and PHP with
                          the Laravel Framework. Also knowledgeable in basic
                          React Native for mobile applications, with growing
                          experience in building modern interfaces using Next.js
                          and Tailwind CSS.
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

                      <div
                        className="animate-slide-in"
                        style={{ animationDelay: "0.3s" }}
                      >
                        <h4 className="text-xl font-semibold mb-4 flex items-center">
                          <svg
                            className="w-6 h-6 mr-2 text-blue-800"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Entrepreneurial & Pitching Skills
                        </h4>
                        <p className="text-gray-700">
                          Basic pitching throughout OJT experience. Presentation
                          of startup ideas persuading audience to be pioneering
                          users.
                        </p>
                      </div>

                      <div
                        className="animate-slide-in"
                        style={{ animationDelay: "0.4s" }}
                      >
                        <h4 className="text-xl font-semibold mb-4 flex items-center">
                          <svg
                            className="w-6 h-6 mr-2 text-blue-800"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Project Proposal Development
                        </h4>
                        <p className="text-gray-700">
                          Capable of creating detailed project proposals,
                          including objectives, timelines, and resource
                          requirements.
                        </p>
                      </div>

                      <div
                        className="animate-slide-in"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <h4 className="text-xl font-semibold mb-4 flex items-center">
                          <svg
                            className="w-6 h-6 mr-2 text-blue-800"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Marketing Awareness
                        </h4>
                        <p className="text-gray-700">
                          Understanding of basic marketing principles and
                          strategies. Ability to integrate marketing concepts
                          into project proposals and presentations.
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
      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 mb-12">
            <div
              className={`h-px w-12 ${
                isDarkMode ? "bg-emerald-400" : "bg-emerald-600"
              }`}
            ></div>
            <h2
              className={`text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Get In Touch
            </h2>
            <div
              className={`h-px w-12 ${
                isDarkMode ? "bg-emerald-400" : "bg-emerald-600"
              }`}
            ></div>
          </div>

          <div
            className={`rounded-2xl shadow-xl overflow-hidden ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Contact Info Panel */}
              <div
                className={`lg:col-span-2 ${
                  isDarkMode ? "bg-emerald-700" : "bg-emerald-600"
                } text-white p-8 lg:p-10`}
              >
                <h3 className="text-2xl font-semibold mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div
                      className={`p-2 rounded-full mr-4 ${
                        isDarkMode ? "bg-emerald-600" : "bg-emerald-500"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <a href="tel:09709143842" className="hover:underline">
                      09709143842
                    </a>
                  </div>

                  <div className="flex items-center">
                    <div
                      className={`p-2 rounded-full mr-4 ${
                        isDarkMode ? "bg-emerald-600" : "bg-emerald-500"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <a
                      href="mailto:alsolarapole@gmail.com"
                      className="hover:underline"
                    >
                      alsolarapole@gmail.com
                    </a>
                  </div>

                  <div className="flex items-start">
                    <div
                      className={`p-2 rounded-full mr-4 mt-1 ${
                        isDarkMode ? "bg-emerald-600" : "bg-emerald-500"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      P-2 Lower Libas Tagana-an
                      <br />
                      Surigao del Norte
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Connect</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className={`p-2 rounded-full hover:opacity-80 transition-opacity ${
                        isDarkMode ? "bg-emerald-600" : "bg-emerald-500"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className={`p-2 rounded-full hover:opacity-80 transition-opacity ${
                        isDarkMode ? "bg-emerald-600" : "bg-emerald-500"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className={`p-2 rounded-full hover:opacity-80 transition-opacity ${
                        isDarkMode ? "bg-emerald-600" : "bg-emerald-500"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Details and Form Panel */}
              <div className="lg:col-span-3 p-8 lg:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3
                      className={`text-xl font-semibold mb-4 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Languages
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div
                          className={`w-full rounded-full h-2.5 ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className={`h-2.5 rounded-full w-1/3 ${
                              isDarkMode ? "bg-emerald-400" : "bg-emerald-600"
                            }`}
                          ></div>
                        </div>
                        <span
                          className={`ml-3 ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          English
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div
                          className={`w-full rounded-full h-2.5 ${
                            isDarkMode ? "bg-gray-700" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className={`h-2.5 rounded-full w-full ${
                              isDarkMode ? "bg-emerald-400" : "bg-emerald-600"
                            }`}
                          ></div>
                        </div>
                        <span
                          className={`ml-3 ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          Filipino
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3
                      className={`text-xl font-semibold mb-4 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Interests
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDarkMode
                            ? "bg-emerald-900 text-emerald-300"
                            : "bg-emerald-100 text-emerald-800"
                        }`}
                      >
                        Reading
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDarkMode
                            ? "bg-emerald-900 text-emerald-300"
                            : "bg-emerald-100 text-emerald-800"
                        }`}
                      >
                        Films
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDarkMode
                            ? "bg-emerald-900 text-emerald-300"
                            : "bg-emerald-100 text-emerald-800"
                        }`}
                      >
                        TV Series
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Alfonso A. Solar. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* Optional: Add this style for a visual indication when the Learn More button is clicked */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .learn-more-btn:active {
          animation: pulse 0.3s;
        }
      `}</style>
    </main>
  );
}
