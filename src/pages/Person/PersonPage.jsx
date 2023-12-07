import { Box, Flex, Hide, Image, Show, Text, useBreakpointValue } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { WIDTH342_IMAGE_URL } from "../../constants";
import { useGetPersonDetailsQuery } from "../../slices/personApiSlice";

const PersonPage = () => {

    const location = useLocation();
    const parts = location.pathname.split('/');
    const id = parts[parts.length - 1];

    const { data: personDetails, loading: ispersondetailsLoading } = useGetPersonDetailsQuery(id); 

  return (
    <Box w={'100%'}
        flexDir={'column'}
        gap={1}
        textAlign={'justify'}
    >
        <Hide above="lg">
            <Text fontSize={{base: 18, md: 23, lg: 25}} fontWeight={'semibold'} ml={3}>
                {personDetails?.name}
            </Text>
        </Hide>
        <Flex w={'100%'} pl={4} pr={4} boxSizing={'border-box'} textAlign={'justify'} >
            {/* mobile & tab view */}
            <Flex
                display={{base: 'flex', lg: 'none'}}
                flexDir={'column'}
                h={'fit-content'}
                w={'fit-content'}
                aspectRatio={'0.67'}
                float={"left"}
            >
                <Box
                    aspectRatio={'0.67'}
                    h={'auto'}
                    w={'40vw'}
                >
                    <Image
                        src={`${WIDTH342_IMAGE_URL}/${personDetails?.profile_path}`} 
                        fallbackSrc="/fallback-vertical.jpg"
                        maxH="100%" // Set maximum height to prevent stretching
                    />
                </Box>
            </Flex>
            <Hide below="lg">
                <Text fontSize={{base: 18, md: 23, lg: 25}}
                    fontWeight={'semibold'}>
                    {personDetails?.name}
                </Text>
            </Hide>
            <Text textAlign={'justify'}>
                {personDetails?.biography}
            </Text>
        </Flex>
    </Box>
  )
}

export default PersonPage


