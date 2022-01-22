import Thumbnail from "./Thumbnail";
import Slide from "react-reveal/Slide";

function Similar({ results, type }) {
  return (
    <div className="mx-3 my-10 md:m-10">
      <Slide left>
        <h1 className="text-3xl my-5 text-center md:text-left text-white">
          More Like This
        </h1>
      </Slide>
      <div className="md:my-10 sm:grid md:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
        {results.map((results) => (
          <Slide left key={results.id}>
            <Thumbnail results={results} type={type} />
          </Slide>
        ))}
      </div>
    </div>
  );
}

export default Similar;
