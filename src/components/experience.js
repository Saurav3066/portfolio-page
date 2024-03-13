import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Company A',
      position: 'Software Engineer',
      duration: 'Jan 2018 - Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      link: 'https://www.companya.com',
    },
    {
      company: 'Company B',
      position: 'Frontend Developer',
      duration: 'Jun 2016 - Dec 2017',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      link: 'https://www.companyb.com',
    },
    {
      company: 'Company C',
      position: 'Intern',
      duration: 'May 2015 - Aug 2015',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
  ];

  return (
    <section id="experience" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="flex flex-col justify-evenly md:flex-row md:space-x-8">
          {experiences.map((experience, index) => (
            <div key={index} className="w-full md:w-1/3 xl:w-1/4 p-4">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-bold mb-2">{experience.company}</h3>
                <p className="text-gray-600">{experience.position}</p>
                <p className="text-gray-600">{experience.duration}</p>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <a href={experience.link} className="btn btn-primary">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;