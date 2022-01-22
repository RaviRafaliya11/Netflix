import Main_Theme from "../../components/Theme/Main_Theme";
import Image from "next/image";
import Results from "../../components/Results";
import Slide from "react-reveal/Slide";
import { API_KEY, IMAGE_BASE_URL, API_BASE_URL } from "../../utils/Common";
import { useState } from "react";

export default function CharacterProfile({
  person_detail,
  movie_credits,
  tv_credits,
}) {
  let currentyear = new Date().getFullYear();
  const [showResult, setShowResult] = useState("Movie");

  return (
    <Main_Theme>
      <div className="mx-3 my-10 md:m-10 p-2 ">
        <div className="flex flex-wrap justify-around">
          <Image
            height={500}
            width={350}
            src={`${IMAGE_BASE_URL}${
              person_detail.profile_path || `wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`
            }`}
            alt=""
            className="rounded mx-5"
          />
          <div className="flex-grow m-5 md:mx-10 md:my-0 ">
            <h1 className="text-2xl md:text-3xl mb-5 text-white">
              {person_detail.name}
            </h1>

            {person_detail.biography && (
              <>
                <p className="text-white text-lg">Biography: </p>
                <p className="max-w-2xl text-sm text-gray-500 text-justify max-h-48 overflow-y-scroll scrollbar-thin scrollbar-thumb-red-600 pr-4 my-1.5">
                  {person_detail.biography}
                </p>
              </>
            )}

            <h1 className="text-xl md:text-2xl mt-8 mb-5 text-white">
              Personal Info
            </h1>

            <div className="grid grid-cols-2 gap-4">
              {person_detail.known_for_department && (
                <div>
                  <p> Known For </p>
                  <p className="text-gray-500 text-sm">
                    {person_detail.known_for_department}
                  </p>
                </div>
              )}

              {person_detail.popularity && (
                <div>
                  <p> Known Credits </p>
                  <p className="text-gray-500 text-sm">
                    {person_detail.popularity}
                  </p>
                </div>
              )}

              {person_detail.gender && (
                <div>
                  <p> Gender </p>
                  <p className="text-gray-500 text-sm">
                    {person_detail.gender === 1 ? "Female" : "Male"}
                  </p>
                </div>
              )}

              {person_detail.birthday && (
                <div>
                  <p>Birthday </p>
                  <p className="text-gray-500 text-sm">
                    {person_detail.birthday} (
                    {currentyear - person_detail?.birthday?.split(/-/)[0]} years
                    old)
                  </p>
                </div>
              )}

              {person_detail.place_of_birth && (
                <div>
                  <p>Place of Birth</p>
                  <p className="text-gray-500 text-sm">
                    {person_detail.place_of_birth}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <>
        <div className="mx-3 my-10 md:m-10 p-2 ">
          <Slide left>
            <h1 className="text-xl md:text-3xl my-5 text-center md:text-left text-white flex items-center">
              Movies & TV Shows |
              <span className="text-base text-gray-300 ml-2">
                <select
                  onChange={(e) => setShowResult(e.target.value)}
                  className="bg-transparent py-1 px-2 rounded-md border border-gray-700 border-solid focus:outline-none"
                >
                  <option className="bg-[#181818] border-0 " value="Movie">
                    Movie
                  </option>
                  <option className="bg-[#181818] border-0 " value="Tv">
                    Tv
                  </option>
                </select>
              </span>
            </h1>
          </Slide>
        </div>

        <div className="md:mx-5 -mt-8">
          {showResult == "Movie" ? (
            <>
              {movie_credits.cast.length > 0 ? (
                <>
                  <p className="text-center text-xl">
                    Total Movies : {movie_credits.cast.length}
                  </p>

                  <Results results={movie_credits.cast} type="movie" />
                </>
              ) : (
                <h1 className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-[#E50914]">
                  Opps! No Movies Found.
                </h1>
              )}
            </>
          ) : (
            <>
              {tv_credits.cast.length > 0 ? (
                <div>
                  <p className="text-center text-xl">
                    Total Tv Shows : {tv_credits.cast.length}
                  </p>
                  <Results results={tv_credits.cast} type="tv" />
                </div>
              ) : (
                <h1 className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-[#E50914]">
                  Opps! No Tv Show Found.
                </h1>
              )}
            </>
          )}
        </div>
      </>
    </Main_Theme>
  );
}

export const getServerSideProps = async ({ params }) => {
  const person_detail = await fetch(
    `${API_BASE_URL}/person/${params.id}?api_key=${API_KEY}`
  ).then((res) => res.json());
  const movie_credits = await fetch(
    `${API_BASE_URL}/person/${params.id}/movie_credits?api_key=${API_KEY}`
  ).then((res) => res.json());

  if (movie_credits.cast.length > 0) {
    movie_credits.cast.sort((a, b) => b.vote_count - a.vote_count);
  }
  const tv_credits = await fetch(
    `${API_BASE_URL}/person/${params.id}/tv_credits?api_key=${API_KEY}`
  ).then((res) => res.json());
  if (tv_credits.cast.length > 0) {
    tv_credits.cast.sort((a, b) => b.vote_count - a.vote_count);
  }
  return {
    props: {
      person_detail,
      movie_credits,
      tv_credits,
    },
  };
};
