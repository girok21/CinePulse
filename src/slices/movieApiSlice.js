import { MOVIE_URL, TRENDING_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const movieApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getNowPlayingMovies: builder.query({
            query: (page) => ({
                url: `${MOVIE_URL}/now_playing?page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        }),
        getPopularMovies: builder.query({
            query: (page) => ({
                url: `${MOVIE_URL}/popular?page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        }),
        getTopRatedMovies: builder.query({
            query: (page) => ({
                url: `${MOVIE_URL}/top_rated?page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        }),
        getUpcomingMovies: builder.query({
            query: (page) => ({
                url: `${MOVIE_URL}/upcoming?page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        }),
        getTrendingMovies: builder.query({
            query: (page) => ({
                url: `${TRENDING_URL}/movie/week?page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        }),
    })
});

export const {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetTrendingMoviesQuery,
} = movieApiSlice;