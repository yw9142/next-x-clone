import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import PostArticle from "@/app/(afterLogin)/_component/PostArticle";

dayjs.locale("ko");
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean;
};

export default function Post({ noImage }: Props) {
  const target = {
    postId: 1,
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: "/5Udwvqim.jpg",
    },
    content: "클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ",
    createdAt: new Date(),
    Images: [] as any[],
  };

  if (Math.random() > 0.5 && !noImage) {
    target.Images.push({
      imageId: 1,
      link: faker.image.urlLoremFlickr(),
    });
  }

  return (
    <PostArticle post={target}>
      <div className="flex">
        <div className="mr-3 w-10">
          <Link
            href={`/${target.User.id}`}
            className="relative inline-block w-10 h-10 rounded-full"
          >
            <img
              src={target.User.image}
              alt={target.User.nickname}
              className="w-10 h-10 rounded-full"
            />
            <div className="absolute top-0 left-0 w-10 h-10 rounded-full hover:bg-[rgba(26,26,26,0.15)]" />
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex">
            <Link href={`/${target.User.id}`} className="hover:underline">
              <span className="font-bold">{target.User.nickname}</span>
              &nbsp;
              <span className="text-gray-500">@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className="text-gray-500 hover:underline">
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          {target.Images.length > 0 && (
            <Link
              href={`/${target.User.id}/status/${target.postId}/photo/${target.Images[0].imageId}`}
            >
              <img src={target.Images[0]?.link} alt="" />
            </Link>
          )}

          {/*(*/}
          {/*<div className="mt-3">*/}
          {/*     {target.Images.map((image, index) => (*/}
          {/*     <img*/}
          {/*     key={index}*/}
          {/*      src={image}*/}
          {/*      alt={`Image ${index + 1}`}*/}
          {/*     className="mt-3 w-full rounded-lg"*/}
          {/*    />*/}
          {/*       ))}    */}
          {/*</div>*/}
          {/*   )*/}

          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
