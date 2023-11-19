import { Flex, Text } from "@chakra-ui/react"
import HeroBanner from "../components/general/HeroBanner"
import { useState } from "react"
import Overview from "../components/section/Overview"

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
            <Flex h={'inherit'} w={'33.3%'} justifyContent={'center'} alignItems={'center'} onClick={handleSectionClick('overview')}>
                <Text fontSize={{base:'sm', md:'md', lg:'xl'}}>Overview</Text>
            </Flex>
            <Flex h={'inherit'} w={'33.3%'} justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={{base:'sm', md:'md', lg:'xl'}}>Videos</Text>
            </Flex>  
            <Flex h={'inherit'} w={'33.3%'} justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={{base:'sm', md:'md', lg:'xl'}}>Photos</Text>
            </Flex>
        </Flex>
        <Flex
            w={'100%'}
        >
            {activeSection === 'overview' && <Overview />}
            {/* {activeSection === 'videos' && <Overview />}
            {activeSection === 'photos' && <Overview />} */}
        </Flex>
    </Flex>
  )
}

export default MoviePage