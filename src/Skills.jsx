"use client";

import { motion } from "framer-motion";
import {
  SiPostgresql,
  SiGooglebigquery,
  SiTableau,
  SiLooker,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import {
  MdOutlineAnalytics,
  MdTerminal,
  MdOutlineScience,
  MdLanguage,
  MdOutlineBarChart,
  MdAutoGraph,
} from "react-icons/md";

const skillCategories = [
  {
    title: "Data Analyst",
    icon: <MdOutlineAnalytics />,
    skills: [
      { name: "SQL", icon: <SiPostgresql /> },
      { name: "BigQuery", icon: <SiGooglebigquery /> },
      { name: "Excel", icon: <FaFileExcel /> },
      { name: "Power BI", icon: <MdOutlineBarChart /> },
      { name: "Tableau", icon: <SiTableau /> },
      { name: "Looker", icon: <SiLooker /> },
    ],
  },
  {
    title: "Data Science",
    icon: <MdOutlineScience />,
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "Machine Learning", icon: <MdAutoGraph /> },
      { name: "Analytics", icon: <MdOutlineAnalytics /> },
    ],
  },
  {
    title: "Frontend",
    icon: <MdLanguage />,
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
  {
    title: "Backend",
    icon: <MdTerminal />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
    ],
  },
];

// Varian Animasi untuk Panel Utama
const panelVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      staggerChildren: 0.1 
    }
  }
};

// Varian Animasi untuk Tiap Kotak Skill
const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "backOut" }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tight">
            My Skills
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-yellow-600 mt-3"
          ></motion.div>
        </motion.div>

        {/* SKILLS PANELS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={panelVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative group bg-zinc-50/50 p-10 rounded-2xl border border-transparent hover:border-yellow-600/30 hover:bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              {/* Watermark Icon */}
              <motion.div 
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute right-6 top-6 text-9xl text-zinc-100 group-hover:text-yellow-50 transition-colors duration-500 -z-0 pointer-events-none"
              >
                {category.icon}
              </motion.div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 flex items-center justify-center bg-black text-white text-2xl rounded-xl group-hover:bg-yellow-600 group-hover:text-black transition-colors duration-300"
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-black uppercase tracking-widest">
                      {category.title}
                    </h3>
                    <div className="h-0.5 w-8 bg-yellow-600 mt-1"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      variants={skillVariants}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="flex flex-col items-center justify-center p-4 bg-white border border-zinc-100 rounded-xl shadow-sm hover:shadow-md hover:border-yellow-600/50 transition-all duration-300 group/item"
                    >
                      <span className="text-2xl text-zinc-400 group-hover/item:text-yellow-600 transition-colors mb-2">
                        {skill.icon}
                      </span>
                      <span className="text-[10px] font-bold text-zinc-500 group-hover/item:text-black uppercase tracking-tighter text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER DECORATION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24 flex flex-col items-center gap-4"
        >
        </motion.div>
      </div>
    </section>
  );
}