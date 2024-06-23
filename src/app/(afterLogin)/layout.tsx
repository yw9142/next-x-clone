import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import FollowRecommend from "@/app/(afterLogin)/_component/FollowRecommend";
import LogoutButton from "@/app/(afterLogin)/_component/LogoutButton";
import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import RightSearchZone from "@/app/(afterLogin)/_component/RightSearchZone";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection";

import ZLogo from "../../../public/zlogo.png";

export default function AfterLoginLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className="flex items-stretch bg-white">
      <header className="flex flex-col items-end flex-grow">
        <section className="w-[275px] h-screen">
          <div className="fixed w-inherit h-screen flex flex-col">
            <Link className="inline-block h-14 mt-1" href="/home">
              <div className="w-12 h-12 rounded-full flex justify-center items-center hover:bg-[rgba(15,20,25,0.1)]">
                <Image src={ZLogo} alt="z.com 로고" width={40} height={40} />
              </div>
            </Link>
            <nav className="flex-1">
              <ul className="list-none">
                <NavMenu />
              </ul>
              <Link
                href="/compose/tweet"
                className="my-4 flex justify-center items-center h-14 shadow-lg bg-blue-500 w-[234px] border-none text-white font-bold text-lg rounded-full hover:bg-blue-600"
              >
                Post
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className="flex flex-col items-start h-screen flex-grow">
        <div className="h-full w-[990px] flex justify-between">
          <main className="w-[600px] h-[200dvh] border-x-1 border-gray-200">
            {children}
          </main>
          <section className="w-[350px] h-full">
            <RightSearchZone />
            <TrendSection />
            <div className="text-xl font-bold bg-gray-50 rounded-lg my-3 p-4">
              <h3 className="pb-3 text-2xl font-bold leading-tight text-gray-900">
                Who to follow
              </h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
