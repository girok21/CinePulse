import { MOVIE_URL, PERSON_URL, TV_URL } from "../constants";
import { apiSlice } from "./apiSlice";

const personApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        getShowCast: builder.query({
            query: ({id, type}) =>({
                url: `${type==="movie"? MOVIE_URL : TV_URL}/${id}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            }),
            keepUnusedDataFor: 5
        }),
        getPersonDetails: builder.query({
            query: (id)=>({
                url: `${PERSON_URL}/${id}?append_to_response=images%2Cmovie_credits%2Ctv_credits%2Ccombined_credits&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            })
        })
    })
})

export const {
    useGetShowCastQuery,
    useGetPersonDetailsQuery
} = personApiSlice;