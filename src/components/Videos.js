import Slide from "react-reveal/Slide";
import MainCarousel from "./Carousel/MainCarousel";
import ReactPlayer from "react-player/youtube";

export default function Videos({ name, videos }) {
  return (
    <div className="mx-3 my-10 md:m-10 p-2 ">
      <Slide left>
        <h1 className="text-3xl my-5 text-center md:text-left text-white flex items-center">
          Videos |<span className="text-base text-gray-300 ml-2">{name}</span>
        </h1>
      </Slide>

      <div className="my-5">
        <MainCarousel>
          {videos.results.map((result) => (
            <ReactPlayer
              key={result.id}
              width="380px"
              height="250px"
              url={`https://www.youtube.com/watch?v=${result.key}`}
            />
          ))}
        </MainCarousel>
      </div>
    </div>
  );
}
