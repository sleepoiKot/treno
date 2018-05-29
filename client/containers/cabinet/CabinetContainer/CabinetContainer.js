import React, { Component } from 'react'

class CabinetContainer extends Component {
  render() {
    return (
      <button onClick={() => Meteor.logout()}>logout</button>
    );
  }
}

export default CabinetContainer;
