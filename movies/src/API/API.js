import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
} from "../config/config";
import axios from "axios";

const api = axios.create({
  baseURL: POPULAR_BASE_URL,
});


const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await api.get(endpoint)).data;
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await api.get(endpoint)).data;
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await api.get(creditsEndpoint)).data;
  },

  getRequestToken: async () => {
    const reqToken = await (await api.get(REQUEST_TOKEN_URL)).data;
    return reqToken.request_token;
  },

  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await api.post(endpoint, {
        body: JSON.stringify({ value }),
      })
    ).data;

    return rating;
  },
};

export default apiSettings;
