import Main_Theme from "../../components/Theme/Main_Theme";
import More_Details from "../../components/More_Details";
import Detail_Banner from "../../components/Detail_Banner";
import Similar from "../../components/Similar";
import Slide from "react-reveal/Slide";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SeasonEpiodes from "../../components/TV/SeasonEpiodes";
import Videos from "../../components/Videos";
import { API_BASE_URL, API_KEY } from "../../utils/Common";

export default function TV({
  tv_detail,
  videos,
  similar_shows,
  credits,
  episodes,
}) {
  const { query } = useRouter();
  const [seasonData, setSeasonData] = useState(episodes);
  const [id, setId] = useState();

  useEffect(() => {
    setId(tv_detail.id);
  }, [id]);
  const getnewdata = async (e) => {
    setSeasonData([]);
    setId(tv_detail.id);
    await fetch(
      `${API_BASE_URL}/tv/${query.id}/season/${e.target.value}?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setSeasonData(result);
      });
  };
  const totalseason = [...Array(tv_detail.number_of_seasons)];

  return (
    <Main_Theme>
      <Detail_Banner results={tv_detail} />

      <div className="mx-3 my-10 md:m-10">
        <div className="text-center text-sm p-3 border-solid border-t border-b capitalize border-gray-500">
          {tv_detail.next_episode_to_air ? (
            <div>
              <p className="my-1 text-white text-lg">
                {" "}
                Season {
                  tv_detail.next_episode_to_air.season_number
                } Episode {tv_detail.next_episode_to_air.episode_number} Coming
                On {tv_detail.next_episode_to_air.air_date}
              </p>
              <p className="my-1">{tv_detail.next_episode_to_air.overview}</p>
            </div>
          ) : (
            <p className="my-1">{tv_detail.tagline}</p>
          )}
        </div>
      </div>

      {videos.length > 0 ? (
        <Videos
          videos={videos}
          name={tv_detail.name || tv_detail.original_name}
        />
      ) : null}

      <div className="mx-3 my-10 md:m-10 p-2 ">
        <Slide left>
          <h1 className="text-3xl my-5 text-center md:text-left text-white flex items-center">
            Episodes |
            <span className="text-base text-gray-300 ml-2">
              {tv_detail.name}
            </span>
          </h1>
        </Slide>

        <>
          <div className="flex items-center space-x-2">
            <div className="text-base text-gray-300">
              <select
                onChange={(e) => getnewdata(e)}
                className="bg-transparent py-1 px-2 rounded-md border border-gray-700 border-solid focus:outline-none scrollbar-none"
              >
                {totalseason.map((season, index) => (
                  <option
                    key={index}
                    value={index + 1}
                    className="bg-[#181818] border-0 "
                  >
                    Season {index + 1}
                  </option>
                ))}
              </select>
            </div>

            <div>
              {id !== tv_detail.id ? (
                <> {episodes?.episodes?.length} Episodes</>
              ) : (
                <> {seasonData?.episodes?.length} Episodes</>
              )}
            </div>
          </div>

          <p className="mt-5 text-white text-lg">
            Release year:
            {id !== tv_detail.id ? (
              <> {episodes?.air_date?.split(/-/)[0]}</>
            ) : (
              <> {seasonData?.air_date?.split(/-/)[0]}</>
            )}
          </p>
          <p className="text-gray-500 max-w-xl text-sm">
            {id !== tv_detail.id ? (
              <> {episodes?.overview}</>
            ) : (
              <> {seasonData?.overview}</>
            )}
          </p>
        </>

        <div
          className="my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
   3xl:flex flex-wrap justify-center"
        >
          {id !== tv_detail.id ? (
            <>
              {episodes?.episodes?.map((episode, index) => (
                <SeasonEpiodes
                  key={index}
                  results={episode}
                  name={tv_detail.name || tv_detail.original_name}
                  tv_id={tv_detail.id}
                />
              ))}
            </>
          ) : (
            <>
              {seasonData?.episodes?.map((episode, index) => (
                <SeasonEpiodes
                  key={index}
                  results={episode}
                  name={tv_detail.name || tv_detail.original_name}
                  tv_id={tv_detail.id}
                />
              ))}
            </>
          )}
        </div>
      </div>

      <More_Details results={tv_detail} credits={credits} />

      {similar_shows.results.splice(8) ? (
        <Similar results={similar_shows.results} type="tv" />
      ) : (
        false
      )}
    </Main_Theme>
  );
}

export const getServerSideProps = async ({ params }) => {
  const tv_detail = await fetch(
    `${API_BASE_URL}/tv/${params.id}?api_key=${API_KEY}`
  ).then((res) => res.json());
  const videos = await fetch(
    `${API_BASE_URL}/tv/${params.id}/videos?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());
  const similar_shows = await fetch(
    `${API_BASE_URL}/tv/${params.id}/similar?api_key=${API_KEY}`
  ).then((res) => res.json());
  const credits = await fetch(
    `${API_BASE_URL}/tv/${params.id}/credits?api_key=${API_KEY}`
  ).then((res) => res.json());
  const episodes = await fetch(
    `${API_BASE_URL}/tv/${params.id}/season/${1}?api_key=${API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      tv_detail,
      videos,
      similar_shows,
      credits,
      episodes,
    },
  };
};
