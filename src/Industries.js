import { React, useState } from "react";
import "./Industries.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Industries() {
  const [showIndustriesModal, setShowIndustriesModal] = useState(false);

  const handleMouseEnterIndustries = () => {
    setShowIndustriesModal(true);
  };

  const handleMouseLeaveIndustries = () => {
    setShowIndustriesModal(false);
  };

  return (
    <div
      className="industries-link"
      onMouseEnter={handleMouseEnterIndustries}
      onMouseLeave={handleMouseLeaveIndustries}
    >
      <a href="#industries" className="btn btn-link">Industries</a>
      {showIndustriesModal && (
        <div className="modal-dropdown">
          <div className="container">
            <div className="row">
              {/* Left section (Top and Image) */}
              <div className="col-md-4 row">
                <div className="modal-top mb-5 mt-3">
                  <h1>Diverse Capabilities</h1>
                  <p>That deploy customized solutions in a wide range of industries</p>
                </div>
                <div className="modal-low mt-5">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHeQsiz_Rvf7OTBXLTSi9VdxvB0rZUrqjETA&s"
                    alt="Industries"
                  />
                  <p>Read our developments that has helped the <a className="text-primary" href="/">Supply Chain</a> Industry boom in India</p>
                </div>
              </div>

              <div className="col-md-1 d-none d-md-block"></div>

              {/* Right section (3 columns of content) */}
              <div className="col-md-7">
                <div className="row">
                  {/* Column 1 */}
                  <div className="col-md-4 modal-column">
                    <h6><FontAwesomeIcon icon={faAngleRight} /> On Demand</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Healthcare</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Restaurant</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Entertainment</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Travel</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> E-scooter</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Events</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Oil and Gas</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Telecom</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Construction</h6>
                  </div>

                  {/* Column 2 */}
                  <div className="col-md-4 modal-column">
                    <h6><FontAwesomeIcon icon={faAngleRight} /> eCommerce</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> SaaS</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Games</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Wellness</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Finance</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Politics</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Social Networking</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Banking</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Insurance</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Retail</h6>
                  </div>

                  {/* Column 3 */}
                  <div className="col-md-4 modal-column">
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Real Estate</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Education</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> News</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Logistics</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Aviation</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Agriculture</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> EV</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Automotive</h6>
                    <h6><FontAwesomeIcon icon={faAngleRight} /> Manufacturing</h6>
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

export default Industries;