"use client";

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

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* HEADER SECTION */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tight">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-yellow-600 mt-3"></div>
        </div>

        {/* SKILLS GRID (Formal & Non-Slider) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-gray-100 p-8 transition-all duration-300 hover:border-yellow-600 hover:shadow-xl hover:shadow-gray-50"
            >
              {/* Thin Side Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-50 group-hover:bg-yellow-600 transition-colors"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl text-black group-hover:text-yellow-600 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-widest text-black">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-gray-300">0{idx + 1}</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 text-gray-600 font-semibold text-xs uppercase tracking-wider transition-all hover:bg-white hover:border-yellow-600 hover:text-black cursor-default"
                    >
                      <span className="text-yellow-600">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER QUOTE - Minimalist */}
        <div className="mt-16 flex items-center gap-6 text-gray-400">
           <div className="h-[1px] flex-1 bg-gray-100"></div>
           <p className="italic text-sm font-medium">
             Continuously evolving with the tech landscape
           </p>
           <div className="h-[1px] flex-1 bg-gray-100"></div>
        </div>

      </div>
    </section>
  );
}