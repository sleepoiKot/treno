import React, { Component } from 'react'

import Home from '/client/components/pages/Home/Home'

class HomeContainer extends Component {
  render() {
    return (
      <Home {...this.props}/>
    );
  }
}

export default HomeContainer;
