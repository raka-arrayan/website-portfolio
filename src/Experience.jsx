"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoCloseOutline,
  IoLocationOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import { HiArrowNarrowRight } from "react-icons/hi";

// Import Assets
import beasiswa from "./assets/beasiswa.jpeg";
import ime from "./assets/Ime.jpeg";
import kemenkeu from "./assets/kemenkeu.jpeg";
import trui from "./assets/Trui.jpg";

const workExperiences = [
  {
    title: "Kementerian Keuangan Republik Indonesia",
    location: "Central Jakarta",
    role: "Data Analyst Intern",
    date: "Jun 2025 – Aug 2025",
    image: kemenkeu,
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
    image: ime,
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
    image: trui,
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
    image: beasiswa,
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
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Experiences() {
  const [active, setActive] = useState(null);

  const renderCards = (data) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      {data.map((item, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          className="group relative bg-white border border-gray-100 p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(234,179,8,0.1)] hover:-translate-y-2 rounded-2xl"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50/50 rounded-bl-full -z-10 group-hover:bg-yellow-100 transition-colors"></div>

          <div className="relative">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full uppercase">
                <IoCalendarOutline /> {item.date}
              </div>
              <span className="text-2xl font-black text-gray-100 group-hover:text-yellow-200 transition-colors">
                0{idx + 1}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-yellow-600 transition-colors duration-300">
              {item.title}
            </h3>

            <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold mb-8 uppercase tracking-tighter">
              <IoLocationOutline className="text-yellow-600" /> {item.location}{" "}
              | {item.role}
            </div>
          </div>

          <button
            onClick={() => setActive(item)}
            className="group/btn relative w-full overflow-hidden py-4 px-6 border border-black rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
          >
            <div className="absolute inset-0 w-0 bg-black transition-all duration-300 group-hover/btn:w-full"></div>
            <span className="relative z-10 flex items-center justify-center gap-2 text-black group-hover/btn:text-white transition-colors">
              See Project Details <HiArrowNarrowRight className="text-lg" />
            </span>
          </button>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section
      id="experience"
      className="bg-white px-6 md:px-12 py-32 border-t border-gray-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black uppercase tracking-tight">
            Experience
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1.5 bg-yellow-600 mt-4"
          ></motion.div>
        </motion.div>

        <div className="space-y-32">
          {/* WORK */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-50 hidden md:block"></div>
            <div className="flex items-center gap-6 mb-12">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-black text-sm">
                01
              </div>
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-black">
                Professional Internship
              </h3>
            </div>
            {renderCards(workExperiences)}
          </motion.div>

          {/* ORGANIZATION */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-50 hidden md:block"></div>
            <div className="flex items-center gap-6 mb-12">
              <div className="w-12 h-12 rounded-full bg-yellow-600 text-black flex items-center justify-center font-black text-sm">
                02
              </div>
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-black">
                Organizational Experiences
              </h3>
            </div>
            {renderCards(organizationalExperiences)}
          </motion.div>

          {/* SCHOLARSHIP */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-50 hidden md:block"></div>
            <div className="flex items-center gap-6 mb-12">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-black text-sm">
                03
              </div>
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-black">
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
              className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            >
              <div
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                onClick={() => setActive(null)}
              ></div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white w-full max-w-5xl max-h-[85vh] overflow-hidden relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row rounded-3xl"
              >
                <button
                  className="absolute top-6 right-6 z-20 bg-black text-white p-3 rounded-full hover:bg-yellow-600 hover:text-black transition-all shadow-lg"
                  onClick={() => setActive(null)}
                >
                  <IoCloseOutline size={24} />
                </button>

                <div className="md:w-1/2 h-72 md:h-auto overflow-hidden">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="md:w-1/2 p-10 md:p-16 overflow-y-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 bg-yellow-100 text-yellow-700 text-[10px] font-black uppercase tracking-widest rounded-full">
                      {active.date}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-black mb-2 leading-tight">
                    {active.title}
                  </h3>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-10 border-b border-gray-100 pb-6">
                    {active.role}
                  </p>

                  <div className="space-y-6">
                    {active.description.map((item, i) => (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        key={i}
                        className="flex gap-5 items-start group/desc"
                      >
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 shrink-0 group-hover/desc:scale-150 transition-transform"></div>
                        <p className="text-gray-600 text-base leading-relaxed">
                          {item}
                        </p>
                      </motion.div>
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
