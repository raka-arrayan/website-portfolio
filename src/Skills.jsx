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
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import {
  MdOutlineAnalytics,
  MdTerminal,
  MdOutlineScience,
  MdOutlineBarChart,
  MdAutoGraph,
} from "react-icons/md";

const skillData = [
  {
    mainTitle: "Data",
    mainIcon: <MdOutlineScience />,
    subCategories: [
      {
        subTitle: "Data & Analytics",
        skills: [
          { name: "SQL", icon: <SiPostgresql /> },
          { name: "BigQuery", icon: <SiGooglebigquery /> },
          { name: "Excel", icon: <FaFileExcel /> },
        ],
      },
      {
        subTitle: "Business Intelligence & Visualization",
        skills: [
          { name: "Power BI", icon: <MdOutlineBarChart /> }, // Menggunakan Md agar tidak Error
          { name: "Tableau", icon: <SiTableau /> },
          { name: "Looker", icon: <SiLooker /> },
        ],
      },
      {
        subTitle: "Programming",
        skills: [
          { name: "Python", icon: <SiPython /> },
          { name: "NumPy", icon: <SiNumpy /> },
          { name: "Pandas", icon: <SiPandas /> },
          { name: "Matplotlib", icon: <MdOutlineBarChart /> },
          { name: "Seaborn", icon: <MdAutoGraph /> },
          { name: "Machine Learning", icon: <MdOutlineAnalytics /> },
        ],
      },
    ],
  },
  {
    mainTitle: "Web Development",
    mainIcon: <MdTerminal />,
    subCategories: [
      {
        subTitle: "Frontend",
        skills: [
          { name: "React", icon: <SiReact /> },
          { name: "Tailwind", icon: <SiTailwindcss /> },
          { name: "JavaScript", icon: <SiJavascript /> },
          { name: "HTML", icon: <SiHtml5 /> },
          { name: "CSS", icon: <SiCss3 /> },
        ],
      },
      {
        subTitle: "Backend",
        skills: [
          { name: "Node.js", icon: <SiNodedotjs /> },
          { name: "Express", icon: <SiExpress /> },
        ],
      },
    ],
  },
];

// Varian Animasi
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

        {/* SKILLS PANELS (2 Boxes) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillData.map((panel, idx) => (
            <motion.div
              key={idx}
              variants={panelVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative group bg-zinc-50/50 p-8 md:p-12 rounded-[2.5rem] border border-transparent hover:border-yellow-600/30 hover:bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col"
            >
              {/* Main Title & Icon */}
              <div className="flex items-center gap-4 mb-12">
                <div className="w-14 h-14 flex items-center justify-center bg-black text-white text-3xl rounded-2xl group-hover:bg-yellow-600 group-hover:text-black transition-colors duration-300">
                  {panel.mainIcon}
                </div>
                <h3 className="text-2xl font-black text-black uppercase tracking-tighter">
                  {panel.mainTitle}
                </h3>
              </div>

              {/* Sub Categories Mapping */}
              <div className="space-y-12">
                {panel.subCategories.map((sub, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                        {sub.subTitle}
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {sub.skills.map((skill, kIdx) => (
                        <motion.div
                          key={kIdx}
                          variants={skillVariants}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className="flex flex-col items-center justify-center p-4 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md hover:border-yellow-600/50 transition-all duration-300 group/item"
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
                ))}
              </div>

              {/* Watermark Icon */}
              <div className="absolute right-10 top-10 text-[10rem] text-zinc-100/50 group-hover:text-yellow-500/5 transition-colors duration-500 -z-0 pointer-events-none">
                {panel.mainIcon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}