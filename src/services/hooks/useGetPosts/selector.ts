import { PostList } from "../../models";
import { Post } from "../../../domain/post";

export const PostsTranslator = (data: PostList): Post[] =>
  data.map((data) => ({
    id: data.id,
    userId: data.userId,
    title: data.title,
    body: data.body,
  }));
