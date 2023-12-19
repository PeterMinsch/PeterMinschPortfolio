import React from 'react';
import './ExperienceCards.css';

const ExperienceCards = ({ job, date, description }) => {
  return (
    <div className="experience-card">
      <div className="header">
        <span className="job">{job}</span>
        <span className="date">{date}</span>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCards;
