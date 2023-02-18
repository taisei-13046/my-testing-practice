import React from "react";
import { Post, SortType } from "../../domain/post";
import { useQueryPosts } from "../../services/hooks/useGetPosts";

export const useTop = () => {
  const [sortType, setSortType] = React.useState<SortType>("asc");
  const { data: posts } = useQueryPosts();

  const sortedPosts = React.useMemo(() => {
    if (!posts) {
      return;
    }
    return Post.sortByTitle(posts, sortType);
  }, [posts, sortType]);

  const onChangeSortType = React.useCallback(() => {
    if (sortType === "asc") {
      setSortType("desc");
    }
    if (sortType === "desc") {
      setSortType("asc");
    }
  }, [sortType]);

  return { sortedPosts, sortType, onChangeSortType };
};
