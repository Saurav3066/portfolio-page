import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills'; 
import Experience from './components/experience'; 
import Contact from './components/contact';
import ScrollButton from './components/scrollbutton';

const App = () => {
  return (
    <div className="container m-0 max-w-full overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <ScrollButton />
    </div>
  );
};

export default App;

