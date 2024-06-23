import BackButton from "@/app/(afterLogin)/_component/BackButton";
import Post from "@/app/(afterLogin)/_component/Post";

export default function Profile() {
  const user = {
    id: "zerohch0",
    nickname: "제로초",
    image: "/5Udwvqim.jpg",
  };

  return (
    <main className="w-[600px] border-r border-l border-gray-200 flex flex-col items-stretch">
      <div className="flex h-[53px] items-center">
        <BackButton />
        <h3 className="text-lg font-bold ml-[30px]">{user.nickname}</h3>
      </div>
      <div className="flex items-center border-b border-gray-200 p-3.5">
        <div className="flex items-center mr-3 rounded-full">
          <img
            src={user.image}
            alt={user.id}
            className="w-[134px] rounded-full"
          />
        </div>
        <div className="flex-1 mx-3">
          <div className="font-bold text-lg">{user.nickname}</div>
          <div className="text-sm">@{user.id}</div>
        </div>
        <button className="border border-gray-300 px-4 rounded-full h-[34px] bg-black flex items-center justify-center text-sm text-white cursor-pointer hover:bg-gray-800">
          팔로우
        </button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
