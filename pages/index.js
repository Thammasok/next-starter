import Link from 'next/link';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import SearchTool from '../components/SearchTool';

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

const Index = (props) => (
  <DefaultLayout>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Find and book unique 
            <span className="inline-block typed-text typed-text--cursor color--primary" data-typed-strings="hotels,loft apartments,yurts,experiences,apartments,hostels,camp sites,luxury yachts"> accommodation</span>
            <br className="hidden-xs" />in over 100 countries.</h1>
          </div>
        </div>
      </div>
    </section>
    <SearchTool />
    <p>This is Tutorials</p>
    <h1>My Blogs</h1>
    <ul>
      {getPosts().map((post, index) => (
        <PostLink key={index} id={post.id} title={post.title}/>
      ))}
      
    </ul>
    <hr />
    <span>Fetched data</span> 
    <br/> 
    <span>
      {props.shows.name}
    </span>
  </DefaultLayout>
);

Index.getInitialProps = async function (context) {
  const data = await {
    name: "Thammasok"
  };

  return {
    shows: data
  }
};

export default Index;