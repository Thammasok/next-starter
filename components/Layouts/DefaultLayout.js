import Header from '../Header';

const DefaultLayout = (props) => (
  <div>
    <Header />
    <div className="main-container">
      {props.children}
    </div>
  </div>
);

export default DefaultLayout;