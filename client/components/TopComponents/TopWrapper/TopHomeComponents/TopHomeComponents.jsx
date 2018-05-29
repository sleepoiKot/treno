import React from 'react';

import TopMenu from '../TopMenu/TopMenu'
import GetTicket from './GetTicket/GetTicket'
import Slides from './Slides/Slides'

const topHomeComponents = (props) => (
  <div className="header-settings">
    <TopMenu {...props} />
    <div className="header-tabs">
      <div className="stable-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            <GetTicket {...props}/>
            <Slides {...props} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default topHomeComponents;
