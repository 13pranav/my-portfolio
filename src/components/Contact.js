import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({ from_name: '', user_email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await emailjs.send('service_kgnxise', 'template_iuz77sv', formData, 'JC58hqjQIj5d1lVYA');
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Your message has been successfully sent!');
      setIsLoading(false);
      setFormData({ from_name: '', user_email: '', message: '' }); // Reset form fields
    } catch (error) {
      console.error('FAILED...', error);
      toast.error('Failed to send the message. Please try again later.');
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-6">
            <input 
              type="text" 
              name="from_name" 
              value={formData.from_name} 
              onChange={handleChange} 
              placeholder="Your Name" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
              required
            />
          </div>
          <div className="mb-6">
            <input 
              type="email" 
              name="user_email" 
              value={formData.user_email} 
              onChange={handleChange} 
              placeholder="Your Email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
              required
            />
          </div>
          <div className="mb-6">
            <textarea 
              rows="5" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Your Message" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-primary text-white px-6 py-3 rounded-full font-bold text-lg w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;

