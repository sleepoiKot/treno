import React from 'react';

const multitrip = (props) => (
  <div className={props.location.pathname === "/trip/multitrip" ? "tab-pane active" : "tab-pane"} id={props.id} role="tabpanel">
    <form className="settings-filters horizontal" action="#">
      <div className="row parrent-price">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="original-routes">
            <div className="row">
              <div className="arrows-train col-lg-4 col-md-4 col-sm-4">
                <input type="text" placeholder={props.locStrings.whence} />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <input type="text" placeholder={props.locStrings.where} />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <input type="date" />
                <i className="icons-main delete-icon remove-last-route" />
              </div>
            </div>
          </div>
          <div className="new-routes" />
          <div className="col-lg-12 col-md-12 col-sm-12">
            <span className="add-route">+ {props.locStrings.addRoute}</span>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8">
              <input className="price" type="range" min={5000} max={11000} defaultValue={5800} step={1} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <input className="result-range" type="text" placeholder={`${props.locStrings.from} 5000 ${props.locStrings.to} 11000`} defaultValue="" disabled />
            </div>
          </div>
        </div>
      </div>
      <div className="second-setting-filter horizontal">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="radiobox-block">
              <div className="row">
                <div className="col-xl-5 col-lg-12 col-sm-12">
                  <div className="horizontal-radiobox">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-2">
                        <span className="name-search">{props.locStrings.search}: </span>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3">
                        <input id="plackart3" type="radio" name="type-radio" />
                        <label className="custom-check" htmlFor="plackart3">{props.locStrings.platzcard}</label>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3">
                        <input id="cup3" type="radio" name="type-radio" />
                        <label className="custom-check" htmlFor="cup3">{props.locStrings.coupe}</label>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3">
                        <input id="lux3" type="radio" name="type-radio" />
                        <label className="custom-check" htmlFor="lux3">{props.locStrings.lux}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12">
                  <div className="select-block">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <span className="name-search">{props.locStrings.passengers}: </span>
                        <select>
                          <option value>Взрослый 1</option>
                        </select>
                        <select>
                          <option value>Дети 1</option>
                        </select>
                        <select>
                          <option value>Время отправление 1
                          </option>
                        </select>
                        <button className="btn-custom-orange">{props.locStrings.find}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default multitrip;
