'use client';

export default function Education() {
    const educationData = [
        {
            institution: "Universitas Indonesia",
            location: "Depok",
            degree: "Bachelor of Computer Engineering",
            period: "Aug 2023 – Aug 2027 (Expected)",
            details: [
                "GPA: 3.52 / 4.00",
                "Focusing on hardware-software integration, embedded systems, and data structures."
            ],
            isCurrent: true
        },
        {
            institution: "SMA Negeri 42 Jakarta",
            location: "Jakarta",
            degree: "Senior High School (Science Major)",
            period: "Jul 2020 – Apr 2023",
            details: [
                "Rank 5 parallel of science major among 200 students",
                "Participant of a science competition in Mathematics by Puspresnas",
                "Participant of a science competition in Physics by Puspresnas"
            ],
            isCurrent: false
        }
    ];

    return (
        <section
            id="education"
            className="bg-white px-6 md:px-12 py-24 border-t border-gray-50"
        >
            <div className="max-w-6xl mx-auto">
                {/* SECTION TITLE */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter">
                        Education
                    </h2>
                    <div className="w-20 h-2 bg-yellow-600 mt-2"></div>
                </div>

                {/* TIMELINE CONTENT */}
                <div className="relative border-l-2 border-gray-100 ml-4 md:ml-0">
                    {educationData.map((edu, index) => (
                        <div key={index} className="mb-16 ml-8 relative">
                            {/* Bullet Point on Timeline */}
                            <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-4 border-white ${edu.isCurrent ? 'bg-yellow-600' : 'bg-black'}`}></div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-black text-black leading-none mb-1">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-yellow-600 font-bold text-sm uppercase tracking-widest mb-3">
                                        {edu.location}
                                    </p>
                                    
                                    <p className="text-xl font-bold text-gray-800 mb-4">
                                        {edu.degree}
                                    </p>

                                    <ul className="space-y-3">
                                        {edu.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-600 text-lg leading-relaxed">
                                                <span className="text-yellow-600 mt-1.5">•</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Date/Period */}
                                <div className="md:text-right">
                                    <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold tracking-wide ${edu.isCurrent ? 'bg-yellow-600 text-black' : 'bg-gray-100 text-gray-500'}`}>
                                        {edu.period}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}