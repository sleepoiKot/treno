import React from 'react';

const slides = (props) => (
  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 pl-lg-0">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img className="d-block img-fluid" src="assets/img/almaty.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src="assets/img/almaty.jpg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src="assets/img/almaty.jpg" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">{props.locStrings.previous}</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">{props.locStrings.next}</span>
      </a>
    </div>
  </div>
);

export default slides;
