import React from 'react';
import { Route } from 'react-router-dom'

import TopMenu from './TopMenu/TopMenu'
import TopHomeComponents from './TopHomeComponents/TopHomeComponents'

import TopNewsComponents from './TopNewsComponents/TopNewsComponents'

import Public from '../../Func/Public'
import Aux from '/client/hoc/Aux/Aux'

const topWrapper = (props) => (
  <Aux>
    <Public exact path="/" component={TopHomeComponents} {...props} />
    <Public exact path="/news" component={TopNewsComponents} {...props} />
  </Aux>
);

export default topWrapper;
