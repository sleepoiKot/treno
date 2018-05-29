import React from 'react';

const topBanner = (props) => (
  <div>
    <div className="header-title-block">
      <div className="stable-center">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12">
              <img src="assets/img/logo.png" alt="logo treno" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row">
                <div className="slogan">
                  <h2>{props.locStrings.planYourTrip}</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12">
              <div className="payment">
                <img src="assets/img/payment.png" alt="payment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default topBanner;
