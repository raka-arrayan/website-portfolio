import { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. "Contact" dihapus dari sini agar tidak muncul di list utama (mencegah double)
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
      behavior: "smooth"
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
      
      // Kita tambahkan "contact" ke dalam loop deteksi agar tombol bisa berubah warna/status
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
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-black tracking-tighter text-black"
        >
          RAKA.
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-yellow-600"
                    : "text-black hover:text-yellow-600"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* 2. Tombol Contact Tunggal: Sekarang mengarah ke Section Contact */}
          <button
            onClick={() => scrollToSection("contact")}
            className={`px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95 border-2 ${
                activeSection === "contact"
                  ? "bg-yellow-700 border-yellow-700 text-black"
                  : "bg-yellow-600 border-yellow-600 text-black hover:bg-yellow-700 hover:border-yellow-700"
              }`}
          >
            Contact
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden p-2 text-black focus:outline-none z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[40] transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "80px" }}
      >
        <ul className="flex flex-col items-center gap-8 pt-12">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xl font-bold uppercase tracking-widest transition-colors ${
                activeSection === item.id ? "text-yellow-600" : "text-black"
              }`}
            >
              {item.label}
            </li>
          ))}
          
          {/* Tombol Contact di Mobile */}
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-4 bg-yellow-600 text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-yellow-700 shadow-lg active:scale-95 transition-transform"
          >
            Contact Me
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;