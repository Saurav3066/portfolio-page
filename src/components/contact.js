import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-8">
          Feel free to reach out to me if you have any questions or would like to discuss a potential project.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2" />
            <p className="text-gray-600">example@example.com</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2" />
            <p className="text-gray-600">+1 234 567 890</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-600 mr-2" />
            <p className="text-gray-600">123 Street Name, City, Country</p>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-600 hover:text-blue-500 mr-2">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 mr-2">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 mr-2">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
