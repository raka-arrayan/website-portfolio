'use client';

import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';

export default function Contact() {
    const contactLinks = [
        {
            name: "Email",
            label: "rakaarrayan27@gmail.com",
            icon: <FaEnvelope />,
            link: "mailto:rakaarrayan27@gmail.com",
            color: "hover:text-yellow-600"
        },
        {
            name: "WhatsApp",
            label: "+62 895 0909 9349",
            icon: <FaWhatsapp />,
            link: "https://wa.me/6289509099349",
            color: "hover:text-green-500"
        },
        {
            name: "LinkedIn",
            label: "Raka Arrayan Muttaqien",
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/rakaarrayan27/",
            color: "hover:text-blue-600"
        }
    ];

    return (
        <section id="contact" className="bg-white">
            {/* 1. BOLD YELLOW BANNER (Inspired by BNC) */}
            <div className="bg-yellow-500 py-16 px-6 md:px-12">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-black text-black leading-tight mb-2">
                            What are you waiting for?
                        </h2>
                        <p className="text-black/80 font-bold uppercase tracking-widest text-sm">
                            Let's collaborate and build something great!
                        </p>
                    </div>
                </div>
            </div>

            {/* 2. FORMAL CONTACT DETAILS (Inspired by Card Rounded Design) */}
            <div className="py-24 px-6 md:px-12 border-t border-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tight">Contact</h2>
                        <div className="w-16 h-1 bg-yellow-600 mt-3"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactLinks.map((contact, idx) => (
                            <a 
                                key={idx}
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-white border border-gray-100 p-8 rounded-[2.5rem] transition-all duration-300 hover:border-yellow-600 hover:shadow-2xl hover:shadow-gray-100 overflow-hidden"
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-50 group-hover:bg-yellow-600 transition-colors"></div>
                                <div className="text-2xl text-black mb-4 group-hover:scale-110 transition-transform">
                                    {contact.icon}
                                </div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{contact.name}</h4>
                                <p className={`text-sm font-bold text-black break-words ${contact.color} transition-colors`}>
                                    {contact.label}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. SLEEK BLACK FOOTER (Inspired by BNC Footer) */}
            <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
                        <div className="max-w-xs">
                            <h3 className="text-2xl font-black tracking-tighter mb-4 italic">RAKA.</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                A Computer Engineering student passionate about data and web technology. Based in Indonesia.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <h5 className="text-yellow-500 font-bold uppercase text-xs tracking-widest mb-6">Navigation</h5>
                                <ul className="space-y-4 text-sm text-gray-400">
                                    <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                                    <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
                                    <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
                                    <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-yellow-500 font-bold uppercase text-xs tracking-widest mb-6">Socials</h5>
                                <ul className="space-y-4 text-sm text-gray-400">
                                    <li><a href="https://www.linkedin.com/in/rakaarrayan27/" className="hover:text-white transition-colors">LinkedIn</a></li>
                                    <li><a href="https://github.com/raka-arrayan" className="hover:text-white transition-colors">GitHub</a></li>
                                    <li><a href="https://wa.me/6289509099349" className="hover:text-white transition-colors">WhatsApp</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">
                        <p>© 2026 RAKA ARRAYAN MUTTAQIEN</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}