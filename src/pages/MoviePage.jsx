import { Flex, Text } from "@chakra-ui/react"
import HeroBanner from "../components/general/HeroBanner"
import { useEffect, useState } from "react"
import Overview from "../components/section/Overview"
import Videos from "../components/section/Videos"
import SimilarShowSection from "../components/carousel/SimilarShowSection";
import CastSection from '../components/carousel/CastSection';
import { useGetNowPlayingMoviesQuery } from "../slices/movieApiSlice"

const MoviePage = () => {

    const [activeSection, setActiveSection] = useState('overview')// to determine which section to be displayed - overview/videos/photos

    
    const handleSectionClick = (header)=>{
        if(header === activeSection) return;
        setActiveSection(header);
    }
    

  return (
    <Flex
        w={'100%'}
        flexDir={'column'}
    >
        <HeroBanner />
        <Flex
            w={'100%'}
            h={{base:'40px', md:'50px', lg:'65px'}}
            bg={'#222222'}
        >
            <Flex h={'inherit'} w={'33.3%'} justifyContent={'center'} alignItems={'center'} cursor={'pointer'} onClick={()=>{handleSectionClick('overview')}}>
                <Text fontSize={{base:'sm', md:'md', lg:'xl'}}>Overview</Text>
            </Flex>
            <Flex h={'inherit'} w={'33.3%'} justifyContent={'center'} alignItems={'center'} cursor={'pointer'} onClick={()=>{handleSectionClick('videos')}}>
                <Text fontSize={{base:'sm', md:'md', lg:'xl'}}>Videos</Text>
            </Flex>  
            <Flex h={'inherit'} w={'33.3%'} justifyContent={'center'} alignItems={'center'} cursor={'pointer'} onClick={()=>{handleSectionClick('photos')}}>
                <Text fontSize={{base:'sm', md:'md', lg:'xl'}}>Photos</Text>
            </Flex>
        </Flex>
        <Flex
            flexDir={'column'}
            w={'100%'}
            gap={10}
            p={{base: 5, md: 7, lg: 10}}
            // pl={{base: 1, md: 2, lg: 3}}
        >
            <Flex
                w={'100%'}
            >
                {activeSection === 'overview' && <Overview />}
                {activeSection === 'videos' && <Videos />}
                {/* {activeSection === 'photos' && <Overview />} */}
            </Flex>
            <CastSection />
            <SimilarShowSection movieId={'123'} />

        </Flex>
    </Flex>
  )
}

export default MoviePage