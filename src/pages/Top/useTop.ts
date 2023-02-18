import React from "react";
import { Post } from "../../domain/post";
import { useQueryPosts } from "../../services/hooks/useGetPosts";

export const useTop = () => {
  const { data: posts } = useQueryPosts();

  const sortedPosts = React.useMemo(() => {
    if (!posts) {
      return;
    }
    return Post.sortByTitle(posts);
  }, []);

  return { sortedPosts };
};
