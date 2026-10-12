"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import photo from "./assets/Image.jpeg";

const roles = ["Data Analyst", "Data Scientist", "Data Engineer"];

export default function Welcome() {
  const [currentRole, setCurrentRole] = useState(0);
  const [showText, setShowText] = useState("");
  const [typing, setTyping] = useState(true);

  // Efek Mengetik (Typing Effect)
  useEffect(() => {
    let timeout;
    if (typing) {
      if (showText.length < roles[currentRole].length) {
        timeout = setTimeout(() => {
          setShowText(roles[currentRole].slice(0, showText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (showText.length > 0) {
        timeout = setTimeout(() => {
          setShowText(roles[currentRole].slice(0, showText.length - 1));
        }, 40);
      } else {
        setTyping(true);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [showText, typing, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-950 px-6 md:px-12 pt-28 pb-16 overflow-hidden relative text-slate-100"
    >
      {/* Subtle Background Ambience */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 max-w-6xl w-full relative z-10">
        {/* Photo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group shrink-0"
        >
          {/* Subtle Outer Ring */}
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-500/20 via-slate-800 to-transparent rounded-full blur-md group-hover:from-blue-500/40 transition-all duration-700"></div>

          <div className="relative">
            <img
              src={photo}
              alt="Raka Arrayan Muttaqien"
              className="w-56 h-56 sm:w-64 sm:h-64 lg:w-76 lg:h-76 rounded-full object-cover border-2 border-slate-800 shadow-xl z-10 relative transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          {/* Status Chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Available for Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-tight"
          >
            Hello, I'm <br />
            <span className="text-white">Raka Arrayan</span>
          </motion.h1>

          {/* Dynamic Typing Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-12 mb-6 flex items-center"
          >
            <div className="bg-slate-900 px-5 py-2 rounded-lg border-l-2 border-blue-500 border-r border-t border-b border-slate-800/80">
              <span className="text-lg md:text-xl font-mono text-slate-200 inline-block">
                {showText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 text-blue-400"
                >
                  |
                </motion.span>
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed mb-8"
          >
            Computer Engineering student at the{" "}
            <span className="text-slate-200 font-medium border-b border-blue-500/40 pb-0.5">
              University of Indonesia
            </span>{" "}
            focused on data analytics, machine learning, and enterprise data architecture. Passionate about building reliable data pipelines and delivering actionable analytical insights.
          </motion.p>

          {/* Actions & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            {/* CV Button */}
            <a
              href="https://drive.google.com/drive/folders/1xd1Z2GNYR2p46oNeGTd1m95nOImyyuco"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-mono text-xs font-medium tracking-wide shadow-sm"
            >
              Download CV <FaFileDownload className="text-xs" />
            </a>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/rakaarrayan27/",
                  title: "LinkedIn",
                },
                {
                  icon: <FaGithub />,
                  link: "https://github.com/raka-arrayan",
                  title: "GitHub",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -2 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.title}
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/40 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
