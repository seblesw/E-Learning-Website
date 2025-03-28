import React, { useState } from "react";
import Swal from 'sweetalert2';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
    major: "",
    studyPreferences: [],
    extracurriculars: "",
    futureGoals: "",
    scholarshipInterest: "",
  });

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
    try {
      await fetch("https://example.com/api/student_signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      Swal.fire({
        title: "Signup Successful!",
        text: "Your student profile has been created successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      setFormData({
        fullName: "",
        age: "",
        email: "",
        phone: "",
        school: "",
        grade: "",
        major: "",
        studyPreferences: [],
        extracurriculars: "",
        futureGoals: "",
        scholarshipInterest: "",
      });

      setStep(1);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const formSections = [
    {
      category: "Personal Info",
      fields: [
        { name: "fullName", type: "text", placeholder: "Full Name" },
        { name: "age", type: "number", placeholder: "Age" },
        { name: "email", type: "email", placeholder: "Email" },
        { name: "phone", type: "text", placeholder: "Phone Number" },
      ],
    },
    {
      category: "Education Info",
      fields: [
        { name: "school", type: "text", placeholder: "School Name" },
        { name: "grade", type: "text", placeholder: "Grade/Class" },
        { name: "major", type: "text", placeholder: "Major (if applicable)" },
      ],
    },
    {
      category: "Preferences & Goals",
      fields: [
        { name: "studyPreferences", type: "checkbox", options: ["Online", "In-Person", "Hybrid"], placeholder: "Preferred Study Method" },
        { name: "extracurriculars", type: "text", placeholder: "Extracurricular Activities" },
        { name: "futureGoals", type: "text", placeholder: "Future Career Goals" },
      ],
    },
    {
      category: "Scholarship & Assistance",
      fields: [
        { name: "scholarshipInterest", type: "radio", options: ["Yes", "No"], placeholder: "Interested in Scholarships?" },
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-lg mx-auto p-10 bg-white shadow-md rounded-xl">
        <h2 className="text-xl font-bold mb-4">Student Signup Form</h2>
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
              <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded" onClick={prevStep} disabled={loading}>
                Previous
              </button>
            )}
            {step < formSections.length ? (
              <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded" onClick={nextStep} disabled={loading}>
                Next
              </button>
            ) : (
              <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
