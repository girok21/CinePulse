/* eslint-disable no-unused-vars */
import { Flex } from "@chakra-ui/react"
import ShowSection from "../../components/carousel/ShowSection"
import HeroBanner from "../../components/general/HeroBanner"
import { useGetNowPlayingMoviesQuery, 
        useGetPopularMoviesQuery, 
        useGetTopRatedMoviesQuery, 
        useGetUpcomingMoviesQuery } from "../../slices/movieApiSlice";
import { useEffect, useState } from "react";
import useRandomShow from "../../hooks/useRandomShow";
import { useGetFindShowByIdQuery } from "../../slices/commonApiSlice";

const MoviesPage = () => {

    const { data: NowPlayingMovies, isLoading: nowplayingisloading, error: nowplayingError } = useGetNowPlayingMoviesQuery(1);
    const { data: PopularMovies, isLoading: popularisloading, error: popularError } = useGetPopularMoviesQuery(1);
    const { data: TopRatedMovies, isLoading: topratedisloading, error: topratedError } = useGetTopRatedMoviesQuery(1);
    const { data: UpcomingMovies, isLoading: upcomingisloading, error: upcomingError } = useGetUpcomingMoviesQuery(1);
    const [allShows, setAllShows] = useState(null);
    const { randomShow, getRandomShow } = useRandomShow(allShows);
    const {data: herobannerShow, loading: isherobannerShowLoading, error: herobannerShowError} = useGetFindShowByIdQuery({id:randomShow?.id, type: 'movie'},{
        skip: randomShow === undefined || randomShow === null
    })

    useEffect(() => {
        if (!nowplayingisloading && NowPlayingMovies) {
            setAllShows(NowPlayingMovies.results);
        }
    }, [NowPlayingMovies, nowplayingisloading]);

    // Call getRandomShow only if randomShow is null
    useEffect(() => {
        if (randomShow === null) {
            getRandomShow();
        }
    }, [randomShow, getRandomShow]);

    const exploreLink = "https://htmldog.com/references/css/properties/font-weight/"
      return (
        <>
            {herobannerShow && <HeroBanner show={herobannerShow} media_type={'movie'}/>}
            <Flex w={'100%'} 
                p={10}
                pr={0}    
                flexDirection={'column'}
                gap={{base: 2, md: 3, lg: 4}}
            > 
            {/* To contain carousel sections in Home Page */}
            {!nowplayingisloading && NowPlayingMovies && 
                <ShowSection media_type={'movie'} cards={NowPlayingMovies.results} title={"Now-Playing Movies"} exploreLink={"/movies/explore/now-playing"}/>
            }
            {!popularisloading && PopularMovies && 
                <ShowSection media_type={'movie'} cards={PopularMovies.results} title={"Popular Movies"} exploreLink={"/movies/explore/popular"}/>
            }
            {!topratedisloading && TopRatedMovies && 
                <ShowSection media_type={'movie'} cards={TopRatedMovies.results} title={"Top-Rated Movies"} exploreLink={"/movies/explore/top-rated"}/>
            }
            {!upcomingisloading && UpcomingMovies && 
                <ShowSection media_type={'movie'} cards={UpcomingMovies.results} title={"Upcoming Movies"} exploreLink={"/movies/explore/upcoming"}/>
            }
            </Flex>
        </>
    )
}

export default MoviesPage