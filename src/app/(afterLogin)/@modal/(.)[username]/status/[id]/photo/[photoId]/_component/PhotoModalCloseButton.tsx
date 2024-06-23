"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function PhotoModalCloseButton() {
  const router = useRouter();
  const onClick = () => {
    router.back(); // 뒤로가기
  };
  return (
    <button
      className="absolute left-4 top-4 w-8 h-8 rounded-full border-none cursor-pointer bg-[rgba(0,0,0,0.75)] flex items-center justify-center hover:bg-[rgba(25,25,25,0.75)]"
      onClick={onClick}
    >
      <svg
        width={24}
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="fill-white"
      >
        <g>
          <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
        </g>
      </svg>
    </button>
  );
}
