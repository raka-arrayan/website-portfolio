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
  SiApacheairflow,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import {
  MdOutlineAnalytics,
  MdOutlineBarChart,
  MdAutoGraph,
} from "react-icons/md";

const skillData = [
  {
    subTitle: "Data Engineering & Warehousing",
    skills: [
      { name: "SQL", icon: <SiPostgresql /> },
      { name: "BigQuery", icon: <SiGooglebigquery /> },
      { name: "Airflow", icon: <SiApacheairflow /> },
      { name: "Excel", icon: <FaFileExcel /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Docker", icon: <SiDocker /> },
    ],
  },
  {
    subTitle: "Business Intelligence & Visualization",
    skills: [
      { name: "Power BI", icon: <MdOutlineBarChart /> },
      { name: "Tableau", icon: <SiTableau /> },
      { name: "Looker Studio", icon: <SiLooker /> },
    ],
  },
  {
    subTitle: "Programming & Machine Learning",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Matplotlib", icon: <MdOutlineBarChart /> },
      { name: "Seaborn", icon: <MdAutoGraph />, color: "#4C8CBF" },
      { name: "Machine Learning", icon: <MdOutlineAnalytics /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-28 border-t border-slate-900 text-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            Technical Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Core Skills & Tools
          </h2>
          <div className="h-0.5 w-16 bg-blue-500 mt-3 rounded-full"></div>
        </motion.div>

        {/* MAIN PANEL */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-800/80"
        >
          <div className="space-y-12">
            {skillData.map((category, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-0.5 w-6 bg-blue-500"></div>
                  <h3 className="text-xs font-mono font-medium text-slate-300 uppercase tracking-widest">
                    {category.subTitle}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      variants={skillVariants}
                      whileHover={{
                        y: -3,
                        transition: { duration: 0.2 },
                      }}
                      className="group bg-slate-950/80 border border-slate-800/80 p-4 rounded-xl flex flex-col items-center justify-center transition-colors hover:border-blue-500/40"
                    >
                      <div className="text-2xl mb-2 text-slate-300 group-hover:text-blue-400 transition-colors">
                        {skill.icon}
                      </div>

                      <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 uppercase tracking-tight text-center transition-colors">
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