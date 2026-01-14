import React from 'react';


const Experience = ({ onNext, onBack }) => {
  
  
  const projects = [
    { id: 1, name: 'Project Alpha', icon: '' },
    { id: 2, name: 'Project Beta', icon: '' },
    
  ];

  return (
    
    <div className="desktop-screen screen-2">
      
    
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            
            <div className="project-icon">{project.icon}</div>
            <p className="project-name">{project.name}</p>
          </div>
        ))}
      </div>

      
      <div className="navigation-controls">
        <button 
          className="back-btn" 
          onClick={onBack}
        >
          Back
        </button>
        <button 
          className="more-btn" 
          onClick={onNext}
        >
          More
        </button>
      </div>
      
      
    </div>
  );
};

export default Experience;