import { useQueryPosts } from "../../services/hooks/useGetPosts";

export const TopPage = () => {
  const { data: posts } = useQueryPosts();

  return (
    <div>
      {posts?.map((post) => (
        <>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </>
      ))}
    </div>
  );
};
