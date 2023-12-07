/* eslint-disable no-unused-vars */
import { Flex } from "@chakra-ui/react"
import ShowSection from "../components/carousel/ShowSection"
import HeroBanner from "../components/general/HeroBanner"
import { useGetTrendingMoviesQuery } from "../slices/movieApiSlice"
import { useGetTrendingTvShowQuery } from "../slices/tvApiSlice"
import { useEffect, useState } from "react";
import useRandomShow from "../hooks/useRandomShow"
import { useGetFindShowByIdQuery } from "../slices/commonApiSlice"

const HomePage = () => {
    //for testing purpose demo data
    const {data: trendingMovies, loading: istrendingmoviesLoading, error: trendingMoviesError} = useGetTrendingMoviesQuery(1);
    const {data: trendingTvShows, loading: istrendingTvShowsLoading, error: trendingTvShowsError} = useGetTrendingTvShowQuery(1);
    const [allShows, setAllShows] = useState(null);
    const { randomShow, getRandomShow } = useRandomShow(allShows);
    const {data: herobannerShow, loading: isherobannerShowLoading, error: herobannerShowError} = useGetFindShowByIdQuery({id:randomShow?.id, type: randomShow?.media_type},{
        skip: randomShow === undefined || randomShow === null
    })

    // Set allShows outside useEffect
    useEffect(() => {
        if (!istrendingTvShowsLoading && !istrendingmoviesLoading && trendingMovies && trendingTvShows) {
            const movies = trendingMovies.results;
            const tvShows = trendingTvShows.results;
            setAllShows(movies.concat(tvShows));
        }
    }, [trendingMovies, istrendingmoviesLoading, trendingTvShows, istrendingTvShowsLoading]);

    // Call getRandomShow only if randomShow is null
    useEffect(() => {
        if (randomShow === null) {
            getRandomShow();
        }
    }, [randomShow, getRandomShow]);
return (
        <>
            {herobannerShow && <HeroBanner show={herobannerShow} media_type={randomShow.media_type}/>}
            <Flex w={'100%'} 
                p={10}
                pr={0}
                pl={{base: 1, md: 3, lg: 10}}    
                flexDirection={'column'}
                gap={{base: 2, md: 3, lg: 4}}   
            > {/* To contain carousel sections in Home Page */}
                {!istrendingmoviesLoading &&  trendingMovies && 
                    <ShowSection cards={trendingMovies.results} title={"Trending Movies"} exploreLink={"/movies/explore/trending"}/>}
                {!istrendingTvShowsLoading &&  trendingTvShows && 
                    <ShowSection cards={trendingTvShows.results} title={"Trending Shows"} exploreLink={"/shows/explore/trending"}/>}
            </Flex>
        </>
    )
}

export default HomePage