"use client";

import Link from "next/link";
import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";

export default function PostForm() {
  const imageRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState("");
  const me = {
    id: "zerohch0",
    image: "/5Udwvqim.jpg",
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const onClickButton = () => {
    imageRef.current?.click();
  };

  return (
    <form
      className="mt-[70px] flex p-4 pb-2 border-b border-gray-200 dark:border-gray-700"
      onSubmit={onSubmit}
    >
      <div className="mr-3 w-10">
        <Link href={`/${me?.id}`}>
          <div className="w-10 h-10 rounded-full">
            <img
              src={me.image}
              alt={me.id}
              className="w-10 h-10 rounded-full"
            />
          </div>
        </Link>
      </div>
      <div className="flex-1">
        <textarea
          value={content}
          onChange={onChange}
          placeholder="What is happening?"
          className="w-full border-none p-3 text-xl leading-6 outline-none"
        />
        <div className="w-full">
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
                className="w-9 h-9 border-none cursor-pointer rounded-full transition duration-200 bg-[rgba(29,155,240,0.01)] flex items-center justify-center hover:bg-[rgba(29,155,240,0.1)]"
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
              className="w-24 h-9 border-none text-white font-bold text-sm rounded-full bg-[rgb(29,155,240)] hover:bg-[rgb(26,140,216)] disabled:opacity-50"
              disabled={!content}
            >
              게시하기
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
