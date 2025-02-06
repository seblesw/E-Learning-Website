// import React, { useState } from "react";
// import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import Footer from "../../components/Footer/Footer";
// import { useTranslation } from "react-i18next";

// const Waitlist = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const { t, i18n } = useTranslation(); 

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleNext = async () => {
//     setIsSubmitting(true);
//     setSuccessMessage("");
//     setErrorMessage("");

//     const googleFormActionURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdIS84AFCiKGXwXrFnTSgZTrLMVY1opUs_cYMDKO3yTLMVxwg/formResponse";
//     const formBody = new URLSearchParams({
//       "entry.769960854": formData.name,  
//       "entry.531132485": formData.email, 
//     });

//     try {
//       await fetch(googleFormActionURL, {
//         method: "POST",
//         mode: "no-cors", 
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: formBody.toString(),
//       });
//       setSuccessMessage("Thank you! You've been added to the waitlist.");
//       setFormData({ name: "", email: "" }); 
//     } catch (error) {
//       setErrorMessage("There was an error submitting the form. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return (
//     <>
//     <div className="flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden mt-6">
//       <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-10 flex flex-col justify-center items-center text-center md:text-left">
//         <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-6 font-serif">
//           {t("get_in_touch_with_us")}
//         </h2>
//         <div className="text-lg text-gray-600 dark:text-gray-300 mb-6">
//           <div className="flex items-center justify-center md:justify-start mb-4">
//             <FaEnvelope className="w-6 h-6 text-blue-800 mr-3" />
//             <a
//               href="mailto:person.name@gmail.com"
//               className="hover:underline text-gray-800 dark:text-gray-200 font-serif"
//             >
//               hululabs@gmail.com
//             </a>
//           </div>
//           <div className="flex items-center justify-center md:justify-start">
//             <FaPhoneAlt className="w-6 h-6 text-blue-800 mr-3" />
//             <span className="text-gray-800 dark:text-gray-200 font-serif">
//               +25190000000
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="md:w-1/2 bg-white dark:bg-gray-900 p-10 flex flex-col justify-center items-center">
//         <form className="space-y-6 w-full max-w-sm">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-bold text-gray-700 dark:text-gray-300 font-serif"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-blue-500 dark:focus:border-teal-500 sm:text-sm"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-bold text-gray-700 dark:text-gray-300 font-serif"
//             >
//               Email
//               <span className="text-red-500"> *</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-blue-500 dark:focus:border-teal-500 sm:text-sm"
//               required
//             />
//           </div>

//           <div className="flex items-center">
//             <span className="text-sm text-red-500">* Required field</span>
//           </div>

//           <button
//             type="button"
//             onClick={handleNext}
//             className={`w-full bg-gradient-to-r from-blue-400 to-teal-600 dark:from-teal-600 dark:to-teal-700 text-white py-3 px-6 rounded-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Submitting..." : "JOIN THE WAITLIST"}
//           </button>

//           {successMessage && (
//             <div className="mt-4 text-green-600 dark:text-green-400 font-serif">
//               {successMessage}
//             </div>
//           )}

//           {errorMessage && (
//             <div className="mt-4 text-red-600 dark:text-red-400 font-serif">
//               {errorMessage}
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//     <Footer/>
// </>
//   );
// };
// export default Waitlist;
import React, { useState } from "react";

const MerchantForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false); // Loading state
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    phone: "",
    email: "",
    socialMedia: "",
    yearsOfOperation: "",
    registrationStatus: "",
    primaryLocation: "",
    businessType: "",
    productsOffered: "",
    monthlySalesVolume: "",
    priceRange: "",
    productAvailability: "",
    customerBaseSize: "",
    targetDemographics: "",
    logisticsCapability: [],
    paymentMethods: [],
    onlinePresence: "",
    marketingExperience: "",
    ecommercePlatformUsage: "",
    telegramBusinessTools: "",
    digitalPaymentSystems: "",
    customerAlignment: "",
    promotionalStrategy: "",
    collaborationInterest: "",
    flexibility: "",
    supportNeeded: ""
  });

  const scoreMapping = {
    registrationStatus: { "Registered": 5, "Not Registered": 0 },
    primaryLocation: { "primaryLocation": 5 },
    businessType: { "Retail": 8, "Wholesale": 7, "Manufacturing": 9, "Service": 6, "Other": 5 },
    productsOffered: { "Producer": 10, "Re-seller": 5 },
    priceRange: { "Low Cost": 1, "Mid Range": 3, "High End": 5 },
    productAvailability: { "Available": 25, "Limited": 20, "Seasonal": 15 },
    logisticsCapability: { "In-house": 10, "Partnered": 8, "Pickup": 5 },
    paymentMethods: { "Cash": 5, "Mobile Money": 10, "Card": 8 },
    onlinePresence: { "facebook": 7, "telegram": 8, "instagram": 6 },
    telegramBusinessTools: { "High": 10, "Medium": 7, "Low": 4 },
    digitalPaymentSystems: { "Yes": 10, "No": 5 },
    customerAlignment: { "Yes": 10, "No": 5 },
    promotionalStrategy: { "Discount": 10, "BOGO Offers": 8, "Free Delivery Promotions": 7 },
    collaborationInterest: { "Yes": 10, "No": 5 },
    flexibility: { "High": 10, "Moderate": 7, "Low": 4 },
    supportNeeded: { "Financial Support": 5, "Training": 7 },
  };

  const calculateScore = () => {
    let totalScore = 0;
    Object.keys(formData).forEach((key) => {
      const value = formData[key];

      if (Array.isArray(value)) {
        value.forEach((item) => {
          totalScore += scoreMapping[key]?.[item] || 0;
        });
      } else {
        totalScore += scoreMapping[key]?.[value] || 0;
      }
    });
    return totalScore;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked ? [...(prev[name] || []), value] : prev[name].filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return; // Prevent duplicate submission
    setLoading(true); // Start loading

    const finalScore = calculateScore();
    const submissionData = { ...formData, finalScore };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbykH_RcW4aAlSn0_jWv0ZobRGN5QYKbpOm9W_em7wvVJMob0APwSHPC2neA0wuM1aLW0w/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        }
      );

      alert(`Form Submitted!\nYour total score is: ${finalScore}/100\nThank you for your submission.`);

      setFormData({
        businessName: "",
        ownerName: "",
        phone: "",
        email: "",
        socialMedia: "",
        yearsOfOperation: "",
        registrationStatus: "",
        primaryLocation: "",
        businessType: "",
        productsOffered: "",
        monthlySalesVolume: "",
        priceRange: "",
        productAvailability: "",
        customerBaseSize: "",
        targetDemographics: "",
        logisticsCapability: [],
        paymentMethods: [],
        onlinePresence: "",
        marketingExperience: "",
        ecommercePlatformUsage: "",
        telegramBusinessTools: "",
        digitalPaymentSystems: "",
        customerAlignment: "",
        promotionalStrategy: "",
        collaborationInterest: "",
        flexibility: "",
        supportNeeded: "",
      });

      setStep(1);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const formSections = [
    {
      category: "Business Info",
      fields: [
        { name: "businessName", type: "text", placeholder: "Enter Business Name" },
        { name: "ownerName", type: "text", placeholder: "Enter Owner/Manager Name" },
        { name: "yearsOfOperation", type: "number", placeholder: "Years of Operation" },
        { name: "registrationStatus", type: "radio", options: ["Registered", "Not Registered"], placeholder: "Business Registration Status" },
        { name: "primaryLocation", type: "text", placeholder: "Primary Location" }
      ]
    },
    {
      category: "Contact Details",
      fields: [
        { name: "phone", type: "text", placeholder: "Phone Number" },
        { name: "email", type: "email", placeholder: "Email Address" },
        { name: "socialMedia", type: "text", placeholder: "Social Media Links" }
      ]
    },
    {
      category: "Product / Sale Info",
      fields: [
        { name: "businessType", type: "select", options: ["Retail", "Wholesale", "Manufacturing", "Service", "Other"], placeholder: "Select Business Type" },
        { name: "productsOffered", type: "select", options: ["Producer", "Re-seller"], placeholder: "Select products Offered" },
        { name: "monthlySalesVolume", type: "number", placeholder: "Average Monthly Sales Volume" },
        { name: "priceRange", type: "select", options:["Low Cost","Mid Range","HIgh End"], placeholder: " select Price Range of Products" },
        { name: "productAvailability", type: "radio", options: ["Available", "Limited", "Seasonal"], placeholder: "Product Availability" }
      ]
    },
    {
      category: "Customer Info",
      fields: [
        { name: "customerBaseSize", type: "number", placeholder: "Customer Base Size" },
        { name: "targetDemographics", type: "text", placeholder: "Target Demographics" }
      ]
    },
    {
      category: "Operation / Marketing",
      fields: [
        { name: "logisticsCapability", type: "checkbox", options: ["In-house", "Partnered ", "Pickup"], placeholder: " select Logistics and Delivery Capability" },
        { name: "paymentMethods", type: "checkbox", options: ["Cash", "Mobile Money", "Card"], placeholder: " cheack Preferred Payment Methods" },
        { name: "onlinePresence", type: "select", options: ["facebook", "telegram", "instagram"], placeholder: " select online Presence" },
        { name: "marketingExperience", type: "text", placeholder: "Marketing Experience" },
        { name: "ecommercePlatformUsage", type: "text", placeholder: "Specify platform names, if any" },
        { name: "telegramBusinessTools", type: "select", options: ["High", "Medium", "Low"], placeholder: " select level of Familiarity with Telegram Business Tools" },
        { name: "digitalPaymentSystems", type: "radio", options: ["Yes", "No"], placeholder: "Use of Digital Payment Systems" }
      ]
    },
    {
      category: "Ease of Doing Business",
      fields: [
        { name: "customerAlignment", type: "radio", options: ["Yes", "No"], placeholder: "Alignment with Our Customer Base" },
        { name: "promotionalStrategy", type: "select", options: ["Discount", "BOGO Offers", "Free Delivery Promotions"], placeholder: "Select Strategy" },
        { name: "collaborationInterest", type: "radio", options: ["Yes", "No"], placeholder: "Interest in Collaboration" },
        { name: "flexibility", type: "radio", options: ["High", "Moderate", "Low"], placeholder: "Flexibility" },
        { name: "supportNeeded", type: "select", options:["Finacial Support","Traning"], placeholder: " select Support Needed" },
      ]
    }
  ];
  return (
    <div className="max-w-lg mx-auto p-6 mt-16 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">Merchant Selection Criteria Form</h2>
      <div className="mb-4 text-center text-gray-600">Step {step} of 6</div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {formSections[step - 1].fields.map(({ name, type, options, placeholder }) => (
          <div key={name}>
            <label className="block text-sm font-medium capitalize">{placeholder}</label>
            {type === "select" ? (
              <select name={name} value={formData[name]} onChange={handleChange} className="w-full border p-2 rounded" required>
                <option value="">{placeholder}</option>
                {options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : type === "radio" || type === "checkbox" ? (
              <div>
                {options.map((option) => (
                  <label key={option} className="inline-flex items-center space-x-2 mr-4">
                    <input
                      type={type}
                      name={name}
                      value={option}
                      checked={type === "checkbox" ? formData[name]?.includes(option) : formData[name] === option}
                      onChange={handleChange}
                      required
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            ) : (
              <input type={type} name={name} value={formData[name]} onChange={handleChange} placeholder={placeholder} className="w-full border p-2 rounded" required />
            )}
          </div>
        ))}
      <div className="text-center text-blue-600 font-bold">Current Score: {calculateScore()} / 100</div>
        <div className="flex justify-between mt-4">
          {step > 1 && <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded" onClick={prevStep}>Previous</button>}
          {step < formSections.length ? <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded" onClick={nextStep}>Next</button> : <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default MerchantForm;
