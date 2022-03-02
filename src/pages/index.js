import movie_requests from "../utils/movie_requests";
import Nav from "./../components/Nav";
import Main_Theme from "./../components/Theme/Main_Theme";
import Results from "./../components/Results";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import { API_BASE_URL } from "../utils/Common";
import IntroLoader from "../components/IntroLoader";
import { useSession } from "next-auth/react";

export default function Home({ results }) {
  const { query } = useRouter();
  const { status } = useSession();
  const [data, setData] = useState(results.results);
  const [CurrentPage, setCurrentPage] = useState();

  const LoadMoreData = async () => {
    const req = await fetch(
      `${API_BASE_URL}${
        movie_requests[query.genre]?.url || movie_requests.Trending.url
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

  if (status === "loading") {
    return <IntroLoader />;
  }
  return (
    <Main_Theme>
      <Nav />
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
        <Results results={data} type="movie" grid={3} />
      </InfiniteScroll>
    </Main_Theme>
  );
}

export async function getServerSideProps(contex) {
  const genre = contex.query.genre;
  const request = await fetch(
    `${API_BASE_URL}${
      movie_requests[genre]?.url || movie_requests.Trending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request,
    },
  };
}
