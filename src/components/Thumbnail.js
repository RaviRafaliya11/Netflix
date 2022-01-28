import Image from "next/image";
import { HiOutlineThumbUp, HiOutlineStar } from "react-icons/hi";
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

        <p className="flex items-center opacity-0 group-hover:opacity-100 text-transform: capitalize ">
          {results.media_type ? `${results.media_type} • ` : `${type} •`}{" "}
          <HiOutlineStar className="h-5 mx-2" />
          {(Math.round(results.vote_average * 100) / 100).toFixed(1)} •{" "}
          <HiOutlineThumbUp className="h-5 mx-2" />
          {results.vote_count}
        </p>
      </div>
    </div>
  );
};

Thumbnail.displayName = "Thumbnail";
export default Thumbnail;
