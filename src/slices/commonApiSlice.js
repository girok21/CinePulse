import { SEARCH_URL } from "../constants";
import { apiSlice } from "./apiSlice";

const commonApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getMultiSearchResults: builder.query({
            query: ({page, searchString}) => ({
                url: `${SEARCH_URL}/multi?page=${page}&query=${searchString}&include_adult=false&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        })
    })
});

export const {
    useGetMultiSearchResultsQuery
} = commonApiSlice;