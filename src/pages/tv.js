import Main_Theme from "../components/Theme/Main_Theme";
import TV_Nav from "../components/TV/TV_Nav";
import tv_requests from "../utils/tv_requests";
import Results from "../components/Results";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import { API_BASE_URL } from "../utils/Common";

export default function TV_Home({ results }) {
  const { query } = useRouter();
  const [data, setData] = useState(results.results);
  const [CurrentPage, setCurrentPage] = useState(results.page);

  const LoadMoreData = async () => {
    const req = await fetch(
      `${API_BASE_URL}${
        tv_requests[query.query]?.url || tv_requests.Trending.url
      }&page=${CurrentPage + 1}`
    );

    const newData = await req.json();
    setData([...data, ...newData.results]);
    setCurrentPage(newData.page);
  };

  useEffect(() => {
    setData(results.results);
    setCurrentPage(results.page);
  }, [query]);

  return (
    <div>
      <Main_Theme>
        <TV_Nav />
        <InfiniteScroll
          dataLength={data.length}
          next={LoadMoreData}
          hasMore={CurrentPage !== results.total_pages}
          loader={
            <div className="flex items-center justify-center mb-3">
              <img src="/CubeLoader.svg" className="w-14 h-14" />
            </div>
          }
        >
          <Results results={data} type="tv" grid={3} />
        </InfiniteScroll>
      </Main_Theme>
    </div>
  );
}

export async function getServerSideProps(contex) {
  const query = contex.query.query;
  const request = await fetch(
    `${API_BASE_URL}${tv_requests[query]?.url || tv_requests.Trending.url}`
  ).then((res) => res.json());

  return {
    props: {
      results: request,
    },
  };
}
