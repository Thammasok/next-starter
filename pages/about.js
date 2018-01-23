import DefaultLayout from '../components/Layouts/DefaultLayout';

const about = () => (
  <DefaultLayout>
    <h1>About Page</h1>
    <p>This is the about page</p>
    <style jsx>
      {`
        p {
          color: #FF0000;
        }
      `}
    </style>
  </DefaultLayout>
);

export default about;