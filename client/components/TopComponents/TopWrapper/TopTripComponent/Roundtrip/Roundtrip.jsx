import React from 'react';

const roundtrip = (props) => (
  <div className="tab-pane" id={props.id} role="tabpanel">
    <form className="settings-filters horizontal" action="#">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="row parrent-price">
            <div className="col-lg-2 col-md-6 col-sm-6">
              <input type="text" placeholder={props.locStrings.whence} />
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <input type="date" />
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <input type="text" placeholder={props.locStrings.where} />
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <input type="date" />
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <input className="price" type="range" min={5000} max={11000} defaultValue={5800} step={1} />
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
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
                        <input id="plackart2" type="radio" name="type-radio" />
                        <label className="custom-check" htmlFor="plackart2">{props.locStrings.platzcard}</label>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3">
                        <input id="cup2" type="radio" name="type-radio" />
                        <label className="custom-check" htmlFor="cup2">{props.locStrings.coupe}</label>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3">
                        <input id="lux2" type="radio" name="type-radio" />
                        <label className="custom-check" htmlFor="lux2">{props.locStrings.lux}</label>
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

export default roundtrip;
