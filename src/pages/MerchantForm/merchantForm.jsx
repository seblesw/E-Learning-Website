import React, { useState } from "react";

const MerchantForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    contactDetails: "",
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
    logisticsCapability: "",
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked ? [...prev[name], value] : prev[name].filter((v) => v !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const formSections = [
    {
      category: "Business Info",
      fields: [
        { name: "businessName", type: "text", placeholder: "Enter Business Name" },
        { name: "ownerName", type: "text", placeholder: "Enter Owner/Manager Name" },
        { name: "contactDetails", type: "text", placeholder: "Phone, Email, Social Media" },
        { name: "yearsOfOperation", type: "number", placeholder: "Years of Operation" },
        { name: "registrationStatus", type: "radio", options: ["Registered", "Not Registered"], placeholder: "Business Registration Status" },
        { name: "primaryLocation", type: "text", placeholder: "Primary Location" }
      ]
    },
    {
      category: "Product / Sale Info",
      fields: [
        { name: "businessType", type: "text", placeholder: "Type of Business" },
        { name: "productsOffered", type: "text", placeholder: "Products/Services Offered" },
        { name: "monthlySalesVolume", type: "number", placeholder: "Average Monthly Sales Volume" },
        { name: "priceRange", type: "text", placeholder: "Price Range of Products" },
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
        { name: "logisticsCapability", type: "text", placeholder: "Logistics and Delivery Capability" },
        { name: "paymentMethods", type: "checkbox", options: ["Cash", "Mobile Money", "Card"], placeholder: "Preferred Payment Methods" },
        { name: "onlinePresence", type: "radio", options: ["Yes", "No"], placeholder: "Online Presence" },
        { name: "marketingExperience", type: "text", placeholder: "Marketing Experience" },
        { name: "ecommercePlatformUsage", type: "text", placeholder: "Existing eCommerce Platform Usage" },
        { name: "telegramBusinessTools", type: "radio", options: ["Yes", "No"], placeholder: "Familiarity with Telegram Business Tools" },
        { name: "digitalPaymentSystems", type: "radio", options: ["Yes", "No"], placeholder: "Use of Digital Payment Systems" }
      ]
    },
    {
      category: "Ease of Doing Business",
      fields: [
        { name: "customerAlignment", type: "radio", options: ["Yes", "No"], placeholder: "Alignment with Our Customer Base" },
        { name: "promotionalStrategy", type: "text", placeholder: "Promotional Strategy Compatibility" },
        { name: "collaborationInterest", type: "radio", options: ["Yes", "No"], placeholder: "Interest in Collaboration" },
        { name: "flexibility", type: "radio", options: ["High", "Moderate", "Low"], placeholder: "Flexibility" },
        { name: "supportNeeded", type: "text", placeholder: "Support Needed" }
      ]
    }
  ];

  return (
    <div className="max-w-lg mx-auto p-6 mt-16 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">Merchant Selection Criteria Form</h2>
      <div className="mb-4 text-center text-gray-600">Step {step} of {formSections.length}</div>
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
                    <input type={type} name={name} value={option} checked={formData[name] === option} onChange={handleChange} required />
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
          {step > 1 && <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded" onClick={prevStep}>Previous</button>}
          {step < formSections.length ? <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded" onClick={nextStep}>Next</button> : <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default MerchantForm;
