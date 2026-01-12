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

const projectsData = [
  {
    id: 1,
    category: "Data Analyst",
    title: "British Airways Customer Reviews Dashboard",
    image: Tableau,
    tech: "Microsoft Excel, Tableau",
    github:
      "https://github.com/raka-arrayan/British-Airways-customer-Reviews-Dashboard-Using-Tableau",
    description:
      "This project is an interactive Tableau dashboard that analyzes British Airways customer reviews from multiple perspectives, including geography, time, aircraft type, and service aspects. The dashboard is designed to help users quickly understand overall performance and explore specific metrics dynamically.",
  },
  {
    id: 2,
    category: "Data Analyst",
    title: "Netflix Movies and TV Shows Analysis Using SQL",
    image: Sql,
    tech: "PostgreSQL, SQL",
    github:
      "https://github.com/raka-arrayan/Netflix-Movies-and-TV-Shows-Analysis-Using-SQL",
    description:
      "This project is an exploratory analysis of the Netflix Movies and TV Shows dataset using SQL. The analysis focuses on content distribution, release trends, genres, actors, countries of production, and indications of violent content.",
  },
  {
    id: 3,
    category: "Data Analyst",
    title: "Store Sales and Logistics Performance (Looker)",
    image: Looker,
    tech: "Microsoft Excel, Looker Studio",
    github:
      "https://github.com/raka-arrayan/Store-Sales-and-Logistics-Performance-Dashboard-Using-Looker-Studio",
    description:
      "This dashboard is designed to analyze sales and logistics performance at a retail store (SuperStore). The primary focus includes sales metrics, profitability, product performance, and shipping efficiency.",
  },
  {
    id: 4,
    category: "Data Analyst",
    title: "E-Commerce Analysis Using Power BI",
    image: Powerbi,
    tech: "Microsoft Excel, Power BI",
    github:
      "https://github.com/raka-arrayan/E-commerce-analysis-using-power-BI",
    description:
      "An E-Commerce analysis dashboard for the 2018–2019 period. The dashboard displays revenue, profit, sales volume, and data distribution by product category and region.",
  },
  {
    id: 5,
    category: "Data Science",
    title: "E-Commerce Review Sentiment Analyzer",
    image: NLP,
    tech: "Python, Streamlit, NLP",
    github:
      "https://github.com/raka-arrayan/NLP-FOR-E-COMMERCE-REVIEW-SENTIMENT",
    description:
      "A simple web app built with Streamlit that uses Natural Language Processing (NLP) to classify e-commerce product reviews into Positive, Neutral, or Negative.",
  },
  {
    id: 6,
    category: "Data Science",
    title: "News Spam Classifier",
    image: News,
    tech: "Python, Machine Learning",
    github: "https://github.com/raka-arrayan/News_Spam_Classifier",
    description:
      "A machine learning-based application designed to identify whether a piece of news text is spam or not spam (ham).",
  },
  {
    id: 7,
    category: "Data Science",
    title: "Analysis Of Dengue",
    image: Dengue,
    tech: "Python, Machine Learning",
    github: "https://github.com/raka-arrayan/analysis-of-dengue",
    description:
      "Develop prediction models for early detection of dengue fever based on clinical and demographic data using the best Machine Learning algorithms.",
  },
  {
    id: 8,
    category: "Web Development",
    title: "PropAI - Property Price Aggregator",
    image: Propai,
    tech: "React, Node.js, ML",
    github: "https://github.com/raka-arrayan/PROP_AI",
    description:
      "A property price aggregator platform. Supported by a machine learning model that analyzes property attributes to generate accurate price estimates.",
  },
];

// Varian Animasi
const rowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Data Analyst", "Data Science", "Web Development"];

  const renderRow = (categoryName) => {
    const filtered = projectsData.filter((p) => p.category === categoryName);
    if (filtered.length === 0) return null;

    return (
      <motion.div
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={rowVariants}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex items-center gap-4 mb-6"
        >
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">
            {categoryName}
          </h3>
          <div className="h-[1px] flex-1 bg-gray-100"></div>
        </motion.div>

        <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 0.98 }}
              className="min-w-[280px] md:min-w-[350px] snap-start bg-gray-50 rounded-[2.5rem] overflow-hidden flex flex-col border border-gray-100 transition-all duration-300 hover:border-yellow-600/30"
            >
              <div className="h-64 md:h-80 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h4 className="text-xl font-bold text-black mb-4 flex-1">
                  {project.title}
                </h4>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-left text-sm font-bold uppercase tracking-tighter flex items-center gap-2 hover:text-yellow-600 transition-colors group"
                >
                  Read More{" "}
                  <span className="text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="projects"
      className="bg-white py-24 px-6 md:px-12 border-t border-gray-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black uppercase tracking-tight">
              Projects
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-16 h-1 bg-yellow-600 mt-3"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                  filter === cat
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-400 border-gray-100 hover:border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Horizontal Rows */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filter === "All" ? (
              <>
                {renderRow("Data Analyst")}
                {renderRow("Data Science")}
                {renderRow("Web Development")}
              </>
            ) : (
              renderRow(filter)
            )}
          </motion.div>
        </AnimatePresence>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            >
              <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              ></div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 rounded-[2rem] shadow-2xl"
              >
                <button
                  className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-yellow-600 transition-colors z-20"
                  onClick={() => setSelectedProject(null)}
                >
                  <IoCloseOutline size={24} />
                </button>

                <div className="p-8 md:p-12">
                  <div className="rounded-2xl overflow-hidden mb-8">
                    <img
                      src={selectedProject.image}
                      className="w-full h-64 md:h-96 object-cover"
                      alt=""
                    />
                  </div>

                  <span className="text-xs font-bold text-yellow-600 uppercase tracking-[0.2em]">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-bold text-black mt-2 mb-6 leading-tight">
                    {selectedProject.title}
                  </h3>

                  <div className="grid md:grid-cols-3 gap-8 mb-8 border-y border-gray-100 py-6">
                    <div className="md:col-span-2">
                      <h5 className="text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest">
                        Description
                      </h5>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {selectedProject.description}
                      </p>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest">
                        Tech Stack
                      </h5>
                      <p className="text-black font-bold text-sm">
                        {selectedProject.tech}
                      </p>
                    </div>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-yellow-600 hover:text-black transition-all shadow-lg"
                  >
                    <FaGithub size={20} /> View on GitHub
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
