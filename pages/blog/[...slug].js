import { useRouter } from 'next/router';

const BlogPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>
        This is a blog page with router query values in a array like this :
        <br />
        {JSON.stringify(router.query.slug)}
      </h1>
    </div>
  );
};

export default BlogPage;
