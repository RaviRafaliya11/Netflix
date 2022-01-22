import Thumbnail from "./Thumbnail";
import Fade from "react-reveal/Fade";

function Results({ results, type, grid }) {
  return (
    <div
      className={`md:px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-${grid || 4}
        3xl:flex flex-wrap justify-center`}
    >
      {results.map((results) => (
        <Fade key={results.id}>
          <Thumbnail results={results} type={type} />
        </Fade>
      ))}
    </div>
  );
}

export default Results;
