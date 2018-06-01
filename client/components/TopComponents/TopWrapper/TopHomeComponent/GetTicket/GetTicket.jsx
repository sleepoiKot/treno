import React from 'react';

import OneWay from './OneWay/OneWay'
import Roundtrip from './Roundtrip/Roundtrip'
import Multitrip from './Multitrip/Multitrip'

const getTicket = (props) => (
  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 pr-lg-0 height-auto">
    <ul className="nav nav-tabs" role="tablist">
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#one-way" role="tab"><i className="icons-main one-way-icon" /> {props.locStrings.oneway}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" data-toggle="tab" href="#roundtrip" role="tab"><i className="icons-main roundtrip-icon" /> {props.locStrings.roundtrip}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#multi-trip" role="tab"><i className="icons-main multi-trip-icon" /> {props.locStrings.multiTrip}</a>
      </li>
    </ul>
    {/* Tab panes */}
    <div className="tab-content">
      <OneWay {...props} id="one-way"/>
      <Roundtrip {...props} id="roundtrip"/>
      <Multitrip {...props} id="multi-trip" />
    </div>
  </div>
);

export default getTicket;
