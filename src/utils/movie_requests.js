import { API_KEY } from "./Common";

export default {
  Trending: {
    title: "Trending",
    url: `/trending/movie/week?api_key=${API_KEY}`,
  },

  TopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}`,
  },

  Action: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },

  Adventure: {
    title: "Adventure",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  },

  Animation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },

  Comedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  Crime: {
    title: "Crime",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  },
  Documentary: {
    title: "Documentary",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  Drama: {
    title: "Drama",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  },
  Family: {
    title: "Family",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  },
  Fantasy: {
    title: "Fantasy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  },
  History: {
    title: "History",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  },
  Horror: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },

  Music: {
    title: "Music",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  },
  Mystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },

  Romance: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },

  ScienceFiction: {
    title: "Science-Fiction",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  TVMovie: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },

  Thriller: {
    title: "Thriller",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  },

  War: {
    title: "War",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  },

  Western: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
};
