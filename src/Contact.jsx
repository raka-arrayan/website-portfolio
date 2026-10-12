"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { HiOutlineArrowRight, HiCheck } from "react-icons/hi";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "rakaarrayan27@gmail.com";

  const contactLinks = [
    {
      name: "Email",
      label: emailAddress,
      icon: <FaEnvelope />,
      link: `mailto:${emailAddress}`,
      color: "group-hover:text-blue-400",
    },
    {
      name: "WhatsApp",
      label: "+62 895 0909 9349",
      icon: <FaWhatsapp />,
      link: "https://wa.me/6289509099349",
      color: "group-hover:text-emerald-400",
    },
    {
      name: "LinkedIn",
      label: "Raka Arrayan Muttaqien",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/rakaarrayan27/",
      color: "group-hover:text-blue-400",
    },
  ];

  const handleContactAction = () => {
    window.location.href = `mailto:${emailAddress}`;
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="bg-slate-950 overflow-hidden text-slate-100">
      {/* 1. COLLABORATION BANNER */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/80 border border-slate-800 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <span className="text-blue-400 font-mono text-xs uppercase tracking-wider block mb-2 font-medium">
              Let's Connect & Collaborate
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight">
              Ready to work together?
            </h2>
            <p className="text-slate-400 text-sm">
              Open to Data Analytics, Data Science, and Data Engineering roles & projects.
            </p>
          </div>

          <motion.button
            onClick={handleContactAction}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-mono text-xs font-medium uppercase tracking-wider transition-colors flex items-center gap-2.5 shrink-0"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  Email Copied! <HiCheck size={16} />
                </motion.span>
              ) : (
                <motion.span
                  key="getintouch"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  Get In Touch <HiOutlineArrowRight className="text-base" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>

      {/* 2. CONTACT DETAILS */}
      <div className="py-24 px-6 md:px-12 border-t border-slate-900 mt-20">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="mb-14" variants={itemVariants}>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
              Reach Out Directly
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Contact
            </h2>
            <div className="h-0.5 w-16 bg-blue-500 mt-3 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactLinks.map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 p-6 rounded-xl transition-colors flex flex-col justify-between"
              >
                <div className="text-2xl text-slate-400 group-hover:text-blue-400 mb-4 transition-colors">
                  {contact.icon}
                </div>
                <div>
                  <h4 className="text-[10px] font-mono font-medium text-slate-500 uppercase tracking-widest mb-1">
                    {contact.name}
                  </h4>
                  <p
                    className={`text-sm font-medium text-slate-200 break-words ${contact.color} transition-colors`}
                  >
                    {contact.label}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3. CLEAN TEXT-BASED FOOTER */}
      <footer className="bg-black text-white pt-16 pb-12 px-6 md:px-12 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
            <div className="max-w-xs">
              {/* Text Logo: Simple "Raka." */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="mb-4 text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors focus:outline-none"
              >
                Raka<span className="text-blue-500">.</span>
              </button>
              <p className="text-slate-400 text-xs leading-relaxed">
                Computer Engineering student at Universitas Indonesia. Building robust data engineering pipelines & analytics.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <h5 className="text-slate-300 font-mono font-semibold uppercase text-[10px] tracking-wider mb-4">
                  Navigation
                </h5>
                <ul className="space-y-2 text-xs font-mono text-slate-400 uppercase tracking-wide">
                  {["home", "education", "experience", "skills", "projects"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href={`#${item}`}
                          className="hover:text-blue-400 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h5 className="text-slate-300 font-mono font-semibold uppercase text-[10px] tracking-wider mb-4">
                  Socials
                </h5>
                <ul className="space-y-2 text-xs font-mono text-slate-400 uppercase tracking-wide">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/rakaarrayan27/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/raka-arrayan"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/6289509099349"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-slate-500 text-[10px] font-mono uppercase tracking-wider">
            <p>© 2026 RAKA ARRAYAN MUTTAQIEN</p>
            <p>Portfolio</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
