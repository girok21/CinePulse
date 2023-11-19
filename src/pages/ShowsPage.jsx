import { Flex } from "@chakra-ui/react"
import Section from "../components/carousel/Section"
import HeroBanner from "../components/general/HeroBanner"

const ShowsPage = () => {
    //for testing purpose demo data
    const exploreLink = "https://htmldog.com/references/css/properties/font-weight/"
    const card = {
        title : "Oppenheimer",
        rating: 3.5,
        image: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'
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
                <Section cards={cards} title={title} exploreLink={exploreLink}/>
            </Flex>
        </>
    )
}

export default ShowsPage