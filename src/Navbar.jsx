import { useState, useEffect } from "react";

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
    <nav className="fixed top-0 w-full z-50 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Simple Text Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center group focus:outline-none"
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
          className="md:hidden p-2 text-slate-300 focus:outline-none z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2 bg-blue-400" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2 bg-blue-400" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/95 backdrop-blur-2xl z-[40] transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "80px" }}
      >
        <ul className="flex flex-col items-center gap-8 pt-12">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-base font-mono uppercase tracking-widest transition-colors ${
                activeSection === item.id ? "text-blue-400 font-semibold" : "text-slate-300"
              }`}
            >
              {item.label}
            </li>
          ))}

          <button
            onClick={() => scrollToSection("contact")}
            className="mt-4 bg-blue-500/15 border border-blue-500/40 text-blue-300 px-8 py-3 rounded-lg font-mono text-xs font-semibold uppercase tracking-widest active:scale-95 transition-transform"
          >
            Contact Me
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
