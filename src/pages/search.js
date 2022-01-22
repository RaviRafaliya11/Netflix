import Main_Theme from "../components/Theme/Main_Theme";
import { useState, useEffect } from "react";
import Results from "../components/Results";
import { API_BASE_URL, API_KEY } from "../utils/Common";
import { HiSearch } from "react-icons/hi";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Search() {
  const [keywoard, setKeywoard] = useState("");
  const [data, setData] = useState();
  const [CurrentPage, setCurrentPage] = useState(0);
  const [TotalPage, setTotalPage] = useState();
  const [mediaType, setmediaType] = useState("movie");

  const handlesubmit = async (e) => {
    e.preventDefault();
    setmediaType("movie");
    setData();
    const req = await fetch(
      `${API_BASE_URL}/search/${mediaType}?api_key=${API_KEY}&query=${keywoard}`
    );
    const newData = await req.json();
    setData(newData.results);
    setCurrentPage(newData.page);
    setTotalPage(newData.total_pages);
  };

  const LoadMoreData = async () => {
    const req = await fetch(
      `${API_BASE_URL}/search/${mediaType}?api_key=${API_KEY}&query=${keywoard}&page=${
        CurrentPage + 1
      }`
    );
    const newData = await req.json();
    setData([...data, ...newData.results]);
    setCurrentPage(newData.page);
  };

  useEffect(() => {
    const filterdata = async () => {
      const req = await await fetch(
        `${API_BASE_URL}/search/${mediaType}?api_key=${API_KEY}&query=${keywoard}`
      );
      const newData = await req.json();
      setData(newData.results);
      setCurrentPage(newData.page);
      setTotalPage(newData.total_pages);
    };
    filterdata();
    console.log(data);
  }, [mediaType]);

  return (
    <Main_Theme>
      <div>
        <form onSubmit={handlesubmit}>
          <div className="flex max-w-3xl md:mx-auto mx-2">
            <input
              type="search"
              placeholder="Search for a movie, tv show, person....."
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
          <div className="flex flex-col">
            <div className="mt-5 mx-2 md:mx-8">
              <select
                onChange={(e) => setmediaType(e.target.value)}
                className="bg-transparent py-1 px-2 rounded-md border border-gray-700 border-solid focus:outline-none float-right"
              >
                <option className="bg-[#181818] border-0 " value="movie">
                  Movie
                </option>
                <option className="bg-[#181818] border-0 " value="tv">
                  Tv
                </option>
                <option className="bg-[#181818] border-0 " value="person">
                  People
                </option>
                <option className="bg-[#181818] border-0 " value="collection">
                  Collections
                </option>
                <option className="bg-[#181818] border-0 " value="company">
                  Companies
                </option>
              </select>
            </div>

            {/* Results */}
            <div>
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
                  <Results results={data} type={mediaType} grid={3} />
                </InfiniteScroll>
              ) : (
                <h1 className="text-3xl my-10 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-[#E50914]">
                  Opps! No Result Found.
                </h1>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </Main_Theme>
  );
}
