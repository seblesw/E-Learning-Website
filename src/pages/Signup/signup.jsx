import React, { useState } from "react";
import Swal from 'sweetalert2';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    courseSelection: "",
    skillLevel: "Beginner",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        email: "",
        phoneNumber: "",
        courseSelection: "",
        skillLevel: "Beginner",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 py-28">
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl">
        <h2 className="text-xl font-bold mb-4 text-center"> Registration Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[ 
            { name: "fullName", type: "text", placeholder: "Full Name" },
            { name: "email", type: "email", placeholder: "Email" },
            { name: "phoneNumber", type: "tel", placeholder: "Phone Number (Optional)" },
          ].map(({ name, type, placeholder }) => (
            <div key={name}>
              <label className="block text-sm font-medium">{placeholder}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full border p-2 rounded"
                required={name !== "phoneNumber"}
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium">Course Selection</label>
            <select
              name="courseSelection"
              value={formData.courseSelection}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            >
              <option value="">Select a Course</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Graphic Design">Graphic Design</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Skill Level</label>
            <select
              name="skillLevel"
              value={formData.skillLevel}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <button
  type="submit"
  className="bg-green-500 text-white py-2 px-16 text-center border-2 border-green-700 mx-auto block rounded-full"
  disabled={loading}
>
  {loading ? "Submitting..." : "Submit"}
</button>

        </form>
      </div>
    </section>
  );
};

export default Signup;
