'use client';

import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// Pastikan path import benar
import photo from './assets/photo.jpeg'; 

const roles = ['Data Analyst', 'Data Scientist', 'Web Developer'];

export default function Welcome() {
    const [currentRole, setCurrentRole] = useState(0);
    const [showText, setShowText] = useState('');
    const [typing, setTyping] = useState(true);

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
            className="
                min-h-screen 
                flex 
                items-center 
                justify-center 
                bg-white 
                px-6 
                md:px-12 
                pt-24 pb-12 
                md:pt-0 md:pb-0
            "
        >
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl w-full">

                {/* Photo Container */}
                <div className="flex-shrink-0 animate-fadeIn">
                    <img
                        src={photo}
                        alt="Raka Arrayan Muttaqien"
                        className="
                            w-48 h-48
                            sm:w-56 sm:h-56
                            md:w-64 md:h-64
                            lg:w-80 lg:h-80
                            rounded-full
                            object-cover
                            border-4
                            border-black
                            shadow-[10px_10px_0px_0px_rgba(217,119,6,1)] 
                            /* Shadow kuning gelap mengikuti tema navbar */
                        "
                    />
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
                    <p className="text-gray-500 text-lg md:text-xl mb-1 font-medium">
                        Hello, I'm
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4 leading-tight">
                        Raka Arrayan Muttaqien
                    </h1>

                    {/* Typing Role */}
                    <div className="h-10 mb-6">
                        <span className="text-xl md:text-2xl font-bold text-yellow-600">
                            {showText}
                            <span className="animate-ping ml-1">|</span>
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                        I'm a student at the <span className="font-bold text-black border-b-2 border-yellow-600">University of Indonesia</span> studying <span className="font-bold text-black">Computer Engineering</span>. I'm a quick learner and enjoy taking on challenging projects that push my abilities to the max.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                        {/* CV Button */}
                        <a
                            href="#CV_LINK_HERE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center px-8 py-3 bg-black text-white font-bold text-lg transition-all hover:bg-yellow-600 hover:text-black border-2 border-black"
                        >
                            Download CV
                        </a>

                        {/* Social Icons */}
                        <div className="flex gap-6">
                            <a
                                href="https://www.linkedin.com/in/rakaarrayan27/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black text-3xl hover:text-yellow-600 transition-transform hover:scale-110"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://github.com/raka-arrayan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black text-3xl hover:text-yellow-600 transition-transform hover:scale-110"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}