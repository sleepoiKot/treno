import React from 'react';

import TopMenu from '../TopMenu/TopMenu'
import OneWay from './OneWay/OneWay'
import Roundtrip from './Roundtrip/Roundtrip'
import Multitrip from './Multitrip/Multitrip'

import Aux from '/client/hoc/Aux/Aux'

const topTripComponent = (props) => (
  <div className="header-settings">
    <TopMenu {...props} />
    <div className="header-tabs">
      <div className="stable-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#one-way" role="tab"><i className="icons-main one-way-icon" /> {props.locStrings.oneway}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#roundtrip" role="tab"><i className="icons-main roundtrip-icon" /> {props.locStrings.roundtrip}</a>
                </li>
                <li className="nav-item">
                  <a className={props.location.pathname === "/trip/multitrip" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#multi-trip" role="tab"><i className="icons-main multi-trip-icon" /> {props.locStrings.multiTrip}</a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <OneWay {...props} id="one-way"/>
                <Roundtrip {...props} id="roundtrip"/>
                <Multitrip {...props} id="multi-trip"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default topTripComponent;
