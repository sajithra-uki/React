import React from 'react';

const About = ({ onNext }) => {
  return (
    <div className="about">
      
      <div className="header-icons">...</div>

      <div className="content-area">
        <div className="profile-photo-container">
          
        </div>
        <div className="intro-text">
          <h1>Sajithra Ramachandran</h1>
          <h2>Scientist</h2>
          <p>
            Student focused on full-stack web development, data analysis, and mobile programming. Dedicated to building efficient, user-focused solutions.
          </p>
        </div>
      </div>
      <div>
        <img src="/home/uki-dsa-03/Downloads/12 (1).jpg"></img>
      </div>

      <div className="navigation-buttons">
        <button className="back-btn" disabled>BACK</button>
        <button className="more-btn" onClick={onNext}>MORE</button>
      </div>
    </div>
  );
};

export default About;