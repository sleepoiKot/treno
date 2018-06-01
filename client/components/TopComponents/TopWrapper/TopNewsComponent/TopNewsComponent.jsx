import React from 'react';

import TopMenu from '../TopMenu/TopMenu'

import Aux from '/client/hoc/Aux/Aux'

const topNewsComponent = (props) => (
  <div className="header-settings news-bg">
    <TopMenu {...props} />
    <div className="header-tabs">
      <div className="stable-center">
        <div className="news-title text-center">
          <h1>{props.locStrings.news}</h1>
          <h3>{props.locStrings.newsMessage}</h3>
          <hr />
        </div>
      </div>
    </div>
  </div>
);

export default topNewsComponent;
