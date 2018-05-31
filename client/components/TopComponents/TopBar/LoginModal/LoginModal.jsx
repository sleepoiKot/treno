import React from 'react';

import Input from '/client/components/Func/Input'

const loginModal = ({id, locStrings, context}) => (
  <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <form
          action="#"
          onSubmit={context.formSubmitHandler.bind(context)}>
          <div className="modal-header">
            <h4 className="modal-title" id="gridSystemModalLabel">{locStrings.login}</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-6">
                <div className="modal-item offset-top">
                  <label htmlFor="email-user-signin" className="require">{locStrings.email}</label>
                  <Input
                    type="text"
                    id="email-user-signin"
                    className="form-control"
                    context={ context }
                    stateName='login'/>
                </div>
              </div>
              <div className="col-6">
                <div className="modal-item offset-top">
                  <label htmlFor="pass-user-name-signin" className="require">{locStrings.password}</label>
                  <Input
                    type="password"
                    id="pass-user-name-signin"
                    className="form-control"
                    context={ context }
                    stateName='password'/>
                </div>
              </div>
              <div className="col-12 offset-top">
                {locStrings.required}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-success btn-block">{locStrings.login}</button>
          </div>
        </form>
      </div>{/* /.modal-content */}
    </div>{/* /.modal-dialog */}
  </div>
);

export default loginModal;
