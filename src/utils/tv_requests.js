import { API_KEY } from "./Common";

export default {
  fetchTrendingWeek: {
    title: "Trending",
    url: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchPopular: {
    title: "Popular",
    url: `/tv/popular?api_key=${API_KEY}&language=en-US`,
  },
  fetchAction: {
    title: "Action & Adventure",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  },

  fetchAnimation: {
    title: "Animation",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  },
  fetchComedy: {
    title: "Comedy",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  },
  fetchCrime: {
    title: "Crime",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  },
  fetchDocumentary: {
    title: "Documentary",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  },
  fetchDrama: {
    title: "Drama",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  },
  fetchFamily: {
    title: "Family",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
  },
  fetchKids: {
    title: "Kids",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchNews: {
    title: "News",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10763`,
  },
  fetchReality: {
    title: "Reality",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  },
  fetchSciFiFantasy: {
    title: "Sci-Fi & Fantasy",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  },
  fetchSoap: {
    title: "Soap",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10766`,
  },
  fetchTalk: {
    title: "Talk",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10767`,
  },
  fetchWarPolitics: {
    title: "War & Politics",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
  },
};
