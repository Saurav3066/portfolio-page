import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'RC LABS',
      position: 'Python Developer Intern',
      duration: 'Sept 2022 - Sept 2023',
      description: ' I designed and developed the GUI of a desktop application using PyQt, Python, and Pandas to monitor battery data. The application included statistical graphs, configurable battery settings, historical data downloads, and report generation.',
      link: 'https://rclabs.co/',
    },
    {
      company: 'RC LABS',
      position: 'Front-End Developer Intern',
      duration: 'Sept 2022 - Sept 2023',
      description: 'I designed and developed a new and improved web page for the company using NextJs, HTML, CSS, and JavaScript.',
      link: 'https://rclabs.co/',
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="flex flex-wrap justify-center">
          {experiences.map((experience, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4 relative">
              <div className="bg-white rounded-lg shadow transition duration-300 hover:shadow-lg h-full">
                <div className="p-4 m-4">
                  <h3 className="text-xl font-bold mb-2">{experience.company}</h3>
                  <p className="text-gray-600">{experience.position}</p>
                  <p className="text-gray-600">{experience.duration}</p>
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <a href={experience.link} className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
