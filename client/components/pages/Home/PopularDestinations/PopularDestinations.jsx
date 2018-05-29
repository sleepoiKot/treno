import React from 'react';

const popularDestinations = (props) => (
  <div className="col-xl-12">
    <div className="row">
      <div className="col-xl-12">
        <div className="line-title-page text-center">
          <h2>{props.locStrings.popDestinations}</h2>
          <h3>{props.locStrings.chooseNextTrip}</h3>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="cityes">
              <img src="assets/img/bangkog.jpg" alt="astana" />
              <div className="text-center city-top">
                <span className="city">Алматы</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="cityes">
              <img src="assets/img/astana2.jpg" alt="astana" />
              <div className="text-center city-top">
                <span className="city">Астана</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="cityes">
              <img src="assets/img/borovoe.jpg" alt="astana" />
              <div className="text-center city-top">
                <span className="city">Боровое</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="cityes">
              <img src="assets/img/moscow.jpg" alt="astana" />
              <div className="text-center city-top">
                <span className="city">Москва</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default popularDestinations;
