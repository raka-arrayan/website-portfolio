"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

// Import Images
import Tableau from "./assets/Tableau.png";
import Sql from "./assets/Sql.jpg";
import Looker from "./assets/Looker.png";
import Powerbi from "./assets/Powerbi.png";
import NLP from "./assets/NLP.png";
import News from "./assets/News.png";
import Dengue from "./assets/Dengue.png";
import Propai from "./assets/Propai.png";
import Email from "./assets/Email.png"; // Import Project Baru

const projectsData = [
  {
    id: 1,
    category: "Data Analyst",
    title: "British Airways Customer Reviews Dashboard Using Tableau",
    image: Tableau,
    tech: "Microsoft Excel, Tableau",
    github: "https://github.com/raka-arrayan/British-Airways-customer-Reviews-Dashboard-Using-Tableau",
    description: "This project is an interactive Tableau dashboard that analyzes British Airways customer reviews from multiple perspectives, including geography, time, aircraft type, and service aspects.",
  },
  {
    id: 2,
    category: "Data Analyst",
    title: "Netflix Movies and TV Shows Analysis Using SQL",
    image: Sql,
    tech: "PostgreSQL, SQL",
    github: "https://github.com/raka-arrayan/Netflix-Movies-and-TV-Shows-Analysis-Using-SQL",
    description: "This project is an exploratory analysis of the Netflix Movies and TV Shows dataset using SQL focusing on content distribution and release trends.",
  },
  {
    id: 3,
    category: "Data Analyst",
    title: "Store Sales and Logistics Performance using Looker Studio",
    image: Looker,
    tech: "Microsoft Excel, Looker Studio",
    github: "https://github.com/raka-arrayan/Store-Sales-and-Logistics-Performance-Dashboard-Using-Looker-Studio",
    description: "This dashboard is designed to analyze sales and logistics performance at a retail store (SuperStore).",
  },
  {
    id: 4,
    category: "Data Analyst",
    title: "E-Commerce Analysis Using Power BI",
    image: Powerbi,
    tech: "Microsoft Excel, Power BI",
    github: "https://github.com/raka-arrayan/E-commerce-analysis-using-power-BI",
    description: "An E-Commerce analysis dashboard for the 2018–2019 period displaying revenue, profit, and sales volume.",
  },
  {
    id: 5,
    category: "Data Science",
    title: "Email Campaign Analysis", // Project Baru
    image: Email,
    tech: "Python, Machine Learning",
    github: "https://github.com/raka-arrayan/Email-Campaign-Analysis",
    description: "This project focuses on analyzing and improving marketing effectiveness by identifying key factors influencing email open rates. Key variables include subject line hotness, send time, word count, and past communications.",
  },
  {
    id: 6,
    category: "Data Science",
    title: "E-Commerce Review Sentiment Analyzer",
    image: NLP,
    tech: "Python, Streamlit, NLP",
    github: "https://github.com/raka-arrayan/NLP-FOR-E-COMMERCE-REVIEW-SENTIMENT",
    description: "A simple web app built with Streamlit that uses NLP to classify product reviews into Positive, Neutral, or Negative.",
  },
  {
    id: 7,
    category: "Data Science",
    title: "News Spam Classifier",
    image: News,
    tech: "Python, Machine Learning",
    github: "https://github.com/raka-arrayan/News_Spam_Classifier",
    description: "A machine learning-based application designed to identify whether a piece of news text is spam or not spam (ham).",
  },
  {
    id: 8,
    category: "Data Science",
    title: "Analysis Of Dengue",
    image: Dengue,
    tech: "Python, Machine Learning",
    github: "https://github.com/raka-arrayan/analysis-of-dengue",
    description: "Develop prediction models for early detection of dengue fever based on clinical and demographic data.",
  },
  {
    id: 9,
    category: "Web Development",
    title: "PropAI - Property Price Aggregator",
    image: Propai,
    tech: "React, Node.js, ML",
    github: "https://github.com/raka-arrayan/PROP_AI",
    description: "A property price aggregator platform supported by a machine learning model to generate accurate price estimates.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Data Analyst", "Data Science", "Web Development"];

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tight">Projects</h2>
            <div className="w-16 h-1 bg-yellow-600 mt-3"></div>
          </motion.div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                  filter === cat ? "bg-black text-white border-black" : "bg-white text-gray-400 border-gray-100 hover:border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-[2.5rem] overflow-hidden flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-60 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-600">{project.category}</span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <h4 className="text-xl font-bold text-black mb-4 leading-tight min-h-[3.5rem]">
                    {project.title}
                  </h4>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-auto text-left text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-yellow-600 transition-colors"
                  >
                    View Details <span className="text-lg">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative rounded-[2.5rem] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-yellow-600 hover:text-white transition-colors z-20"
                  onClick={() => setSelectedProject(null)}
                >
                  <IoCloseOutline size={24} />
                </button>

                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 h-64 md:h-auto">
                    <img src={selectedProject.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <span className="text-xs font-bold text-yellow-600 uppercase tracking-[0.2em]">{selectedProject.category}</span>
                    <h3 className="text-3xl font-bold text-black mt-2 mb-6 leading-tight">{selectedProject.title}</h3>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <h5 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Description</h5>
                        <p className="text-gray-600 leading-relaxed text-sm">{selectedProject.description}</p>
                      </div>
                      <div>
                        <h5 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Tech Stack</h5>
                        <p className="text-black font-bold text-sm italic">{selectedProject.tech}</p>
                      </div>
                    </div>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-yellow-600 hover:text-black transition-all"
                    >
                      <FaGithub size={18} /> View on GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}