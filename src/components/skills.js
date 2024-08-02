import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faPython, faGit } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt, faFileWord, faFileExcel, faFilePowerpoint, faC} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const coreSkills = [
    { name: 'Python', level: 'Intermediate', icon: faPython },
    { name: 'HTML5', level: 'Advanced', icon: faHtml5 },
    { name: 'CSS', level: 'Advanced', icon: faCss3 },
    { name: 'JavaScript', level: 'Intermediate', icon: faJs },
    { name: 'ReactJs', level: 'Intermediate', icon: faReact },
    { name: 'NextJs', level: 'Intermediate', icon: faReact },
    { name: 'NodeJs', level: 'Intermediate', icon: faNodeJs },
    { name: 'SQL', level: 'Intermediate', icon: faDatabase },
    { name: 'Git/Github', level: 'Intermediate', icon: faDatabase },
  ];


  const otherSkills = [
    { name: 'C', level: 'Intermediate', icon: faC },
    { name: 'C++', level: 'Intermediate', icon: null },
    { name: 'UI/UX', level: 'Intermediate', icon: faMobileAlt },
    { name: 'Android', level: 'Intermediate', icon: faMobileAlt },
    { name: 'NoSQL', level: 'Intermediate', icon: faDatabase },
    { name: 'MS-Word', level: 'Intermediate', icon: faFileWord },
    { name: 'MS-Excel', level: 'Intermediate', icon: faFileExcel },
    { name: 'MS-PowerPoint', level: 'Intermediate', icon: faFilePowerpoint },
  ];

  return (
    <section id="skills" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full mb-8">
            <h3 className="text-xl font-bold mb-4">Core Skills</h3>
            <div className="flex flex-wrap justify-center">
              {coreSkills.map((skill, index) => (
                <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
                  <div className="bg-white p-4 rounded shadow">
                    <FontAwesomeIcon icon={skill.icon} className="text-5xl text-blue-500 mb-4" />
                    <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                    <p className="text-gray-600">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-xl font-bold mb-4">Other Skills</h3>
            <div className="flex flex-wrap justify-center">
              {otherSkills.map((skill, index) => (
                <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
                  <div className="bg-white p-4 rounded shadow">
                    {skill.icon && <FontAwesomeIcon icon={skill.icon} className="text-5xl text-blue-500 mb-4" />}
                    <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                    <p className="text-gray-600">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
