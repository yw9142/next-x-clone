import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import zLogo from "../../../../public/zlogo.png";

export default function Main() {
  return (
    <Fragment>
      <div className="flex flex-1 justify-center items-center">
        {/* left */}
        <Image src={zLogo} alt="Logo" />
      </div>

      <div className="flex flex-1 flex-col justify-center">
        {/* right */}
        <h1 className="block text-6xl my-12 mx-0 font-bold">
          지금 일어나고 있는 일
        </h1>
        <h2 className="block text-3xl my-8 mx-0 font-bold">지금 가입하세요.</h2>
        <Link
          href="i/flow/signup"
          className="w-80 h-10 rounded-full px-0 py-4 text-base bg-twitter-blue hover:bg-signup-hover text-white border-none flex justify-center items-center"
        >
          {/* signup */}
          계정 만들기
        </Link>
        <h3 className="block text-lg mb-5 mt-10 mx-0 font-bold">
          이미 트위터에 가입하셨나요?
        </h3>
        <Link
          href="/login"
          className="w-80 h-10 rounded-full px-0 py-4 text-base text-twitter-blue hover:bg-login-hover border-solid border border-twitter-blue flex justify-center items-center"
        >
          {/* login */}
          로그인
        </Link>
      </div>
    </Fragment>
  );
}
