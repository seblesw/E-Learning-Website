import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = async () => {
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const googleFormActionURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdIS84AFCiKGXwXrFnTSgZTrLMVY1opUs_cYMDKO3yTLMVxwg/formResponse";
    const formBody = new URLSearchParams({
      "entry.769960854": formData.name,  
      "entry.531132485": formData.email, 
    });

    try {
      await fetch(googleFormActionURL, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });
      setSuccessMessage("Thank you! You've been added to the waitlist.");
      setFormData({ name: "", email: "" }); 
    } catch (error) {
      setErrorMessage("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden mt-6">
      <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-10 flex flex-col justify-center items-center text-center md:text-left">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-6 font-serif">
          GET IN TOUCH <br /> WITH US
        </h2>
        <div className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <FaEnvelope className="w-6 h-6 text-blue-800 mr-3" />
            <a
              href="mailto:person.name@gmail.com"
              className="hover:underline text-gray-800 dark:text-gray-200 font-serif"
            >
              hululabs@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <FaPhoneAlt className="w-6 h-6 text-blue-800 mr-3" />
            <span className="text-gray-800 dark:text-gray-200 font-serif">
              +25190000000
            </span>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 bg-white dark:bg-gray-900 p-10 flex flex-col justify-center items-center">
        <form className="space-y-6 w-full max-w-sm">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold text-gray-700 dark:text-gray-300 font-serif"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-blue-500 dark:focus:border-teal-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700 dark:text-gray-300 font-serif"
            >
              Email
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-blue-500 dark:focus:border-teal-500 sm:text-sm"
              required
            />
          </div>

          <div className="flex items-center">
            <span className="text-sm text-red-500">* Required field</span>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className={`w-full bg-gradient-to-r from-blue-400 to-teal-600 dark:from-teal-600 dark:to-teal-700 text-white py-3 px-6 rounded-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "JOIN THE WAITLIST"}
          </button>

          {successMessage && (
            <div className="mt-4 text-green-600 dark:text-green-400 font-serif">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="mt-4 text-red-600 dark:text-red-400 font-serif">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default Waitlist;
