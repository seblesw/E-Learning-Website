import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import Footer from '../../components/Footer/Footer';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { t, i18n } = useTranslation(); 

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
      setError('Please fill out all fields before submitting.');
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
      setSuccess('Thank you! Your message has been successfully sent. We will get back to you as soon as possible.');
      setError('');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((err) => {
      setError('Oops! Something went wrong. Please try again later.');
    });
  };

  return (
    <div>
      <section id="contact" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center font-serif" data-aos="fade-up">
          {t("get_in_touch_with_us")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-lg overflow-hidden shadow-lg" data-aos="fade-right">
              <iframe
                title="Google Map of Addis Ababa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127550.69356228944!2d38.65212030214796!3d9.00540188791627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f150fa52d5b%3A0xb3138c86c98e1d28!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1632510875857!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg" data-aos="fade-left">
              {/* Error and Success Messages */}
              {error && <p className="error text-red-500 mb-4 text-center" data-aos="fade-down">{error}</p>}
              {success && <p className="success text-green-500 mb-4 text-center" data-aos="fade-down">{success}</p>}

              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:outline-none transition duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:outline-none transition duration-300"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:outline-none transition duration-300"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:outline-none transition duration-300"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-400 to-teal-600 dark:from-teal-600 dark:to-teal-700 text-white py-3 px-6 rounded-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="mt-16 text-center" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 font-serif">
              Contact Information
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-serif">
              <strong>Email:</strong> contact@hulu-software.com
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-serif">
              <strong>Phone:</strong> +251 00000
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Contact;
