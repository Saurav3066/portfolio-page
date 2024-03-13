import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const ScrollButton = () => {
  const [isScrollUpVisible, setIsScrollUpVisible] = useState(false);
  const [isScrollDownVisible, setIsScrollDownVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolledToTop = window.pageYOffset < 300;
      const scrolledToEnd = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      setIsScrollUpVisible(!scrolledToTop);
      setIsScrollDownVisible(!scrolledToEnd && scrolledToTop);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <>
      {isScrollUpVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 text-white cursor-pointer transition duration-300 animate-bounce"
        >
          <div className="bg-blue-500 rounded-full p-2 backdrop-blur">
            <FontAwesomeIcon icon={faArrowUp} className="text-2xl" />
          </div>
        </div>
      )}
      {isScrollDownVisible && (
        <div
          onClick={scrollToBottom}
          className="fixed bottom-10 right-10 z-50 text-white cursor-pointer transition duration-300 animate-bounce"
        >
          <div className="bg-blue-500 rounded-full p-2 backdrop-blur">
            <FontAwesomeIcon icon={faArrowDown} className="text-2xl" />
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollButton;
