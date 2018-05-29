import React from 'react';

import { Link } from 'react-router-dom'

const topMenu = (props) => (
  <div className="header-menu">
    <div className="stable-center">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <nav className="navbar navbar-toggleable-md hidden-lg-down">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className={props.location.pathname === "/" ? "nav-item active" : "nav-item"}>
              <Link to="/" className="nav-link text-uppercase">{props.locStrings.buyTickets}</Link>
            </li>
            <li className={props.location.pathname === "/news" ? "nav-item active" : "nav-item"}>
              <Link to="/news" className="nav-link text-uppercase">{props.locStrings.news}</Link>
            </li>
            <li className={props.location.pathname === "/internTravel" ? "nav-item active" : "nav-item"}>
              <a className="nav-link text-uppercase" href="#">{props.locStrings.internTravel}</a>
            </li>
            <li className={props.location.pathname === "/suburbanTravel" ? "nav-item active" : "nav-item"}>
              <a className="nav-link text-uppercase" href="#">{props.locStrings.suburbanTravel}</a>
            </li>
            <li className={props.location.pathname === "/dicsounts" ? "nav-item active" : "nav-item"}>
              <a className="nav-link text-uppercase" href="#">{props.locStrings.dicsounts}</a>
            </li>
            <li className={props.location.pathname === "/contacts" ? "nav-item active" : "nav-item"}>
              <a className="nav-link text-uppercase" href="#">{props.locStrings.contacts}</a>
            </li>
          </ul>
        </nav>
        <nav className="navbar navbar-light hidden-xl-up">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-faded p-4">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
              <li className={props.location.pathname === "/" ? "nav-item active" : "nav-item"}>
                <Link to="/" className="nav-link text-uppercase">{props.locStrings.buyTickets}</Link>
              </li>
              <li className={props.location.pathname === "/news" ? "nav-item active" : "nav-item"}>
                <Link to="/news" className="nav-link text-uppercase">{props.locStrings.news}</Link>
              </li>
              <li className={props.location.pathname === "/internTravel" ? "nav-item active" : "nav-item"}>
                <a className="nav-link text-uppercase" href="#">{props.locStrings.internTravel}</a>
              </li>
              <li className={props.location.pathname === "/suburbanTravel" ? "nav-item active" : "nav-item"}>
                <a className="nav-link text-uppercase" href="#">{props.locStrings.suburbanTravel}</a>
              </li>
              <li className={props.location.pathname === "/dicsounts" ? "nav-item active" : "nav-item"}>
                <a className="nav-link text-uppercase" href="#">{props.locStrings.dicsounts}</a>
              </li>
              <li className={props.location.pathname === "/contacts" ? "nav-item active" : "nav-item"}>
                <a className="nav-link text-uppercase" href="#">{props.locStrings.contacts}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default topMenu;
