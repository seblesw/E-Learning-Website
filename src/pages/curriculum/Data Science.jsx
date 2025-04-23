import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDatabase } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const dsProgram = [
  {
    section: "Essentials",
    totalHours: 120,
    objectives: [
      "Apply core programming methodologies to real-world problems",
      "Demonstrate scripting proficiency in a high-level programming language",
      "Perform statistical measurements on data using Python",
      "Utilize object-oriented programming for data cleaning and analysis",
      "Leverage industry-standard tools to explore, analyze, and visualize data",
      "Employ mathematics and probability to generate actionable insights"
    ],
    courses: [
      { title: "Introduction to Python", hours: 40 },
      { title: "Introduction to Data Science", hours: 40 },
      { title: "Introduction to SQL", hours: 40 }
    ]
  },
  {
    section: "Foundations I",
    totalHours: 120,
    objectives: [
      "Create compelling data visualizations for business problems",
      "Conduct exploratory data analysis using industry-standard tools",
      "Process large datasets efficiently using scalable programming techniques",
      "Apply regression, probability, and statistics to derive insights",
      "Use programming methods for statistical inference and data modeling"
    ],
    courses: [
      { title: "Cloud Computing, Generative AI & Dashboards", hours: 40 },
      { title: "Inferential Statistics", hours: 40 },
      { title: "Regression", hours: 40 }
    ]
  },
  {
    section: "Foundations II",
    totalHours: 160,
    objectives: [
      "Apply machine learning models including decision trees and supervised learning",
      "Preprocess data through normalization and feature extraction",
      "Analyze language, time series, and image data using neural networks and NLP",
      "Design and implement advanced neural network-based solutions"
    ],
    courses: [
      { title: "Introduction to Machine Learning", hours: 40 },
      { title: "Machine Learning with Scikit-Learn", hours: 40 },
      { title: "NLP, Time Series & Neural Networks", hours: 40 },
      { title: "Neural Networks & Similar Models", hours: 40 }
    ]
  },
  {
    section: "Capstone",
    totalHours: 200,
    objectives: [
      "Develop projects integrating regression-based methods",
      "Apply supervised learning to real-world problems",
      "Implement unsupervised machine learning techniques",
      "Synthesize math, statistics, and programming to build complete solutions"
    ],
    courses: [{ title: "Capstone", hours: 200 }]
  }
];

const DataScience = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="font-sans antialiased bg-gray-100 text-gray-900">
      <header className="relative bg-white overflow-hidden shadow-lg">
        <div className="max-w-7xl mx-auto py-20 px-6 sm:px-12 lg:py-24 lg:px-16 text-center" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold text-green-800 drop-shadow-lg font-serif">
            {t("Data Science Bootcamp")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-800 font-serif max-w-3xl mx-auto">
            {t("Launch your data science career through 600 clock hours of hands-on, full-stack training.")}
          </p>
        </div>
      </header>

      {dsProgram.map((section, idx) => (
        <section key={idx} className="py-20 bg-gray-100" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <h2 className="text-3xl font-bold text-green-800 font-serif mb-4">
              {t(`Module: ${section.section}`)} ({section.totalHours} Clock Hours)
            </h2>
            <div className="mb-10 bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Learning Outcomes</h3>
              <ul className="list-disc list-inside text-gray-700 font-serif space-y-2 text-base">
                {section.objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
              {section.courses.map((course, index) => (
                <div key={index} className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105" data-aos="fade-up">
                  <FaDatabase size={50} className="text-green-700 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 font-serif">{course.title}</h3>
                  <p className="text-md mt-2 text-gray-500 italic">Clock Hours: {course.hours}</p>
                  <button className="mt-5 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-all">
                    {t("Enroll Now")}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default DataScience;
