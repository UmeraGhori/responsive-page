import {React, useState} from "react";
import "./Services.css";

function Services(){
    const [showServicesModal, setShowServicesModal] = useState(false);

    const handleMouseEnterServices = () => {
        setShowServicesModal(true);
      };
    
      const handleMouseLeaveServices = () => {
        setShowServicesModal(false);
      };

    return(
        <div
      className="about-link"
      onMouseEnter={handleMouseEnterServices}
      onMouseLeave={handleMouseLeaveServices}
    >
      <a href="/" className="btn btn-link">Services</a>
      {showServicesModal && (
        <div className="modal-dropdown">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mt-3">
                <div className="modal-top">
                    <h1>
                    <span className="text-dark">Made to</span>
                    <span className="text-primary"> Scale</span>
                    </h1>
                    <p>Our software development services are built to evlove your business idea into a successful growth story</p>
                    <div className="modal-image">
                  <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9BWOnSiy6yDgv7HoNCbSDIR8W0b-P82tPA&s" alt="Empower Team" className="images" />
                  <p>See how we made a powerful ERP solution for the world's largest furniture retailer</p>
                </div>
                </div>
                <div className="modal-text">
                  <p>Leading Technology Offerings For</p> 
                  <ul className="no-bullets">
                    <li>Startup</li>
                    <li>Public Entities</li>
                    <li>Enterprises</li>
                  </ul>
                </div>

              </div>
              <div className="col-md-2">
                <div className="row">
                  <div className="col-md-12">
                  <div className="modal-column">
                   <h4>IDEATION AND PRODUCT DESIGN</h4>
                   <p>UI/UX</p>
                   <p>Product Design</p>
                   <p>Interaction Design</p>
                   <p>User Research</p>
                 </div>
                  </div>
                  <div className="col-md-12">
                  <div className="modal-column">
                   <h4>MOBILE APP DEV</h4>
                   <p>PWA</p>
                   <p>Mobile First Design</p>
                   <p>iOS App Development</p>
                   <p>Android App Development</p>
                 </div>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="row">
                  <div className="col-md-12">
                  <div className="modal-column">
                   <h4>BLOCKCHAIN SERVICES</h4>
                   <p>NFT Marketplace</p>
                   <p>Metaverse Development</p>
                   <p>Dapp Development</p>
                   <p>Smart Contract Development</p>
                 </div>
                  </div>
                  <div className="col-md-12">
                  <div className="modal-column">
                   <h4>IT CONSULTING</h4>
                   <p>Healthcare IT Consulting</p>
                   <p>Business Process Automation</p>
                   <p>Data Analytics</p>
                 </div>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="row">
                  <div className="col-md-12">
                  <div className="modal-column">
                   <h4>DEVOPS</h4>
                   <p>SecOps</p>
                   <p>Infrastructure as Code</p>
                   <p>Continuous Integration and Continuous Delivery (CI/CD)</p>
                 </div>
                  </div>
                  <div className="col-md-10">
                  <div className="modal-column">
                   <h4>ARTIFICIAL INTELLIGENCE</h4>
                   <p>Generative AI</p>
                   <p>Machine Learning</p>
                   <p>Computer Vision</p>
                   <p>Natural Language Processing (NLP)</p>
                 </div>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="row">
                  <div className="col-md-12">
                  <div className="modal-column">
                   <h4>SOFTWARE DEVELOPMENT</h4>
                   <p>ERP Software Development</p>
                   <p>Custom CRM</p>
                   <p>AR/VR Development</p>
                   <p>IoT Development</p>
                   <p>Microservices</p>
                   <p>Backend Development</p>
                 </div>
                  </div>
                  <div className="col-md-12">
                  <div className="modal-column">
                   <h4>CLOUD SERVICES</h4>
                   <p>Cloud Managed Services</p>
                   <p>Cloud Consulting</p>
                   <p>AWS</p>
                   <p>Azure</p>
                   <p>Google Cloud</p>
                 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    )
}
export default Services;