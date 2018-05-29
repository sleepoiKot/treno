import React from 'react';

import TrainInfo from './TrainInfo/TrainInfo'
import RightSideBar from './RightSideBar/RightSideBar'
import PopularDestinations from './PopularDestinations/PopularDestinations'

const home = (props) => (
  <div className="stable-center">
    <div className="content">
      <div className="col-xl-12">
        <div className="row">
          <TrainInfo {...props} />
          <RightSideBar {...props} />
        </div>
      </div>
      <PopularDestinations {...props}/>
    </div>
  </div>
);

export default home;
