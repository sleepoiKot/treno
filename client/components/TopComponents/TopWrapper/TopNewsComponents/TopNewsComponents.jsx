import React from 'react';

import TopMenu from '../TopMenu/TopMenu'

import Aux from '/client/hoc/Aux/Aux'

const topNewsComponents = (props) => (
  <div className="header-settings news-bg">
    <TopMenu {...props} />
    <div className="header-tabs">
      <div className="stable-center">
        <div className="news-title text-center">
          <h1>Новости</h1>
          <h3>Новости на treno.kz</h3>
          <hr />
        </div>
      </div>
    </div>
  </div>
);

export default topNewsComponents;
