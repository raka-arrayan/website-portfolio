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
        "GPA: 3.56 / 4.00",
        "Relevant Coursework: Data Analytics, Database Systems & Practicum, Statistics, Probability & Stochastic Processes, Artificial Intelligence, Linear Algebra (Basic & Advanced), Big Data Technology",
        "Honors: Awardee of Beasiswa Unggulan Kemendikbud RI 2024 (National competitive scholarship)",
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      className="bg-slate-950 px-6 md:px-12 py-28 border-t border-slate-900 text-slate-100"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* SECTION TITLE */}
        <motion.div className="mb-16" variants={itemVariants}>
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Education
          </h2>
          <div className="h-0.5 w-16 bg-blue-500 mt-3 rounded-full"></div>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="group flex flex-col md:flex-row gap-6 md:gap-12"
              variants={itemVariants}
            >
              {/* Date Column (Desktop) */}
              <div className="md:w-32 pt-1 shrink-0">
                <span className="text-base font-mono font-medium text-slate-400 group-hover:text-blue-400 transition-colors">
                  {edu.period.split(" – ")[0]}
                </span>
                {edu.isCurrent && (
                  <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider mt-0.5">
                    Present
                  </div>
                )}
              </div>

              {/* Main Content Card */}
              <div
                className={`flex-1 relative border-l border-slate-800 pl-6 md:pl-10 group-hover:border-slate-700 transition-colors ${
                  index === educationData.length - 1 ? "pb-0" : "pb-10"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700 group-hover:bg-blue-500 group-hover:border-blue-400 transition-colors"></div>

                <div className="bg-slate-900/60 border border-slate-800/80 p-7 rounded-2xl transition-all hover:border-slate-700">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    {/* Institution & Logo */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center p-2 border border-slate-700">
                        <img
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 text-blue-400 text-xs font-mono mb-1">
                          <FaGraduationCap />
                          <span>{edu.status}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {edu.institution}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-blue-400" /> {edu.location}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <FaCalendarAlt className="text-blue-400" /> {edu.period}
                      </div>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-slate-800/80 mb-5"></div>

                  <h4 className="text-sm font-medium text-slate-300 mb-3 font-mono">
                    {edu.degree}
                  </h4>

                  <ul className="space-y-2.5">
                    {edu.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-slate-300 text-xs leading-relaxed"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 shrink-0"></span>
                        <span>{detail}</span>
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