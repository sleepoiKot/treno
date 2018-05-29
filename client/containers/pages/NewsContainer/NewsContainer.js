import React, { Component } from 'react'

import News from '/client/components/pages/News/News'

class NewsContainer extends Component {
  render() {
    return (
      <News {...this.props}/>
    );
  }
}

export default NewsContainer;
