"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "zerohch0",
    nickname: "제로초",
    image: "/5Udwvqim.jpg",
  };

  const router = useRouter();
  const onLogout = () => {
    router.replace("/");
  };

  return (
    <button
      className="w-[258px] h-[66px] p-[12px] flex my-[12px] cursor-pointer border-none items-center bg-white text-left hover:bg-[rgba(15,20,25,0.1)] hover:rounded-[33px]"
      onClick={onLogout}
    >
      <div className="flex items-center">
        <img src={me.image} alt={me.id} className="w-[40px] rounded-full" />
      </div>
      <div className="ml-[12px]">
        <div className="font-bold">
          {/*{me.nickname}*/}
          로그아웃
        </div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
