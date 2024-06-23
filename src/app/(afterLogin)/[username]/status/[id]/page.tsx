import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import Post from "@/app/(afterLogin)/_component/Post";

export default function SinglePost() {
  return (
    <div className="w-[600px] border-x border-gray-200 flex flex-col items-stretch">
      <div className="fixed w-inherit flex h-[53px] items-center bg-[rgba(255,255,255,0.85)] backdrop-blur-[12px] z-10">
        <BackButton />
        <h3 className="ml-8 text-[20px] font-bold">게시하기</h3>
      </div>
      <div className="mt-14">
        <Post />
        <CommentForm />
      </div>

      <div>
        {/*<Post />*/}
        {/*<Post />*/}
        {/*<Post />*/}
        {/*<Post />*/}
        {/*<Post />*/}
        {/*<Post />*/}
        {/*<Post />*/}
        {/*<Post />*/}
        {/*<Post />*/}
      </div>
    </div>
  );
}
