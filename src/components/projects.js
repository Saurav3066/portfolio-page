import React, { useRef } from 'react';
import backgroundImage from '../components/images/background.png';
import FaceRecog from '../components/images/facial-recognition.png';
import ExpenceTracker from '../components/images/expence-tracker.jpg';
import ProfilePic from '../components/images/profile.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const sliderRef = useRef(null); // Define a ref for the Slider component

  const projects = [
    {
      name: 'Multiple Face Recognition System using Deep Learning',
      description: 'The system allows for new registration of students, dataset creation, model training, retraining, and attendance marking.',
      image: FaceRecog,
      link: 'https://github.com/Saurav3066/Multiple_Face_Recognition_Attendance_Management_System'
    },
    {
      name: 'Expense Tracker Application',
      description: 'This application is used to keep track of the daily expenses. This is built with the help of Firebase for the database as well as for authentication.',
      image: ExpenceTracker,
      link: 'https://github.com/Saurav3066/EXPENCE_TRACKER'
    },
    {
      name: 'Profile Picture',
      description: 'This is a demo project for uploading a profile picture which has download protection.',
      image: ProfilePic,
      link: 'https://github.com/Saurav3066/Profile-Picture'
    },
    {
      name: 'Project 4',
      description: 'Donec fermentum libero sed turpis ultrices, sed tempus dolor luctus. Fusce commodo metus quis turpis vehicula.',
      image: 'project3.jpg',
      link: 'https://example.com/project3'
    }
  ];

  // Slick settings for the carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  return (
    <section id="projects" className="bg-cover bg-center bg-gray-200 py-16" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="container mx-auto text-center relative">
        <h2 className="text-3xl sm:text-2xl font-bold mb-4">Projects</h2>
        <p className="text-lg sm:text-sm mb-8">
          Here are a few of the projects I have worked on recently.
        </p>
        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="mx-4 px-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg mx-0 max-w-md sm:min-h-[520px] relative">
                <img src={project.image} alt={project.name} className="w-full h-80 object-fit" />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="lg:text-xl sm:text-lg font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4 lg:text-sm sm:text-xs">{project.description}</p>
                  <a href={project.link} className="absolute bottom-4 right-4 text-blue-500 hover:underline lg:text-sm sm:text-xs">View Project</a>
                </div>
              </div>
            ))}
          </Slider>
          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2 shadow-md hover:bg-gray-700 focus:outline-none"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2 shadow-md hover:bg-gray-700 focus:outline-none"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
