import React from 'react';
import './ProjectCards.css';

const ProjectCards = ({ title, description, languages }) => {
  return (
    <div className="projectcard">
      <div className="title"> {/* Corrected class name */}
        <span>{title}</span>
      </div>
      <div className="Description">
        <span>{description}</span>
      </div>
      <div className="Languages">
        <span>Languages: {languages}</span>
      </div>
    </div>
  );
};

export default ProjectCards;
