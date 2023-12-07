import { Flex, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VerticalCastCard from "../card/VerticalCastCard";
import { useEffect, useRef, useState } from "react";

const CastSection = ({ cast }) => {
  
    const carouselContainerRef = useRef(); 
    const [dynamicWidth, setDynamicWidth] = useState(null);
    useEffect(()=>{
        // setDynamicWidth on first mount
    setDynamicWidth(carouselContainerRef.current.offsetWidth);

    const setSizer = () => {
      setDynamicWidth(carouselContainerRef.current.offsetWidth);
    };
    window.addEventListener("resize", setSizer);

    // cleanup function
    return () => window.removeEventListener("resize", setSizer);
    }, [dynamicWidth])
    const responsive ={
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: dynamicWidth/210,
            slidesToSlide: Math.floor(dynamicWidth/210)
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: dynamicWidth/157, 
            slidesToSlide: Math.floor(dynamicWidth/157)
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: dynamicWidth/110,
            slidesToSlide: Math.floor(dynamicWidth/110)
          }
      };

  return (
    <Flex 
        gap={{base: '2', md:'3', lg:'4'}} 
        w={'100%'} h={'fit-content'}
        flexDirection={'column'}
        ref={carouselContainerRef}
    >
        <Flex gap={5} alignItems={'center'}>
            <Text fontSize={{base:'md', md:'lg', xl:'2xl'}} fontWeight={'semibold'}>
                Cast
            </Text>
        </Flex>
        <Carousel
            containerClass="carousel-container"
            responsive={responsive}
        >
            {cast?.map((card, index) => <VerticalCastCard key={index} card={card} />)}
        </Carousel>
    </Flex>
  )
}

export default CastSection