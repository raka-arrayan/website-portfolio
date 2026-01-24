"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

// Import Logos
import LogoUI from "./assets/LogoUI.png";
import Logo42 from "./assets/Logo42.png";

export default function Education() {
  const educationData = [
    {
      institution: "Universitas Indonesia",
      location: "Depok, Indonesia",
      logo: LogoUI, 
      degree: "Bachelor of Computer Engineering",
      period: "2023 – 2027",
      status: "Expected",
      details: [
        "GPA: 3.52 / 4.00",
        "Focusing on hardware software integration, embedded systems, and data structures.",
      ],
      isCurrent: true,
    },
    {
      institution: "SMA Negeri 42 Jakarta",
      location: "Jakarta, Indonesia",
      logo: Logo42, 
      degree: "Senior High School (Science Major)",
      period: "2020 – 2023",
      status: "Graduated",
      details: [
        "Rank 5 parallel of science major among 200 students",
        "Participant in Mathematics and Physics Science Competitions by Puspresnas",
      ],
      isCurrent: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      className="bg-white px-6 md:px-12 py-32 border-t border-gray-100"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* SECTION TITLE */}
        <motion.div className="mb-20" variants={itemVariants}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[2px] bg-yellow-600"></div>
            <span className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-xs">
              Learning Path
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-black uppercase tracking-tighter">
            Education
          </h2>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col md:flex-row gap-8 md:gap-16"
              variants={itemVariants}
            >
              {/* Date Column (Desktop) */}
              <div className="md:w-32 pt-2 shrink-0">
                <div className="sticky top-24">
                  <span className="text-lg font-black text-zinc-300 group-hover:text-yellow-600 transition-colors duration-500 tabular-nums">
                    {edu.period.split(" – ")[0]}
                  </span>

                  {edu.isCurrent && (
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
                      To Present
                    </div>
                  )}
                </div>
              </div>

              {/* Main Content Card */}
              <div
                className={`flex-1 relative border-l border-zinc-100 pl-8 md:pl-12 group-hover:border-yellow-600 transition-colors duration-500 ${
                  index === educationData.length - 1 ? "pb-0" : "pb-12"
                }`}
              >
                {/* Decorative Dot on Line */}
                <div className="absolute -left-[5px] top-3 w-2 h-2 rounded-full bg-zinc-200 group-hover:bg-yellow-600 group-hover:scale-150 transition-all duration-500"></div>

                <div className="bg-white border border-zinc-100 p-8 rounded-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
                    
                    {/* Instituition & Logo Wrapper */}
                    <div className="flex items-start gap-5">
                        {/* Logo Container */}
                        <div className="w-14 h-14 shrink-0 bg-zinc-50 rounded-xl flex items-center justify-center p-2 border border-zinc-100 group-hover:border-yellow-100 transition-colors">
                            <img 
                                src={edu.logo} 
                                alt={`${edu.institution} logo`} 
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div>
                            <div className="flex items-center gap-2 text-yellow-600 mb-1">
                                <FaGraduationCap className="text-lg" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">
                                {edu.status}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-black leading-tight">
                                {edu.institution}
                            </h3>
                        </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-bold text-zinc-400 uppercase tracking-tighter">
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-yellow-600" />{" "}
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <FaCalendarAlt className="text-yellow-600" />{" "}
                        {edu.period}
                      </div>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-zinc-50 mb-6"></div>

                  <h4 className="text-lg font-semibold text-zinc-800 mb-4 italic">
                    {edu.degree}
                  </h4>

                  <ul className="grid grid-cols-1 gap-3">
                    {edu.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 text-zinc-500 group/item transition-colors"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-200 group-hover/item:bg-yellow-600 shrink-0 transition-colors"></span>
                        <span className="text-sm leading-relaxed group-hover/item:text-zinc-900">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}