import React from 'react';

import Aux from '/client/hoc/Aux/Aux'
import RegistrationModal from './RegistrationModal/RegistrationModal'
import LoginModal from './LoginModal/LoginModal'

const topBar = ({context}) => {
  const { locStrings } = context.props

  return (
    <Aux>
      <div className="top-option">
        <div className="stable-center">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <ul className="list-inline top-option-left">
                  <li><a href="#"><i className="icons-main email" /> test@gmail.com</a></li>
                  <li><a href="#"><i className="icons-main phone" /> +7 707 777 77 77</a></li>
                </ul>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12">
                <ul className="list-inline top-option-right">
                  <li><a href="#"><i className="icons-main question" /> FAQ</a></li>
                  <li><a href="#"><i className="icons-main contact-icon" /> {locStrings.contacts}</a></li>
                  <li><a href="#" data-toggle="modal" data-target="#modal-reg"><i className="icons-main key" />
                      {locStrings.registration}</a></li>
                  <li><a href="#" data-toggle="modal" data-target="#modal-login"><i className="icons-main castle" />
                    {locStrings.login}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      <RegistrationModal context={context} id="modal-reg"/>
      <LoginModal context={context} id="modal-login"/>
    </Aux>
  );
}

export default topBar;
