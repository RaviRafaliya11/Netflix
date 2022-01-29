import { API_KEY } from "./Common";

export default {
  Trending: {
    title: "Trending",
    url: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  },
  TopRated: {
    title: "Top Rated",
    url: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  Popular: {
    title: "Popular",
    url: `/tv/popular?api_key=${API_KEY}&language=en-US`,
  },
  ActionAdventure: {
    title: "Action & Adventure",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  },

  Animation: {
    title: "Animation",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  },
  Comedy: {
    title: "Comedy",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  },
  Crime: {
    title: "Crime",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  },
  Documentary: {
    title: "Documentary",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  },
  Drama: {
    title: "Drama",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  },
  Family: {
    title: "Family",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
  },
  Kids: {
    title: "Kids",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  },
  Mystery: {
    title: "Mystery",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  },
  News: {
    title: "News",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10763`,
  },
  Reality: {
    title: "Reality",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  },
  SciFiFantasy: {
    title: "Sci-Fi & Fantasy",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  },
  Soap: {
    title: "Soap",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10766`,
  },
  Talk: {
    title: "Talk",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10767`,
  },
  WarPolitics: {
    title: "War & Politics",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
  },
  Western: {
    title: "Western",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
  },
};
