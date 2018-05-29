import React from 'react';

import Aux from '/client/hoc/Aux/Aux'

import moment from 'moment'

const trainSchedule = (props) => (
  <Aux>
    <h2 className="articles-title">{props.locStrings.trainSchedule}</h2>
    <div className="scoreboard-scroll">
      <div className="scoreboard">
        <div className="col-12">
          <div className="row">
            <div className="col-2">
              <b className="time-scoreboard">{moment().format("HH:mm")}</b>
            </div>
            <div className="col-4">
              <b className="yellow-text">{props.locStrings.departures}</b>
            </div>
            <div className="col-2">
              <b className="time-scoreboard">{moment().format("HH:mm")}</b>
            </div>
            <div className="col-4">
              <b>{props.locStrings.arrivals}</b>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <div className="col-12">
                <small>{props.locStrings.departuresShort}</small>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <small>{props.locStrings.where}</small>
                    </div>
                    <div className="col-3">
                      <small>{props.locStrings.way}</small>
                    </div>
                    <div className="col-3">
                      <small>{props.locStrings.delay}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="col-12">
                <small>{props.locStrings.arrivalsShort}</small>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <small>{props.locStrings.whence}</small>
                    </div>
                    <div className="col-3">
                      <small>{props.locStrings.way}</small>
                    </div>
                    <div className="col-3">
                      <small>{props.locStrings.delay}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 scoreboard-tr">
              <div className="row">
                <div className="col-4 pr-0">
                  <div className="row">
                    <div className="col-6 text-right">
                      <strong className="yellow-text">9:48</strong>
                    </div>
                    <div className="col-6 text-right">
                      <small className="yellow-text">020</small>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-6">
                          <strong className="yellow-text">Астана</strong>
                        </div>
                        <div className="col-3">
                          <small className="yellow-text">10</small>
                        </div>
                        <div className="col-3 text-right">
                          <small>Да</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 scoreboard-tr">
              <div className="row">
                <div className="col-4 pr-0">
                  <div className="row">
                    <div className="col-6 text-right">
                      <strong>9:48</strong>
                    </div>
                    <div className="col-6 text-right">
                      <small>020</small>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-6">
                          <strong>Астана</strong>
                        </div>
                        <div className="col-3">
                          <small>10</small>
                        </div>
                        <div className="col-3 text-right">
                          <small>Да</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Aux>
);

export default trainSchedule;
