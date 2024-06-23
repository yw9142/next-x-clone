"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function TweetModal() {
  const [content, setContent] = useState("");
  const router = useRouter();
  const imageRef = useRef<HTMLInputElement>(null);
  const onSubmit = () => {};

  const onClickClose = () => {
    router.back();
  };
  const onClickButton = () => {};
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const me = {
    id: "zerohch0",
    image: "/5Udwvqim.jpg",
  };

  return (
    <div className="fixed inset-0 flex justify-center bg-[rgba(0,0,0,0.4)] z-10">
      <div className="relative bg-white top-[5%] max-w-[80vw] min-w-[600px] max-h-[400px] rounded-[16px] flex flex-col">
        <button
          className="absolute left-2 top-2 w-8 h-8 rounded-full border-none cursor-pointer bg-white flex items-center justify-center hover:bg-[rgba(15,20,25,0.1)]"
          onClick={onClickClose}
        >
          <svg
            width={24}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
          >
            <g>
              <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
            </g>
          </svg>
        </button>
        <form className="flex flex-col flex-1" onSubmit={onSubmit}>
          <div className="flex flex-row flex-1 mt-14 px-4">
            <div className="mr-3 w-10">
              <div className="w-10 h-10 rounded-full">
                <img
                  src={me.image}
                  alt={me.id}
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
            <div className="flex-1 px-4">
              <textarea
                rows={1}
                className="w-full h-full border-none outline-none text-[20px]"
                placeholder="What is happening?"
                value={content}
                onChange={onChangeContent}
              />
            </div>
          </div>
          <div className="px-4">
            <div className="border-b border-gray-200" />
            <div className="flex items-center">
              <div className="flex-1">
                <input
                  type="file"
                  name="imageFiles"
                  multiple
                  hidden
                  ref={imageRef}
                />
                <button
                  className="w-8 h-8 border-none cursor-pointer rounded-full bg-[rgba(29,155,240,0.01)] transition-colors duration-200 flex items-center justify-center hover:bg-[rgba(29,155,240,0.1)]"
                  type="button"
                  onClick={onClickButton}
                >
                  <svg width={24} viewBox="0 0 24 24" aria-hidden="true">
                    <g>
                      <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                    </g>
                  </svg>
                </button>
              </div>
              <button
                className="w-24 h-9 cursor-pointer rounded-full border-none my-2 bg-[rgb(29,155,240)] text-white text-[17px] disabled:opacity-50"
                disabled={!content}
              >
                게시하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
