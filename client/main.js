import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App'

const app = (
  <BrowserRouter>
    <Route component={ App }/>
  </BrowserRouter>
);

Meteor.startup(function() {
  render(app, root)
});
