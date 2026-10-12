"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { HiArrowNarrowRight } from "react-icons/hi";

// Import Images
import Big4 from "./assets/Big4.jpg";
import Tableau from "./assets/Tableau.png";
import Sql from "./assets/Sql.jpg";
import Looker from "./assets/Looker.png";
import Powerbi from "./assets/Powerbi.png";
import NLP from "./assets/NLP.png";
import News from "./assets/News.png";
import Dengue from "./assets/Dengue.png";
import Propai from "./assets/Propai.png";
import Email from "./assets/Email.png";
import Uber from "./assets/Uber.jpg";

const projectsData = [
  {
    id: 11,
    category: "Data Science",
    title: "Financial Risk Insight Analysis (Big 4 Firms)",
    image: Big4,
    tech: "Python, Machine Learning, Power BI, Regression",
    badges: ["Python", "Machine Learning", "Power BI", "Regression"],
    github: "https://github.com/raka-arrayan",
    shortDescription:
      "Predictive modeling using Python & ML (Linear Regression, Random Forest, SVR) to analyze financial risk patterns and audit effectiveness (2020–2025).",
    description:
      "Developing predictive models using Python to analyze financial risk patterns and audit effectiveness (2020–2025). Implemented regression models (Linear Regression, Random Forest, SVR) to capture complex non-linear relationships, achieving initial performance with MAE ≈ 1.30 and identifying key risk drivers such as audit workload, fraud cases, and revenue impact.",
    keyPoints: [
      "Developing predictive models using Python to analyze financial risk patterns and audit effectiveness (2020–2025)",
      "Implemented regression models (Linear Regression, Random Forest, SVR) to capture complex non-linear relationships",
      "Achieved initial performance with MAE ≈ 1.30 and identified key risk drivers (audit workload, fraud cases, revenue impact)",
      "Translating analytical findings into early-stage insights to support risk assessment and decision making",
      "Currently improving model performance through feature scaling and dashboard integration with Power BI",
    ],
  },
  {
    id: 10,
    category: "Data Analyst",
    title: "Uber Travel Pattern Analysis Using Google BigQuery",
    image: Uber,
    tech: "Google Sheets, SQL, Google BigQuery",
    badges: ["Google BigQuery", "SQL", "Google Sheets"],
    github: "https://github.com/raka-arrayan/Uber-Travel-Pattern-Analysis-Using-Google-BigQuery",
    shortDescription:
      "Exploratory big data analysis on historical Uber trips to evaluate demand patterns, peak hours, and weekend mobility efficiency.",
    description:
      "This project aims to analyze Uber travel patterns using historical trip data. The analysis was conducted to understand demand patterns, peak hours, and travel efficiency based on time and day category (weekdays vs. weekends). The entire process was carried out using Google BigQuery.",
    keyPoints: [
      "Executed scalable SQL queries on Google BigQuery to process large-scale trip logs.",
      "Identified peak-hour surge patterns and comparative weekday vs. weekend velocity.",
      "Engineered aggregated tables feeding into analytical reporting.",
    ],
  },
  {
    id: 1,
    category: "Data Analyst",
    title: "British Airways Customer Reviews Dashboard Using Tableau",
    image: Tableau,
    tech: "Microsoft Excel, Tableau",
    badges: ["Tableau", "Excel"],
    github: "https://github.com/raka-arrayan/British-Airways-customer-Reviews-Dashboard-Using-Tableau",
    shortDescription:
      "Interactive Tableau business intelligence dashboard analyzing multi-dimensional passenger reviews across aircraft and global routes.",
    description:
      "This project is an interactive Tableau dashboard that analyzes British Airways customer reviews from multiple perspectives, including geography, time, aircraft type, and service aspects.",
    keyPoints: [
      "Designed executive-ready Tableau dashboard with interactive cross-filtering.",
      "Evaluated NPS and sentiment trends across global routes and aircraft fleets.",
      "Provided actionable operational recommendations for in-flight service enhancements.",
    ],
  },
  {
    id: 2,
    category: "Data Analyst",
    title: "Netflix Movies and TV Shows Analysis Using SQL",
    image: Sql,
    tech: "PostgreSQL, SQL",
    badges: ["PostgreSQL", "SQL"],
    github: "https://github.com/raka-arrayan/Netflix-Movies-and-TV-Shows-Analysis-Using-SQL",
    shortDescription:
      "Comprehensive exploratory relational database query project assessing Netflix media catalog distributions and release patterns.",
    description:
      "This project is an exploratory analysis of the Netflix Movies and TV Shows dataset using SQL focusing on content distribution and release trends.",
    keyPoints: [
      "Authored complex SQL queries utilizing window functions, CTEs, and aggregation.",
      "Analyzed historical shift between TV series and movie additions over time.",
      "Mapped geographic content generation hubs and rating distribution.",
    ],
  },
  {
    id: 3,
    category: "Data Analyst",
    title: "Store Sales and Logistics Performance using Looker Studio",
    image: Looker,
    tech: "Microsoft Excel, Looker Studio",
    badges: ["Looker Studio", "Excel"],
    github: "https://github.com/raka-arrayan/Store-Sales-and-Logistics-Performance-Dashboard-Using-Looker-Studio",
    shortDescription:
      "Operations & logistics dashboard tracking retail revenue, shipping turnaround, and regional fulfillment bottlenecks.",
    description:
      "This dashboard is designed to analyze sales and logistics performance at a retail store (SuperStore).",
    keyPoints: [
      "Built automated KPI scorecards tracking turnaround time and margin profitability.",
      "Identified regional logistics bottlenecks across distinct carrier delivery tiers.",
    ],
  },
  {
    id: 4,
    category: "Data Analyst",
    title: "E-Commerce Analysis Using Power BI",
    image: Powerbi,
    tech: "Microsoft Excel, Power BI",
    badges: ["Power BI", "Excel"],
    github: "https://github.com/raka-arrayan/E-commerce-analysis-using-power-BI",
    shortDescription:
      "Executive Power BI financial report displaying revenue breakdown, customer acquisition cost, and product margin trends.",
    description:
      "An E-Commerce analysis dashboard for the 2018–2019 period displaying revenue, profit, and sales volume.",
    keyPoints: [
      "Engineered star-schema data models and DAX measures for dynamic time-intelligence calculations.",
      "Evaluated product affinity and repeat customer buying frequency.",
    ],
  },
  {
    id: 5,
    category: "Data Science",
    title: "Email Campaign Analysis",
    image: Email,
    tech: "Python, Machine Learning",
    badges: ["Python", "Machine Learning"],
    github: "https://github.com/raka-arrayan/Email-Campaign-Analysis",
    shortDescription:
      "Machine learning model identifying drivers of marketing email open and conversion rates using NLP and temporal indicators.",
    description:
      "This project focuses on analyzing and improving marketing effectiveness by identifying key factors influencing email open rates. Key variables include subject line hotness, send time, word count, and past communications.",
    keyPoints: [
      "Performed feature importance analysis on subject lines, send intervals, and copy length.",
      "Implemented predictive classifier optimizing timing schedules for maximum open rates.",
    ],
  },
  {
    id: 6,
    category: "Data Science",
    title: "E-Commerce Review Sentiment Analyzer",
    image: NLP,
    tech: "Python, Streamlit, NLP",
    badges: ["NLP", "Streamlit", "Python"],
    github: "https://github.com/raka-arrayan/NLP-FOR-E-COMMERCE-REVIEW-SENTIMENT",
    shortDescription:
      "Interactive Streamlit web application classifying customer feedback into Positive, Neutral, or Negative sentiment categories.",
    description:
      "A simple web app built with Streamlit that uses NLP to classify product reviews into Positive, Neutral, or Negative.",
    keyPoints: [
      "Preprocessed unstructured multilingual customer feedback with tokenization and lemmatization.",
      "Deployed responsive web demo on Streamlit for live inference on consumer feedback.",
    ],
  },
  {
    id: 7,
    category: "Data Science",
    title: "News Spam Classifier",
    image: News,
    tech: "Python, Machine Learning",
    badges: ["Python", "Machine Learning"],
    github: "https://github.com/raka-arrayan/News_Spam_Classifier",
    shortDescription:
      "Text classification pipeline separating deceptive news feeds from legitimate articles using TF-IDF and supervised learning.",
    description:
      "A machine learning-based application designed to identify whether a piece of news text is spam or not spam (ham).",
    keyPoints: [
      "Extracted lexical n-gram features and vectorized documents via TF-IDF.",
      "Evaluated recall and precision trade-offs to minimize false-positive classifications.",
    ],
  },
  {
    id: 8,
    category: "Data Science",
    title: "Analysis Of Dengue",
    image: Dengue,
    tech: "Python, Machine Learning",
    badges: ["Python", "Machine Learning"],
    github: "https://github.com/raka-arrayan/analysis-of-dengue",
    shortDescription:
      "Early-warning diagnostic risk scoring model trained on demographic and clinical diagnostic indicators.",
    description:
      "Develop prediction models for early detection of dengue fever based on clinical and demographic data.",
    keyPoints: [
      "Handled imbalanced healthcare data with stratified sampling.",
      "Isolated predictive biometric indicators prioritizing urgent triage attention.",
    ],
  },
  {
    id: 9,
    category: "Web Development",
    title: "PropAI - Property Price Aggregator",
    image: Propai,
    tech: "React, Node.js, ML",
    badges: ["React", "Node.js"],
    github: "https://github.com/raka-arrayan/PROP_AI",
    shortDescription:
      "Fullstack property aggregator dashboard integrating real-time automated valuation models (AVM).",
    description:
      "A property price aggregator platform supported by a machine learning model to generate accurate price estimates.",
    keyPoints: [
      "Connected React frontend with NodeJS REST APIs for automated valuation inquiries.",
      "Interactive filtering by geographical district and price tier.",
    ],
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
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Data Analyst", "Data Science", "Web Development"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="bg-slate-950 py-28 px-6 md:px-12 border-t border-slate-900 text-slate-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Projects
            </h2>
            <div className="h-0.5 w-16 bg-blue-500 mt-3 rounded-full"></div>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors ${
                  filter === cat
                    ? "bg-blue-600 text-white font-medium shadow-sm"
                    : "text-slate-400 hover:text-white"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                className="group bg-slate-900/60 rounded-2xl overflow-hidden flex flex-col border border-slate-800/80 hover:border-slate-700 transition-all duration-300"
              >
                {/* Thumbnail Image Container */}
                <div className="h-48 overflow-hidden relative bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-slate-800 text-[10px] font-mono uppercase tracking-wider text-slate-300">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors duration-200 leading-snug mb-2">
                      {project.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                      {project.shortDescription || project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {(project.badges || project.tech.split(", ")).map(
                        (badge, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/60"
                          >
                            {badge.trim()}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80 mt-auto">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 px-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 text-slate-200 hover:text-white text-xs font-mono tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      View Details
                      <HiArrowNarrowRight className="text-sm" />
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <FaGithub size={15} />
                    </a>
                  </div>
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
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-900 border border-slate-800 w-full max-w-4xl max-h-[88vh] overflow-y-auto relative rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 p-2 bg-slate-800 text-slate-300 rounded-full hover:bg-blue-600 hover:text-white transition-colors z-20 border border-slate-700"
                  onClick={() => setSelectedProject(null)}
                >
                  <IoCloseOutline size={20} />
                </button>

                <div className="flex flex-col md:flex-row">
                  {/* Modal Image */}
                  <div className="md:w-5/12 h-56 md:h-auto relative overflow-hidden bg-slate-950">
                    <img
                      src={selectedProject.image}
                      className="w-full h-full object-cover"
                      alt={selectedProject.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Modal Content */}
                  <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-slate-800 text-blue-300 border border-slate-700 uppercase tracking-wider">
                          {selectedProject.category}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                        {selectedProject.title}
                      </h3>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {(selectedProject.badges || selectedProject.tech.split(", ")).map(
                          (badge, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700"
                            >
                              {badge.trim()}
                            </span>
                          )
                        )}
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h5 className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                            Overview
                          </h5>
                          <p className="text-slate-300 text-xs leading-relaxed">
                            {selectedProject.description}
                          </p>
                        </div>

                        {selectedProject.keyPoints && (
                          <div>
                            <h5 className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                              Key Highlights
                            </h5>
                            <ul className="space-y-1.5">
                              {selectedProject.keyPoints.map((point, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"
                                >
                                  <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-mono text-xs font-medium uppercase tracking-wider transition-colors"
                      >
                        <FaGithub size={15} /> View on GitHub
                      </a>
                    </div>
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