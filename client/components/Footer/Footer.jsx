import React from 'react';

const footer = (props) => (
  <footer>
    <div className="stable-center">
      <div className="col-xl-12 col-lg-12 col-sm-12">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <div className="footer-item">
              <h3>{props.locStrings.buyTickets}</h3>
              <ul>
                <li><a href="#">{props.locStrings.news}</a></li>
                <li><a href="#">{props.locStrings.internTravel}</a></li>
                <li><a href="#">{props.locStrings.dicsounts}</a></li>
                <li><a href="#">{props.locStrings.forum}</a></li>
                <li><a href="#">{props.locStrings.aboutUs}</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <div className="footer-item">
              <h3>{props.locStrings.help}</h3>
              <ul>
                <li><a href="#">{props.locStrings.howToPlaceAnOrder}</a></li>
                <li><a href="#">{props.locStrings.howTpPayForAnOrder}</a></li>
                <li><a href="#">{props.locStrings.getTicketProcedure}</a></li>
                <li><a href="#">{props.locStrings.ticketReturn}</a></li>
                <li><a href="#">{props.locStrings.infoForPass}</a></li>
                <li><a href="#">{props.locStrings.userPolicy}</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <div className="footer-item">
              <h3>{props.locStrings.contacts}</h3>
              <ul>
                <li><a href="#"><i className="icons-main marker-icon" /> {props.locStrings.addressInfo}</a></li>
                <li><a href="#"><i className="icons-main phone" /> {props.locStrings.mobile}: +7 701 111 11 12</a></li>
                <li><a href="#"><i className="icons-main email" /> test@gmailcom</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
            <div className="footer-item">
              <h3>{props.locStrings.contactUs}</h3>
              <form action="/">
                <input type="email" placeholder="Email" />
                <textarea placeholder={props.locStrings.message} defaultValue={""} />
                <button type="submit" className="btn-green">{props.locStrings.send}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-block">
      <div className="stable-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
              <span className="title-copyright">{props.locStrings.copyright} <a href="#">Treno.kz</a></span>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div className="footer-links">
                <a href="#vk"><i className="icons-main vk" /></a>
                <a href="#fb"><i className="icons-main fb" /></a>
                <a href="#top" className="top-icons"><i className="icons-main top" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default footer;
