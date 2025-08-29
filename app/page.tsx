"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState("experience");
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const tabs = [
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "skills", label: "Skills", icon: "⚡" },
  ];

  const skills = [
    { name: "React/Next.js", level: 85, color: "from-blue-500 to-cyan-400" },
    { name: "Laravel/PHP", level: 90, color: "from-red-500 to-orange-400" },
    { name: "React Native", level: 75, color: "from-purple-500 to-pink-400" },
    { name: "Tailwind CSS", level: 95, color: "from-teal-500 to-green-400" },
    { name: "JavaScript", level: 88, color: "from-yellow-500 to-amber-400" },
    { name: "UI/UX Design", level: 70, color: "from-indigo-500 to-purple-400" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              <span className="text-white">Alfonso</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                .dev
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {["About", "Resume", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
            {/* 
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="absolute inset-2 rounded-xl overflow-hidden">
                    <img
                      src="/alfonso_solar.jpg"
                      alt="Alfonso A. Solar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Tech overlay elements */}
                  <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              <div className="mb-6">
                <span className="text-cyan-400 text-sm uppercase tracking-wider font-mono">
                  &gt; Software Developer
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="text-white">Alfonso</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  Solar
                </span>
              </h1>

              <p className="text-gray-400 text-lg mb-8 max-w-lg font-light leading-relaxed">
                Crafting digital experiences with code. Transforming ideas into
                scalable solutions using modern web technologies and innovative
                approaches.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.a
                  href="mailto:alsolarapole@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Let's Connect
                </motion.a>
                {/* <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-700 text-white font-semibold rounded-xl hover:border-cyan-500 hover:shadow-lg transition-all duration-300"
                >
                  View Work
                </motion.a> */}
              </div>

              {/* Tech Stack Icons */}
              <div className="flex space-x-6">
                {["React", "Laravel", "Next.js", "Tailwind"].map(
                  (tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer text-sm font-mono"
                    >
                      {tech}
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute top-20 right-20 text-gray-700 font-mono text-sm opacity-50">
          <div>{"const developer = {"}</div>
          <div className="ml-4">{'name: "Alfonso",'}</div>
          <div className="ml-4">{'passion: "code"'}</div>
          <div>{"}"}</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <span className="text-cyan-400 font-mono text-sm">
                &lt;about /&gt;
              </span>
              <h2 className="text-4xl font-bold mt-4 mb-8">
                Building Digital Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Full-Stack Development",
                  description:
                    "Creating end-to-end web applications with Laravel backend and modern React frontends",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Mobile Innovation",
                  description:
                    "Building cross-platform mobile experiences that bridge the gap between web and native",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Startup Mindset",
                  description:
                    "Transforming ideas into viable products through lean development and strategic thinking",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7"
                      />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="text-cyan-400 mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="relative py-24 px-6">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <span className="text-cyan-400 font-mono text-sm">
                &lt;resume /&gt;
              </span>
              <h2 className="text-4xl font-bold mt-4 mb-8">
                Professional Journey
              </h2>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-1 flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className="text-sm">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto">
              {activeTab === "experience" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {[
                    {
                      title: "Software Developer",
                      company: "City Government of Surigao",
                      period: "Present",
                      status: "active",
                      description:
                        "Developing and maintaining government web applications and digital services",
                    },
                    {
                      title: "Call Center Associate",
                      company: "TeleSupportBPO",
                      period: "Aug 2024 - Nov 2024",
                      status: "completed",
                    },
                    {
                      title: "App Development",
                      company: "SNSU WAVES-TBI",
                      period: "Feb 2024 - May 2024",
                      status: "completed",
                      description:
                        "Front-end developer and hustler of the ePlete App",
                    },
                    {
                      title: "Start-Up Incubatees",
                      company: "SNSU WAVES-TBI",
                      period: "Nov 2023 - May 2024",
                      status: "completed",
                      description:
                        "Member of ePlete (Electronic Fare Payment for Leisure Expenses and Transportation Expenditures)",
                    },
                  ].map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {job.title}
                            </h3>
                            <p className="text-cyan-400 font-medium">
                              {job.company}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                job.status === "active"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-gray-700/50 text-gray-400"
                              }`}
                            >
                              {job.period}
                            </span>
                            {job.status === "active" && (
                              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                            )}
                          </div>
                        </div>
                        {job.description && (
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {job.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {[
                    {
                      degree: "Master in Information Technology",
                      school: "Surigao del Norte State University",
                      period: `2025 - Present`,
                      type: "Postgraduate",
                    },
                    {
                      degree: "Bachelor of Science in Information Technology",
                      school: "Surigao del Norte State University",
                      period: "2019 - 2023",
                      type: "Undergraduate",
                    },
                    {
                      degree: "Senior High School",
                      school: "Amando A. Fabio National High School",
                      period: "2017 - 2019",
                      type: "Secondary",
                    },
                  ].map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-purple-400 font-medium">
                              {edu.school}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400">
                              {edu.period}
                            </span>
                          </div>
                        </div>
                        <span className="text-gray-500 text-sm">
                          {edu.type} Education
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative"
                      >
                        <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-white">
                              {skill.name}
                            </h3>
                            <span className="text-cyan-400 font-mono text-sm">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Additional Skills */}
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6">
                      Core Competencies
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Web Development Mastery",
                          description:
                            "Expert in HTML, CSS, PHP with Laravel Framework. Building responsive, scalable web applications.",
                          tech: ["Laravel", "PHP", "HTML5", "CSS3"],
                        },
                        {
                          title: "Modern Frontend",
                          description:
                            "Creating dynamic user interfaces with React, Next.js, and Tailwind CSS for optimal user experience.",
                          tech: ["React", "Next.js", "Tailwind", "JavaScript"],
                        },
                        {
                          title: "Mobile Development",
                          description:
                            "Cross-platform mobile app development using React Native for iOS and Android platforms.",
                          tech: ["React Native", "Mobile UI", "Cross-platform"],
                        },
                        {
                          title: "Entrepreneurial Vision",
                          description:
                            "Strategic project development, proposal creation, and startup experience from incubation programs.",
                          tech: ["Strategy", "Pitching", "Project Management"],
                        },
                      ].map((competency, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300"
                        >
                          <h4 className="text-lg font-bold text-white mb-3">
                            {competency.title}
                          </h4>
                          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            {competency.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {competency.tech.map((t, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-md text-xs font-mono"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      {/* <section id="projects" className="relative py-24 px-6">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <span className="text-cyan-400 font-mono text-sm">
                &lt;projects /&gt;
              </span>
              <h2 className="text-4xl font-bold mt-4 mb-8">Featured Work</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  name: "ePlete App",
                  description:
                    "Electronic Fare Payment system for transportation and leisure expenses. Built during startup incubation program.",
                  tech: ["React Native", "Mobile Development", "Fintech"],
                  status: "Startup Project",
                },
                {
                  name: "Government Web Portal",
                  description:
                    "Modern web applications for city government services, improving citizen digital experience.",
                  tech: ["Laravel", "PHP", "Government Tech"],
                  status: "Production",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {project.name}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === "Production"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-cyan-500/20 text-cyan-400"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs font-mono border border-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <span className="text-cyan-400 font-mono text-sm">
                &lt;contact /&gt;
              </span>
              <h2 className="text-4xl font-bold mt-4 mb-8">
                Let's Build Something
              </h2>
            </div>

            <div className="max-w-6xl mx-auto flex justify-center px-4">
              <div className="w-full max-w-2xl">
                <div className="grid grid-cols-1 gap-12">
                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-8 mx-auto"
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-8 text-white text-center">
                          Contact Information
                        </h3>

                        <div className="space-y-6">
                          <motion.a
                            href="tel:09709143842"
                            whileHover={{ x: 10 }}
                            className="flex items-center group cursor-pointer"
                          >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mr-4">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                              </svg>
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm">Phone</p>
                              <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                09709143842
                              </p>
                            </div>
                          </motion.a>

                          <motion.a
                            href="mailto:alsolarapole@gmail.com"
                            whileHover={{ x: 10 }}
                            className="flex items-center group cursor-pointer"
                          >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm">Email</p>
                              <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                alsolarapole@gmail.com
                              </p>
                            </div>
                          </motion.a>

                          <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center mr-4">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm">Location</p>
                              <p className="text-white font-medium">
                                Surigao del Norte, Philippines
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-10 pt-8 border-t border-gray-800">
                          <h4 className="text-lg font-bold text-white mb-4 text-center">
                            Connect Online
                          </h4>
                          <div className="flex justify-center space-x-4">
                            <motion.a
                              href="https://www.linkedin.com/in/alfonso-solar-6a826618a"
                              target="_blank"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                            >
                              <svg
                                className="w-6 h-6 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                            </motion.a>
                            <motion.a
                              href="https://www.github.com/SolarismAl"
                              target="_blank"
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300"
                            >
                              <svg
                                className="w-6 h-6 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Contact Form */}
                  {/* <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group"
                >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-8 text-white text-center">
                  Send a Message
                  </h3>

                  <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                      placeholder="Your name"
                    />
                    </div>
                    <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                    Project Type
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300">
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>Consultation</option>
                    <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                    Message
                    </label>
                    <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                  </form>
                </div>
                </motion.div> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-gray-800/50">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0"
            >
              <div className="text-2xl font-bold">
                <span className="text-white">Alfonso</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  .dev
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Building the future, one line at a time
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Alfonso A. Solar. Crafted with
                passion and caffeine.
              </p>
              <p className="text-gray-600 text-xs mt-1 font-mono">
                {"{ Made with React + Tailwind + Love }"}
              </p>
            </motion.div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap");

        * {
          font-family: "Inter", sans-serif;
        }

        .font-mono {
          font-family: "JetBrains Mono", monospace;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #111;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }

        /* Glitch effect for hover states */
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        .hover-glitch:hover {
          animation: glitch 0.3s ease-in-out;
        }

        /* Gradient text animation */
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
