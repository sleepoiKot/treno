import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'

const public = ({loggingIn, authenticated, component, locStrings, ...rest}) => (
  <Route
    { ...rest }
    render={ props => {
      if(loggingIn) return <div />
      return React.createElement(component, { ...props, locStrings, loggingIn, authenticated, })
    } }
  />
);

export default public;
