import React from 'react';

import TopMenu from '../TopMenu/TopMenu'

import Aux from '/client/hoc/Aux/Aux'

const topCabinetComponent = (props) => (
  <div className="header-settings cabinet-bg">
    <TopMenu {...props} />
    <div className="header-tabs">
      <div className="stable-center">
        <div className="news-title text-center">
          <h1>{props.locStrings.cabinet}</h1>
          <h3>{props.locStrings.cabinetMessage}</h3>
          <hr />
        </div>
      </div>
    </div>
  </div>
);

export default topCabinetComponent;
