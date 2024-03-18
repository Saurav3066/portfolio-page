import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import backgroundImage from '../components/images/background.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Update the form data to include the sender's name
    const fullFormData = {
      ...formData,
      from_name: formData.name // Add sender's name to the form data
    };

    emailjs.send('service_bzdmk2k', 'template_dasavw9', fullFormData, '18WAqeYp9Wqs7ZSL2')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Optionally, you can show a success message or redirect the user
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // Optionally, you can show an error message to the user
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section id="contact" className="bg-gray-200 py-16 relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-black ">Contact Me</h2>
        <p className="text-lg mb-8 px-2 text-black ">
          Feel free to reach out to me if you have any questions or would like to discuss a potential project.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:p-8 sm:-2">
          <div className="bg-white bg-opacity-50 p-6 rounded-md">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-4 text-2xl" />
              <a href="mailto:contact.vikrant3066@gmail.com" className="text-gray-600 hover:text-blue-500">
                contact.vikrant3066@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-4 text-2xl" />
              <a href="tel:+917763082350" className="text-gray-600 hover:text-blue-500">
                +91 7763082350
              </a>
            </div>
            <div className="flex items-center justify-self-start">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-600 mr-4 text-2xl" />
              <p className="text-gray-600">MLV PG, Near Acharya Institute of Technology, Bengaluru, Karnataka, 560107</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-50 p-6 rounded-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input type="text" name="name" placeholder="Your Name" className="w-full py-2 px-4 border rounded-md" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <input type="email" name="email" placeholder="Your Email" className="w-full py-2 px-4 border rounded-md" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <input type="text" name="subject" placeholder="Subject" className="w-full py-2 px-4 border rounded-md" required value={formData.subject} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <textarea name="message" rows="4" placeholder="Your Message" className="w-full py-2 px-4 border rounded-md" required value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md">Send</button>
            </form>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {/* <a href="https://www.facebook.com" className="text-gray-600 hover:text-blue-500 mx-2 text-2xl">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com" className="text-gray-600 hover:text-blue-500 mx-2 text-2xl">
            <FontAwesomeIcon icon={faInstagram} />
          </a> */}
          <a href="https://www.linkedin.com/in/sauravanand3066/" className="text-gray-600 hover:text-blue-500 mx-2 text-2xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Saurav3066" className="text-gray-600 hover:text-blue-500 mx-2 text-2xl">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
