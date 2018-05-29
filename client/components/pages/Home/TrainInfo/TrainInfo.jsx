import React from 'react';

import TrainSchedule from './TrainSchedule/TrainSchedule'

const trainInfo = (props) => (
  <div className="col-xl-9 col-lg-12 col-sm-12 articles-grey">
    <TrainSchedule {...props} />
    <h2 className="articles-title">{props.locStrings.ticketsLabel}</h2>
    <p>Some info here</p>
  </div>
);

export default trainInfo;
