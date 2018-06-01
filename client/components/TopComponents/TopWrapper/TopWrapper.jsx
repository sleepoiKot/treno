import React from 'react';
import { Route } from 'react-router-dom'

import TopMenu from './TopMenu/TopMenu'

import TopHomeComponent from './TopHomeComponent/TopHomeComponent'
import TopNewsComponent from './TopNewsComponent/TopNewsComponent'
import TopCabinetComponent from './TopCabinetComponent/TopCabinetComponent'
import TopTripComponent from './TopTripComponent/TopTripComponent'

import Public from '../../Func/Public'
import Aux from '/client/hoc/Aux/Aux'

const topWrapper = (props) => (
  <Aux>
    <Public exact path="/" component={TopHomeComponent} {...props} />
    <Public exact path="/news" component={TopNewsComponent} {...props} />
    <Public exact path="/cabinet" component={TopCabinetComponent} {...props} />
    <Public path="/trip" component={TopTripComponent} {...props} />
  </Aux>
);

export default topWrapper;
