import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="bg-cyan-950 text-white p-8">
      <h2 className="text-3xl text-center font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="project-content bg-white text-black p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center mb-4">
            Hospital Website
          </h3>
          <p className="text-center mb-4">
            A comprehensive website for managing hospital operations and patient
            records.
          </p>
          <a
            href="https://github.com/EVAH-MSO/HOSPITAL-WEBSITE.git"
            className="block text-center text-blue-500 hover:underline"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-content bg-white text-black p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center mb-4">
            Hotel Website
          </h3>
          <p className="text-center mb-4">
            A modern website for hotel bookings and management.
          </p>
          <a
            href="https://github.com/EVAH-MSO/HOTEL-WEBSITE.git"
            className="block text-center text-blue-500 hover:underline"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-content bg-white text-black p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center mb-4">
            Age Calculator
          </h3>
          <p className="text-center mb-4">
            A simple tool to calculate age based on the date of birth.
          </p>
          <a
            href="https://github.com/EVAH-MSO/AGE-CALCULATION-APP.git"
            className="block text-center text-blue-500 hover:underline"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-content bg-white text-black p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center mb-4">
            React Project
          </h3>
          <p className="text-center mb-4">
            A project built using React to demonstrate component-based
            architecture and state management.
          </p>
          <a
            href="https://github.com/EVAH-MSO/REACT-PORTFOLIO.git
"
            className="block text-center text-blue-500 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
