import React, { useEffect, useState } from 'react';
import heroBackground from '../components/images/background1.png';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const introTexts = [
      "I'm a frontend developer and I want to make beautiful web pages.",
      "I'm also a Python Developer and enjoy working with it.",
    ];

    let index = 0;
    const timer = setInterval(() => {
      setText((prevText) => prevText + introTexts[currentTextIndex][index]);
      index++;
      if (index === introTexts[currentTextIndex].length) {
        clearInterval(timer);
        setTimeout(() => {
          setText('');
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % introTexts.length);
        }, 500);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [currentTextIndex]);
  
  return (
    <section className="text-white py-24 max-h-full overflow-hidden" 
             style={{ backgroundImage: `url(${heroBackground})`, 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center',
                      backdropFilter: 'blur(15px)' }}> 
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-7xl font-bold mb-2 text-center">Hi!<br />I'm Saurav Anand</h1>
        <div className="text-center md:text-left">
          <p className="text-base md:text-xl my-4 md:my-8">{text}<span className="cursor-blink ml-1">|</span></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
