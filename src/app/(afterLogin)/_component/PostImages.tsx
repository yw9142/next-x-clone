import cx from "classnames";
import Link from "next/link";

type Props = {
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

export default function PostImages({ post }: Props) {
  if (!post.Images) return null;
  if (!post.Images.length) return null;
  if (post.Images.length === 1) {
    return (
      <Link
        href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
        className="block mt-3 w-full rounded-2xl bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${post.Images[0]?.link})` }}
      >
        <img
          src={post.Images[0]?.link}
          alt=""
          className="rounded-2xl max-h-[510px] w-full"
        />
      </Link>
    );
  }
  if (post.Images.length === 2) {
    return (
      <div className="flex mt-3 h-[272px] gap-1">
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className="flex-1 bg-cover rounded-l-2xl"
          style={{ backgroundImage: `url(${post.Images[0]?.link})` }}
        />
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          className="flex-1 bg-cover rounded-r-2xl"
          style={{ backgroundImage: `url(${post.Images[1]?.link})` }}
        />
      </div>
    );
  }
  if (post.Images.length === 3) {
    return (
      <div className="flex mt-3 h-[272px] gap-1">
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className="flex-1 bg-cover rounded-l-2xl"
          style={{ backgroundImage: `url(${post.Images[0]?.link})` }}
        />
        <div className="flex flex-col flex-1 gap-1">
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
            className="flex-1 bg-cover rounded-tr-2xl"
            style={{ backgroundImage: `url(${post.Images[1]?.link})` }}
          />
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
            className="flex-1 bg-cover rounded-br-2xl"
            style={{ backgroundImage: `url(${post.Images[2]?.link})` }}
          />
        </div>
      </div>
    );
  }
  if (post.Images.length === 4) {
    return (
      <div className="grid grid-cols-2 grid-rows-2 mt-3 h-[272px] gap-1">
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className="bg-cover rounded-tl-2xl"
          style={{ backgroundImage: `url(${post.Images[0]?.link})` }}
        />
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          className="bg-cover rounded-tr-2xl"
          style={{ backgroundImage: `url(${post.Images[1]?.link})` }}
        />
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
          className="bg-cover rounded-bl-2xl"
          style={{ backgroundImage: `url(${post.Images[2]?.link})` }}
        />
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}`}
          className="bg-cover rounded-br-2xl"
          style={{ backgroundImage: `url(${post.Images[3]?.link})` }}
        />
      </div>
    );
  }
  return null;
}
