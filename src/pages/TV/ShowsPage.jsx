/* eslint-disable no-unused-vars */
import { Flex } from "@chakra-ui/react"
import ShowSection from "../../components/carousel/ShowSection"
import HeroBanner from "../../components/general/HeroBanner"
import { useGetAiringTodayShowsQuery,
    useGetOnTheAirShowsQuery,
    useGetPopularShowsQuery,
    useGetTopRatedShowsQuery  } from "../../slices/tvApiSlice"
import { useEffect, useState } from "react"
import useRandomShow from "../../hooks/useRandomShow"
import { useGetFindShowByIdQuery } from "../../slices/commonApiSlice"

const ShowsPage = () => {
    //for testing purpose demo data
    const { data: AiringTodayShows, isLoading: airingtodayisloading, error: airingtodayError } = useGetAiringTodayShowsQuery(1);
    const { data: OnTheAirShows, isLoading: ontheairisloading, error: ontheairError } = useGetOnTheAirShowsQuery(1);
    const { data: PopularShows, isLoading: popularisloading, error: popularError } = useGetPopularShowsQuery(1);
    const { data: TopRatedShows, isLoading: topratedisloading, error: upcomingError } = useGetTopRatedShowsQuery(1);
    const [allShows, setAllShows] = useState(null);
    const { randomShow, getRandomShow } = useRandomShow(allShows);
    const {data: herobannerShow, loading: isherobannerShowLoading, error: herobannerShowError} = useGetFindShowByIdQuery({id:randomShow?.id, type: 'tv'},{
        skip: randomShow === undefined || randomShow === null
    })

    useEffect(() => {
        if (!ontheairisloading && OnTheAirShows) {
            setAllShows(OnTheAirShows.results);
        }
    }, [OnTheAirShows, ontheairisloading]);

    // Call getRandomShow only if randomShow is null
    useEffect(() => {
        if (randomShow === null) {
            getRandomShow();
        }
    }, [randomShow, getRandomShow]);

  return (
        <>
            {herobannerShow && <HeroBanner show={herobannerShow} media_type={'tv'}/>}
            <Flex w={'100%'} 
                p={10}
                pr={0}    
                flexDirection={'column'}
                gap={{base: 2, md: 3, lg: 4}}
            > 
            {/* To contain carousel sections in Shows Page */}
            {!airingtodayisloading && AiringTodayShows && 
                <ShowSection cards={AiringTodayShows.results} title={"Shows Airing Today"} exploreLink={"/shows/explore/airing-today"}/>
            }
            {!popularisloading && PopularShows && 
                <ShowSection cards={PopularShows.results} title={"Popular Shows"} exploreLink={"/shows/explore/popular"}/>
            }
            {!topratedisloading && TopRatedShows && 
                <ShowSection cards={TopRatedShows.results} title={"Top-Rated Shows"} exploreLink={"/shows/explore/top-rated"}/>
            }
            {!ontheairisloading && OnTheAirShows && 
                <ShowSection cards={OnTheAirShows.results} title={"On the air Shows"} exploreLink={"/shows/explore/on-the-air"}/>
            }
            </Flex>
        </>
    )
}

export default ShowsPage