'use client';

import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5'; 
import beasiswa from './assets/beasiswa.jpeg';
import ime from './assets/ime.jpeg';
import kemenkeu from './assets/kemenkeu.jpeg';

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
        image: '/assets/robotics.jpg', // Pastikan file ini ada
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
                    className="group relative bg-white border-2 border-gray-100 p-8 hover:border-yellow-600 transition-all duration-300 flex flex-col justify-between"
                >
                    {/* Decorative Acent */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gray-50 group-hover:bg-yellow-600 transition-colors flex items-center justify-center">
                         <span className="text-gray-300 group-hover:text-black font-bold">0{idx + 1}</span>
                    </div>

                    <div>
                        <p className="text-yellow-600 font-bold text-xs uppercase tracking-widest mb-2">{item.date}</p>
                        <h3 className="text-2xl font-black text-black leading-tight mb-2 group-hover:text-yellow-600 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-gray-500 font-medium mb-6 uppercase text-sm tracking-wide">{item.role}</p>
                    </div>

                    <button
                        onClick={() => setActive(item)}
                        className="w-full py-3 bg-black text-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-yellow-600 hover:text-black transition-all"
                    >
                        See Details
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
                    <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter">
                        Experience
                    </h2>
                    <div className="w-24 h-3 bg-yellow-600 mt-2"></div>
                </div>

                {/* CATEGORIES */}
                <div className="space-y-24">
                    <div className="animate-fadeIn">
                        <div className="flex items-center gap-4 mb-10">
                            <h3 className="text-xl font-black uppercase tracking-widest text-gray-400">01. Work</h3>
                            <div className="h-[1px] flex-1 bg-gray-100"></div>
                        </div>
                        {renderCards(workExperiences)}
                    </div>

                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <h3 className="text-xl font-black uppercase tracking-widest text-gray-400">02. Organization</h3>
                            <div className="h-[1px] flex-1 bg-gray-100"></div>
                        </div>
                        {renderCards(organizationalExperiences)}
                    </div>

                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <h3 className="text-xl font-black uppercase tracking-widest text-gray-400">03. Scholarship</h3>
                            <div className="h-[1px] flex-1 bg-gray-100"></div>
                        </div>
                        {renderCards(scholarships)}
                    </div>
                </div>

                {/* POLISHED MODAL */}
                {active && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
                        {/* Overlay */}
                        <div 
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fadeIn"
                            onClick={() => setActive(null)}
                        ></div>
                        
                        {/* Modal Content */}
                        <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-zoomIn">
                            <button
                                className="absolute top-4 right-4 z-20 bg-black text-white p-2 hover:bg-yellow-600 hover:text-black transition-colors"
                                onClick={() => setActive(null)}
                            >
                                <IoCloseOutline size={24} />
                            </button>

                            <div className="flex flex-col md:flex-row">
                                {/* Image side */}
                                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                                    <img
                                        src={active.image}
                                        alt={active.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text side */}
                                <div className="md:w-1/2 p-8 md:p-12">
                                    <span className="bg-yellow-600 text-black px-3 py-1 text-xs font-bold uppercase tracking-widest">
                                        {active.date}
                                    </span>
                                    <h3 className="text-3xl font-black text-black mt-4 mb-2 leading-none">
                                        {active.title}
                                    </h3>
                                    <p className="text-gray-400 font-bold uppercase text-sm tracking-widest mb-8">
                                        {active.role}
                                    </p>

                                    <div className="space-y-4">
                                        {active.description.map((item, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <div className="w-1.5 h-1.5 bg-yellow-600 mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}