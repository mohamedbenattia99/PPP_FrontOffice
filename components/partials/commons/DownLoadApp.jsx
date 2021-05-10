import React from 'react';

const DownloadApp = () => (
    <section className="ps-download-app">
        <div className="ps-container">
            <div className="ps-block--download-app">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-block__thumbnail">
                                <img src="/static/img/app.jpg" alt="REDSYS" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-block__content">
                                <h3>Personnaliser vos tables!</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <form
                                    className="ps-form--download-app"
                                    action="do_action"
                                    method="post">
                                    <div className="form-group--nest">
                                      {/*  <input
                                            className="form-control"
                                            type="Email"
                                            placeholder="Email Address"
                                        />*/}
                                        <button className="ps-btn">Personnaliser</button>
                                    </div>
                                </form>
                              {/*  <p className="download-link">
                                    <a href="#">
                                        <img src="/static/img/google-play.png" alt="REDSYS" />
                                    </a>
                                    <a href="#">
                                        <img src="/static/img/app-store.png" alt="REDSYS" />
                                    </a>
                                </p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default DownloadApp;
