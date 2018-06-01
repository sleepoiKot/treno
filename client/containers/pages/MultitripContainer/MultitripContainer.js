import React, { Component } from 'react'

import Multitrip from '/client/components/pages/Multitrip/Multitrip'

class MultitripContainer extends Component {
  render() {
    return (
      <Multitrip {...this.props}/>
    );
  }
}

export default MultitripContainer;
