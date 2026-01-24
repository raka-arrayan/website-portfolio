"use client";

import { motion } from "framer-motion";
import {
  SiPostgresql,
  SiGooglebigquery,
  SiTableau,
  SiLooker,
  SiPython,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import {
  MdOutlineAnalytics,
  MdOutlineScience,
  MdOutlineBarChart,
  MdAutoGraph,
} from "react-icons/md";

const skillData = [
  {
    subTitle: "Data & Analytics",
    skills: [
      { name: "SQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "BigQuery", icon: <SiGooglebigquery />, color: "#4285F4" },
      { name: "Excel", icon: <FaFileExcel />, color: "#1D6F42" },
    ],
  },
  {
    subTitle: "Business Intelligence & Visualization",
    skills: [
      { name: "Power BI", icon: <MdOutlineBarChart />, color: "#F2C811" },
      { name: "Tableau", icon: <SiTableau />, color: "#E97627" },
      { name: "Looker", icon: <SiLooker />, color: "#4285F4" },
    ],
  },
  {
    subTitle: "Programming & Data Science",
    skills: [
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "NumPy", icon: <SiNumpy />, color: "#4D77CF" },
      { name: "Pandas", icon: <SiPandas />, color: "#150458" },
      { name: "Matplotlib", icon: <MdOutlineBarChart />, color: "#11557C" },
      { name: "Seaborn", icon: <MdAutoGraph />, color: "#4C8CBF" },
      { name: "Machine Learning", icon: <MdOutlineAnalytics />, color: "#FF6F00" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* HEADER SECTION*/}
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
          <div className="w-16 h-1 bg-yellow-600 mt-3"></div>
        </motion.div>

        {/* MAIN PANEL */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-zinc-50/50 p-8 md:p-16 rounded-[2.5rem] border border-zinc-100 shadow-[0_40px_100px_rgba(0,0,0,0.03)]"
        >
          {/* Watermark Logo */}
          <div className="absolute -right-10 -top-10 text-[15rem] text-zinc-100/40 -z-0 pointer-events-none rotate-12">
            <MdOutlineScience />
          </div>

          <div className="relative z-10 space-y-16">
            {skillData.map((category, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-8 bg-zinc-200"></div>
                  <h3 className="text-xs font-black text-zinc-400 uppercase tracking-[0.4em]">
                    {category.subTitle}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      variants={skillVariants}
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.3 }
                      }}
                      className="group relative bg-white border border-zinc-100 p-6 rounded-[2rem] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-200/50"
                    >
                      {/* Glow Effect on Hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-[2rem]"
                        style={{ backgroundColor: skill.color }}
                      ></div>

                      <div 
                        className="text-4xl mb-4 transition-transform duration-500 group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      
                      <span className="text-[11px] font-black text-zinc-500 group-hover:text-black uppercase tracking-tighter text-center transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}