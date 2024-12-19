import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Face Glass Detection",
      description: "Developed a machine learning model using TensorFlow to detect whether an individual is wearing glasses, achieving 99.8% accuracy. And also, created a user interface with Gradio to allow users to upload photos and receive real-time detection results. "
    },
    {
      title: "Weather Prediction",
      description: " Developed a machine learning model for Weather Prediction using Python, which predicts rain based on input features like temperature, wind speed, and humidity"
    },
    {
      title: "Mini-Mobile Interface",
      description: "Developed a mini Mobile Interface application using C language, merging multiple functionalities and simulating a mobile interface with key-based access to apps."
    },
    {
      title: "Literacy Rate Analysis",
      description: "In this project, I have done research on the Literacy rate in India, gathered information, and visualized those data in the form of graphs and charts. And I have designed a model to predict the future literacy rate in upcoming years. "
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        <button className="arrow left-arrow" onClick={handlePrevClick}>◀</button>
        <div className="project-card">
          <h3 className="project-title">{projects[currentIndex].title}</h3>
          <p className="project-description">{projects[currentIndex].description}</p>
        </div>
        <button className="arrow right-arrow" onClick={handleNextClick}>▶</button>
      </div>
    </section>
  );
}

export default Projects;
