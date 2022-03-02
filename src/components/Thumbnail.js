import Image from "next/image";
import {
  HiOutlineThumbUp,
  HiOutlineStar,
  HiOutlineCalendar,
} from "react-icons/hi";
import Link from "next/link";
import { IMAGE_BASE_URL } from "./../utils/Common";

const Thumbnail = ({ results, type }) => {
  return (
    <div
      className="p-2 group cursor-pointer
        transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Link href={`/${type}/${results.id}`}>
        <Image
          layout="responsive"
          src={`${IMAGE_BASE_URL}${
            results.backdrop_path ||
            results.poster_path ||
            results.profile_path ||
            `wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`
          }`}
          height={1080}
          width={1920}
        />
      </Link>

      <div className="p-2">
        <p className="truncate max-w-md text-sm md:text-base">
          {results.overview}
        </p>

        <h2
          className="mt-1 text-lg md:text-2xl text-white transition-all duration-100 ease-in-out 
            group-hover:font-bold truncate"
        >
          {results.name || results.title || results.original_name}
        </h2>

        <p className="flex items-center opacity-0 space-x-1.5  group-hover:opacity-100 text-transform: capitalize ">
          <span>
            {results.media_type ? `${results.media_type}` : `${type}`}
          </span>
          {results.vote_average && (
            <span className="flex items-center">
              •<HiOutlineStar className="h-5 ml-2 mr-1" />
              {(Math.round(results.vote_average * 100) / 100).toFixed(1)}
            </span>
          )}
          {results.vote_count && (
            <span className="flex items-center">
              •<HiOutlineThumbUp className="h-5 ml-2 mr-1" />
              {results.vote_count}
            </span>
          )}
          {results.release_date && (
            <span className="flex items-center">
              •<HiOutlineCalendar className="h-5 ml-2 mr-1" />
              {results.release_date.split("-")[0]}
            </span>
          )}
          {/* For TV */}
          {results.first_air_date && (
            <span className="flex items-center">
              •<HiOutlineCalendar className="h-5 ml-2 mr-1" />
              {results.first_air_date.split("-")[0]}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
