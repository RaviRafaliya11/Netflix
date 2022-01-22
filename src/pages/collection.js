import Main_Theme from "../components/Theme/Main_Theme";
import { useState } from "react";
import Results from "../components/Results";
import { API_BASE_URL, API_KEY } from "../utils/Common";
import { HiSearch } from "react-icons/hi";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Collection() {
  const [keywoard, setKeywoard] = useState("");
  const [data, setData] = useState();
  const [CurrentPage, setCurrentPage] = useState(0);
  const [TotalPage, setTotalPage] = useState();

  const handlesubmit = async (e) => {
    e.preventDefault();
    setData();
    const req = await fetch(
      `${API_BASE_URL}/search/collection?api_key=${API_KEY}&query=${keywoard}`
    );
    const newData = await req.json();
    setData(newData.results);
    setCurrentPage(newData.page);
    setTotalPage(newData.total_pages);
  };

  const LoadMoreData = async () => {
    const req = await fetch(
      `${API_BASE_URL}/search/collection?api_key=${API_KEY}&query=${keywoard}&page=${
        CurrentPage + 1
      }`
    );
    const newData = await req.json();
    setData([...data, ...newData.results]);
    setCurrentPage(newData.page);
  };
  return (
    <Main_Theme>
      <div className="m-5 md:m-6">
        <form onSubmit={handlesubmit}>
          <div className="flex max-w-3xl mx-auto">
            <input
              type="search"
              placeholder="Search Collections"
              className=" bg-white opacity-80 outline-none w-full p-3 rounded-l-lg shadow-2xl text-black"
              onChange={(e) => setKeywoard(e.target.value)}
            />

            {/* Button */}
            <div className="h-12 w-14 relative cursor-pointer">
              <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
              <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
                <div className="h-full w-full bg-white rounded-r-lg shadow-2xl flex items-center justify-center text-[#e50914]">
                  <HiSearch onClick={handlesubmit} className="w-7 h-7" />
                  <input type="submit" className="hidden" />
                </div>
              </div>
            </div>
          </div>
        </form>

        {data ? (
          <>
            {data.length > 0 ? (
              <InfiniteScroll
                dataLength={data.length}
                next={LoadMoreData}
                hasMore={CurrentPage !== TotalPage}
                loader={
                  <div className="flex items-center justify-center mb-3">
                    <img src="/CubeLoader.svg" className="w-14 h-14" />
                  </div>
                }
              >
                <Results results={data} type="collection" grid={3} />
              </InfiniteScroll>
            ) : (
              <h1 className="text-3xl my-10 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-[#E50914]">
                Opps! No Result Found.
              </h1>
            )}
          </>
        ) : null}
      </div>
    </Main_Theme>
  );
}
