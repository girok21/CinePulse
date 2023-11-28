import { Flex } from "@chakra-ui/react"
import ShowSection from "../components/carousel/ShowSection"
import HeroBanner from "../components/card/HeroBanner"

const MoviesPage = () => {
    //for testing purpose demo data
    const exploreLink = "https://htmldog.com/references/css/properties/font-weight/"
    const card = {
        original_title : "Oppenheimer",
        vote_average: 3.5,
        poster_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'
    }
    const title = "Movies Now Playing"
    const cards = [...Array(10).keys()].map(()=> card)
  return (
        <>
            <HeroBanner />
            <Flex w={'100%'} 
                p={10}
                pr={0}    
            > {/* To contain carousel sections in Home Page */}
                <ShowSection cards={cards} title={title} exploreLink={exploreLink}/>
            </Flex>
        </>
    )
}

export default MoviesPage