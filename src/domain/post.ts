export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// titleをアルファベット順に並べる
const sortByTitle = (posts: Post[]) => {
  return [...posts].sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
};

export const Post = {
  sortByTitle,
};
