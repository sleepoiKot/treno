import React, { Component } from 'react'

import TopBar from '/client/components/TopComponents/TopBar/TopBar'

defaultState = {
  login: '',
  password: ''
}

class TopBarContainer extends Component {
  constructor(props) {
    super(props)

    this.state = defaultState
  }

  formSubmitHandler() {
    // e.preventDefault()

    const { locStrings } = this.props
    const { login, password } = this.state

    if(!login || !password) {
      Bert.alert({
          message: "Заполните необходимые поля!",
          type: 'danger',
          style: 'growl-top-right',
          icon: 'fa-exclamation'
      })

      return
    }

    Meteor.loginWithPassword(login, password, (err) => {
      if(err) {
        Bert.alert({
            message: err.reason,
            type: 'danger',
            style: 'growl-top-right',
            icon: 'fa-exclamation'
        })
      }
      else {
        Bert.alert({
            message: locStrings.hello,
            type: 'success',
            style: 'growl-top-right',
            icon: 'fa-user'
        })
      }
    });
  }

  render() {
    return (
      <TopBar context={this} />
    );
  }
}

export default TopBarContainer;
