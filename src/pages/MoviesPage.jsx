/* eslint-disable no-unused-vars */
import { Flex } from "@chakra-ui/react"
import ShowSection from "../components/carousel/ShowSection"
import HeroBanner from "../components/general/HeroBanner"
import { useGetNowPlayingMoviesQuery, 
        useGetPopularMoviesQuery, 
        useGetTopRatedMoviesQuery, 
        useGetUpcomingMoviesQuery } from "../slices/movieApiSlice";

const MoviesPage = () => {

    const { data: NowPlayingMovies, isLoading: nowplayingisloading, error: nowplayingError } = useGetNowPlayingMoviesQuery(1);
    const { data: PopularMovies, isLoading: popularisloading, error: popularError } = useGetPopularMoviesQuery(1);
    const { data: TopRatedMovies, isLoading: topratedisloading, error: topratedError } = useGetTopRatedMoviesQuery(1);
    const { data: UpcomingMovies, isLoading: upcomingisloading, error: upcomingError } = useGetUpcomingMoviesQuery(1);

    const exploreLink = "https://htmldog.com/references/css/properties/font-weight/"
    
    const title = "Movies Now Playing"
  return (
        <>
            <HeroBanner />
            <Flex w={'100%'} 
                p={10}
                pr={0}    
                flexDirection={'column'}
                gap={{base: 2, md: 3, lg: 4}}
            > 
            {/* To contain carousel sections in Home Page */}
            {!nowplayingisloading && NowPlayingMovies && 
                <ShowSection cards={NowPlayingMovies.results} title={"Movies Now Playing"} exploreLink={exploreLink}/>
            }
            {!popularisloading && PopularMovies && 
                <ShowSection cards={PopularMovies.results} title={"Popular Movies"} exploreLink={exploreLink}/>
            }
            {!topratedisloading && TopRatedMovies && 
                <ShowSection cards={TopRatedMovies.results} title={"Top-Rated Movies"} exploreLink={exploreLink}/>
            }
            {!upcomingisloading && UpcomingMovies && 
                <ShowSection cards={UpcomingMovies.results} title={"Upcoming Movies"} exploreLink={exploreLink}/>
            }
            </Flex>
        </>
    )
}

export default MoviesPage