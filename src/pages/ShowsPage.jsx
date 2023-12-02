/* eslint-disable no-unused-vars */
import { Flex } from "@chakra-ui/react"
import ShowSection from "../components/carousel/ShowSection"
import HeroBanner from "../components/general/HeroBanner"
import { useGetAiringTodayShowsQuery,
    useGetOnTheAirShowsQuery,
    useGetPopularShowsQuery,
    useGetTopRatedShowsQuery  } from "../slices/tvApiSlice"
import { useEffect } from "react"

const ShowsPage = () => {
    //for testing purpose demo data
    const { data: AiringTodayShows, isLoading: airingtodayisloading, error: airingtodayError } = useGetAiringTodayShowsQuery(1);
    const { data: OnTheAirShows, isLoading: ontheairisloading, error: ontheairError } = useGetOnTheAirShowsQuery(1);
    const { data: PopularShows, isLoading: popularisloading, error: popularError } = useGetPopularShowsQuery(1);
    const { data: TopRatedShows, isLoading: topratedisloading, error: upcomingError } = useGetTopRatedShowsQuery(1);

  return (
        <>
            <HeroBanner />
            <Flex w={'100%'} 
                p={10}
                pr={0}    
                flexDirection={'column'}
                gap={{base: 2, md: 3, lg: 4}}
            > 
            {/* To contain carousel sections in Shows Page */}
            {!airingtodayisloading && AiringTodayShows && 
                <ShowSection cards={AiringTodayShows.results} title={"Shows Airing Today"} exploreLink={"/asdf"}/>
            }
            {!popularisloading && PopularShows && 
                <ShowSection cards={PopularShows.results} title={"Popular Shows"} exploreLink={"/asdf"}/>
            }
            {!topratedisloading && TopRatedShows && 
                <ShowSection cards={TopRatedShows.results} title={"Top-Rated Shows"} exploreLink={"/asdf"}/>
            }
            {!ontheairisloading && OnTheAirShows && 
                <ShowSection cards={OnTheAirShows.results} title={"Upcoming Shows"} exploreLink={"/asdf"}/>
            }
            </Flex>
        </>
    )
}

export default ShowsPage