import axios from 'axios';

const Post = ({ item }: any) => {
  return (
    <div>
      <p>Post: {item.id}</p>
    </div>
  );
};

export default Post;

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const { data } = res;

  return {
    props: { item: data },
  };
}
