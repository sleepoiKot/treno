import React from 'react';

const cabinet = (props) => (
  <div className="stable-center">
    <div className="content">
      <div className="col-12">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-sm-12">
            <div className="filter-card">
              <button className="btn btn-success">{props.locStrings.myOrders}</button>
              <button className="btn btn-secondary">{props.locStrings.buyerInfo}</button>
              <button className="btn btn-secondary">{props.locStrings.passengerData}</button>
              <button className="btn btn-secondary">{props.locStrings.accountSetup}</button>
            </div>
          </div>
          <div className="col-12">
            <h2 className="articles-title">{props.locStrings.myOrders}</h2>
            <div className="grey-block pt-4">
              <div className="col-12">
                <div className="filter-settings">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-5 col-xl-5 col-lg-5 col-md-5 col-sm-5">
                        <div className="row">
                          <div className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 pr-0">
                            <span className="name-filter">{props.locStrings.selectClass}: </span>
                          </div>
                          <div className="col-9 col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            <ul>
                              <li className="mr-2"><a href="#">{props.locStrings.allTime}</a></li>
                              <li className="mr-2"><a href="#">{props.locStrings.month}</a></li>
                              <li className="mr-2"><a href="#">{props.locStrings.halfYear}</a></li>
                              <li><a href="#">{props.locStrings.year}</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-div">
                  <div className="table-header">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                          <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                            <div className="row">
                              <h4>{props.locStrings.train}</h4>
                            </div>
                          </div>
                          <div className="col-xl-3 col-3 col-lg-3 col-md-3 col-sm-3">
                            <div className="row">
                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                <h4>{props.locStrings.departure}</h4>
                              </div>
                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                <h4>{props.locStrings.onTheWay}</h4>
                              </div>
                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                <h4>{props.locStrings.arrival}</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-2">
                            <h4 className="container-fluid">{props.locStrings.orders} №</h4>
                          </div>
                          <div className="col-2">
                            <h4>{props.locStrings.priceTg}</h4>
                          </div>
                          <div className="col-3">
                            <h4>{props.locStrings.status}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-body pt-0">
                    <div className="card-custom">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="row">
                            <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                              <div className="row">
                                <p>0*46</p>
                                <p><a href="#" className="link-custom text-uppercase">Павлодар
                                    - Алматы</a></p>
                                <p className="grey-title">СК</p>
                                <p className="grey-title">КТЖ</p>
                              </div>
                            </div>
                            <div className="col-xl-3 col-3 col-lg-3 col-md-3 col-sm-3">
                              <div className="row">
                                <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                  <p><b>08:35</b></p>
                                  <small className="grey-title">10.9</small>
                                </div>
                                <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                  <small className="grey-title">21.30</small>
                                  <img src="assets/img/arrow-route.jpg" alt="arrow-route" />
                                </div>
                                <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                  <p><b>06:05</b></p>
                                  <small className="grey-title">10.9</small>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 pl-0 text-center">
                                  <p className="second-tr">
                                    <small className="grey-title">Время
                                      отправление и прибытие местное
                                    </small>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                              <div className="row">
                                <div className="text-center container-fluid">
                                  <p>Заказ № 1212121</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-2">
                              <p>5499</p>
                            </div>
                            <div className="col-3">
                              <p className="cancel">Аннулирован<br />
                                оформлен: 21.10.2015 18:26</p>
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
      </div>
    </div>
  </div>
);

export default cabinet;
