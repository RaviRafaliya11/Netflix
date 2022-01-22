import Slide from "react-reveal/Slide";
import Link from "next/link";
import { IMAGE_BASE_URL } from "./../../utils/Common";
import Image from "next/image";

export default function Collection({ collection }) {
  return (
    <div className="mx-3 my-10 md:m-10 p-2 ">
      <Slide left>
        <h1 className="text-3xl my-5 text-center md:text-left text-white">
          Collection
        </h1>
      </Slide>

      <Link href={`/collection/${collection.id}`}>
        <div className="md:w-[450px] my-3 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
          <Image
            layout="responsive"
            height={1080}
            width={1920}
            src={
              `${IMAGE_BASE_URL}${
                collection.backdrop_path || collection.poster_path
              }` || `${IMAGE_BASE_URL}${collection.poster_path}`
            }
          />
          <br />
          <h2
            className="mt-1 text-lg md:text-xl text-center xl:text-left transition-all duration-100 ease-in-out 
                group-hover:font-semibold"
          >
            {collection.name}
          </h2>
        </div>
      </Link>
    </div>
  );
}
