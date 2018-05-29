import React from 'react';

const rightSideBar = (props) => (
  <div className="col-xl-3 col-lg-12 col-sm-12 right-sidebar">
    <h2 className="right-sidebar-title">{props.locStrings.bestDeals}</h2>
    <div className="row">
      <div className="col-xl-12 col-lg-6 col-sm-6">
        <div className="right-sidebar-item">
          <div className="lists-cities-block astana">
            <div className="text-center">
              <button className="btn-transparent">{props.locStrings.more}</button>
            </div>
            <div className="lists-cities-title">
              <span>Астана</span>
            </div>
          </div>
          <div className="lists-cities-item">
            <div className="row">
              <div className="col-xl-6">
                <a href="#">Астана</a> - <a href="#">Алматы</a>
              </div>
              <div className="col-xl-6 text-right">
                <span className="grey-text">от</span> <b>79999 тг.</b>
              </div>
            </div>
          </div>
          <div className="lists-cities-item">
            <div className="row">
              <div className="col-xl-6">
                <a href="#">Астана</a> - <a href="#">Алматы</a>
              </div>
              <div className="col-xl-6 text-right">
                <span className="grey-text">от</span> <b>79999 тг.</b>
              </div>
            </div>
          </div>
          <div className="lists-cities-item">
            <div className="row">
              <div className="col-xl-6">
                <a href="#">Астана</a> - <a href="#">Алматы</a>
              </div>
              <div className="col-xl-6 text-right">
                <span className="grey-text">от</span> <b>79999 тг.</b>
              </div>
            </div>
          </div>
          <div className="lists-cities-item">
            <div className="row">
              <div className="col-xl-6">
                <a href="#">Астана</a> - <a href="#">Алматы</a>
              </div>
              <div className="col-xl-6 text-right">
                <span className="grey-text">от</span> <b>79999 тг.</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-lg-6 col-sm-6">
        <div className="right-sidebar-item">
          <div className="lists-cities-block astana">
            <span className="summa">от <b>8999</b> тг</span>
            <div className="lists-cities-title">
              <span>Астана</span>
            </div>
          </div>
          <div className="lists-cities-item">
            <div className="row">
              <div className="col-xl-6">
                <a href="#">Астана</a> - <a href="#">Алматы</a>
              </div>
              <div className="col-xl-6 text-right">
                <span className="grey-text">от</span> <b>79999 тг.</b>
              </div>
            </div>
          </div>
          <div className="lists-cities-item">
            <div className="row">
              <div className="col-xl-6">
                <a href="#">Астана</a> - <a href="#">Алматы</a>
              </div>
              <div className="col-xl-6 text-right">
                <span className="grey-text">от</span> <b>79999 тг.</b>
              </div>
            </div>
          </div>
          <div className="lists-cities-item">
            <div className="row">
              <div className="col-xl-6">
                <a href="#">Астана</a> - <a href="#">Алматы</a>
              </div>
              <div className="col-xl-6 text-right">
                <span className="grey-text">от</span> <b>79999 тг.</b>
              </div>
            </div>
          </div>
          <div className="lists-cities-item">
            <div className="row">
              <div className="col-xl-6">
                <a href="#">Астана</a> - <a href="#">Алматы</a>
              </div>
              <div className="col-xl-6 text-right">
                <span className="grey-text">от</span> <b>79999 тг.</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="weather">
        <img src="assets/img/weather.jpg" alt="weather" />
      </div>
    </div>
  </div>
);

export default rightSideBar;
