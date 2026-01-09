'use client';

import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5'; 
import beasiswa from './assets/beasiswa.jpeg';
import ime from './assets/ime.jpeg';
import kemenkeu from './assets/kemenkeu.jpeg';
import trui from './assets/Trui.jpg';

const workExperiences = [
    {
        title: 'Kementrian Keuangan Republik Indonesia',
        location: 'Central Jakarta',
        role: 'Data Analyst Intern',
        date: 'Jun 2025 – Aug 2025',
        image: kemenkeu,
        description: [
            'Processed and prepared regional and village non-financial data for analysis readiness.',
            'Assisted in organizing and cleaning datasets to support decision making.',
            'Designed structured reports with clear data presentation.',
            'Supported administrative tasks to ensure smooth workflow.'
        ]
    }
];

const organizationalExperiences = [
    {
        title: 'Ikatan Mahasiswa Elektro',
        location: 'UI Depok',
        role: 'Staff of Science and Technology Development',
        date: 'Feb 2024 – Dec 2024',
        image: ime,
        description: [
            'Served as Teknoskill SQL Mentor for Electrical Engineering students.',
            'Manager of Media and Partnership Division at National Electrical Summit (NEST UI).',
            'Person in Charge of Technoskill 1.0 (Fullstack Web Developer Workshop).',
            'Facilitator at ROTOM 1.0 (Road to OIM), leading PKM AI team.'
        ]
    },
    {
        title: 'Tim Robotika Universitas Indonesia',
        location: 'UI Depok',
        role: 'Programming Division – Racing Plane Team',
        date: 'Mar 2024 – Jan 2025',
        image: trui, 
        description: [
            'Contributed to software systems for autonomous aircraft control.',
            'Developed algorithms and control logic integrating hardware and software.'
        ]
    }
];

const scholarships = [
    {
        title: 'Beasiswa Unggulan Kemendikbud RI',
        location: 'Nasional',
        role: 'Scholarship Awardee',
        date: 'Sep 2024 – Present',
        image: beasiswa,
        description: [
            'Recipient of a competitive national scholarship awarded for academic achievement.',
            'Provided financial support and development opportunities for academic and personal growth.'
        ]
    }
];

export default function Experiences() {
    const [active, setActive] = useState(null);

    const renderCards = (data) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.map((item, idx) => (
                <div
                    key={idx}
                    className="group relative bg-white border border-gray-100 p-8 transition-all duration-300 hover:border-yellow-600 hover:shadow-2xl hover:shadow-gray-100 flex flex-col justify-between"
                >
                    {/* Thin Side Accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-50 group-hover:bg-yellow-600 transition-colors"></div>

                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-yellow-600 uppercase">
                                {item.date}
                            </span>
                            <span className="text-xs font-medium text-gray-300 group-hover:text-yellow-200 transition-colors">
                                0{idx + 1}
                            </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-black mb-1 group-hover:text-yellow-600 transition-colors">
                            {item.title}
                        </h3>
                        
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
                            {item.role}
                        </p>
                    </div>

                    {/* Animated Sleek Button */}
                    <button
                        onClick={() => setActive(item)}
                        className="
                            relative overflow-hidden group/btn
                            w-full py-3 bg-black text-white 
                            text-[10px] font-bold uppercase tracking-[0.2em]
                            transition-all duration-300
                            hover:bg-yellow-600 hover:text-black
                        "
                    >
                        <span className="relative z-10">See Details</span>
                    </button>
                </div>
            ))}
        </div>
    );

    return (
        <section id="experience" className="bg-white px-6 md:px-12 py-24 border-t border-gray-50">
            <div className="max-w-6xl mx-auto">
                
                {/* HEADER SECTION */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tight">
                        Experience
                    </h2>
                    <div className="w-16 h-1 bg-yellow-600 mt-3"></div>
                </div>

                {/* CATEGORIES */}
                <div className="space-y-20">
                    {/* WORK */}
                    <div className="animate-fadeIn">
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">01. Professional Work</h3>
                            <div className="h-[1px] flex-1 bg-gray-100"></div>
                        </div>
                        {renderCards(workExperiences)}
                    </div>

                    {/* ORGANIZATION */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">02. Leadership & Org</h3>
                            <div className="h-[1px] flex-1 bg-gray-100"></div>
                        </div>
                        {renderCards(organizationalExperiences)}
                    </div>

                    {/* SCHOLARSHIP */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">03. Recognitions</h3>
                            <div className="h-[1px] flex-1 bg-gray-100"></div>
                        </div>
                        {renderCards(scholarships)}
                    </div>
                </div>

                {/* MODAL (SLEEK VERSION) */}
                {active && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <div 
                            className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fadeIn"
                            onClick={() => setActive(null)}
                        ></div>
                        
                        <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden relative z-10 shadow-2xl flex flex-col md:flex-row animate-zoomIn rounded-sm">
                            <button
                                className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md text-black p-2 rounded-full hover:bg-yellow-600 transition-colors"
                                onClick={() => setActive(null)}
                            >
                                <IoCloseOutline size={20} />
                            </button>

                            <div className="md:w-1/2 h-64 md:h-auto">
                                <img
                                    src={active.image}
                                    alt={active.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                                <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest">
                                    {active.date}
                                2026
                                </span>
                                <h3 className="text-2xl font-bold text-black mt-2 mb-1">
                                    {active.title}
                                </h3>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
                                    {active.role}
                                </p>

                                <div className="space-y-4">
                                    {active.description.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 shrink-0"></div>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}