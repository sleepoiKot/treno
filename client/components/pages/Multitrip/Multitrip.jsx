import React from 'react';

const multitrip = (props) => (
  <div className="stable-center">
    <div className="content">
      <div className="col-xl-12">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-sm-12">
            <h2 className="articles-title grey-title">{props.locStrings.multitripSchedule}:</h2>
            <div className="schedule multi">
              <div className="col-xl-12 col-lg-12 col-sm-12">
                <div className="row">
                  {/* Nav tabs */}
                  <ul className="nav multi-nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#route-demo1" role="tab">
                        1 Астана - Алматы
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#route-demo2" role="tab">
                        2 Алматы - Сингапур
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#route-demo3" role="tab">
                        3 Сингапур - Астана
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content line-bottom">
                    <div className="tab-pane active" id="route-demo1" role="tabpanel">
                      <div className="info-weather">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 border-right">
                                <div className="info-weather-item clearfix ">
                                  <p>Всего поездов - <b className="text-blue">9</b></p>
                                  <p>Всего свободных мест - <b className="text-blue">143</b></p>
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6  border-right">
                                <div className="info-weather-item clearfix">
                                  <div className="float-left">
                                    <p className="text-limit">Погода в пункте прибытие</p>
                                  </div>
                                  <div className="float-right">
                                    <strong className="gradus">-9ºС</strong>
                                    <i className="icons-main sun" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 border-right">
                                <div className="info-weather-item clearfix">
                                  <div className="float-left">
                                    <span className="wind-text">Ветер</span>
                                  </div>
                                  <div className="float-right">
                                    <strong className="wind">2 м/с</strong>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-2 col-lg-6 col-md-6 col-sm-2 border-right">
                                <div className="info-weather-item clearfix ">
                                  <div className="float-left">
                                    <span>Влажность <br /> воздуха: </span>
                                  </div>
                                  <div className="float-right">
                                    <strong className="air">25%</strong>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6">
                                <div className="info-weather-item clearfix">
                                  <p>Погода на:</p>
                                  <p>Ср 09.09 <a href="#">Пт 11.09</a></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="offset-top table-scroll">
                        <div className="grey-block schedule">
                          <div className="col-xl-12 col-lg-12 col-sm-12">
                            {/* Nav tabs */}
                            <ul className="nav nav-tabs nav-justified" role="tablist">
                              <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#step1" role="tab">
                                  <p>Шаг 1</p>
                                  <p>Выбор направления</p>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link next" data-toggle="tab" href="#step2" role="tab">
                                  <p>Шаг 2</p>
                                  <p>Расписание</p>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#step3" role="tab">
                                  <p>Шаг 3</p>
                                  <p>Наличие мест</p>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#step4" role="tab">
                                  <p>Шаг 4</p>
                                  <p>Информация о пассажирах</p>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#step5" role="tab">
                                  <p>Шаг 5</p>
                                  <p>Оплата</p>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link last" data-toggle="tab" href="#step6" role="tab">
                                  <p>Шаг 6</p>
                                  <p>Билет</p>
                                </a>
                              </li>
                            </ul>
                            {/* Tab panes */}
                            <div className="tab-content">
                              <div className="tab-pane active" id="step1" role="tabpanel">
                                <div className="filter-settings">
                                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div className="row">
                                      <div className="col-5 col-xl-5 col-lg-5 col-md-5 col-sm-5">
                                        <div className="row">
                                          <div className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 pr-0">
                                            <span className="name-filter">Выбрать класс: </span>
                                          </div>
                                          <div className="col-9 col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                            <ul>
                                              <li><a href="#">Все</a></li>
                                              <li><a href="#">Общий</a></li>
                                              <li><a href="#">Плацкарт</a></li>
                                              <li><a href="#">Купе</a></li>
                                              <li><a href="#">Сидячий</a></li>
                                              <li><a href="#">Люкс</a></li>
                                              <li><a href="#">Мягкий</a></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                        <div className="row">
                                          <div className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 pl-0 pr-0">
                                            <span className="name-filter">Выбрать тип: </span>
                                          </div>
                                          <div className="col-9 col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                            <ul>
                                              <li><a href="#">Самый дешевый</a></li>
                                              <li><a href="#">Самый быстрый</a></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                                        <div className="last-filter">
                                          <span className="grey">Ср 09.09</span>
                                          <span className="grey-light"><b className="text-blue">Чт</b> 10.09</span>
                                          <a href="#">Пт 11.09</a>
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
                                              <h4>Поезд</h4>
                                            </div>
                                          </div>
                                          <div className="col-xl-3 col-3 col-lg-3 col-md-3 col-sm-3">
                                            <div className="row">
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <h4>Отправил</h4>
                                              </div>
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <h4>В пути</h4>
                                              </div>
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <h4>Прибытие</h4>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                            <div className="row">
                                              <div className="text-center container-fluid">
                                                <h4 className="container-fluid">Мест</h4>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-xl-3 col-3 col-lg-3 col-md-3 col-sm-3">
                                            <div className="row">
                                              <div className="col-xl-6 col-6 col-lg-6 col-md-6 col-sm-6 pl-0 text-center">
                                                <h4>Тип вагона</h4>
                                              </div>
                                              <div className="col-xl-6 col-6 col-lg-6 col-md-6 col-sm-6 pl-0 text-center">
                                                <h4>Цена (тг)</h4>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-body">
                                    <h2 className="grey-title">Самый дешевый</h2>
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
                                                  <img src="/assets/img/arrow-route.jpg" alt="arrow-route" />
                                                </div>
                                                <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                  <p><b>06:05</b></p>
                                                  <small className="grey-title">10.9</small>
                                                </div>
                                                <div className="col-xl-12 col-12 col-lg-12 col-md-12 col-sm-12 pl-0 text-center">
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
                                                  <p>48</p>
                                                  <p className="second-tr">148</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-xl-3 col-3 col-lg-3 col-md-3 col-sm-3">
                                              <div className="row">
                                                <div className="col-xl-6 col-6 col-lg-6 col-md-6 col-sm-6 pl-0 text-center">
                                                  <p><a href="#" className="text-blue">Плацкарт</a></p>
                                                  <p className="second-tr"><a href="#" className="text-blue">Купэ</a>
                                                  </p>
                                                </div>
                                                <div className="col-xl-6 col-6 col-6 col-lg-6 col-md-6 col-sm-6 pl-0 text-center">
                                                  <h4>5 273</h4>
                                                  <h4 className="second-tr">8 113</h4>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                              <button className="btn btn-success select-btn">Выбрать
                                                место
                                              </button>
                                              <button className="btn btn-default">Выбрать место
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="select-route-block">
                                        <div className="col-12">
                                          <div className="row">
                                            <div className="select-route-header">
                                              <div className="col-12">
                                                <div className="form-inline">
                                                  <label className="col-form-label">Выберите
                                                    вагон: </label>
                                                  <select className="form-control">
                                                    <option value>Вагон № 1 (32 верхних,
                                                      24 нижних свободных мест)
                                                    </option>
                                                  </select>
                                                </div>
                                                <span className="close-modal">Закрыть <i className="icons-main close-icon" /></span>
                                              </div>
                                            </div>
                                            <div className="select-route-body">
                                              <div className="col-12">
                                                <div data-interval="false" data-ride="false" className="carousel carousel-train slide">
                                                  <div className="carousel-inner" role="listbox">
                                                    <div className="carousel-item active">
                                                      <b className="count-place text-blue">13</b>
                                                      <img className="d-block img-fluid" src="/assets/img/select-body.jpg" alt="First slide" />
                                                      <div className="place-block">
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left select">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              4
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right busy">
                                                              3
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              6
                                                            </button>
                                                            <button className="float-right">
                                                              8
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              5
                                                            </button>
                                                            <button className="float-right">
                                                              7
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              10
                                                            </button>
                                                            <button className="float-right">
                                                              12
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              9
                                                            </button>
                                                            <button className="float-right">
                                                              11
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              14
                                                            </button>
                                                            <button className="float-right">
                                                              13
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              16
                                                            </button>
                                                            <button className="float-right">
                                                              15
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              18
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right">
                                                              17
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              20
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right">
                                                              19
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              22
                                                            </button>
                                                            <button className="float-right">
                                                              24
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              21
                                                            </button>
                                                            <button className="float-right">
                                                              23
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              26
                                                            </button>
                                                            <button className="float-right">
                                                              28
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              25
                                                            </button>
                                                            <button className="float-right">
                                                              27
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              30
                                                            </button>
                                                            <button className="float-right">
                                                              32
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              29
                                                            </button>
                                                            <button className="float-right">
                                                              31
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="place-footer">
                                                        <div className="text-right">
                                                          <span className="float-left select-count">Вы выбрали <b className="all-select-count text-blue">1</b> место</span>
                                                          <button className="btn btn-primary float-right">
                                                            Далее
                                                          </button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                      <b className="count-place text-blue">13</b>
                                                      <img className="d-block img-fluid" src="/assets/img/select-body.jpg" alt="First slide" />
                                                      <div className="place-block">
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              4
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right busy">
                                                              3
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              6
                                                            </button>
                                                            <button className="float-right">
                                                              8
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              5
                                                            </button>
                                                            <button className="float-right">
                                                              7
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              10
                                                            </button>
                                                            <button className="float-right">
                                                              12
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              9
                                                            </button>
                                                            <button className="float-right">
                                                              11
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              14
                                                            </button>
                                                            <button className="float-right">
                                                              13
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              16
                                                            </button>
                                                            <button className="float-right">
                                                              15
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              18
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right">
                                                              17
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              20
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right">
                                                              19
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              22
                                                            </button>
                                                            <button className="float-right">
                                                              24
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              21
                                                            </button>
                                                            <button className="float-right">
                                                              23
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              26
                                                            </button>
                                                            <button className="float-right">
                                                              28
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              25
                                                            </button>
                                                            <button className="float-right">
                                                              27
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              30
                                                            </button>
                                                            <button className="float-right">
                                                              32
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              29
                                                            </button>
                                                            <button className="float-right">
                                                              31
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="place-footer">
                                                        <div className="text-right">
                                                          <span className="float-left select-count">Вы выбрали <b className="all-select-count text-blue">1</b> место</span>
                                                          <button className="btn btn-primary float-right">
                                                            Далее
                                                          </button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                      <b className="count-place text-blue">13</b>
                                                      <img className="d-block img-fluid" src="/assets/img/select-body.jpg" alt="First slide" />
                                                      <div className="place-block">
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              4
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right busy">
                                                              3
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              6
                                                            </button>
                                                            <button className="float-right">
                                                              8
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              5
                                                            </button>
                                                            <button className="float-right">
                                                              7
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              10
                                                            </button>
                                                            <button className="float-right">
                                                              12
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              9
                                                            </button>
                                                            <button className="float-right">
                                                              11
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              14
                                                            </button>
                                                            <button className="float-right">
                                                              13
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              16
                                                            </button>
                                                            <button className="float-right">
                                                              15
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              18
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right">
                                                              17
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              20
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right">
                                                              19
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              22
                                                            </button>
                                                            <button className="float-right">
                                                              24
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              21
                                                            </button>
                                                            <button className="float-right">
                                                              23
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              26
                                                            </button>
                                                            <button className="float-right">
                                                              28
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              25
                                                            </button>
                                                            <button className="float-right">
                                                              27
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              30
                                                            </button>
                                                            <button className="float-right">
                                                              32
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              29
                                                            </button>
                                                            <button className="float-right">
                                                              31
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="place-footer">
                                                        <div className="text-right">
                                                          <span className="float-left select-count">Вы выбрали <b className="all-select-count text-blue">1</b> место</span>
                                                          <button className="btn btn-primary float-right">
                                                            Далее
                                                          </button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <a className="carousel-control-prev" data-target=".carousel-train" href="#carousel-train" role="button" data-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                    <span className="sr-only">Previous</span>
                                                  </a>
                                                  <a className="carousel-control-next" data-target=".carousel-train" href="#carousel-train" role="button" data-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                                    <span className="sr-only">Next</span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <h2 className="grey-title">Самый быстрый</h2>
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
                                                  <img src="/assets/img/arrow-route.jpg" alt="arrow-route" />
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
                                                  <p>48</p>
                                                  <p className="second-tr">148</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-xl-3 col-3 col-lg-3 col-md-3 col-sm-3">
                                              <div className="row">
                                                <div className="col-xl-6 col-6 col-lg-6 col-md-6 col-sm-6 pl-0 text-center">
                                                  <p><a href="#" className="text-blue">Плацкарт</a></p>
                                                  <p className="second-tr"><a href="#" className="text-blue">Купэ</a>
                                                  </p>
                                                </div>
                                                <div className="col-xl-6 col-6 col-lg-6 col-md-6 col-sm-6 pl-0 text-center">
                                                  <h4>5 273</h4>
                                                  <h4 className="second-tr">8 113</h4>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                              <button className="btn btn-success select-btn">Выбрать
                                                место
                                              </button>
                                              <button className="btn btn-default">Выбрать место
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="select-route-block">
                                        <div className="col-12">
                                          <div className="row">
                                            <div className="select-route-header">
                                              <div className="col-12">
                                                <div className="form-inline">
                                                  <label className="col-form-label">Выберите
                                                    вагон: </label>
                                                  <select className="form-control">
                                                    <option value>Вагон № 1 (32 верхних,
                                                      24 нижних свободных мест)
                                                    </option>
                                                  </select>
                                                </div>
                                                <span className="close-modal">Закрыть <i className="icons-main close-icon" /></span>
                                              </div>
                                            </div>
                                            <div className="select-route-body">
                                              <div className="col-12">
                                                <div data-interval="false" data-ride="false" className="carousel-train2 carousel-train carousel slide">
                                                  <div className="carousel-inner" role="listbox">
                                                    <div className="carousel-item active">
                                                      <b className="count-place text-blue">13</b>
                                                      <img className="d-block img-fluid" src="/assets/img/select-body.jpg" alt="First slide" />
                                                      <div className="place-block">
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left select">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              4
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right busy">
                                                              3
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              6
                                                            </button>
                                                            <button className="float-right">
                                                              8
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              5
                                                            </button>
                                                            <button className="float-right">
                                                              7
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              10
                                                            </button>
                                                            <button className="float-right">
                                                              12
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              9
                                                            </button>
                                                            <button className="float-right">
                                                              11
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              14
                                                            </button>
                                                            <button className="float-right">
                                                              13
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              16
                                                            </button>
                                                            <button className="float-right">
                                                              15
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              18
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right">
                                                              17
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              20
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right">
                                                              19
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              22
                                                            </button>
                                                            <button className="float-right">
                                                              24
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              21
                                                            </button>
                                                            <button className="float-right">
                                                              23
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              26
                                                            </button>
                                                            <button className="float-right">
                                                              28
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              25
                                                            </button>
                                                            <button className="float-right">
                                                              27
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              30
                                                            </button>
                                                            <button className="float-right">
                                                              32
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              29
                                                            </button>
                                                            <button className="float-right">
                                                              31
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="place-footer">
                                                        <div className="text-right">
                                                          <span className="float-left select-count">Вы выбрали <b className="all-select-count text-blue">1</b> место</span>
                                                          <button className="btn btn-primary float-right">
                                                            Далее
                                                          </button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                      <b className="count-place text-blue">13</b>
                                                      <img className="d-block img-fluid" src="/assets/img/select-body.jpg" alt="First slide" />
                                                      <div className="place-block">
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              4
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right busy">
                                                              3
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              6
                                                            </button>
                                                            <button className="float-right">
                                                              8
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              5
                                                            </button>
                                                            <button className="float-right">
                                                              7
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              10
                                                            </button>
                                                            <button className="float-right">
                                                              12
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              9
                                                            </button>
                                                            <button className="float-right">
                                                              11
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              14
                                                            </button>
                                                            <button className="float-right">
                                                              13
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              16
                                                            </button>
                                                            <button className="float-right">
                                                              15
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              18
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right">
                                                              17
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              20
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right">
                                                              19
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              22
                                                            </button>
                                                            <button className="float-right">
                                                              24
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              21
                                                            </button>
                                                            <button className="float-right">
                                                              23
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              26
                                                            </button>
                                                            <button className="float-right">
                                                              28
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              25
                                                            </button>
                                                            <button className="float-right">
                                                              27
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              30
                                                            </button>
                                                            <button className="float-right">
                                                              32
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              29
                                                            </button>
                                                            <button className="float-right">
                                                              31
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="place-footer">
                                                        <div className="text-right">
                                                          <span className="float-left select-count">Вы выбрали <b className="all-select-count text-blue">1</b> место</span>
                                                          <button className="btn btn-primary float-right">
                                                            Далее
                                                          </button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                      <b className="count-place text-blue">13</b>
                                                      <img className="d-block img-fluid" src="/assets/img/select-body.jpg" alt="First slide" />
                                                      <div className="place-block">
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              4
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right busy">
                                                              3
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              6
                                                            </button>
                                                            <button className="float-right">
                                                              8
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              5
                                                            </button>
                                                            <button className="float-right">
                                                              7
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              10
                                                            </button>
                                                            <button className="float-right">
                                                              12
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              9
                                                            </button>
                                                            <button className="float-right">
                                                              11
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              14
                                                            </button>
                                                            <button className="float-right">
                                                              13
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              16
                                                            </button>
                                                            <button className="float-right">
                                                              15
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              18
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right">
                                                              17
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              2
                                                            </button>
                                                            <button className="float-right">
                                                              20
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              1
                                                            </button>
                                                            <button className="float-right">
                                                              19
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              22
                                                            </button>
                                                            <button className="float-right">
                                                              24
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              21
                                                            </button>
                                                            <button className="float-right">
                                                              23
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              26
                                                            </button>
                                                            <button className="float-right">
                                                              28
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              25
                                                            </button>
                                                            <button className="float-right">
                                                              27
                                                            </button>
                                                          </div>
                                                        </div>
                                                        <div className="place-item">
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              30
                                                            </button>
                                                            <button className="float-right">
                                                              32
                                                            </button>
                                                          </div>
                                                          <div className="clearfix">
                                                            <button className="float-left">
                                                              29
                                                            </button>
                                                            <button className="float-right">
                                                              31
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="place-footer">
                                                        <div className="text-right">
                                                          <span className="float-left select-count">Вы выбрали <b className="all-select-count text-blue">1</b> место</span>
                                                          <button className="btn btn-primary float-right">
                                                            Далее
                                                          </button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <a className="carousel-control-prev" data-target=".carousel-train2" href="#carousel-train2" role="button" data-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                    <span className="sr-only">Previous</span>
                                                  </a>
                                                  <a className="carousel-control-next" data-target=".carousel-train2" href="#carousel-train2" role="button" data-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                                    <span className="sr-only">Next</span>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <h2 className="grey-title">Остальные</h2>
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
                                                  <img src="/assets/img/arrow-route.jpg" alt="arrow-route" />
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
                                                  <p>48</p>
                                                  <p className="second-tr">148</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-xl-3 col-3 col-lg-3 col-md-3 col-sm-3">
                                              <div className="row">
                                                <div className="col-xl-6 col-6 col-lg-6 col-md-6 col-sm-6 pl-0 text-center">
                                                  <p><a href="#" className="text-blue">Плацкарт</a></p>
                                                  <p className="second-tr"><a href="#" className="text-blue">Купэ</a>
                                                  </p>
                                                </div>
                                                <div className="col-xl-6 col-6 col-lg-6 col-md-6 col-sm-6 pl-0 text-center">
                                                  <h4>5 273</h4>
                                                  <h4 className="second-tr">8 113</h4>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                              <button className="btn btn-success">Выбрать место
                                              </button>
                                              <button className="btn btn-default">Выбрать место
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
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
                                                  <img src="/assets/img/arrow-route.jpg" alt="arrow-route" />
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
                                                  <p>48</p>
                                                  <p className="second-tr">148</p>
                                                  <p className="second-tr">4</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-xl-3 col-3 col-lg-3 col-md-3 col-sm-3">
                                              <div className="row">
                                                <div className="col-xl-6 col-6 col-lg-6 col-md-6 col-sm-6 pl-0 text-center">
                                                  <p><a href="#" className="text-blue">Плацкарт</a></p>
                                                  <p className="second-tr"><a href="#" className="text-blue">Купэ</a>
                                                  </p>
                                                  <p className="second-tr"><a href="#" className="text-blue">СВ</a>
                                                  </p>
                                                </div>
                                                <div className="col-xl-6 col-6 col-lg-6 col-md-6 col-sm-6 pl-0 text-center">
                                                  <h4>5 273</h4>
                                                  <h4 className="second-tr">8 113</h4>
                                                  <h4 className="second-tr">23 444</h4>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                              <button className="btn btn-success">Выбрать место
                                              </button>
                                              <button className="btn btn-default">Выбрать место
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tab-pane" id="step2" role="tabpanel">
                                <h2 className="grey-title">Фронтендер или фулстэк разработчик должен реализовать
                                  подгрузку контента после выбора направление
                                  То есть то что в "Шаг 1" закинуть сюда. И сделать это по событиям.</h2>
                                Шаг 2
                              </div>
                              <div className="tab-pane" id="step3" role="tabpanel">
                                <h2 className="grey-title">Тут то же самое. Просто при выборе место в вагоне</h2>
                                Шаг 4
                              </div>
                              <div className="tab-pane" id="step4" role="tabpanel">
                                <div className="info-passenger">
                                  <div className="col-12">
                                    <h2 className="grey-title articles-title"><i className="icons-main passenger-icon" />
                                      Информация о маршруте № 1</h2>
                                    <div className="col-12">
                                      <div className="row">
                                        <div className="col-4">
                                          <div className="info-passenger-item border-right">
                                            <p>Маршрут - <a href="#" className="link-custom">Астана</a>
                                              <img src="img/arrow-route.jpg" alt="arrow-route" /> <a href="#" className="link-custom">Кокшетау-1</a>
                                            </p>
                                            <p>Дата и время отправления - <span className="text-blue">21.01.2015 в 04:25</span>
                                            </p>
                                            <p>Дата и время прибытия - <span className="text-blue">21.01.2015 в 04:25</span>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-3">
                                          <div className="info-passenger-item border-right">
                                            <p>Время в пути - <span className="text-blue">04:25</span>
                                            </p>
                                            <p>№ поезда - <span className="text-blue">345Ц</span></p>
                                            <p>№ вагона - <span className="text-blue">1</span></p>
                                          </div>
                                        </div>
                                        <div className="col-3">
                                          <div className="info-passenger-item border-right">
                                            <p>Тип вагона - <span className="text-blue">Плацкартный ЗП</span></p>
                                            <p>Колличество пассажиров - <span className="text-blue">4</span></p>
                                            <p>Выбранные места: - <span className="text-blue">2, 12, 3</span></p>
                                          </div>
                                        </div>
                                        <div className="col-2">
                                          <div className="info-passenger-item last">
                                            <p className="text-center">Общая стоимость</p>
                                            <h3 className="text-center">16000 kzt</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="info-passenger">
                                  <div className="col-12">
                                    <div className="col-12">
                                      <h2 className="grey-title articles-title">Информация о пассажирах</h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="info-passenger-form">
                                  <div className="description-passenger">
                                    <div className="row">
                                      <div className="col-3">
                                        <div className="description-passenger-bg">
                                          <span className="round-count">1</span>
                                          <p>Пассажир</p>
                                          <h3>Взрослый</h3>
                                          <div className="delete"><i className="icons-main close-icon" />
                                            <span>Удалить</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Имя" />
                                        <input className="input-unversal" type="date" />
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Фамилия" />
                                        <select className="input-unversal">
                                          <option value>Тип документа</option>
                                        </select>
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Отчество" />
                                        <div className="type-document">
                                          <input className="input-unversal" type="text" placeholder="№ докумета" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="info-passenger-form">
                                  <div className="description-passenger">
                                    <div className="row">
                                      <div className="col-3">
                                        <div className="description-passenger-bg">
                                          <span className="round-count">2</span>
                                          <p>Пассажир</p>
                                          <h3>Взрослый</h3>
                                          <div className="delete"><i className="icons-main close-icon" />
                                            <span>Удалить</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Имя" />
                                        <input className="input-unversal" type="date" />
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Фамилия" />
                                        <select className="input-unversal">
                                          <option value>Тип документа</option>
                                        </select>
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Отчество" />
                                        <div className="type-document">
                                          <input className="input-unversal" type="text" placeholder="№ докумета" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="info-passenger">
                                  <div className="col-12">
                                    <h2 className="grey-title articles-title"><i className="icons-main passenger-icon" />
                                      Информация о маршруте № 2</h2>
                                    <div className="col-12">
                                      <div className="row">
                                        <div className="col-4">
                                          <div className="info-passenger-item border-right">
                                            <p>Маршрут - <a href="#" className="link-custom">Астана</a>
                                              <img src="img/arrow-route.jpg" alt="arrow-route" /> <a href="#" className="link-custom">Кокшетау-1</a>
                                            </p>
                                            <p>Дата и время отправления - <span className="text-blue">21.01.2015 в 04:25</span>
                                            </p>
                                            <p>Дата и время прибытия - <span className="text-blue">21.01.2015 в 04:25</span>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-3">
                                          <div className="info-passenger-item border-right">
                                            <p>Время в пути - <span className="text-blue">04:25</span>
                                            </p>
                                            <p>№ поезда - <span className="text-blue">345Ц</span></p>
                                            <p>№ вагона - <span className="text-blue">1</span></p>
                                          </div>
                                        </div>
                                        <div className="col-3">
                                          <div className="info-passenger-item border-right">
                                            <p>Тип вагона - <span className="text-blue">Плацкартный ЗП</span></p>
                                            <p>Колличество пассажиров - <span className="text-blue">4</span></p>
                                            <p>Выбранные места: - <span className="text-blue">2, 12, 3</span></p>
                                          </div>
                                        </div>
                                        <div className="col-2">
                                          <div className="info-passenger-item last">
                                            <p className="text-center">Общая стоимость</p>
                                            <h3 className="text-center">16000 kzt</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="info-passenger">
                                  <div className="col-12">
                                    <div className="col-12">
                                      <h2 className="grey-title articles-title">Информация о пассажирах</h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="info-passenger-form">
                                  <div className="description-passenger">
                                    <div className="row">
                                      <div className="col-3">
                                        <div className="description-passenger-bg">
                                          <span className="round-count">1</span>
                                          <p>Пассажир</p>
                                          <h3>Взрослый</h3>
                                          <div className="delete"><i className="icons-main close-icon" />
                                            <span>Удалить</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Имя" />
                                        <input className="input-unversal" type="date" />
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Фамилия" />
                                        <select className="input-unversal">
                                          <option value>Тип документа</option>
                                        </select>
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Отчество" />
                                        <div className="type-document">
                                          <input className="input-unversal" type="text" placeholder="№ докумета" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="info-passenger-form">
                                  <div className="description-passenger">
                                    <div className="row">
                                      <div className="col-3">
                                        <div className="description-passenger-bg">
                                          <span className="round-count">2</span>
                                          <p>Пассажир</p>
                                          <h3>Взрослый</h3>
                                          <div className="delete"><i className="icons-main close-icon" />
                                            <span>Удалить</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Имя" />
                                        <input className="input-unversal" type="date" />
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Фамилия" />
                                        <select className="input-unversal">
                                          <option value>Тип документа</option>
                                        </select>
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Отчество" />
                                        <div className="type-document">
                                          <input className="input-unversal" type="text" placeholder="№ докумета" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="info-passenger">
                                  <div className="col-12">
                                    <h2 className="grey-title articles-title"><i className="icons-main passenger-icon" />
                                      Информация о маршруте № 3</h2>
                                    <div className="col-12">
                                      <div className="row">
                                        <div className="col-4">
                                          <div className="info-passenger-item border-right">
                                            <p>Маршрут - <a href="#" className="link-custom">Астана</a>
                                              <img src="img/arrow-route.jpg" alt="arrow-route" /> <a href="#" className="link-custom">Кокшетау-1</a>
                                            </p>
                                            <p>Дата и время отправления - <span className="text-blue">21.01.2015 в 04:25</span>
                                            </p>
                                            <p>Дата и время прибытия - <span className="text-blue">21.01.2015 в 04:25</span>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-3">
                                          <div className="info-passenger-item border-right">
                                            <p>Время в пути - <span className="text-blue">04:25</span>
                                            </p>
                                            <p>№ поезда - <span className="text-blue">345Ц</span></p>
                                            <p>№ вагона - <span className="text-blue">1</span></p>
                                          </div>
                                        </div>
                                        <div className="col-3">
                                          <div className="info-passenger-item border-right">
                                            <p>Тип вагона - <span className="text-blue">Плацкартный ЗП</span></p>
                                            <p>Колличество пассажиров - <span className="text-blue">4</span></p>
                                            <p>Выбранные места: - <span className="text-blue">2, 12, 3</span></p>
                                          </div>
                                        </div>
                                        <div className="col-2">
                                          <div className="info-passenger-item last">
                                            <p className="text-center">Общая стоимость</p>
                                            <h3 className="text-center">16000 kzt</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="info-passenger">
                                  <div className="col-12">
                                    <div className="col-12">
                                      <h2 className="grey-title articles-title">Информация о пассажирах</h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="info-passenger-form">
                                  <div className="description-passenger">
                                    <div className="row">
                                      <div className="col-3">
                                        <div className="description-passenger-bg">
                                          <span className="round-count">1</span>
                                          <p>Пассажир</p>
                                          <h3>Взрослый</h3>
                                          <div className="delete"><i className="icons-main close-icon" />
                                            <span>Удалить</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Имя" />
                                        <input className="input-unversal" type="date" />
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Фамилия" />
                                        <select className="input-unversal">
                                          <option value>Тип документа</option>
                                        </select>
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Отчество" />
                                        <div className="type-document">
                                          <input className="input-unversal" type="text" placeholder="№ докумета" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="info-passenger-form">
                                  <div className="description-passenger">
                                    <div className="row">
                                      <div className="col-3">
                                        <div className="description-passenger-bg">
                                          <span className="round-count">2</span>
                                          <p>Пассажир</p>
                                          <h3>Взрослый</h3>
                                          <div className="delete"><i className="icons-main close-icon" />
                                            <span>Удалить</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Имя" />
                                        <input className="input-unversal" type="date" />
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Фамилия" />
                                        <select className="input-unversal">
                                          <option value>Тип документа</option>
                                        </select>
                                      </div>
                                      <div className="col-3 description-input">
                                        <input className="input-unversal" type="text" placeholder="Отчество" />
                                        <div className="type-document">
                                          <input className="input-unversal" type="text" placeholder="№ докумета" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="info-passenger">
                                  <div className="col-12">
                                    <div className="row">
                                      <div className="col-6">
                                        <h2 className="grey-title articles-title pt-0">Контактные данные
                                          покупателя</h2>
                                      </div>
                                      <div className="col-6 text-right">
                                        <p className="grey">Если у вас уже есть аккаунт на Treno.kz <a href="#" className="text-blue">Авторизуйтесь</a></p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <form>
                                      <div className="form-group">
                                        <div className="row">
                                          <div className="col-3">
                                            <label htmlFor="exampleInputEmail1">Email</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" />
                                          </div>
                                          <div className="col-4">
                                            <label htmlFor="fio">ФИО</label>
                                            <input type="text" className="form-control" id="fio" />
                                          </div>
                                          <div className="col-2">
                                            <label htmlFor="code-country">Код страны</label>
                                            <select className="form-control" id="code-country">
                                              <option value={7}>+7</option>
                                            </select>
                                          </div>
                                          <div className="col-3">
                                            <label htmlFor="number-phone">Номер телефона</label>
                                            <input type="text" className="form-control" id="number-phone" />
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <div className="footer-license-passenger clearfix">
                                  <div className="float-right">
                                    <div className="col-12">
                                      <div className="col-12">
                                        <div className="row">
                                          <div className="col-9 text-right">
                                            <form>
                                              <div className="form-check">
                                                <label className="form-check-label">
                                                  <input type="checkbox" className="form-check-input" />
                                                  Принимаю условия, правила и ограничения
                                                </label>
                                              </div>
                                            </form>
                                          </div>
                                          <div className="col-3 text-right">
                                            <button className="btn btn-success">Продолжить</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tab-pane" id="step5" role="tabpanel">
                                <div className="col-12">
                                  <h2 className="grey-title articles-title"><i className="icons-main passenger-icon" />
                                    Оплата билета №1</h2>
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
                                          <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 border-right">
                                            <div className="row">
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <p><b>08:35</b></p>
                                                <small className="grey-title">10.9</small>
                                              </div>
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <small className="grey-title">21.30</small>
                                                <img src="img/arrow-route.jpg" alt="arrow-route" />
                                              </div>
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <p><b>06:05</b></p>
                                                <small className="grey-title">10.9</small>
                                              </div>
                                              <div className="col-xl-12 col-12 col-lg-12 col-md-12 col-sm-12 pl-0 text-center">
                                                <p className="second-tr">
                                                  <small className="grey-title">Время
                                                    отправление и прибытие местное
                                                  </small>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-xl-6 col-6 col-lg-6 col-md-6 col-sm-6">
                                            <div className="row">
                                              <div className="container-fluid">
                                                <p><span className="grey-title">Общая стоимость к оплате:</span>
                                                  <b className="green-text price-cen">8190.00
                                                    KZT.</b></p>
                                                <p><span className="grey-title">Заказ создан:</span>
                                                  <b className="text-purple">21.10.2015 18:26.</b>
                                                </p>
                                                <p><span className="grey-title">Заказа №:</span> <b className="text-purple">2808572</b></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <h2 className="grey-title articles-title"><i className="icons-main passenger-icon" />
                                    Оплата билета №2</h2>
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
                                          <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 border-right">
                                            <div className="row">
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <p><b>08:35</b></p>
                                                <small className="grey-title">10.9</small>
                                              </div>
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <small className="grey-title">21.30</small>
                                                <img src="img/arrow-route.jpg" alt="arrow-route" />
                                              </div>
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <p><b>06:05</b></p>
                                                <small className="grey-title">10.9</small>
                                              </div>
                                              <div className="col-xl-12 col-12 col-lg-12 col-md-12 col-sm-12 pl-0 text-center">
                                                <p className="second-tr">
                                                  <small className="grey-title">Время
                                                    отправление и прибытие местное
                                                  </small>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-xl-6 col-6 col-lg-6 col-md-6 col-sm-6">
                                            <div className="row">
                                              <div className="container-fluid">
                                                <p><span className="grey-title">Общая стоимость к оплате:</span>
                                                  <b className="green-text price-cen">8190.00
                                                    KZT.</b></p>
                                                <p><span className="grey-title">Заказ создан:</span>
                                                  <b className="text-purple">21.10.2015 18:26.</b>
                                                </p>
                                                <p><span className="grey-title">Заказа №:</span> <b className="text-purple">2808572</b></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card-blue-custom">
                                    <h3 className="grey-title articles-title">Покупатель</h3>
                                    <p><span className="grey-title">Ф.И.О.:</span> <b className="text-purple">Алибек
                                        Бапахов Алиев</b></p>
                                    <p><span className="grey-title">Email:</span> <b className="text-purple">rfa@mail.ru</b>
                                    </p>
                                    <p><span className="grey-title">Телефон:</span> <b className="text-purple">+7701
                                        7557575</b></p>
                                  </div>
                                  <div className="card-blue-custom">
                                    <h3 className="grey-title articles-title">Пассажиры:</h3>
                                    <div className="table-div">
                                      <div className="table-header">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="row">
                                              <div className="col-xl-1 col-1 col-lg-1 col-md-1 col-sm-1">
                                                <h4>№</h4>
                                              </div>
                                              <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                                <h4>Фамилия</h4>
                                              </div>
                                              <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                                <h4>Имя</h4>
                                              </div>
                                              <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                                <h4>Место</h4>
                                              </div>
                                              <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                                <h4>Вагон</h4>
                                              </div>
                                              <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                                <h4>№ Документа</h4>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="table-body">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="row">
                                              <div className="col-xl-1 col-1 col-lg-1 col-md-1 col-sm-1">
                                                <p>1</p>
                                              </div>
                                              <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                                <p>Алибек</p>
                                              </div>
                                              <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                                <p>Балахов</p>
                                              </div>
                                              <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                                <p>32</p>
                                              </div>
                                              <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                                <p>9</p>
                                              </div>
                                              <div className="col-xl-2 col-2 col-lg-2 col-md-2 col-sm-2">
                                                <p>0323334785</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="payment-block">
                                        <div className="col-12">
                                          <div className="row">
                                            <div className="col-6">
                                              <p className="grey">Оплата картой Visa / Master cart
                                                любого банка</p>
                                              <img src="img/payment.png" alt="payment" />
                                            </div>
                                            <div className="col-6 text-right payment-right">
                                              <label><input type="checkbox" /> Я принимаю</label> <a href="#" className="text-blue">правила публичной
                                                оферты</a>
                                              <button className="green-btn-gradient">Оплатить</button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tab-pane" id="step6" role="tabpanel">
                                <div className="col-12">
                                  <div className="card-blue-custom">
                                    <div className="row">
                                      <div className="col-9">
                                        <h3 className="orange-text">Операция прошла успешна!</h3>
                                        <p><span className="grey-title">Информация по вашему билеты отправлена на <span className="text-purple">test@trebo.kz</span> а так же в <span className="text-purple">раздел</span> личного кабинета.</span>
                                        </p>
                                        <p><span className="grey-title">Операция  выполнена:</span> <span className="text-purple">21.10.2015 18:26.</span></p>
                                      </div>
                                      <div className="col-3">
                                        <button className="green-btn-gradient link-cabinet btn-block">Личный
                                          кабинет
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <h2 className="grey-title articles-title"><i className="icons-main passenger-icon" />
                                    Оплата билета №1</h2>
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
                                          <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 border-right">
                                            <div className="row">
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <p><b>08:35</b></p>
                                                <small className="grey-title">10.9</small>
                                              </div>
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <small className="grey-title">21.30</small>
                                                <img src="img/arrow-route.jpg" alt="arrow-route" />
                                              </div>
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <p><b>06:05</b></p>
                                                <small className="grey-title">10.9</small>
                                              </div>
                                              <div className="col-xl-12 col-12 col-lg-12 col-md-12 col-sm-12 pl-0 text-center">
                                                <p className="second-tr">
                                                  <small className="grey-title">Время
                                                    отправление и прибытие местное
                                                  </small>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-xl-6 col-6 col-lg-6 col-md-6 col-sm-6">
                                            <div className="container-fluid">
                                              <p><span className="grey-title">Общая стоимость к оплате:</span>
                                                <b className="green-text price-cen">8190.00
                                                  KZT.</b></p>
                                              <p><span className="grey-title">Заказ создан:</span>
                                                <b className="text-purple">21.10.2015 18:26.</b>
                                              </p>
                                              <p><span className="grey-title">Заказа №:</span> <b className="text-purple">2808572</b></p>
                                              <div className="paid">
                                                <div className="col-12">
                                                  <div className="row">
                                                    <div className="col-6 pl-0 pr-0 text-center">
                                                      <h3 className="green-text text-uppercase">
                                                        Оплачено</h3>
                                                    </div>
                                                    <div className="col-6">
                                                      <div className="row">
                                                        <div className="col-6">
                                                          <p className="gray">Скачать или
                                                            распечатать билет</p>
                                                        </div>
                                                        <div className="col-6 pl-0 pr-0">
                                                          <a href="#"><i className="icons-main pdf-icon" /></a>
                                                          <a href="#"><i className="icons-main html-icon" /></a>
                                                          <a href="#"><i className="icons-main print-icon" /></a>
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
                                  <h2 className="grey-title articles-title"><i className="icons-main passenger-icon" />
                                    Оплата билета №2</h2>
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
                                          <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 border-right">
                                            <div className="row">
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <p><b>08:35</b></p>
                                                <small className="grey-title">10.9</small>
                                              </div>
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <small className="grey-title">21.30</small>
                                                <img src="img/arrow-route.jpg" alt="arrow-route" />
                                              </div>
                                              <div className="col-xl-4 col-4 col-lg-4 col-md-4 col-sm-4 pl-0 text-center">
                                                <p><b>06:05</b></p>
                                                <small className="grey-title">10.9</small>
                                              </div>
                                              <div className="col-xl-12 col-12 col-lg-12 col-md-12 col-sm-12 pl-0 text-center">
                                                <p className="second-tr">
                                                  <small className="grey-title">Время
                                                    отправление и прибытие местное
                                                  </small>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-xl-6 col-6 col-lg-6 col-md-6 col-sm-6">
                                            <div className="container-fluid">
                                              <p><span className="grey-title">Общая стоимость к оплате:</span>
                                                <b className="green-text price-cen">8190.00
                                                  KZT.</b></p>
                                              <p><span className="grey-title">Заказ создан:</span>
                                                <b className="text-purple">21.10.2015 18:26.</b>
                                              </p>
                                              <p><span className="grey-title">Заказа №:</span> <b className="text-purple">2808572</b></p>
                                              <div className="paid">
                                                <div className="col-12">
                                                  <div className="row">
                                                    <div className="col-6 pl-0 pr-0 text-center">
                                                      <h3 className="green-text text-uppercase">
                                                        Оплачено</h3>
                                                    </div>
                                                    <div className="col-6">
                                                      <div className="row">
                                                        <div className="col-6">
                                                          <p className="gray">Скачать или
                                                            распечатать билет</p>
                                                        </div>
                                                        <div className="col-6 pl-0 pr-0">
                                                          <a href="#"><i className="icons-main pdf-icon" /></a>
                                                          <a href="#"><i className="icons-main html-icon" /></a>
                                                          <a href="#"><i className="icons-main print-icon" /></a>
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
      <div className="col-xl-12">
        <div className="row">
          <div className="col-xl-12">
            <div className="line-title-page text-center">
              <h2>Популярные маршруты</h2>
              <h3>Выберите свое следующее путешествие</h3>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-sm-6">
                <div className="cityes">
                  <img src="/assets/img/bangkog.jpg" alt="astana" />
                  <div className="text-center city-top">
                    <span className="city">Алматы</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-6">
                <div className="cityes">
                  <img src="/assets/img/astana2.jpg" alt="astana" />
                  <div className="text-center city-top">
                    <span className="city">Астана</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-6">
                <div className="cityes">
                  <img src="/assets/img/borovoe.jpg" alt="astana" />
                  <div className="text-center city-top">
                    <span className="city">Боровое</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-6">
                <div className="cityes">
                  <img src="/assets/img/moscow.jpg" alt="astana" />
                  <div className="text-center city-top">
                    <span className="city">Москва</span>
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

export default multitrip;
