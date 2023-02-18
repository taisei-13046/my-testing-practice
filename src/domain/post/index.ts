export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type SortType = "asc" | "desc";

// titleをアルファベット順に並べる
const sortByTitle = (posts: Post[], sortType: SortType) => {
  return [...posts].sort((a, b) => {
    if (sortType === "asc") {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
    }
    if (sortType === "desc") {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
    }
    return 0;
  });
};

export const Post = {
  sortByTitle,
};
