import Slide from "react-reveal/Slide";
import Main_Theme from "../../components/Theme/Main_Theme";
import Detail_Banner from "../../components/Detail_Banner";
import Fade from "react-reveal/Fade";
import Images from "../../components/Images";
import Link from "next/link";
import Videos from "../../components/Videos";
import { IMAGE_BASE_URL, API_KEY, API_BASE_URL } from "./../../utils/Common";

export default function EpisodeDetails({ results, videos, images }) {
  return (
    <Main_Theme>
      {/* _________________ Banner _________________ */}
      <Detail_Banner results={results} />

      {/* _________________ Image Section _________________ */}

      <Images images={images.stills} name={results.name} />

      {/* _________________ Video Section _________________ */}

      {videos.results > 0 ? (
        <Videos videos={videos} name={results.name} />
      ) : null}

      {/* _________________ Crew & Casts Section _________________ */}
      <div className="mx-3 my-10 md:m-10 grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <div className="flex items-center justify-center">
            <Slide left>
              <h1 className="text-3xl text-center md:text-left text-white">
                Stars
              </h1>
            </Slide>
          </div>
          <div className="grid grid-cols-2 mt-5 max-h-[283px] overflow-y-scroll scrollbar-thin scrollbar-thumb-red-600">
            {results.guest_stars.map((star, index) => (
              <Fade key={index}>
                <div className="flex items-center m-1.5">
                  <img
                    className="w-10 h-10 rounded"
                    src={`${IMAGE_BASE_URL}${
                      star.profile_path || `wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`
                    }`}
                    alt=""
                  />
                  <Link href={`/person/${star.id}`}>
                    <div className="group truncate cursor-pointer mx-2">
                      <> {star.character}</>
                      <div className="text-xs text-gray-500 hidden group-hover:block">
                        ({star.name})
                      </div>
                    </div>
                  </Link>
                </div>
              </Fade>
            ))}
          </div>
        </div>

        <div className="">
          <div className="flex items-center justify-center">
            <Slide right>
              <h1 className="text-3xl text-center md:text-left text-white">
                Crew
              </h1>
            </Slide>
          </div>
          <div className="grid grid-cols-2 mt-5 max-h-[283px] overflow-y-scroll scrollbar-thin scrollbar-thumb-red-600">
            {results.crew.map((crew, index) => (
              <Fade key={index}>
                <div className="flex items-center  m-1.5">
                  <img
                    className="w-10 h-10 rounded"
                    src={`${IMAGE_BASE_URL}${
                      crew.profile_path || `${results.still_path} `
                    }`}
                    alt=""
                  />
                  <Link href={`/person/${crew.id}`}>
                    <div className="group truncate cursor-pointer mx-2">
                      <> {crew.name}</>
                      <div className="text-xs text-gray-500 hidden group-hover:block">
                        ({crew.job})
                      </div>
                    </div>
                  </Link>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </Main_Theme>
  );
}

export const getServerSideProps = async ({ query }) => {
  const results = await fetch(
    `${API_BASE_URL}/tv/${query.tv_id}/season/${query.season}/episode/${query.episode}?api_key=${API_KEY}`
  ).then((res) => res.json());
  const videos = await fetch(
    `${API_BASE_URL}/tv/${query.tv_id}/season/${query.season}/episode/${query.episode}/videos?api_key=${API_KEY}`
  ).then((res) => res.json());
  const images = await fetch(
    `${API_BASE_URL}/tv/${query.tv_id}/season/${query.season}/episode/${query.episode}/images?api_key=${API_KEY}`
  ).then((res) => res.json());
  return {
    props: {
      results,
      videos,
      images,
    },
  };
};
