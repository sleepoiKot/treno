import React, { Component } from 'react'

import Cabinet from '/client/components/pages/Cabinet/Cabinet'

class CabinetContainer extends Component {
  render() {
    return (
      <Cabinet {...this.props} />
    );
  }
}

export default CabinetContainer;
