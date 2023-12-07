import { Box, Button, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react"
import { FaCirclePlay } from "react-icons/fa6";
import PlaySVG from '../../assets/PlaySVG.jsx'
import HeroCardReview from "../review/HeroCardReview.jsx";
import { ORIGINAL_IMAGE_URL, YOUTUBE_VIDEO_URL } from "../../constants.js";
import ReactPlayer from "react-player";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroBanner = ({show, media_type}) => {
    const YoutubeTrailerVideo = getYoutubeTrailer(show.videos.results);
    const videoRef = useRef();
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isSmallerThan1020] = useMediaQuery('(max-width: 1020px)');
    const [isGreaterThan760] = useMediaQuery('(min-width: 760px)');
    const [isSmallPlayButton] = useMediaQuery('(max-width: 600px)');

    const navigate = useNavigate();
    const handleClickChange = ()=>{
        if(show.media_type === "movie" || media_type === "movie"){
            navigate(`/movies/${show.id}`)
        }else{
            navigate(`/shows/${show.id}`)
        }
    }

    const playButtonChange = ()=>{
        setIsVideoPlaying(!isVideoPlaying);
    }

  return (
    <>
        <Flex flexDirection={isSmallerThan1020? 'column':'row-reverse'} position={'relative'} display={isVideoPlaying?'none':'flex'}>
            <Box 
                id="hero-banner-container"
                w={isSmallerThan1020? '100%':'75%'} 
                h={'fit-content'}
                position={'relative'}
            >
                <Image id="hero-banner-poster"  src={`${ORIGINAL_IMAGE_URL}/${show.backdrop_path}`} w={'100%'} zIndex={"-5"} fallbackSrc="/fallback-hero.jpg"/>
                {isSmallerThan1020 && 
                    <Box
                        position={'absolute'}
                        w={'fit-content'}
                        h={'fit-content'}
                        top={0}
                        bottom={0}
                        left={0}
                        right={0}
                        margin={'auto'}
                        cursor={'pointer'}
                        onClick={playButtonChange}
                        zIndex={'5'}
                        display={YoutubeTrailerVideo?'flex' : 'none'}
                    >
                        <PlaySVG width={isSmallPlayButton? '55px' : '70px'}/>
                    </Box>
                }
                {!isSmallerThan1020 && <Box id="image-left-fade" />}
                {isSmallerThan1020 && <Box id="image-bottom-fade" />}
            </Box>
            <Flex 
                width={isSmallerThan1020? '100%':{md:'30%', lg:'35%', xl:'40%'}}
                gap={{base:1, md: 2}}
                position={isSmallerThan1020? "":'absolute'}
                left={isSmallerThan1020? '':'0px'}
                flexDirection={'column'}
                height={isSmallerThan1020?'fit-content': '100%'}
                justifyContent={'center'}
                pl={{base:'20px', sm:'30px', md:'40px' , xl:'60px'}}
                pr={isSmallerThan1020? {base:'20px', sm:'30px', md:'40px' , xl:'60px'}: ''}
                border={0}
                pb={isSmallerThan1020?3 : 0}
            >
                <Text id="underline-text" 
                    fontSize={{base: '2xl', md:'3xl', lg: '4xl', xl:'5xl'}} 
                    fontWeight={'semibold'} 
                    lineHeight={'initial'}
                    onClick={handleClickChange}
                >
                    {show.original_name || show.original_title}
                </Text>
                <HeroCardReview rating={show.vote_average/2} reviews={show.vote_count}/>
                {isGreaterThan760 && 
                        <Flex
                            w="100%"
                            maxH="6em" // Set the maximum height to 5 lines (adjust as needed)
                            overflow="hidden"
                            textOverflow="ellipsis"
                            whiteSpace="wrap"
                            >
                            <Text
                                fontSize={{ base: 'sm', md: 'sm', lg: 'md', xl: 'lg' }}
                                lineHeight="1.2em" // Adjust line height as needed
                                maxH="6em" // (lineHeight * maxLines) + padding for better accuracy
                                overflow="hidden"
                                textOverflow="ellipsis"
                            >
                                {show.overview}
                            </Text>
                        </Flex>
                }
                {!isSmallerThan1020 && 
                    <Button            
                        w={'fit-content'}
                        pl={{base: 4, sm: 5, md:6 , xl: 8}}
                        pr={{base: 4, sm: 5, md:6 , xl: 8}}
                        pt={{base: 2, sm: 3, xl: 6}}
                        pb={{base: 2, sm: 3, xl: 6}}
                        gap={2}
                        onClick={playButtonChange}
                        display={YoutubeTrailerVideo?'flex' : 'none'}
                    >
                        {`Watch Trailer`}<FaCirclePlay size={20} />
                    </Button>
                }
            </Flex>
        </Flex>
        <Flex w={'100%'} justifyContent={'center'} bg={'#000000'} display={isVideoPlaying?'flex':'none'}>
            <Flex w={isSmallerThan1020? '100%':'75%'} aspectRatio={'16/9'}>
                <ReactPlayer
                    ref={videoRef}
                    url={YoutubeTrailerVideo}
                    playing={isVideoPlaying}
                    controls={true}
                    width="100%"
                    height="100%"
                    onEnded={() => setIsVideoPlaying(false)}
                />
            </Flex>
        </Flex>
    </>
  )
}

const getYoutubeTrailer = (videos)=>{
    if(!videos || videos.length===0) return null;
    const youtubeTrailerVideo = videos.find((video) => video.site === "YouTube" && video.type === "Trailer" );
    const youtubeTeaserVideo = videos.find((video) => video.site === "YouTube" && video.type === "Teaser" );
    const anyYoutubeVideo = videos.find((video) => video.site === "YouTube" );
    const resultVideoObject = youtubeTrailerVideo || youtubeTeaserVideo || anyYoutubeVideo;
    return `${YOUTUBE_VIDEO_URL.concat(resultVideoObject.key)}`;
}

export default HeroBanner