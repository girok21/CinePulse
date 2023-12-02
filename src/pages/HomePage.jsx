import { Flex } from "@chakra-ui/react"
import ShowSection from "../components/carousel/ShowSection"
import HeroBanner from "../components/general/HeroBanner"
import { useGetTrendingMoviesQuery } from "../slices/movieApiSlice"
import { useGetTrendingTvShowQuery } from "../slices/tvApiSlice"

const HomePage = () => {
    //for testing purpose demo data
    const {data: trendingMovies, loading: istrendingmoviesLoading, error: trendingMoviesError} = useGetTrendingMoviesQuery(1);
    const {data: trendingTvShows, loading: istrendingTvShowsLoading, error: trendingTvShowsError} = useGetTrendingTvShowQuery(1);
  return (
        <>
            <HeroBanner />
            <Flex w={'100%'} 
                p={10}
                pr={0}    
                flexDirection={'column'}
                gap={{base: 2, md: 3, lg: 4}}   
            > {/* To contain carousel sections in Home Page */}
                {!istrendingmoviesLoading &&  trendingMovies && 
                    <ShowSection cards={trendingMovies.results} title={"Trending Movies"} exploreLink={"/sdfd"}/>}
                {!istrendingTvShowsLoading &&  trendingTvShows && 
                    <ShowSection cards={trendingTvShows.results} title={"Trending Shows"} exploreLink={"/sdfd"}/>}
            </Flex>
        </>
    )
}

export default HomePage