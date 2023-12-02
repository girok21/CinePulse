import { TV_URL, TRENDING_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const tvApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getAiringTodayShows: builder.query({
            query: (page) => ({
                url: `${TV_URL}/airing_today?page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        }),
        getPopularShows: builder.query({
            query: (page) => ({
                url: `${TV_URL}/popular?page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        }),
        getTopRatedShows: builder.query({
            query: (page) => ({
                url: `${TV_URL}/top_rated?page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        }),
        getOnTheAirShows: builder.query({
            query: (page) => ({
                url: `${TV_URL}/on_the_air?page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        }),
        getTrendingTvShow: builder.query({
            query: () => ({
                url: `${TRENDING_URL}/tv/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        })
    })
});

export const {
    useGetAiringTodayShowsQuery,
    useGetOnTheAirShowsQuery,
    useGetPopularShowsQuery,
    useGetTopRatedShowsQuery,
    useGetTrendingTvShowQuery
} = tvApiSlice;