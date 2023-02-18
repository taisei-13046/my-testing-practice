import { Card } from "../../components/Card";
import { useTop } from "./useTop";

export const TopPage = () => {
  const { sortedPosts } = useTop();

  return (
    <>
      <h1 className="mb-5">Top Page</h1>
      <div className="flex flex-col gap-2">
        {sortedPosts?.map((post) => (
          <Card key={post.id}>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </Card>
        ))}
      </div>
    </>
  );
};
