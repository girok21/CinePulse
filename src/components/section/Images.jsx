import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react"
import { ORIGINAL_IMAGE_URL, WIDTH342_IMAGE_URL } from "../../constants"
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import useScrollLock from "../../hooks/useScrollLock";

const Images = ({images}) => {
    const [isImageFullScreen, setIsImageFullScreen] = useState(false);
    const [imageType, setImageType] = useState(null);
    const [imageIndex, setImageIndex] = useState(null);

    useScrollLock(isImageFullScreen);

    const handleImageClick = (type, index)=>{
        setIsImageFullScreen(!isImageFullScreen);
        setImageType(type);
        setImageIndex(index);
    }
    const handleImageCloseClick = ()=>{
        setIsImageFullScreen(!isImageFullScreen);
        setImageType(null);
        setImageIndex(null);
    }
    return (
    <Flex
        w={'100%'}
        flexDir={'column'}
        gap={3}
    >
        {images.backdrops[0] && 
        <Text fontSize={{base: 15, md: 20, lg: 23}} fontWeight={'semibold'}>
            Backdrops
        </Text>}
        <Grid
            className="image-grid-container"
            templateColumns={{base: "repeat(2, 1fr)", sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)'}}
            gap={3}
        >
            {images?.backdrops.map((image, index) => (
                <Image onClick={()=>handleImageClick('backdrops', index)} 
                        key={index} src={`${WIDTH342_IMAGE_URL}/${image?.file_path}`} 
                        fallbackSrc={'/fallback-hero.jpg'} 
                        cursor={'pointer'}
                />
            ))}
        </Grid>
        {images.posters[0] &&
            <Text fontSize={{base: 15, md: 20, lg: 23}} fontWeight={'semibold'}>
                Posters
            </Text>}
        <Grid
            className="image-grid-container"
            templateColumns={{base: "repeat(2, 1fr)", sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)'}}
            gap={3}
        >
            {images?.posters.map((image, index) => (
                <Image onClick={()=>handleImageClick('posters', index)} 
                        key={index} src={`${WIDTH342_IMAGE_URL}/${image?.file_path}`} 
                        fallbackSrc={'/fallback-vertical.jpg'} 
                        cursor={'pointer'}
                />
            ))}
        </Grid>
        {isImageFullScreen &&
            <>
                <Flex w={'100%'} h={'100%'}
                    position={'absolute'}
                    top={0}
                    left={0}
                    backdropFilter="auto"
                    backdropBlur={'6px'}
                    zIndex={1002}
                    onClick={handleImageCloseClick}
                />
                <Flex
                    pos={'fixed'}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    m={'auto'}
                    zIndex={1005}
                    align="center"
                    justify="center"
                    onClick={handleImageCloseClick}
                >
                    <Box
                        pos={'fixed'}
                        top={{base: 1, md: 3, lg: 5, xl: 7}}
                        right={{base: 1, md: 3, lg: 5, xl: 7}}
                        cursor={'pointer'}
                        onClick={handleImageCloseClick}
                    >
                        <IoCloseOutline size={30} />
                    </Box>
                    <Box
                        pos="fixed"
                        p={3}
                    >
                    <Image
                        h={imageType==='posters'? '85vh' : ''}
                        w={{base: imageType==='backdrops'? '85vw' : '', lg: imageType === 'backdrops'? '70vw':''}}
                        src={`${ORIGINAL_IMAGE_URL}/${images[imageType][imageIndex]?.file_path}`}
                        fallbackSrc={imageType==='posters'?'/fallback-vertical.jpg' : '/fallback-hero.jpg'}
                    />
                    </Box>
                </Flex>
            </>

        }
    </Flex>
  )
}

export default Images