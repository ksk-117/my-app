"use client";
import Link from "next/link";
import type { Post } from "@/app/_types/Post";

type Props = {
  post: Post;
};

const PostSummary: React.FC<Props> = (props) => {
  const { post } = props;
  return (
    <div className="relative border border-slate-400 p-3">
      <div className="text-sm text-gray-500">
        {new Date(post.createdAt).toLocaleDateString()}
      </div>
      <Link href={`/posts/${post.id}`}>
        <div className="mb-1 text-lg font-bold">{post.title}</div>
        <div
          className="line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Link>
      <div className="absolute right-3 top-3 flex space-x-2">
        {post.categories.map((category) => (
          <span
            key={category.id}
            className="rounded border border-gray-200 px-1 py-0.5 text-xs text-gray-500"
          >
            {category.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostSummary;