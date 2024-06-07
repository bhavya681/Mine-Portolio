import React from "react";
import ProjectCard from "../sub/ProjectCard";


const Projects = () => {
  return (
    <div className="bg-[#030014] py-20" id="projects">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-semibold text-center text-gray-100 mb-16">
          Explore My Projects
        </h1>
        <div className="overflow-hidden">
          <div
            className="flex space-x-10 rounded-xl cursor-pointer"
          >
            <a href="https://github.com/bhavya681/mern_eccomernce" className="cursor-pointer">
            <ProjectCard
              src="/image1.png"
              title="Modern Mern-Stack Eccomerce Site"
              description="Shop smarter with our MERN E-commerce App, a comprehensive platform combining MongoDB, Express.js, React, and Node.js to deliver a smooth and secure online shopping experience with diverse product listings and robust user management."
            />
            </a>
            <a href="https://github.com/bhavya681/StudFolio" className="cursor-pointer">
            <ProjectCard
              src="/image2.png"
              title="React Food Delivery App"
              description="Experience seamless food ordering with our React Food Delivery App, offering a user-friendly interface, real-time restaurant menus, and secure online payments to satisfy your culinary cravings effortlessly."
            />
            </a>

            <a href="https://github.com/bhavya681/React-Food-Delivery" className="cursor-pointer">
            <ProjectCard
              src="/image.png"
              title="React Crypto Application"
              description="Stay updated on the latest cryptocurrency trends with our React Crypto Tracker App, featuring real-time price updates, market analysis, and personalized watchlists to help you make informed investment decisions"
            />
            </a>
            {/* Add more ProjectCard components as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
