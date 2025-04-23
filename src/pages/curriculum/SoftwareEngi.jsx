import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const seProgram = [
  {
    section: "Software Engineering Essentials",
    totalHours: 120,
    objectives: [
      "Identify technical solutions with front-end development techniques and industry standard tools to solve a business problem",
      "Utilize foundational methodologies of programmatic thinking to develop an interactive web development elements",
      "Apply fundamental industry standard programming techniques to web development",
      "Execute a programming process to develop interactive front-end elements"
    ],
    courses: [
      {
        title: "Software Engineering Fundamentals",
        hours: 40,
        description: [
          "Identify technical solutions with front-end development techniques and industry standard tools to solve a business problem",
          "Utilize foundational methodologies of programmatic thinking to develop interactive web development elements",
          "Apply fundamental industry standard programming techniques to web development",
          "Execute a programming process to develop interactive front-end elements"
        ]
      },
      {
        title: "Front-End Development: JavaScript Fundamentals",
        hours: 40,
        description: [
          "Identify technical solutions with front-end development techniques and industry standard tools to solve a business problem",
          "Utilize foundational methodologies of programmatic thinking to develop interactive web development elements",
          "Apply fundamental industry standard programming techniques to web development",
          "Execute a programming process to develop interactive front-end elements"
        ]
      },
      {
        title: "Front-End Development: JavaScript Interactions",
        hours: 40,
        description: [
          "Identify technical solutions with front-end development techniques and industry standard tools to solve a business problem",
          "Utilize foundational methodologies of programmatic thinking to develop interactive web development elements",
          "Apply fundamental industry standard programming techniques to web development",
          "Execute a programming process to develop interactive front-end elements"
        ]
      }
    ]
  },
  {
    section: "Foundations I",
    totalHours: 120,
    objectives: [
      "Apply a programmatic thinking process for front-end development",
      "Create an interactive app using industry standard design practices",
      "Integrate industry standard techniques for front-end development for a full interactive application",
      "Apply the basics of programming language methodologies to real world scenarios",
      "Demonstrate foundational skills for scripting with a back-end programming language(s)"
    ],
    courses: [
      { title: "Front-End Development: React 1", hours: 40, description: [] },
      { title: "Front-End Development: React 2", hours: 40, description: [] },
      { title: "Introduction to Python", hours: 40, description: [] }
    ]
  },
  {
    section: "Foundations II",
    totalHours: 160,
    objectives: [
      "Identify technical solutions with back-end and front-end development using industry standard tools to solve a business problem",
      "Utilize foundational methodologies of programmatic thinking to develop user focused web development elements with complex relationships",
      "Apply fundamental industry standard programming techniques to web development",
      "Execute a programming process to develop interactive elements",
      "Apply common back-end programming language with data structures to solve business problems",
      "Model complex relationships between objects with back-end programming"
    ],
    courses: [
      { title: "Object-Oriented Programming with Python", hours: 40, description: [] },
      { title: "API Development with Python", hours: 40, description: [] },
      { title: "Relational Databases", hours: 40, description: [] },
      { title: "Back-End Development with Python", hours: 40, description: [] }
    ]
  },
  {
    section: "Capstone",
    totalHours: 200,
    objectives: [
      "Build a full stack application with industry standard technical components",
      "Apply programmatic thinking process to full-stack development projects",
      "Integrate industry standard methodologies to develop full-stack application projects",
      "Execute programmatic thinking and technical components to develop projects framed around business problems"
    ],
    courses: [
      { title: "Capstone", hours: 200, description: [] }
    ]
  }
];

const SoftwareEssentials = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="font-sans antialiased bg-gray-100 text-gray-900">
      <header className="relative bg-white overflow-hidden shadow-lg">
        <div className="relative max-w-7xl mx-auto py-20 px-6 sm:px-12 lg:py-24 lg:px-16 text-center" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-lg font-serif">
            {t("Software Engineering Bootcamp")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-800 font-serif max-w-3xl mx-auto">
            {t("600 clock hours of intensive full-stack engineering.")} 
          </p>
        </div>
      </header>

      {seProgram.map((section, idx) => (
        <section key={idx} className="py-20 bg-gray-100" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <h2 className="text-3xl font-bold text-green-800 font-serif mb-6">
              {t(section.section)} ({section.totalHours} Clock Hours)
            </h2>
            <ul className="list-disc list-inside text-gray-700 font-serif space-y-2 mb-10">
              {section.objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
              {section.courses.map((course, index) => (
                <div key={index} className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105" data-aos="fade-up">
                  <FaLaptopCode size={50} className="text-green-700 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 font-serif">{course.title}</h3>
                  <p className="text-md mt-2 text-gray-500 italic">Clock Hours: {course.hours}</p>
                  {course.description.length > 0 && (
                    <ul className="mt-4 list-disc list-inside text-gray-700 font-serif space-y-2 text-base">
                      {course.description.map((desc, d) => (
                        <li key={d}>{desc}</li>
                      ))}
                    </ul>
                  )}
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

export default SoftwareEssentials;
