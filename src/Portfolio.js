import { React, useState } from "react";
import "./Portfolio.css";

function Portfolio() {
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);

  const handleMouseEnterPortfolio = () => {
    setShowPortfolioModal(true);
  };

  const handleMouseLeavePortfolio = () => {
    setShowPortfolioModal(false);
  };

  return (
    <div
      className="portfolio-link"
      onMouseEnter={handleMouseEnterPortfolio}
      onMouseLeave={handleMouseLeavePortfolio}
    >
      <a href="/" className="btn btn-link">Portfolio</a>
      {showPortfolioModal && (
        <div className="modal-dropdown">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
              <div className="modal-top mt-3">
                  <h1>Enabling <br />
                  Innovation</h1>
                  <p>to steadfast success for top globally leading brands</p>
                  <div className="modal-button mb-5">
                    <button>View all</button>
                </div>
                </div>
                <div className="modal-image mt-5">
                  <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAOZ8oi1f3B-HA5jyqDByq6x2lN-aPGw56rw&s" alt="Empower Team" />
                  <p>Learn more about our processes from our clients.</p>
                </div>
              </div>
              <div className="col-md-1 d-none d-md-block"></div>
              <div className="col-md-2 ">
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <div className="modal-column">
                      <img src="https://cdn.logojoy.com/wp-content/uploads/20231013154327/Adidas-logo-1991-1-600x319.png" alt="adidas" className="images mb-3"/>
                      <p>A leading digital platform to offer engaging shopping experience to users</p>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div className="modal-column">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAbaP9s3kIb9iL9YTlKtC5JvmTUyxZkPlMdw&s" alt="ikea" className="images mt-5"/>
                      <p>A transforming ERP Solution for the world's largest furniture retailer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 row-2">
                <div className="row">
                  <div className="col-md-12">
                    <div className="modal-column">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8E7xmyKqdA2hrvni5xijhxeo4uMMO-PH3Q&s" alt="KFC" className="images"/>
                      <p>A mobile app to digitalize & expand KFC's digital footprint</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="modal-column">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppNzkIQSGOlI829AZIMYqSZjDcbtWzY5PPw&s" alt="dominos" className="images mt-5 mb-3"/>
                      <p>A refined UX strategy for Domino's to increase their conversion rate by 23%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="row">
                  <div className="col-md-12">
                    <div className="modal-column">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDnGTBhA7Zd3N2-iIxa0Gf9yb4xHCMuNlBA&s" alt="jobget" className="images"/>
                      <p>The MIT innovation award-winning app with $52 Million funding reshaping the employment landscape
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="modal-column">
                      <img src="https://edfundo.com/wp-content/uploads/2022/09/Edfundo-logo.svg" alt="edfundo" className="images mt-5 mb-3" />
                      <p>A SaaS-based financially literacy and smart money management platform for kids</p>
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

export default Portfolio;
