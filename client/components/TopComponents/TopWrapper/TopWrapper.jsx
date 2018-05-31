import React from 'react';
import { Route } from 'react-router-dom'

import TopMenu from './TopMenu/TopMenu'

import TopHomeComponents from './TopHomeComponents/TopHomeComponents'
import TopNewsComponents from './TopNewsComponents/TopNewsComponents'
import TopCabinetComponents from './TopCabinetComponents/TopCabinetComponents'

import Public from '../../Func/Public'
import Aux from '/client/hoc/Aux/Aux'

const topWrapper = (props) => (
  <Aux>
    <Public exact path="/" component={TopHomeComponents} {...props} />
    <Public exact path="/news" component={TopNewsComponents} {...props} />
    <Public exact path="/cabinet" component={TopCabinetComponents} {...props} />
  </Aux>
);

export default topWrapper;
