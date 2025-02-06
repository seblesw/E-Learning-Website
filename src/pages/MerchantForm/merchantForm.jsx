import React, { useState } from "react";
import Swal from 'sweetalert2';

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
    primaryLocation: { "Urban": 5, "Rural": 3 },
    businessType: { "Retail": 8, "Wholesale": 7, "Manufacturing": 9, "Service": 6, "Other": 5 },
    productsOffered: { "Producer": 10, "Re-seller": 5 },
    monthlySalesVolume: { "Low": 2, "Medium": 4, "High": 5 },
    priceRange: { "Low Cost": 1, "Mid Range": 3, "High End": 5 },
    productAvailability: { "Available": 25, "Limited": 20, "Seasonal": 15 },
    customerBaseSize: { "Small": 2, "Medium": 4, "Large": 5 },
    targetDemographics: { "Local": 3, "Regional": 4, "International": 5 },
    logisticsCapability: { "In-house": 5, "Partnered": 4, "Pickup": 3 },
    paymentMethods: { "Cash": 2, "Mobile Money": 5, "Card": 3 },
    onlinePresence: { "Facebook": 2, "Telegram": 3, "Instagram": 2 },
    telegramBusinessTools: { "High": 5, "Medium": 3, "Low": 2 },
    digitalPaymentSystems: { "Yes": 5, "No": 2 },
    customerAlignment: { "Yes": 5, "No": 2 },
    promotionalStrategy: { "Discount": 5, "BOGO Offers": 4, "Free Delivery Promotions": 3 },
    collaborationInterest: { "Yes": 5, "No": 2 },
    flexibility: { "High": 5, "Moderate": 3, "Low": 2 },
    supportNeeded: { "Financial Support": 5, "Training": 4 },
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

    if (loading) return; 
    setLoading(true);

    const finalScore = calculateScore();
    const submissionData = { ...formData, finalScore };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx9xYsuKwEXx9mbfjJJLcbn_sZCZk3vPDAL_Fr7iYpbSa33Srw54BAQCVBCQL9tz61UMQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        }
      );

      Swal.fire({
        title: "Form Submitted!",
        text: `Your total score is: ${finalScore}/100\nThank you for your submission.`,
        icon: "success",
        confirmButtonText: "OK",
        showClass: {
          popup: "animate__animated animate__fadeInDown"
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp"
        }
      });

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
        { name: "targetDemographics", type: "select", options: ["Kids", "Adults","Woman"], placeholder: "Select target Demographics" },
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
        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              type="button"
              className="bg-gray-600 text-white py-2 px-4 rounded"
              onClick={prevStep}
              disabled={loading}
            >
              Previous
            </button>
          )}

          {step < 6 ? (
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={nextStep}
              disabled={loading}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MerchantForm;
