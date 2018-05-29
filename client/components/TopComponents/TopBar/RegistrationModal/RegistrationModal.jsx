import React from 'react';

const registrationModal = ({id, context}) => {
  const { locStrings } = context.props

  return (
    <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form action="#">
            <div className="modal-header">
              <h4 className="modal-title" id="gridSystemModalLabel">{locStrings.registration}</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-6">
                  <div className="modal-item offset-top">
                    <label htmlFor="name-user" className="require">{locStrings.name}</label>
                    <input type="text" id="name-user" className="form-control" />
                  </div>
                  <div className="modal-item offset-top">
                    <label htmlFor="email-user-signup" className="require">{locStrings.email}</label>
                    <input type="text" id="email-user-signup" className="form-control" />
                  </div>
                  <div className="modal-item offset-top">
                    <label htmlFor="confirm-pass-user" className="require">{locStrings.passConfirm}</label>
                    <input type="password" id="confirm-pass-user" className="form-control" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="modal-item offset-top">
                    <label htmlFor="last-name" className="require">{locStrings.lastName}</label>
                    <input type="text" id="last-name" className="form-control" />
                  </div>
                  <div className="modal-item offset-top">
                    <label htmlFor="pass-user-name-signup" className="require">{locStrings.password}</label>
                    <input type="password" id="pass-user-name-signup" className="form-control" />
                  </div>
                  <div className="modal-item offset-top">
                    <label htmlFor="captcha-name" className="require">{locStrings.captcha}</label>
                    <div className="row">
                      <div className="col-6">
                        <img src="assets/img/captcha.png" alt="captcha" />
                      </div>
                      <div className="col-6">
                        <input type="text" id="captcha-name" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 offset-top">
                  {locStrings.required}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-success btn-block">{locStrings.register}</button>
            </div>
          </form>
        </div>{/* /.modal-content */}
      </div>{/* /.modal-dialog */}
    </div>
  ); 
}

export default registrationModal;
