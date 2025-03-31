import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { FaLaptopCode, FaChartBar, FaMobileAlt, FaShieldAlt } from "react-icons/fa"; // Importing simple icons

const courses = [
  {
    title: "Full-Stack Web Development",
    description: "Learn to build modern web applications with React, Node.js, and databases.",
    icon: <FaLaptopCode size={50} className="text-green-700 mx-auto mb-4" />,
  },
  {
    title: "Data Science & Machine Learning",
    description: "Master data analytics, machine learning algorithms, and AI technologies.",
    icon: <FaChartBar size={50} className="text-green-700 mx-auto mb-4" />,
  },
  {
    title: "Mobile App Development",
    description: "Create cross-platform mobile applications using React Native and Flutter.",
    icon: <FaMobileAlt size={50} className="text-green-700 mx-auto mb-4" />,
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description: "Protect digital assets with cybersecurity best practices and penetration testing.",
    icon: <FaShieldAlt size={50} className="text-green-700 mx-auto mb-4" />,
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
        <div className="relative max-w-7xl mx-auto py-20 px-6 sm:px-12 lg:py-24 lg:px-16 text-center" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-lg font-serif">
            {t("Explore Our Courses")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-800 font-serif max-w-3xl mx-auto">
            {t("Unlock your potential with industry-leading courses designed for all skill levels.")}
          </p>
        </div>
      </header>

      <section className="py-20 bg-gray-100" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105" data-aos="fade-up">
                {course.icon} {/* Simple React Icon */}
                <h2 className="text-2xl font-bold text-green-800 font-serif">{course.title}</h2>
                <p className="mt-3 text-lg text-gray-700 font-serif">{course.description}</p>
                <button className="mt-5 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-all">
                  {t("Enroll Now")}
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
