"use client";

import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function SignupModal() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState<File>();

  const router = useRouter();
  const onClickClose = () => {
    router.back();
    // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };
  const onChangeNickname: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNickname(e.target.value);
  };
  const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.files && setImageFile(e.target.files[0]);
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    // fetch("http://localhost:9090/api/users", {
    //   method: "post",
    //   body: JSON.stringify({
    //     id,
    //     nickname,
    //     image,
    //     password,
    //   }),
    //   credentials: "include",
    // })
    //   .then((response: Response) => {
    //     console.log(response.status);
    //     if (response.status === 200) {
    //       router.replace("/home");
    //     }
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 dark:bg-opacity-40 dark:bg-gray-700">
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl flex flex-col w-full max-w-[80vw] min-w-[600px] h-[550px] sm:max-w-[600px] sm:w-[600px] sm:h-[550px]">
        <div className="p-9 pt-9 pb-5 text-2xl font-bold flex justify-between items-center">
          <button
            className="hover:bg-slate-400 w-9 h-9 rounded-full bg-white dark:bg-black flex items-center justify-center hover:bg-opacity-10 absolute left-4 top-4"
            onClick={onClickClose}
          >
            <svg
              width={24}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="fill-current text-black dark:text-white"
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
          <div className="flex-1 text-center">계정을 생성하세요.</div>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col flex-1">
          <div className="flex-1 px-4 sm:px-20">
            <div className="flex flex-col h-14 relative my-3">
              <label
                className="w-full absolute top-0 border border-gray-300 rounded text-sm h-14 p-2 text-gray-600 focus-within:text-red-500"
                htmlFor="id"
              >
                아이디
              </label>
              <input
                id="id"
                className="w-full border-none text-lg mt-4 p-3 outline-none"
                type="text"
                placeholder=""
                value={id}
                onChange={onChangeId}
              />
            </div>
            <div className="flex flex-col h-14 relative my-3">
              <label
                className="w-full absolute top-0 border border-gray-300 rounded text-sm h-14 p-2 text-gray-600 focus-within:text-red-500"
                htmlFor="name"
              >
                닉네임
              </label>
              <input
                id="name"
                className="w-full border-none text-lg mt-4 p-3 outline-none"
                type="text"
                placeholder=""
                value={nickname}
                onChange={onChangeNickname}
              />
            </div>
            <div className="flex flex-col h-14 relative my-3">
              <label
                className="w-full absolute top-0 border border-gray-300 rounded text-sm h-14 p-2 text-gray-600 focus-within:text-red-500"
                htmlFor="password"
              >
                비밀번호
              </label>
              <input
                id="password"
                className="w-full border-none text-lg mt-4 p-3 outline-none"
                type="password"
                placeholder=""
                value={password}
                onChange={onChangePassword}
              />
            </div>
            <div className="flex flex-col h-14 relative my-3">
              <label
                className="w-full absolute top-0 border border-gray-300 rounded text-sm h-14 p-2 text-gray-600 focus-within:text-red-500"
                htmlFor="image"
              >
                프로필
              </label>
              <input
                id="image"
                className="w-full border-none text-lg mt-4 p-3 outline-none"
                type="file"
                accept="image/*"
                onChange={onChangeImageFile}
              />
            </div>
          </div>
          <div className="px-4 py-6 sm:px-20">
            <button
              className="w-full h-12 rounded-full bg-gray-800 text-white text-lg cursor-pointer border-none hover:bg-gray-700 disabled:opacity-50"
              disabled
            >
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
