import { faker } from "@faker-js/faker";

import PhotoModalCloseButton from "@/app/(afterLogin)/@modal/(.)[username]/status/[id]/photo/[photoId]/_component/PhotoModalCloseButton";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import Post from "@/app/(afterLogin)/_component/Post";

export default function PhotoModal() {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text(),
    },
  };
  return (
    <div className="fixed inset-0 z-10 flex flex-row bg-[rgba(0,0,0,0.95)]">
      <PhotoModalCloseButton />
      <div className="flex flex-col flex-1">
        <img src={photo.link} alt={photo.Post?.content} className="hidden" />
        <div
          className="flex-1 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: `url(${photo.link})` }}
        />
        <div className="flex flex-row justify-center items-center">
          <div className="w-[600px] h-[60px]">
            <ActionButtons />
          </div>
        </div>
      </div>
      <div className="w-[350px] bg-white border-l border-gray-200 overflow-auto">
        <Post />
        <CommentForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
