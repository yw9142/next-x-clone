"use client";

import { useState } from "react";

export default function Tab() {
  const [tab, setTab] = useState("rec");

  const onClickRec = () => {
    setTab("rec");
  };
  const onClickFol = () => {
    setTab("fol");
  };

  return (
    <div className="fixed z-10 w-[598px] bg-[rgba(255,255,255,0.85)] backdrop-blur-[12px] border-b border-gray-200 dark:bg-[rgba(0,0,0,0.65)] dark:border-gray-700">
      <div className="h-[53px] flex">
        <div
          onClick={onClickRec}
          className="flex-1 flex items-center justify-center text-[15px] cursor-pointer relative"
        >
          추천
          <div
            className={`h-[4px] bg-[rgb(29,155,240)] w-[56px] absolute bottom-0 rounded-full ${tab === "fol" ? "hidden" : ""}`}
          ></div>
        </div>
        <div
          onClick={onClickFol}
          className="flex-1 flex items-center justify-center text-[15px] cursor-pointer relative"
        >
          팔로우 중
          <div
            className={`h-[4px] bg-[rgb(29,155,240)] w-[56px] absolute bottom-0 rounded-full ${tab === "rec" ? "hidden" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
