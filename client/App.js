import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Aux from './hoc/Aux/Aux'
import Public from './components/Func/Public'
import Authenticated from './components/Func/Authenticated'

import TopBar from './containers/TopContainers/TopBarContainer/TopBarContainer'
import TopBanner from './components/TopComponents/TopBanner/TopBanner'
import TopWrapper from './components/TopComponents/TopWrapper/TopWrapper'
import Footer from './components/Footer/Footer'

import CabinetContainer from './containers/cabinet/CabinetContainer/CabinetContainer'
import HomeContainer from './containers/pages/HomeContainer/HomeContainer'
import MultitripContainer from './containers/pages/MultitripContainer/MultitripContainer'
import NewsContainer from './containers/pages/NewsContainer/NewsContainer'

import LoginModal from '/client/components/TopComponents/TopBar/LoginModal/LoginModal'

import { cookie } from './libs/coreLib'
import { locStrings } from '/imports/localization/localization'

const initialState = {
  login: '',
  password: ''
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = initialState
  }

  signIn(e) {
    e.preventDefault()

    const { locStrings } = this.props
    const { login, password } = this.state

    if(!login || !password) {
      Bert.alert({
          message: locStrings.requiredFieldsValidation,
          type: 'danger',
          style: 'growl-top-right',
          icon: 'fa-exclamation'
      })
      return
    }

    Meteor.loginWithPassword(login, password, (err) => {
      if(err) {
        this.setState(initialState)

        Bert.alert({
            message: err.reason,
            type: 'danger',
            style: 'growl-top-right',
            icon: 'fa-exclamation'
        })
      }
      else {
        $('#modal-login').modal('hide')

        this.props.history.push('/cabinet')

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
    const { props } = this

    let routes = (
      <Aux>
        <Public path="/" component={ TopBar } {...props} />
        <Public path="/" component={ TopBanner } {...props} />
        <Public path="/" component={ TopWrapper } {...props} />
        <Switch>
          <Public exact path="/" component={ HomeContainer } {...props} />
          <Public exact path="/news" component={ NewsContainer } {...props} />
          <Public exact path="/trip/multitrip" component={ MultitripContainer } {...props} />
          <Redirect to="/" />
        </Switch>
        <Public path="/" component={ Footer } {...props} />
      </Aux>
    )

    if(props.authenticated) {
      routes = (
        <Aux>
          <Public path="/" component={ TopBar } {...props} />
          <Public path="/" component={ TopBanner } {...props} />
          <Public path="/" component={ TopWrapper } {...props} />
          <Switch>
            <Public exact path="/" component={ HomeContainer } {...props} />
            <Public exact path="/news" component={ NewsContainer } {...props} />
            <Public exact path="/trip/multitrip" component={ MultitripContainer } {...props} />
            <Authenticated path="/cabinet" component={ CabinetContainer } {...props}/>
            <Redirect to="/" />
          </Switch>
          <Public path="/" component={ Footer } {...props} />
        </Aux>
      )
    }

    return (
      <Aux>
        <LoginModal context={this} id="modal-login" {...props}/>
        {!props.loggingIn ? routes : null}
      </Aux>
    )
  }
}

export default withTracker(() => {
  let lang = cookie.get('lang')
  if(lang === '') {
    cookie.set('lang', 'ru', 9999);
    lang = 'ru';
  }

  const loggingIn = Meteor.loggingIn()
  const userId = Meteor.userId()
  const user = Meteor.user()

  return {
    locStrings: locStrings[lang],
    loggingIn,
    authenticated: !loggingIn && !!userId,
    user
  }
})(App);
