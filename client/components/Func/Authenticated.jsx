import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

export default Authenticated = ({ loggingIn, authenticated, component, user, path, ...rest }) => (
    <Route
      { ...rest }
      path={ path }
      render={ (props) => {
        if(loggingIn)
          return <div />

        if(!authenticated)
          return Bert.alert({message: "You are not logged in", type: 'danger', style: 'growl-top-right', icon: 'fa-exclamation'})

        // if(path !== '/confirmPhone' && !!user.profile.mobilePhone && !user.profile.mobileConfirmed)
        //   return <Redirect to='/confirmPhone' />

          // let lang = cookie.get('lang')
          // if(lang === '')
          // {
          //   cookie.set('lang', 'ru', 9999);
          //   lang = 'ru';
          // }

        return (React.createElement(component, {...props, ...rest, user, path, loggingIn, authenticated}))
      } }
    />
)
