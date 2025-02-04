import React, { useState } from "react";

const MerchantForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    ownerName: "",
    location: "",
    phone: "",
    email: "",
    socialMedia: "",
    yearsOfOperation: "",
    registrationStatus: "",
    taxID: "",
    productsOffered: "",
    priceRange: "",
    customerBaseSize: "",
    deliveryOptions: [],
    paymentMethods: [],
    onlinePresence: "",
    ecommercePlatforms: "",
    marketingExperience: "",
    promotionalStrategy: "",
    productAvailability: "",
    collaborationInterest: "",
    supportNeeded: "",
    additionalComments: ""
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
    [
      { name: "businessName", type: "text", placeholder: "Enter Business Name" },
      { name: "businessType", type: "select", options: ["FMCG", "Retail", "Fashion", "Electronics", "Food & Beverage"], placeholder: "Select Business Type" },
      { name: "ownerName", type: "text", placeholder: "Enter Owner/Manager Name" },
      { name: "location", type: "text", placeholder: "City, Region" }
    ],
    [
      { name: "phone", type: "text", placeholder: "Enter Phone Number" },
      { name: "email", type: "email", placeholder: "Enter Email Address" },
      { name: "socialMedia", type: "text", placeholder: "Social Media Handles (e.g., Facebook, Instagram)" }
    ],
    [
      { name: "yearsOfOperation", type: "number", placeholder: "Enter Years of Operation" },
      { name: "registrationStatus", type: "radio", options: ["Registered", "Not Registered"], placeholder: "Registered: Yes/No" },
      { name: "taxID", type: "text", placeholder: "Enter Tax ID (if applicable)", condition: formData.registrationStatus === "Registered" }
    ],
    [
      { name: "productsOffered", type: "text", placeholder: "Categories of Products/Services" },
      { name: "priceRange", type: "select", options: ["Low-cost", "Mid-range", "High-end"], placeholder: "Select Price Range" },
      { name: "customerBaseSize", type: "number", placeholder: "Estimated number of regular customers" }
    ],
    [
      { name: "deliveryOptions", type: "checkbox", options: ["In-house", "Partnered", "Pickup"], placeholder: "Delivery Options" },
      { name: "paymentMethods", type: "checkbox", options: ["Cash", "Mobile Money", "Card"], placeholder: "Payment Methods" }
    ],
    [
      { name: "onlinePresence", type: "radio", options: ["Yes", "No"], placeholder: "Online Presence (Website, Social Media)" },
      { name: "ecommercePlatforms", type: "text", placeholder: "Specify e-commerce platforms (if any)" }
    ],
    [
      { name: "marketingExperience", type: "text", placeholder: "Platforms used for marketing campaigns" },
      { name: "promotionalStrategy", type: "select", options: ["Discounts", "BOGO Offers", "Free Delivery"], placeholder: "Select Promotional Strategy" }
    ],
    [
      { name: "productAvailability", type: "radio", options: ["Yes", "No", "Seasonal"], placeholder: "Can maintain steady supply?" },
      { name: "collaborationInterest", type: "radio", options: ["Yes", "No"], placeholder: "Co-create campaigns? Exclusive promotions?" },
      { name: "supportNeeded", type: "select", options: ["Training", "Financial Support"], placeholder: "Select Support Needed" },
      { name: "additionalComments", type: "text", placeholder: "Additional comments or suggestions" }
    ]
  ];

  return (
    <div className="max-w-lg mx-auto p-6 mt-16 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">Merchant Selection Criteria Form</h2>
      <div className="mb-4 text-center text-gray-600">Step {step} of {formSections.length}</div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {formSections[step - 1].map(({ name, type, options, placeholder, condition }) =>
          condition === false ? null : (
            <div key={name}>
              <label className="block text-sm font-medium capitalize">{placeholder}</label>
              {type === "select" ? (
                <select name={name} value={formData[name]} onChange={handleChange} className="w-full border p-2 rounded" required>
                  <option value="">{placeholder}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : type === "radio" ? (
                <div>
                  {options.map((option) => (
                    <label key={option} className="inline-flex items-center space-x-2 mr-4">
                      <input type="radio" name={name} value={option} checked={formData[name] === option} onChange={handleChange} required />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              ) : type === "checkbox" ? (
                <div>
                  {options.map((option) => (
                    <label key={option} className="inline-flex items-center space-x-2 mr-4">
                      <input type="checkbox" name={name} value={option} checked={formData[name]?.includes(option)} onChange={handleChange} />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <input type={type} name={name} value={formData[name]} onChange={handleChange} placeholder={placeholder} className="w-full border p-2 rounded" required />
              )}
            </div>
          )
        )}
        <div className="flex justify-between mt-4">
          {step > 1 && <button type="button" className="bg-gray-400 text-white py-2 px-4 rounded" onClick={prevStep}>Previous</button>}
          {step < formSections.length ? <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded" onClick={nextStep}>Next</button> : <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default MerchantForm;
