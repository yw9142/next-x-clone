"use client";

export default function FollowRecommend() {
  const onFollow = () => {};

  const user = {
    id: "elonmusk",
    nickname: "Elon Musk",
    image: "/5Udwvqim.jpg",
  };

  return (
    <div className="flex h-[66px] py-[12px]">
      <div className="flex items-center">
        <div className="w-[40px] h-[40px] mr-[12px]">
          <img
            src={user.image}
            alt={user.id}
            className="w-[40px] h-[40px] rounded-full"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="text-[15px] font-bold leading-[20px]">
          {user.nickname}
        </div>
        <div className="text-[13px] text-[rgb(83,100,113)] leading-[16px]">
          @{user.id}
        </div>
      </div>
      <div className="w-[76px]">
        <button
          onClick={onFollow}
          className="w-full h-[32px] bg-black text-white text-[14px] font-bold rounded-[16px] border-none cursor-pointer hover:bg-[rgb(39,44,48)]"
        >
          팔로우
        </button>
      </div>
    </div>
  );
}
