import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Trend from "@/app/(afterLogin)/_component/Trend";

export default function Home() {
  return (
    <main className="w-[600px] border-gray-200 border-x flex flex-col items-stretch">
      <div className="pl-4 w-[566px] mb-15">
        <SearchForm />
      </div>
      <div className="mt-20 bg-gray-50 border-t border-gray-200 text-lg font-bold mb-3">
        <h3 className="block text-[1.17em] mt-4 mb-4 ml-0 mr-0 font-bold p-3">
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
    </main>
  );
}
