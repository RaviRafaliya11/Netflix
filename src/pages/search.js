import Main_Theme from "../components/Theme/Main_Theme";
import { useState, useEffect } from "react";
import Results from "../components/Results";
import { API_BASE_URL, API_KEY } from "../utils/Common";
import { HiSearch } from "react-icons/hi";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";

export default function Search({ results }) {
  const router = useRouter();
  const [keyword, setKeyword] = useState(router.query.q);
  const [data, setData] = useState();
  const [CurrentPage, setCurrentPage] = useState();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    router.push(
      `/search?q=${keyword.trim()}&type=${router.query.type || "movie"}`
    );
  };

  const LoadMoreData = async () => {
    const req = await fetch(
      `${API_BASE_URL}/search/${router.query.type}?api_key=${API_KEY}&query=${
        router.query.q
      }&page=${CurrentPage + 1}`
    );
    const newData = await req.json();
    setData([...data, ...newData.results]);
    setCurrentPage(newData.page);
  };

  useEffect(() => {
    setData(results?.results);
    setCurrentPage(results?.page);
  }, [router.query.type, router.query.q]);

  return (
    <Main_Theme>
      <div>
        <form onSubmit={handlesubmit}>
          <div className="flex max-w-3xl md:mx-auto mx-2">
            <input
              type="search"
              placeholder="Search for a movie, tv show, person....."
              className=" bg-white opacity-80 outline-none w-full p-3 rounded-l-lg shadow-2xl text-black"
              onChange={(e) => setKeyword(e.target.value)}
              defaultValue={keyword}
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
            <div className="mt-5 mx-2 gap-5 md:mx-8 flex items-center justify-between">
              {results?.total_results > 0 && (
                <p>About {results?.total_results} results</p>
              )}
              <select
                defaultValue={router.query.type || "movie"}
                onChange={(e) =>
                  router.push(`/search?q=${keyword}&type=${e.target.value}`)
                }
                className="bg-transparent ml-auto py-1 px-2 rounded-md border border-gray-700 border-solid focus:outline-none float-right"
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
                  hasMore={CurrentPage !== results?.total_pages}
                  loader={
                    <div className="flex items-center justify-center mb-3">
                      <img src="/CubeLoader.svg" className="w-14 h-14" />
                    </div>
                  }
                >
                  <Results
                    results={data}
                    type={router.query.type || "movie"}
                    grid={router.query.type == "person" ? 4 : 3}
                  />
                </InfiniteScroll>
              ) : (
                <div className="text-3xl my-10 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-[#E50914] capitalize">
                  ({data.length}) {router.query.type} Results
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </Main_Theme>
  );
}

export async function getServerSideProps(contex) {
  if (!contex.query.q) return { props: {} };
  const data = await fetch(
    `${API_BASE_URL}/search/${
      contex.query.type || "movie"
    }?api_key=${API_KEY}&query=${contex.query.q}`
  ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
