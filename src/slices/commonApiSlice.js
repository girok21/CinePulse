import { SEARCH_URL, MOVIE_URL, TV_URL } from "../constants";
import { apiSlice } from "./apiSlice";

const commonApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getMultiSearchResults: builder.query({
            query: ({page, searchString}) => ({
                url: `${SEARCH_URL}/multi?page=${page}&query=${searchString}&include_adult=false&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        }),
        getFindShowById: builder.query({
            query: ({type, id})=>({
                url: `${type==='movie'?MOVIE_URL:TV_URL}/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&append_to_response=videos` 
            }),
            keepUnusedDataFor: 5
        }),
        getSimilarShows: builder.query({
            query: ({id, media_type}) => ({
                url: `${media_type==='tv'?TV_URL : MOVIE_URL}/${id}/similar?page=1&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        }),
        getShowImages: builder.query({
            query: ({id, media_type}) => ({
                url: `${media_type==='tv'?TV_URL : MOVIE_URL}/${id}/images?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        }),
    })
});

export const {
    useGetMultiSearchResultsQuery,
    useGetFindShowByIdQuery,
    useGetSimilarShowsQuery,
    useGetShowImagesQuery
} = commonApiSlice;