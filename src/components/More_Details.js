import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Link from "next/link";

function More_Details({ results, credits }) {
  return (
    <div className="mx-3 my-10 md:m-10">
      <Slide left>
        <h1 className="text-3xl my-5 text-center md:text-left text-white">
          More Details
        </h1>
      </Slide>
      <div
        className="sm:grid md:grid-cols-2 xl:grid-cols-3 
        3xl:flex flex-wrap justify-center"
      >
        <Bounce top>
          <div className="my-5">
            <p className="text-white">Genres</p>
            <p className="text-sm my-1">
              {results.genres.map(({ name }) => name).join(" , ")}
            </p>
          </div>
        </Bounce>

        <Bounce top>
          <div className="my-5">
            <p className="text-white">Audio</p>
            <p className="text-sm my-1">
              {results.spoken_languages.map(({ name }) => name).join(" , ")}
            </p>
          </div>
        </Bounce>

        {results.belongs_to_collection && (
          <Bounce top>
            <div className="my-5">
              <p className="text-white">Collection</p>
              <p className="text-sm my-1">
                {results.belongs_to_collection.name}
              </p>
            </div>
          </Bounce>
        )}

        <Bounce top>
          <div className="my-5">
            <p className="text-white">Origin</p>
            <p className="text-sm my-1">
              {results.production_countries
                .map(({ iso_3166_1 }) => iso_3166_1)
                .join(" , ")}
            </p>
          </div>
        </Bounce>

        <Bounce top>
          <div className="my-5">
            <p className="text-white">Audio</p>
            <p className="text-sm my-1">
              {results.spoken_languages
                .map(({ english_name }) => english_name)
                .join(" , ")}
            </p>
          </div>
        </Bounce>

        <Bounce top>
          <div className="my-5">
            <p className="text-white">Cast</p>
            <p className="text-sm my-1 max-h-[80px] overflow-y-scroll scrollbar-none">
              {credits.cast.map(({ name, id }) => (
                <span className="hover:underline mr-1" key={id}>
                  <Link href={`/person/${id}`}>{name}</Link>,
                </span>
              ))}
            </p>
          </div>
        </Bounce>
      </div>
    </div>
  );
}

export default More_Details;
