const UserIdServerSide = (props) => {
  return <h1>{props.userId}</h1>;
};

export default UserIdServerSide;

export async function getServerSideProps(context) {
  const { params } = context;

  const uid = params.uid;

  return {
    props: { userId: 'userId : ' + uid },
  };
}
