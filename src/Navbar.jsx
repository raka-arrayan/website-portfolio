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

    const offset = 80; // Sesuaikan dengan tinggi navbar
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

  const handleContactClick = () => {
    window.location.href = "mailto:example@portfolio.com";
  };

  useEffect(() => {
    const handleScroll = () => {
      // 1. Ambil posisi scroll saat ini
      const scrollPos = window.scrollY;

      // 2. Jika posisi scroll sangat dekat dengan atas (kurang dari 100px), 
      // langsung set null dan berhenti. Ini kunci agar tidak otomatis kuning.
      if (scrollPos < 100) {
        setActiveSection(null);
        return;
      }

      // 3. Logika deteksi section
      const currentPos = scrollPos + 180; // offset sedikit lebih besar untuk akurasi
      
      for (const item of menuItems) {
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

    // Jalankan sekali saat mount untuk cek posisi awal
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

          <button
            onClick={handleContactClick}
            className="bg-yellow-600 text-black px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider 
                       hover:bg-yellow-700 transition-all duration-300 shadow-md active:scale-95"
          >
            Contact
          </button>
        </div>

        {/* Hamburger Button (Desktop Hidden) */}
        <button
          className="md:hidden p-2 text-black focus:outline-none"
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
          <button
            onClick={handleContactClick}
            className="mt-4 bg-yellow-600 text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-yellow-700 shadow-lg"
          >
            Contact Me
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;