"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { HiOutlineArrowRight, HiCheck } from "react-icons/hi";
import Logo from "./assets/Logo.png";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "rakaarrayan27@gmail.com";

  const contactLinks = [
    {
      name: "Email",
      label: emailAddress,
      icon: <FaEnvelope />,
      link: `mailto:${emailAddress}`,
      color: "group-hover:text-yellow-600",
    },
    {
      name: "WhatsApp",
      label: "+62 895 0909 9349",
      icon: <FaWhatsapp />,
      link: "https://wa.me/6289509099349",
      color: "group-hover:text-green-500",
    },
    {
      name: "LinkedIn",
      label: "Raka Arrayan Muttaqien",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/rakaarrayan27/",
      color: "group-hover:text-blue-600",
    },
  ];

  // Logika untuk tombol Get In Touch
  const handleContactAction = () => {
    // 1. Mencoba membuka aplikasi email default
    window.location.href = `mailto:${emailAddress}`;

    // 2. Menyalin ke clipboard sebagai backup
    navigator.clipboard.writeText(emailAddress);

    // 3. Memberikan feedback visual
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Varian Animasi Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="bg-white overflow-hidden">
      {/* 1. BOLD YELLOW BANNER*/}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-yellow-500 py-20 px-6 md:px-12 mx-4 md:mx-12 rounded-[2.5rem] mt-12 shadow-2xl shadow-yellow-200/50"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-black leading-tight mb-3">
              What are you waiting for?
            </h2>
            <p className="text-black/70 font-bold uppercase tracking-[0.2em] text-xs">
              Let's collaborate and build something great!
            </p>
          </div>

          {/* Tombol Interaktif dengan Feedback Copied */}
          <motion.button
            onClick={handleContactAction}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="min-w-[200px] h-[60px] flex items-center justify-center gap-3 bg-black text-white px-10 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-zinc-800 transition-all overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-yellow-500"
                >
                  Email Copied! <HiCheck size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="getintouch"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3"
                >
                  Get In Touch <HiOutlineArrowRight className="text-xl" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* 2. FORMAL CONTACT DETAILS */}
      <div className="py-32 px-6 md:px-12 border-t border-gray-50 mt-12">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tight">
              Contact
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-yellow-600 mt-3"
            ></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactLinks.map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group relative bg-white border border-zinc-100 p-10 rounded-[2.5rem] transition-all duration-500 hover:border-yellow-600 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-50 group-hover:bg-yellow-600 transition-colors"></div>
                <div className="text-3xl text-black mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {contact.icon}
                </div>
                <h4 className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em] mb-2 group-hover:text-yellow-600 transition-colors">
                  {contact.name}
                </h4>
                <p
                  className={`text-sm font-bold text-zinc-800 break-words ${contact.color} transition-colors`}
                >
                  {contact.label}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3. SLEEK BLACK FOOTER */}
      <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
            <div className="max-w-xs">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="mb-8 hover:opacity-80 transition-opacity"
              >
                <img
                  src={Logo}
                  alt="Logo"
                  className="h-10 w-auto object-contain"
                />
              </button>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                A Computer Engineering student passionate about data science and
                web technology. Constantly evolving with the tech landscape.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-16">
              <div>
                <h5 className="text-yellow-500 font-bold uppercase text-[10px] tracking-[0.4em] mb-8">
                  Navigation
                </h5>
                <ul className="space-y-4 text-sm font-semibold text-zinc-500 uppercase tracking-tighter">
                  {["home", "education", "experience", "projects"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href={`#${item}`}
                          className="hover:text-white hover:translate-x-1 inline-block transition-all"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h5 className="text-yellow-500 font-bold uppercase text-[10px] tracking-[0.4em] mb-8">
                  Socials
                </h5>
                <ul className="space-y-4 text-sm font-semibold text-zinc-500 uppercase tracking-tighter">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/rakaarrayan27/"
                      target="_blank"
                      className="hover:text-white hover:translate-x-1 inline-block transition-all"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/raka-arrayan"
                      target="_blank"
                      className="hover:text-white hover:translate-x-1 inline-block transition-all"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/6289509099349"
                      target="_blank"
                      className="hover:text-white hover:translate-x-1 inline-block transition-all"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
            <p>© 2026 RAKA ARRAYAN MUTTAQIEN</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
