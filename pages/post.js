import DefaultLayout from '../components/Layouts/DefaultLayout';

const Post = (props) => (
  <DefaultLayout>
    <h1>{props.url.query.title ? props.url.query.title : props.data.page_id}</h1>
    <p>This is the blog post content.</p>
    <hr />
    <span>Fetched data</span> 
    <br/> 
    <span>
      {props.data.name} : {props.data.page_id}
    </span>
  </DefaultLayout>
);

Post.getInitialProps = async function (context) {
  // รับค่า ID จาก url เข้ามา ในกรณี Reload page
  let { id } = context.query;
  const data = await {
    name: "Thammasok",
    page_id: id
  };

  // console.log(`Fetched data: ${data.name}`);

  return { data };
};

export default Post;