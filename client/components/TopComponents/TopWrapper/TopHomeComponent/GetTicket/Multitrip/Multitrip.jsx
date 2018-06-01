import React from 'react';

const multitrip = (props) => (
  <div className="tab-pane" id={props.id} role="tabpanel">
    <form className="settings-filters" action="#">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
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
          <div className="offset-top parrent-price">
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
      </div>
      <div className="second-setting-filter">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="radiobox-block">
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
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="select-block">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <span className="name-search">{props.locStrings.passengers}: </span>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <select>
                    <option value>Взрослый 1</option>
                  </select>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <select>
                    <option value>Дети 1</option>
                  </select>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                  <select>
                    <option value>Время отправление 1</option>
                  </select>
                </div>
              </div>
              <div className="offset-top">
                <button onClick={() => console.log('Implement Redux for MULTITRIP!')} className="btn-custom-orange">{props.locStrings.find}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default multitrip;
