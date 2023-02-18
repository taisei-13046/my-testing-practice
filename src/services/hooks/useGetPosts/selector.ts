import { PostList } from "../../models";
import { Post } from "../../../domain/post";
import { AxiosResponse } from "axios";

export const PostsTranslator = ({
  data,
}: AxiosResponse<PostList, any>): Post[] =>
  data.map((data) => ({
    id: data.id,
    userId: data.userId,
    title: data.title,
    body: data.body,
  }));
