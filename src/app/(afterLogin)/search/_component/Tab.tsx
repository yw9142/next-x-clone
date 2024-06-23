"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Tab() {
  const [current, setCurrent] = useState("hot");
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClickHot = () => {
    setCurrent("hot");
    router.replace(`/search?q=${searchParams.get("q")}`);
  };

  const onClickNew = () => {
    setCurrent("new");
    router.replace(`/search?${searchParams.toString()}&f=live`);
  };

  return (
    <div className="fixed z-1 w-[598px] bg-[rgba(255,255,255,0.85)] backdrop-blur-[12px] border-b border-gray-200">
      <div className="flex h-[53px]">
        <div
          onClick={onClickHot}
          className="flex-1 flex items-center justify-center text-[15px] cursor-pointer relative"
        >
          인기
          <div
            className={`h-[4px] bg-[rgb(29,155,240)] min-w-[56px] w-[56px] absolute bottom-0 rounded-full ${current === "new" ? "hidden" : ""}`}
          ></div>
        </div>
        <div
          onClick={onClickNew}
          className="flex-1 flex items-center justify-center text-[15px] cursor-pointer relative"
        >
          최신
          <div
            className={`h-[4px] bg-[rgb(29,155,240)] min-w-[56px] w-[56px] absolute bottom-0 rounded-full ${current === "hot" ? "hidden" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
