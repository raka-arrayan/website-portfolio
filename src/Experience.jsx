"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoCloseOutline,
  IoLocationOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import { HiArrowNarrowRight } from "react-icons/hi";

// Import Logo Assets
import LogoCimb from "./assets/Logo_Cimb.png";
import LogoKemenkeu from "./assets/LogoKemenkeu.png";
import LogoIme from "./assets/Logoime.png";
import LogoTrui from "./assets/LogoTRUI.png";
import Logokemendikbud from "./assets/Logokemendikbud.png";

// Import Background / Modal Images
import FotoCimb from "./assets/Foto_Cimb.jpeg";
import beasiswa from "./assets/beasiswa.jpeg";
import ime from "./assets/Ime.jpeg";
import kemenkeu from "./assets/kemenkeu.jpeg";
import trui from "./assets/Trui.jpg";

const workExperiences = [
  {
    title: "PT Bank CIMB Niaga Tbk",
    location: "South Jakarta",
    role: "Data Report Management Intern (MIS & Business Finance)",
    date: "23 Jun – 22 Dec 2026",
    logo: LogoCimb,
    image: FotoCimb,
    techStack: [
      "GCP",
      "BigQuery",
      "Apache Airflow",
      "Dataform",
      "Looker Studio",
      "Google Apps Script",
    ],
    description: [
      "Documented and optimized the on premises to cloud data migration architecture (Google Cloud Platform) utilizing Google BigQuery, Apache Airflow, and Dataform.",
      "Designed and developed an integrated Executive Daily Dashboard using Google BigQuery, Google Sheets, and Google Looker Studio as part of an initiative to migrate away from legacy reporting systems (Power Builder/SSRS).",
      "Created comprehensive data lineage documentation based on SQL Agent job scripts structured into Excel formats to support the executive daily dashboard project.",
      "Built script automation and data workflows using Google Apps Script to enhance the efficiency of tabular data exports and executive daily reporting.",
      "Managed document governance for the Enterprise Data Platform (EDP) migration project.",
    ],
  },
  {
    title: "Kementerian Keuangan Republik Indonesia",
    location: "Central Jakarta",
    role: "Data Analyst Intern",
    date: "Jun 2025 – Aug 2025",
    logo: LogoKemenkeu,
    image: kemenkeu,
    techStack: ["Data Analysis", "Data Cleaning", "Reporting", "Decision Support"],
    description: [
      "Processed and prepared regional and village non-financial data for analysis readiness.",
      "Assisted in organizing and cleaning datasets to support decision making.",
      "Designed structured reports with clear data presentation.",
      "Supported administrative tasks to ensure smooth workflow.",
    ],
  },
];

const organizationalExperiences = [
  {
    title: "Ikatan Mahasiswa Elektro",
    location: "UI Depok",
    role: "Staff of Science and Technology Development",
    date: "Feb 2024 – Dec 2024",
    logo: LogoIme,
    image: ime,
    techStack: ["SQL Mentoring", "Workshop", "AI Lead"],
    description: [
      "Served as Teknoskill SQL Mentor for Electrical Engineering students.",
      "Manager of Media and Partnership Division at National Electrical Summit (NEST UI).",
      "Person in Charge of Technoskill 1.0 (Fullstack Web Developer Workshop).",
      "Facilitator at ROTOM 1.0 (Road to OIM), leading PKM AI team.",
    ],
  },
  {
    title: "Tim Robotika Universitas Indonesia",
    location: "UI Depok",
    role: "Programming Division – Racing Plane Team",
    date: "Mar 2024 – Jan 2025",
    logo: LogoTrui,
    image: trui,
    techStack: ["Autonomous Control", "Algorithm Logic", "Hardware/Software"],
    description: [
      "Contributed to software systems for autonomous aircraft control.",
      "Developed algorithms and control logic integrating hardware and software.",
    ],
  },
];

const scholarships = [
  {
    title: "Beasiswa Unggulan Kemendikbud RI",
    location: "Nasional",
    role: "Scholarship Awardee",
    date: "Sep 2024 – Present",
    logo: Logokemendikbud,
    image: beasiswa,
    techStack: ["Academic Excellence", "Leadership Development"],
    description: [
      "Recipient of a competitive national scholarship awarded for academic achievement.",
      "Provided financial support and development opportunities for academic and personal growth.",
    ],
  },
];

// Varian Animasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Experiences() {
  const [active, setActive] = useState(null);

  const renderCards = (data) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {data.map((item, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          className="group relative bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 p-7 flex flex-col justify-between transition-all duration-300 rounded-2xl"
        >
          <div>
            {/* Header: Date Badge & Index Number */}
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-800/60 px-3 py-1 rounded-md border border-slate-700/60">
                <IoCalendarOutline className="text-blue-400" /> {item.date}
              </div>
              <span className="text-xl font-mono text-slate-600">
                0{idx + 1}
              </span>
            </div>

            {/* Logo & Judul */}
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center p-2 border border-slate-700 shadow-sm">
                <img
                  src={item.logo}
                  alt={`${item.title} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {item.role}
                </p>
              </div>
            </div>

            {/* Lokasi */}
            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-4">
              <IoLocationOutline className="text-blue-400" /> {item.location}
            </div>

            {/* Tech Stack Badges */}
            {item.techStack && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Tombol Detail */}
          <button
            onClick={() => setActive(item)}
            className="group/btn w-full py-2.5 px-4 border border-slate-800 hover:border-blue-500/50 rounded-lg text-xs font-mono font-medium tracking-wide uppercase transition-all bg-slate-900/80 hover:bg-slate-800/80"
          >
            <span className="flex items-center justify-center gap-2 text-slate-300 group-hover/btn:text-blue-300 transition-colors">
              View Experience Details{" "}
              <HiArrowNarrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 md:px-12 py-28 border-t border-slate-900 text-slate-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
            Career Timeline & History
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Work & Leadership Experience
          </h2>
          <div className="h-0.5 w-16 bg-blue-500 mt-3 rounded-full"></div>
        </motion.div>

        <div className="space-y-20">
          {/* 01. WORK */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                01 /
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Professional Internships
              </h3>
            </div>
            {renderCards(workExperiences)}
          </motion.div>

          {/* 02. ORGANIZATION */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                02 /
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Organizational Experiences
              </h3>
            </div>
            {renderCards(organizationalExperiences)}
          </motion.div>

          {/* 03. SCHOLARSHIP */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                03 /
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Honors & Scholarships
              </h3>
            </div>
            {renderCards(scholarships)}
          </motion.div>
        </div>

        {/* MODAL ANIMATION */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
            >
              <div
                className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
                onClick={() => setActive(null)}
              ></div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-900 border border-slate-800 w-full max-w-4xl max-h-[85vh] overflow-hidden relative z-10 shadow-2xl flex flex-col md:flex-row rounded-2xl"
              >
                <button
                  className="absolute top-4 right-4 z-20 bg-slate-800/90 text-slate-300 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors border border-slate-700"
                  onClick={() => setActive(null)}
                >
                  <IoCloseOutline size={20} />
                </button>

                <div className="md:w-5/12 h-56 md:h-auto overflow-hidden relative bg-slate-950">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg p-1.5 border border-slate-700 shadow-md">
                      <img
                        src={active.logo}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                        {active.location}
                      </span>
                      <h4 className="text-xs font-bold text-white">
                        {active.title}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="md:w-7/12 p-6 md:p-8 overflow-y-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 bg-slate-800 text-blue-300 border border-slate-700 text-xs font-mono rounded">
                      {active.date}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-snug">
                    {active.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-5 border-b border-slate-800 pb-3">
                    {active.role}
                  </p>

                  {active.techStack && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {active.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="space-y-3">
                    {active.description.map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0"></div>
                        <p className="text-slate-300 text-xs leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}