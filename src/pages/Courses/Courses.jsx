import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import {
  FaLaptopCode,
  FaChartBar,
  FaRobot,
  FaShieldAlt,
  FaPaintBrush,
} from "react-icons/fa";

const courses = [
  {
    title: "Software Engineering",
    description: "Master the foundations of web development, from front-end to back-end engineering using Python and JavaScript.",
    icon: <FaLaptopCode size={50} className="text-green-700 mx-auto mb-4" />,
    link: "/curriculum/software-engineering",
  },
  {
    title: "Data Science",
    description: "Learn to analyze, model, and visualize data using Python, SQL, statistics, and machine learning techniques.",
    icon: <FaChartBar size={50} className="text-green-700 mx-auto mb-4" />,
    link: "/curriculum/data-science",
  },
  {
    title: "Artificial Intelligence",
    description: "Build intelligent systems with machine learning, NLP, neural networks, and LLM integrations.",
    icon: <FaRobot size={50} className="text-green-700 mx-auto mb-4" />,
    link: "/curriculum/artificial-intelligence",
  },
  {
    title: "Cybersecurity",
    description: "Protect digital infrastructure with hands-on training in penetration testing, SIEM, and secure architecture.",
    icon: <FaShieldAlt size={50} className="text-green-700 mx-auto mb-4" />,
    link: "/curriculum/cybersecurity",
  },
  {
    title: "Product Design",
    description: "Design accessible and user-centric experiences through UX research, UI design, and visual storytelling.",
    icon: <FaPaintBrush size={50} className="text-green-700 mx-auto mb-4" />,
    link: "/curriculum/product-design",
  },
];

const Courses = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="font-sans antialiased bg-gray-100 text-gray-900">
      <header className="relative bg-white overflow-hidden shadow-lg">
        <div className="max-w-7xl mx-auto py-20 px-6 sm:px-12 lg:py-24 lg:px-16 text-center" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-lg font-serif">
            {t("Explore Our Programs")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-800 font-serif max-w-3xl mx-auto">
            {t("Each program is designed for impact — giving you practical skills and portfolio-ready results.")}
          </p>
        </div>
      </header>

      <section className="py-20 bg-gray-100" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => (window.location.href = course.link)}
                data-aos="fade-up"
              >
                {course.icon}
                <h2 className="text-2xl font-bold text-green-800 font-serif">{course.title}</h2>
                <p className="mt-3 text-lg text-gray-700 font-serif">{course.description}</p>
                <button className="mt-5 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-all">
                  {t("Explore Curriculum")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
