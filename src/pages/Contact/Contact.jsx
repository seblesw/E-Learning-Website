import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(
      'service_q5z8bpq',          
      'template_0km2ven',        
      emailParams,
      'JG5viJsolFHdff8cu'             
    )
    .then((response) => {
      setSuccess('Your message has been sent successfully!');
      setError('');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setError('Failed to send your message. Please try again later.');
    });
  };

  return (
    <div>
      <section id="contact" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center font-serif" data-aos="fade-up">Contact Us</h2>
          {error && <p className="error text-red-500 mb-4 text-center" data-aos="fade-down">{error}</p>}
          {success && <p className="success text-green-500 mb-4 text-center" data-aos="fade-down">{success}</p>}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg" data-aos="fade-up">
            <div className="mb-4" data-aos="fade-right">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:outline-none transition duration-300"
                placeholder="Enter your Name"
              />
            </div>
            <div className="mb-4" data-aos="fade-left">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:outline-none transition duration-300"
                placeholder="Enter your Email Address"
              />
            </div>
            <div className="mb-4" data-aos="fade-right">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:outline-none transition duration-300"
                placeholder="Enter the Subject"
              />
            </div>
            <div className="mb-6" data-aos="fade-left">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:outline-none transition duration-300"
                rows="5"
                placeholder="Write your Message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-teal-600 dark:from-teal-600 dark:to-teal-700 text-white py-3 px-6 rounded-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
              data-aos="fade-up"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
