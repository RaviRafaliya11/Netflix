import Image from "next/image";
import Slide from "react-reveal/Slide";
import MainCarousel from "./Carousel/MainCarousel";

export default function Images({ images, name }) {
  return (
    <div className="mx-3 my-10 md:m-10 p-2 ">
      <Slide left>
        <h1 className="text-3xl my-5 text-center md:text-left text-white flex items-center">
          Images |<span className="text-base text-gray-300 ml-2">{name}</span>
        </h1>
      </Slide>
      <div className="my-5">
        <MainCarousel>
          {images.map((images, index) => (
            <Image
              key={index}
              layout="intrinsic"
              height={250}
              width={380}
              src={`https://image.tmdb.org/t/p/original${images.file_path}`}
            />
          ))}
        </MainCarousel>
      </div>
    </div>
  );
}
