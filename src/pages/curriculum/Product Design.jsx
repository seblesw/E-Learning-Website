import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPaintBrush } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const designProgram = [
  {
    section: "Essentials",
    totalHours: 120,
    objectives: [
      "Compare user research (UR), user experience (UX), and user interface (UI) as elements of the product design skill set",
      "Implement fundamental designs using industry-standard tools",
      "Apply product design frameworks to real design projects",
      "Utilize methodologies for ethical, inclusive, and accessible design",
      "Balance responsible design principles with user and business goals"
    ],
    courses: [
      { title: "Introduction to Design Techniques", hours: 40 },
      { title: "Introduction to Responsible Design", hours: 40 },
      { title: "Integrating Art and Visual Design", hours: 40 }
    ]
  },
  {
    section: "Foundations I",
    totalHours: 120,
    objectives: [
      "Implement full-cycle user research methods from planning to synthesis",
      "Communicate research findings effectively to stakeholders",
      "Develop and assess how well prototypes meet design objectives"
    ],
    courses: [
      { title: "User Research", hours: 40 },
      { title: "Navigating the User Research Process", hours: 40 },
      { title: "User Experience Design", hours: 40 }
    ]
  },
  {
    section: "Foundations II",
    totalHours: 160,
    objectives: [
      "Communicate UI designs clearly to stakeholders and teammates",
      "Develop, iterate, and evaluate UI frameworks aligned with design systems",
      "Offer usability and accessibility improvements for interfaces",
      "Refine portfolios and case studies following industry best practices"
    ],
    courses: [
      { title: "Information Architecture", hours: 40 },
      { title: "User Interface Design", hours: 40 },
      { title: "Design Systems", hours: 40 },
      { title: "Portfolio and Case Studies", hours: 40 }
    ]
  },
  {
    section: "Capstone",
    totalHours: 200,
    objectives: [
      "Execute a complete user research and synthesis process",
      "Apply iteration and usability testing for UX improvements",
      "Implement visual and interaction principles for intuitive UI",
      "Deliver design findings to stakeholders effectively",
      "Produce professional portfolio assets aligned with industry standards"
    ],
    courses: [{ title: "Capstone", hours: 200 }]
  }
];

const ProductDesign = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="font-sans antialiased bg-gray-100 text-gray-900">
      <header className="relative bg-white overflow-hidden shadow-lg">
        <div className="max-w-7xl mx-auto py-20 px-6 sm:px-12 lg:py-24 lg:px-16 text-center" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold text-green-800 drop-shadow-lg font-serif">
            {t("Product Design Bootcamp")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-800 font-serif max-w-3xl mx-auto">
            {t("Master research, UX, UI, and portfolios in 600 creative clock hours.")}
          </p>
        </div>
      </header>

      {designProgram.map((section, idx) => (
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
                  <FaPaintBrush size={50} className="text-green-700 mx-auto mb-4" />
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

export default ProductDesign;
