import { Flex, Text } from "@chakra-ui/react"
import HeroBanner from "../components/general/HeroBanner"
import { useState } from "react"
import Overview from "../components/section/Overview"
import Videos from "../components/section/Videos"
import SimilarShowSection from "../components/carousel/SimilarShowSection";
import CastSection from '../components/carousel/CastSection';
import { useLocation } from "react-router-dom"
import { useGetFindShowByIdQuery, useGetShowImagesQuery, useGetSimilarShowsQuery } from "../slices/commonApiSlice"
import { useGetShowCastQuery } from "../slices/personApiSlice"
import Images from "../components/section/Images"
const MovieShowPage = () => {
    
    const location = useLocation();
    const parts = location.pathname.split('/');
    const id = parts[parts.length - 1];
    const media_type = location.pathname.includes('movie')?'movie' : 'tv';
    const {data: show, loading: isshowLoading, error: showError} = useGetFindShowByIdQuery({id, type: media_type});
    const { data: cast, loading: castLoading, error: castError } = useGetShowCastQuery({id, type: media_type});
    const { data: similarShows, loading: similarShowsLoading, error: similarShowsError } = useGetSimilarShowsQuery({id, media_type});
    const { data: showImages, loading: showImagesLoading, error: showImagesError } = useGetShowImagesQuery({id, media_type})
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
        {show && <HeroBanner show={show} media_type={media_type}/>}
        <Flex
            w={'100%'}
            h={{base:'40px', md:'50px', lg:'65px'}}
            bg={'#222222'}
        >
            <Flex h={'inherit'} 
                bg={activeSection==='overview'?'#333333':'transparent'}
                w={'33.3%'} 
                justifyContent={'center'} 
                alignItems={'center'} 
                cursor={'pointer'} 
                onClick={()=>{handleSectionClick('overview')}}>
                <Text fontSize={{base:'sm', md:'md', lg:'xl'}}>Overview</Text>
            </Flex>
            <Flex h={'inherit'} 
                bg={activeSection==='videos'?'#333333':'transparent'}
                w={'33.3%'} 
                justifyContent={'center'} 
                alignItems={'center'} 
                cursor={'pointer'} 
                onClick={()=>{handleSectionClick('videos')}}>                
                <Text fontSize={{base:'sm', md:'md', lg:'xl'}}>Videos</Text>
            </Flex>  
            <Flex h={'inherit'} 
                bg={activeSection==='photos'?'#333333':'transparent'}
                w={'33.3%'} 
                justifyContent={'center'} 
                alignItems={'center'} 
                cursor={'pointer'} 
                onClick={()=>{handleSectionClick('photos')}}>                
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
                {activeSection === 'overview' && show && <Overview show={show}/>}
                {activeSection === 'videos' && <Videos videos={show.videos.results}/>}
                {activeSection === 'photos' && <Images images={{backdrops: showImages?.backdrops, posters: showImages?.posters}} />}
            </Flex>
            {cast && <CastSection cast={cast?.cast}/>}
            {(similarShows) && <SimilarShowSection cards={similarShows?.results} />}
        </Flex>
    </Flex>
  )
}


export default MovieShowPage
