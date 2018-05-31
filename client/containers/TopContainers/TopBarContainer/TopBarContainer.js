import React, { Component } from 'react'

import TopBar from '/client/components/TopComponents/TopBar/TopBar'


defaultState = {}

class TopBarContainer extends Component {
  constructor(props) {
    super(props)

    this.state = defaultState
  }

  render() {
    return (
        <TopBar context={this} />
    );
  }
}

export default TopBarContainer;
