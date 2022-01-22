import Image from "next/image";
import Slide from "react-reveal/Slide";
import { HiOutlineThumbUp, HiOutlineStar, HiOutlineFire } from "react-icons/hi";
import { IMAGE_BASE_URL } from "../utils/Common";

function Detail_Banner({ results }) {
  return (
    <div className="relative">
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={`${IMAGE_BASE_URL}${
          results.backdrop_path ||
          results.poster_path ||
          results.still_path ||
          `wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`
        }`}
      />

      <div className="md:absolute top-0 left-0 m-5 md:m-0 bg-gradient-to-r from-[#181818] md:h-full md:w-full">
        <Slide left>
          <div className="sm:m-10 md:ml-16 md:mt-28 xl:mt-56 md:max-w-xl">
            {/* ____________________________ Name ____________________________ */}

            <h1 className="text-3xl text-white text-center md:text-left">
              {results.name || results.original_title || results.original_name}
            </h1>

            <div className="my-5 flex flex-wrap gap-y-3 justify-center md:justify-start divide-x divide-white text-sm">
              {/* ____________________________ Date ____________________________ */}

              <p className="pr-2">
                {results.release_date ||
                  results.first_air_date ||
                  results.air_date}
              </p>

              {/* ____________________________ Adult OR Not ____________________________ */}

              <p className="px-2">
                <span className="border border-solid border-white px-1 text-xs">
                  {" "}
                  {!results.adult ? "7+" : "18+"}
                </span>
              </p>

              {/* ____________________________ Adult OR Not ____________________________ */}

              <p className="px-2">
                {results.runtime ? (
                  // For Movie_____________Run Time
                  <span>
                    {Math.floor(results.runtime / 60)}h {results.runtime % 60}m
                  </span>
                ) : (
                  // For TV_____________
                  <span>
                    {results.number_of_seasons ? (
                      // Total Seasons
                      <>{results.number_of_seasons} Seasons</>
                    ) : (
                      // SEason Number
                      <>Season {results.season_number} </>
                    )}
                  </span>
                )}
              </p>

              {/* For TV_____________ */}
              {results.number_of_episodes && (
                <>
                  {" "}
                  {results.number_of_episodes ? (
                    // Total Episodes
                    <p className="px-2">
                      <span>{results.number_of_episodes} Episodes</span>
                    </p>
                  ) : (
                    // Episode Number
                    <p className="px-2">
                      <span>Episode {results.episode_number} </span>
                    </p>
                  )}
                </>
              )}

              {/* ____________________________ Genres ____________________________ */}

              {results.genres ? (
                <p className="px-2 flex ">
                  {results.genres.slice(-1).map(({ name }) => name)}
                </p>
              ) : null}
            </div>
            {/* ____________________________ Overview ____________________________ */}

            <div className="my-5 text-justify text-white max-h-[170px] overflow-y-scroll scrollbar-none">
              {results.overview}
            </div>

            {/* ____________________________ Languages ____________________________ */}

            {results.spoken_languages ? (
              <div className="my-5 flex">
                Languages:{" "}
                <p className="text-white mx-3">
                  {results.spoken_languages
                    .map(({ english_name }) => english_name)
                    .join(", ")}
                </p>
              </div>
            ) : null}

            {/* ____________________________ Status ____________________________ */}

            {results.status ? (
              <div className="my-5 flex">
                Status: <p className="text-white mx-3 ">{results.status}</p>
              </div>
            ) : null}

            {/* ____________________________ Creators ____________________________ */}

            {results.created_by ? (
              <div className="my-5 flex">
                Creators:{" "}
                <p className="text-white mx-3 ">
                  {results.created_by.map(({ name }) => name).join(", ")}
                </p>
              </div>
            ) : null}

            {/* ____________________________ Votes And Popularities ____________________________ */}

            <div className="my-5 flex">
              {results.vote_count && (
                <>
                  <HiOutlineThumbUp className="h-5 mx-2" />
                  {results.vote_count}
                </>
              )}

              {results.vote_average && (
                <>
                  {" "}
                  <HiOutlineStar className="h-5 mx-2" />
                  {(Math.round(results.vote_average * 100) / 100).toFixed(1)}
                </>
              )}

              {results.popularity && (
                <>
                  <HiOutlineFire className="h-5 mx-2" />
                  {(Math.round(results.popularity * 100) / 100).toFixed(1)}
                </>
              )}
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Detail_Banner;
