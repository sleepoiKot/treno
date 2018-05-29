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
      return !authenticated ?
      (React.createElement(component, { ...props, locStrings, loggingIn, authenticated, })) : <Redirect to='/cabinet' />
    } }
  />
);

export default public;
