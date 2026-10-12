import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setIsMobileMenuOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      if (scrollPos < 100) {
        setActiveSection(null);
        return;
      }

      const currentPos = scrollPos + 180;
      const allSections = [...menuItems, { id: "contact" }];

      for (const item of allSections) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (currentPos >= top && currentPos < top + height) {
          setActiveSection(item.id);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Simple Text Logo */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center group focus:outline-none z-50 relative"
          >
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Raka<span className="text-blue-500">.</span>
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8 text-xs font-mono uppercase tracking-wider">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer transition-all duration-300 relative py-1 ${
                    activeSection === item.id
                      ? "text-blue-400 font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                  )}
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-5 py-2 rounded-lg font-mono text-xs font-medium tracking-wider transition-all duration-300 border ${
                activeSection === "contact"
                  ? "bg-blue-500/20 border-blue-500 text-blue-300"
                  : "bg-slate-900 border-slate-800 text-slate-300 hover:border-blue-500/50 hover:text-blue-300"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Hamburger Button */}
          <button
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-slate-300 focus:outline-none z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 origin-left ${
                  isMobileMenuOpen ? "rotate-45 translate-x-1" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 origin-left ${
                  isMobileMenuOpen ? "-rotate-45 translate-x-1" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full Screen with completely solid background */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-20 z-40 bg-slate-950 border-t border-slate-800 md:hidden flex flex-col justify-between p-6 overflow-y-auto"
          >
            {/* Menu Links */}
            <ul className="flex flex-col gap-3 pt-6 w-full max-w-sm mx-auto">
              {menuItems.map((item, idx) => (
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer p-4 rounded-xl text-base font-mono uppercase tracking-widest transition-all border ${
                    activeSection === item.id
                      ? "bg-slate-900 border-blue-500/50 text-blue-400 font-semibold"
                      : "bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <span className="text-xs text-slate-500 font-mono">
                      0{idx + 1}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Bottom Contact CTA */}
            <div className="w-full max-w-sm mx-auto pt-6 pb-12 border-t border-slate-900">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold uppercase tracking-widest transition-colors shadow-lg shadow-blue-900/30 active:scale-95 flex items-center justify-center gap-2"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
