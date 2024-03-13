import React from "react";
import sauravImage from '../components/images/saurav.png';
import backgroundImage from '../components/images/background.png';

export default function AboutMe() {
  const resumeUrl = 'https://drive.google.com/file/d/13uw1HRzHX6Dp8slICqnYDJeJk1ZmMbi6/view?usp=drive_link'; 

  return (
    <div id="about" className="grid lg:py-36 py-20 gap-6 lg:gap-12" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="mx-auto max-w-4xl grid items-center gap-4 lg:gap-10 lg:max-w-5xl">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter lg:text-5xl">About Me</h1>
          <p className="text-gray-500 dark:text-gray-400">Frontend Developer. Python Enthusiast. Lifelong Learner.</p>
          <img
            src={sauravImage}
            className="rounded-full h-48 w-48 md:h-72 md:w-72 sm:h-56 sm:w-56 mx-auto mb-8 md:mb-0 drop-shadow-xl hover:drop-shadow-2xl"
            alt="Saurav Anand"
          />
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold">Saurav Anand</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Graduated in BTech in 2023</p>
            </div>
            <div className="space-x-4 inline-flex items-center justify-center">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-base font-semibold shadow-xl transition duration-300">Resume</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl grid gap-6 lg:gap-12">
          <div className="grid gap-2">
          <p className="text-slate-900 antialiased text-justify lg:text-lg tracking-tighter font-medium dark:text-gray-400">
            Hi, I'm Saurav Anand. I'm a frontend developer with a passion for creating beautiful and intuitive user
            interfaces. I'm experienced in HTML, CSS, and JavaScript, and I love diving into new frameworks and
            libraries to expand my skills. I'm also a Python enthusiast, and I enjoy using Python to automate tasks
            and build web applications. I'm a quick learner and a creative problem solver, and I'm always looking for
            new challenges to help me grow as a developer.
          </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-bold">Education</h3>
            <div className="space-y-2 text-gray-500 dark:text-gray-400">
              <h4 className="font-semibold">Bachelor of Technology (B.Tech)</h4>
              <p>Sri Krishna Institute of Technology</p>
              <p>Bengaluru, Karnataka, India</p>
              <p className="text-xs">2019 - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
