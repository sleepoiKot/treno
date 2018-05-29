import React from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { BrowserRouter, Route } from 'react-router-dom'

import Aux from './hoc/Aux/Aux'
import Public from './components/Func/Public'
import Authenticated from './components/Func/Authenticated'

import TopBar from './containers/TopContainers/TopBarContainer/TopBarContainer'
import TopBanner from './components/TopComponents/TopBanner/TopBanner'
import TopWrapper from './components/TopComponents/TopWrapper/TopWrapper'
import Footer from './components/Footer/Footer'

import CabinetContainer from './containers/cabinet/CabinetContainer/CabinetContainer'
import HomeContainer from './containers/pages/HomeContainer/HomeContainer'
import NewsContainer from './containers/pages/NewsContainer/NewsContainer'

import { cookie } from './libs/coreLib'
import { locStrings } from '/imports/localization/localization'

const App = (props) => (
  <BrowserRouter>
    <Aux>
      <Public path="/" component={ TopBar } {...props} />
      <Public path="/" component={ TopBanner } {...props} />
      <Public path="/" component={ TopWrapper } {...props} />
      <Public exact path="/" component={ HomeContainer } {...props} />
      <Public exact path="/news" component={ NewsContainer } {...props} />
      <Authenticated path="/cabinet" component={ CabinetContainer } {...props}/>
      <Public path="/" component={ Footer } {...props} />
    </Aux>
  </BrowserRouter>
);

export default withTracker(() => {
  let lang = cookie.get('lang')
  if(lang === '') {
    cookie.set('lang', 'ru', 9999);
    lang = 'ru';
  }

  const loggingIn = Meteor.loggingIn()
  const userId = Meteor.userId()

  return {
    locStrings: locStrings[lang],
    loggingIn,
    authenticated: !loggingIn && !!userId,
  }
})(App);
