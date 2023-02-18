import { Post } from "./index";
describe("Post domain", () => {
  describe("sortByTitle", () => {
    describe("asc", () => {
      test("should be asc by title", () => {
        expect(
          Post.sortByTitle(mockPostList, "asc").map((v) => v.id)
        ).toStrictEqual([2, 1, 4, 3]);
      });
    });
    describe("desc", () => {
      test("should be desc by title", () => {
        expect(
          Post.sortByTitle(mockPostList, "desc").map((v) => v.id)
        ).toStrictEqual([3, 4, 1, 2]);
      });
    });
  });
});

const mockPostList: Post[] = [
  {
    id: 1,
    userId: 1,
    title: "B",
    body: "I like chiken",
  },
  {
    id: 2,
    userId: 1,
    title: "A",
    body: "I like soccer",
  },
  {
    id: 3,
    userId: 1,
    title: "d",
    body: "I like Tokyo",
  },
  {
    id: 4,
    userId: 1,
    title: "C",
    body: "I like Japan",
  },
];
