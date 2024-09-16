import React, { useState } from 'react';
import "./About.css"; 

function About() {
  const [showAboutModal, setShowAboutModal] = useState(false);

  const handleMouseEnterAbout = () => {
    setShowAboutModal(true);
  };

  const handleMouseLeaveAbout = () => {
    setShowAboutModal(false);
  };

  return (
    <div
      className="about-link"
      onMouseEnter={handleMouseEnterAbout}
      onMouseLeave={handleMouseLeaveAbout}
    >
      <a href="#about" className="btn btn-link">About</a>
      {showAboutModal && (
        <div className="modal-dropdown">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mt-3">
                <div className="modal-image">
                  <img src= "https://images.squarespace-cdn.com/content/v1/57f3e33c20099e0dd27b624a/1599160622497-VYSRPT1MKNE7K0D7EJV3/Screen+Shot+2020-09-03+at+3.16.32+PM.png?format=2500w" alt="Empower Team" />
                  <p>See how we empower, energize and make time for each other.</p>
                </div>
                <div className="modal-text mt-3">
                  <p>Leading Technology Offerings For</p> 
                  <ul className="no-bullets">
                    <li>Startup</li>
                    <li>Public Entities</li>
                    <li>Enterprises</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="modal-column">
                      <h4>ABOUT APPINVENTIV</h4>
                      <p>We believe in change driven by technology and innovation.</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="modal-column">
                      <h4>CORE TEAM OF APPINVENTIV</h4>
                      <p>Meet the brains behind our smooth running and powerful machine.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="modal-column">
                      <h4>START YOUR CAREER WITH US</h4>
                      <p>Join our team of experts to make a difference in the real world.</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="modal-column">
                      <h4>HOW WE WORK AND FUNCTION</h4>
                      <p>Learn about Appinventiv's product lifecycle development process.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
