import React from 'react';

const Contact = ({ onBack }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert("Message Sent!"); 
  };
  
  return (
    <div className= "contact">
      
      <div className="social-sidebar">
        
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-discord"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>

      
      <div className="contact-form-container">
        <h2>FORM</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required /><br></br>
          <input type="email" name="email" placeholder="Email" required /><br></br>
          <input type="text" name="purpose" placeholder="Purpose" /><br></br>
          <textarea name="message" placeholder="Message"></textarea><br></br>
          <button type="submit" className="send-btn">SENT</button>
          <button type="button" className="edit-btn">EDIT</button>
        </form>
      </div>
      
      <div className="navigation-buttons">
        <button className="back-btn" onClick={onBack}>BACK</button>
        <button className="more-btn" disabled>MORE</button>
      </div>
    </div>
  );
};

export default Contact;