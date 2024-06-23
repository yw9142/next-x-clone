"use client";

import { usePathname } from "next/navigation";
import React from "react";

import SearchForm from "@/app/(afterLogin)/_component/SearchForm";

export default function RightSearchZone() {
  const pathname = usePathname();
  const onChangeFollow = () => {};
  const onChangeAll = () => {};

  if (pathname === "/explore") return null;

  if (pathname === "/search") {
    return (
      <div>
        <h5 className="bg-white p-3 text-[rgba(15,20,25,1)] text-xl font-extrabold mb-4 rounded-lg border border-gray-200 mt-3">
          Search filters
        </h5>
        <div className="p-0 px-4 pb-3 mb-4 rounded-lg border border-gray-200">
          <div>
            <label className="text-[15px] font-bold h-[36px] flex items-center">
              사용자
            </label>
            <div className="flex items-center mb-0">
              <div className="flex-1">모든 사용자</div>
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="custom-style1"
              >
                <input
                  type="radio"
                  name="pf"
                  defaultChecked
                  onChange={onChangeAll}
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/10 bg-gray-500/5 p-0 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-twitter-blue before:opacity-0 before:transition-opacity checked:border-twitter-blue checked:before:bg-twitter-blue hover:before:opacity-0"
                  id="custom-style1"
                />
                <span className="absolute transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-full h-full scale-105 fill-twitter-blue"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
            <div className="flex items-center">
              <div className="flex-1">내가 팔로우하는 사람들</div>
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="custom-style1"
              >
                <input
                  type="radio"
                  name="pf"
                  value="on"
                  onChange={onChangeFollow}
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/10 bg-gray-500/5 p-0 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-twitter-blue before:opacity-0 before:transition-opacity checked:border-twitter-blue checked:before:bg-twitter-blue hover:before:opacity-0"
                  id="custom-style1"
                />
                <span className="absolute transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-full h-full scale-105 fill-twitter-blue"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-inherit mb-[60px]">
      <SearchForm />
    </div>
  );
}
