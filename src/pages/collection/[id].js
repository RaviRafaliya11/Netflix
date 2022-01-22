import React from "react";
import Main_Theme from "../../components/Theme/Main_Theme";
import { API_KEY, API_BASE_URL } from "../../utils/Common";
import Results from "../../components/Results";

export default function Collection({ collection }) {
  return (
    <Main_Theme>
      <div className="m-5">
        <h1 className="text-2xl md:text-3xl my-2 font-semibold text-white">
          {collection.name}
        </h1>
        <h4 className="text-sm md:text-lg">{collection.overview}</h4>
      </div>
      <Results results={collection.parts} type="movie" grid={3} />
    </Main_Theme>
  );
}

export const getServerSideProps = async ({ params }) => {
  const collection = await fetch(
    `${API_BASE_URL}/collection/${params.id}?api_key=${API_KEY}`
  ).then((res) => res.json());
  return {
    props: {
      collection,
    },
  };
};
