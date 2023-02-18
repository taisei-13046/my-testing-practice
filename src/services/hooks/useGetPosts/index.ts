import { Post } from "../../../domain/post";
import { useGetPosts } from "../../generator/posts/posts";
import { PostsTranslator } from "./selector";

export const useQueryPosts = () => {
  const { data, isInitialLoading } = useGetPosts<Post[]>({
    query: {
      select: PostsTranslator,
    },
  });

  return { data, isInitialLoading };
};
