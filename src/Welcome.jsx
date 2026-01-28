"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import photo from "./assets/Image.jpeg";

const roles = ["Data Analyst", "Data Scientist"];

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
      className="min-h-screen flex items-center justify-center bg-white px-6 md:px-12 pt-24 pb-12 overflow-hidden relative"
    >
      {/* Dekorasi Latar Belakang (Subtle) */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-yellow-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-zinc-50 rounded-full blur-3xl opacity-60 -z-10"></div>

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 max-w-6xl w-full">
        {/* Photo Container (Motion Reveal) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative group"
        >
          {/* Background Shape */}
          <div className="absolute -inset-4 bg-yellow-100 rounded-full scale-95 group-hover:scale-105 transition-transform duration-700 -z-10 opacity-50"></div>

          <div className="relative">
            <img
              src={photo}
              alt="Raka Arrayan Muttaqien"
              className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-black shadow-[15px_15px_0px_0px_rgba(217,119,6,1)] z-10 relative transition-all duration-500 group-hover:shadow-[20px_20px_0px_0px_rgba(217,119,6,1)] group-hover:-translate-y-2"
            />
          </div>
        </motion.div>

        {/* Text Content (Staggered Animation) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black mb-6 leading-[1.1] tracking-tighter"
          >
            Hello, I'm <br />
            <span className="text-black italic">Raka Arrayan</span>
          </motion.h1>

          {/* Dynamic Typing Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="h-12 mb-8 flex items-center"
          >
            <div className="bg-zinc-900 px-6 py-2 rounded-lg transform -skew-x-12 border-r-4 border-yellow-600">
              <span className="text-xl md:text-2xl font-bold text-white transform skew-x-12 inline-block">
                {showText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 text-yellow-500"
                >
                  |
                </motion.span>
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-zinc-500 text-base md:text-lg leading-relaxed mb-10 font-medium"
          >
            {/* Description */}

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              I am a{" "}
              <span className="font-bold text-black">Computer Engineering</span>{" "}
              student at the
              <span className="font-bold text-black border-b-2 border-yellow-600">
                {" "}
                University of Indonesia{" "}
              </span>
              with a strong commitment to continuous learning. I am motivated to
              pursue opportunities that challenge me and contribute to the
              development of my technical and professional skills.
            </p>
          </motion.p>

          {/* Actions & Socials (Reveal) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto"
          >
            {/* CV Button with Fill Effect */}
            <a
              href="https://drive.google.com/drive/folders/1xd1Z2GNYR2p46oNeGTd1m95nOImyyuco"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto overflow-hidden px-10 py-4 bg-black rounded-full transition-all duration-300 shadow-xl shadow-zinc-200"
            >
              <div className="absolute inset-0 w-0 bg-yellow-600 transition-all duration-300 group-hover:w-full"></div>
              <span className="relative z-10 flex items-center justify-center gap-3 text-white font-bold text-sm uppercase tracking-widest group-hover:text-black">
                Download CV <FaFileDownload />
              </span>
            </a>

            {/* Social Icons with Hover scale */}
            <div className="flex gap-8">
              {[
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/rakaarrayan27/",
                },
                { icon: <FaGithub />, link: "https://github.com/raka-arrayan" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-3xl hover:text-yellow-600 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator removed here */}
    </section>
  );
}
