'use client';

export default function Education() {
    const educationData = [
        {
            institution: "Universitas Indonesia",
            location: "Depok, Indonesia",
            degree: "Bachelor of Computer Engineering",
            period: "Aug 2023 – 2027 (Expected)",
            details: [
                "GPA: 3.52 / 4.00",
                "Focusing on hardware-software integration, embedded systems, and data structures."
            ],
            isCurrent: true
        },
        {
            institution: "SMA Negeri 42 Jakarta",
            location: "Jakarta, Indonesia",
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
            className="bg-white px-6 md:px-12 py-24 border-t border-gray-100"
        >
            <div className="max-w-5xl mx-auto">
                {/* SECTION TITLE */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tight">
                        Education
                    </h2>
                    <div className="w-16 h-1 bg-yellow-600 mt-3"></div>
                </div>

                {/* EDUCATION CARDS CONTAINER */}
                <div className="space-y-8">
                    {educationData.map((edu, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-white border border-gray-200 p-8 transition-all duration-300 hover:border-yellow-600 hover:shadow-xl hover:shadow-gray-100"
                        >
                            {/* Accent Line (Tipis di samping) */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-100 group-hover:bg-yellow-600 transition-colors"></div>

                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="flex-1 pl-2">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs font-bold tracking-widest text-yellow-600 uppercase">
                                            {edu.location}
                                        </span>
                                        {edu.isCurrent && (
                                            <span className="text-[10px] px-2 py-0.5 bg-yellow-50 text-yellow-700 border border-yellow-200 font-bold uppercase rounded-full">
                                                Current
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold text-black mb-1">
                                        {edu.institution}
                                    </h3>
                                    
                                    <p className="text-lg font-medium text-gray-600 mb-6">
                                        {edu.degree}
                                    </p>

                                    <ul className="space-y-3">
                                        {edu.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-500 text-sm leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 mt-1.5 shrink-0"></div>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Period Tag */}
                                <div className="md:text-right shrink-0">
                                    <span className="text-sm font-semibold text-gray-400 tabular-nums">
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