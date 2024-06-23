import Link from "next/link";

export default function Trend() {
  return (
    <Link
      href={`/search?q=트렌드`}
      className="block p-[12px] px-[16px] h-[82px] hover:bg-[rgba(0,0,0,0.03)]"
    >
      <div className="text-[13px] text-[rgb(83,100,113)] leading-[16px] font-light">
        실시간트렌드
      </div>
      <div className="text-[15px] font-bold leading-[20px] mt-[2px] mb-[4px]">
        제로초
      </div>
      <div className="text-[13px] text-[rgb(83,100,113)] leading-[16px] font-light">
        1,234 posts
      </div>
    </Link>
  );
}
