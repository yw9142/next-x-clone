"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article
      onClickCapture={onClick}
      className="flex flex-col p-4 border-b border-gray-200 transition-colors duration-200 cursor-pointer hover:bg-[rgba(0,0,0,0.03)]"
    >
      {children}
    </article>
  );
}
