import Link from 'next/link';
import TopHeader from './TopHeader';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <TopHeader />
    <div className="nav-container ">
      <div className="bar bar--sm visible-xs">
        <div className="container">
          <div className="row">
            <div className="col-xs-3 col-sm-2">
              <a href="index.html">
                <img className="logo logo-dark" alt="logo" src="/static/img/logo-dark.png" />
                <img className="logo logo-light" alt="logo" src="/static/img/logo-light.png" />
              </a>
            </div>
            <div className="col-xs-9 col-sm-10 text-right">
              <a href="#" className="hamburger-toggle" data-toggle-class="#menu1;hidden-xs">
                <i className="icon icon--sm stack-interface stack-menu"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <nav id="menu1" className="bar bar--sm bar-1 hidden-xs ">
        <div className="container">
          <div className="row">
            <div className="col-md-1 col-sm-2 hidden-xs">
              <div className="bar__module">
                <a href="index.html">
                  <img className="logo logo-dark" alt="logo" src="/static/img/logo-dark.png" />
                  <img className="logo logo-light" alt="logo" src="/static/img/logo-light.png" />
                </a>
              </div>
            </div>
            <div className="col-md-11 col-sm-12 text-right text-left-xs text-left-sm">
              <div className="bar__module">
                <ul className="menu-horizontal text-left">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Home</a></li>
                </ul>
              </div>

              <div className="bar__module">
                <a className="btn btn--sm type--uppercase" href="#">
                  <span className="btn__text">
                    Try Builder
                  </span>
                </a>
                <a className="btn btn--sm btn--primary type--uppercase" href="#">
                  <span className="btn__text">
                    Buy Now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
);

export default Header;