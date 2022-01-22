import Main_Theme from "../../components/Theme/Main_Theme";
import More_Details from "../../components/More_Details";
import Detail_Banner from "../../components/Detail_Banner";
import Similar from "../../components/Similar";
import Images from "../../components/Images";
import { API_KEY, API_BASE_URL } from "../../utils/Common";
import Collection from "../../components/Movie/Collection";
import Videos from "../../components/Videos";

const MovieDetail = ({
  detaildata,
  similarmovies,
  credits,
  images,
  videos,
}) => {
  return (
    <Main_Theme>
      <Detail_Banner results={detaildata} />

      <More_Details results={detaildata} credits={credits} />

      {images.backdrops.length > 0 ? (
        <Images
          images={images.backdrops}
          name={detaildata.original_title || detaildata.original_name}
        />
      ) : null}

      {/* Collection */}
      <>
        {detaildata.belongs_to_collection ? (
          <Collection collection={detaildata.belongs_to_collection} />
        ) : null}
      </>
      {videos.results > 0 ? (
        <Videos
          videos={videos}
          name={detaildata.original_title || detaildata.original_name}
        />
      ) : null}

      <Similar results={similarmovies.results} type="movie" />
    </Main_Theme>
  );
};

export default MovieDetail;

export const getServerSideProps = async ({ params }) => {
  const detaildata = await fetch(
    `${API_BASE_URL}/movie/${params.id}?api_key=${API_KEY}`
  ).then((res) => res.json());
  const similarmovies = await fetch(
    `${API_BASE_URL}/movie/${params.id}/similar?api_key=${API_KEY}`
  ).then((res) => res.json());
  const credits = await fetch(
    `${API_BASE_URL}/movie/${params.id}/credits?api_key=${API_KEY}`
  ).then((res) => res.json());
  const images = await fetch(
    `${API_BASE_URL}/movie/${params.id}/images?api_key=${API_KEY}`
  ).then((res) => res.json());
  const videos = await fetch(
    `${API_BASE_URL}/movie/${params.id}/videos?api_key=${API_KEY}`
  ).then((res) => res.json());
  return {
    props: {
      detaildata,
      similarmovies,
      credits,
      images,
      videos,
    },
  };
};
