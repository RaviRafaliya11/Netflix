import Main_Theme from "../components/Theme/Main_Theme";
import Results from "../components/Results";
import { API_KEY, API_BASE_URL } from "../utils/Common";

export default function Upcoming({ upcomimg }) {
  return (
    <div>
      <Main_Theme>
        <div className="text-3xl my-5 mx-5">Upcoming Movies</div>
        <Results results={upcomimg} type="movie" />
      </Main_Theme>
    </div>
  );
}

export async function getServerSideProps() {
  const upcomimg = await fetch(
    `${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      upcomimg: upcomimg.results,
    },
  };
}
