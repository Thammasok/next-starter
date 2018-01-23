import Link from 'next/link';

const TopHeader = () => (
  <section className="bar bar-3 bar--sm bg--secondary">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="bar__module">
            <span className="type--fade">Stack | Multipurpose HTML Template with Variant Page Builder</span>
          </div>
        </div>
        <div className="col-md-6 text-right text-left-xs text-left-sm">
          <div className="bar__module">
            <ul className="menu-horizontal">
              <li>
                <div className="modal-instance">
                  <a href="#" className="modal-trigger">Login</a>
                  <div className="modal-container">
                    <div className="modal-content section-modal">
                      <section className="unpad ">
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-6 col-md-offset-3 col-sm-offset-3 col-xs-12">
                              <div className="boxed boxed--lg bg--white text-center feature">
                                <div className="modal-close modal-close-cross"></div>
                                <h3>Login to Your Account</h3>
                                <a className="btn block btn--icon bg--facebook type--uppercase" href="#">
                                  <span className="btn__text">
                                    <i className="socicon-facebook"></i>
                                    Login with Facebook
                                  </span>
                                </a>
                                <a className="btn block btn--icon bg--twitter type--uppercase" href="#">
                                  <span className="btn__text">
                                    <i className="socicon-twitter"></i>
                                    Login with Twitter
                                  </span>
                                </a>
                                <hr data-title="OR" />
                                <div className="feature__body">
                                  <form>
                                    <div className="row">
                                      <div className="col-sm-12">
                                        <input type="text" placeholder="Username" />
                                      </div>
                                      <div className="col-sm-12">
                                        <input type="password" placeholder="Password" />
                                      </div>
                                      <div className="col-sm-12">
                                        <button className="btn btn--primary type--uppercase" type="submit">Login</button>
                                      </div>
                                    </div>
                                  </form>
                                  <span className="type--fine-print block">Dont have an account yet?
                                    <a href="#">Create account</a>
                                  </span>
                                  <span className="type--fine-print block">Forgot your username or password?
                                    <a href="#">Recover account</a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="modal-instance">
                  <a href="#" className="modal-trigger">Create Account</a>
                  <div className="modal-container">
                    <div className="modal-content">
                      <section className="imageblock feature-large bg--white border--round ">
                        <div className="imageblock__content col-md-5 col-sm-3 pos-left">
                          <div className="background-image-holder">
                            <img alt="image" src="/static/img/cowork-11.jpg" />
                          </div>
                        </div>
                        <div className="container">
                          <div className="row">
                            <div className="col-md-5 col-md-push-6 col-sm-7 col-sm-push-4">
                              <h2>Create an account</h2>
                              <p className="lead">Get started with a 14 day free trial, No credit card required &mdash; cancel at any time.</p>
                              <a className="btn block btn--icon bg--facebook type--uppercase" href="#">
                                <span className="btn__text">
                                  <i className="socicon-facebook"></i>
                                  Sign up with Facebook
                                </span>
                              </a>
                              <a className="btn block btn--icon bg--twitter type--uppercase" href="#">
                                <span className="btn__text">
                                  <i className="socicon-twitter"></i>
                                  Sign up with Twitter
                                </span>
                              </a>
                              <hr data-title="OR" />
                              <form>
                                <div className="row">
                                  <div className="col-xs-12">
                                    <input type="email" name="Email Address" placeholder="Email Address" />
                                  </div>
                                  <div className="col-xs-12">
                                    <input type="password" name="Password" placeholder="Password" />
                                  </div>
                                  <div className="col-xs-12">
                                    <button type="submit" className="btn btn--primary type--uppercase">Create Account</button>
                                  </div>
                                  <div className="col-xs-12">
                                    <span className="type--fine-print">By signing up, you agree to the
                                      <a href="#">Terms of Service</a>
                                    </span>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" data-notification-link="search-box">
                  <i className="stack-search"></i>
                </a>
              </li>
              <li>
                <a href="shop-cart.html">
                  <i className="stack-basket"></i>
                </a>
              </li>
              <li className="dropdown dropdown--absolute">
                <span className="dropdown__trigger">
                  <img alt="Image" className="flag" src="/static/img/flag-1.png" />
                </span>
                <div className="dropdown__container">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-1 dropdown__content">
                        <ul className="menu-vertical text-left">
                          <li>
                            <a href="#">ENG</a>
                          </li>
                          <li>
                            <a href="#">GER</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" data-notification-link="side-menu">
                  <i className="stack-dot-3"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TopHeader;