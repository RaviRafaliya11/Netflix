import { HiOutlineThumbUp, HiOutlineStar } from "react-icons/hi";
import Link from "next/link";
import { IMAGE_BASE_URL } from "./../../utils/Common";

export default function SeasonEpiodes({ results, name, tv_id }) {
  return (
    <div
      className=" p-2 group cursor-pointer
        transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Link
        href={{
          pathname: `/tv/episode/${name.split(" ").join("")}`,
          query: {
            tv_id: `${tv_id}`,
            season: `${results.season_number}`,
            episode: `${results.episode_number}`,
          },
        }}
      >
        <img src={`${IMAGE_BASE_URL}${results.still_path}`} alt="" />
      </Link>

      <div className="p-2">
        <p className="truncate max-w-md text-sm md:text-base">
          {results.overview}
        </p>

        <h2
          className="mt-1 text-lg md:text-2xl text-white transition-all duration-100 ease-in-out 
            group-hover:font-bold truncate"
        >
          {results.episode_number && `${results.episode_number}. `}{" "}
          {results.name}
        </h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100 text-transform: capitalize ">
          <HiOutlineStar className="h-5 mr-2" />
          {(Math.round(results.vote_average * 100) / 100).toFixed(1)} •{" "}
          <HiOutlineThumbUp className="h-5 mx-2" />
          {results.vote_count}
        </p>
      </div>
    </div>
  );
}
