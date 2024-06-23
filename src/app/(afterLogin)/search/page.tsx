import BackButton from "@/app/(afterLogin)/_component/BackButton";
import Post from "@/app/(afterLogin)/_component/Post";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Tab from "@/app/(afterLogin)/search/_component/Tab";

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};

export default function Search({ searchParams }: Props) {
  return (
    <main className="w-[600px] border-r border-l border-gray-200 flex flex-col items-stretch">
      <div className="bg-[rgba(255,255,255,0.85)] backdrop-blur-[12px] border-b border-gray-200 w-[600px] fixed">
        <div className="flex items-center">
          <div className="w-[56px]">
            <BackButton />
          </div>
          <div className="flex-1 h-[53px] w-[526px]">
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab />
      </div>
      <div className="mt-[110px]">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/*<SearchResult searchParams={searchParams} />*/}
      </div>
    </main>
  );
}
