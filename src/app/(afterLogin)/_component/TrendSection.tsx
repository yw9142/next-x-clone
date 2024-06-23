"use client";

import { usePathname } from "next/navigation";

import Trend from "@/app/(afterLogin)/_component/Trend";

export default function TrendSection() {
  const pathname = usePathname();

  if (pathname === "/explore") return null;

  return (
    <div className="bg-[#f7f9f9] rounded-[16px] mt-[12px]">
      <div className="text-[20px] font-bold py-[12px]">
        <h3 className="mb-[12px] px-[16px] text-2xl font-bold leading-tight text-gray-900">
          Trends for you
        </h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
