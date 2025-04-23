import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShieldAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const cyProgram = [
  {
    section: "Essentials",
    totalHours: 120,
    objectives: [
      "Apply core programming concepts to real-world scenarios",
      "Demonstrate foundational understanding of computer networking diagrams",
      "Identify potential issues within operating systems and networks in a cybersecurity context"
    ],
    courses: [
      { title: "Introduction to Cybersecurity", hours: 40 },
      { title: "Introduction to Python", hours: 40 },
      { title: "Operating Systems & Networking", hours: 40 }
    ]
  },
  {
    section: "Foundations I",
    totalHours: 120,
    objectives: [
      "Apply system hardening techniques and mitigation strategies to protect infrastructure",
      "Utilize Security Information and Event Management (SIEM) systems for incident response",
      "Implement threat intelligence to enhance detection and defense",
      "Integrate governance, risk, and compliance (GRC) frameworks into operations"
    ],
    courses: [
      { title: "System Hardening", hours: 40 },
      { title: "Threat Intelligence", hours: 40 },
      { title: "SIEM & Threat Hunting", hours: 40 }
    ]
  },
  {
    section: "Foundations II",
    totalHours: 160,
    objectives: [
      "Identify vulnerabilities through security architecture assessments",
      "Execute incident investigations using digital forensics best practices",
      "Secure APIs and mobile infrastructure through targeted penetration testing",
      "Apply industry-standard techniques to strengthen organizational security"
    ],
    courses: [
      { title: "Security Architecture & Frameworks", hours: 40 },
      { title: "Incidence Response", hours: 40 },
      { title: "Penetration Testing", hours: 40 },
      { title: "Penetration Testing Applications", hours: 40 }
    ]
  },
  {
    section: "Capstone",
    totalHours: 200,
    objectives: [
      "Analyze and document security architecture from network diagrams",
      "Design and present a professional incident response plan",
      "Deliver a full security assessment report incorporating technical analysis"
    ],
    courses: [{ title: "Capstone", hours: 200 }]
  }
];

const Cybersecurity = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="font-sans antialiased bg-gray-100 text-gray-900">
      <header className="relative bg-white overflow-hidden shadow-lg">
        <div className="max-w-7xl mx-auto py-20 px-6 sm:px-12 lg:py-24 lg:px-16 text-center" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold text-green-800 drop-shadow-lg font-serif">
            {t("Cybersecurity Bootcamp")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-800 font-serif max-w-3xl mx-auto">
            {t("Secure the digital world in 600 immersive clock hours of real-world cybersecurity training.")}
          </p>
        </div>
      </header>

      {cyProgram.map((section, idx) => (
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
                  <FaShieldAlt size={50} className="text-green-700 mx-auto mb-4" />
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

export default Cybersecurity;
