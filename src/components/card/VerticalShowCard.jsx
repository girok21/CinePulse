import { Card, Flex, Image, Text } from "@chakra-ui/react";
import VerticalCardReview from '../review/VerticalCardReview';
import { WIDTH342_IMAGE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";

const VerticalShowCard = ({card, media_type, exploremore}) => {
    const navigate = useNavigate();
    const handleCardClick = ()=>{
        if(card.media_type === "movie" || media_type === "movie"){
            navigate(`/movies/${card.id}`)
        }else{
            navigate(`/shows/${card.id}`)
        }
    }
    if(exploremore){
        return (
            <Card
                className="vertical-card-container"
                w={{base: '105px', md: '150px',  lg: '200px'}}
                h={{base: '192px', md: '274px',  lg: '365px'}}
                bg={'#000000'}
                position={'relative'}
                onClick={()=>{navigate(exploremore)}}
                >
                <Text
                    w={'fit-content'}
                    h={'fit-content'}
                    position={'absolute'}
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    margin={'auto'}
                    fontSize={'lg'}
                    textDecoration={'underline'}
                >
                    Explore More 
                </Text>
            </Card>
            )
    }
  return (
        <Card
            className="vertical-card-container"
            w={{base: '105px', md: '150px',  lg: '200px'}}
            h={{base: '192px', md: '274px',  lg: '365px'}}
            overflow={'hidden'}
            bg={'#000000'}
            onClick={handleCardClick}
        >
            <Flex
                w={'100%'}
                h={'100%'}
            >
                <Image src={`${WIDTH342_IMAGE_URL}/${card?.poster_path}`} fallbackSrc="/fallback-vertical.jpg"/>
            </Flex>
            <Flex flexDir={'column'}
                pl={2}
                pb={5}
            >
                <Flex flexDirection={'column'} gap={1}>
                    <Text fontWeight={'lighter'} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
                        {card?.original_title || card?.original_name}
                    </Text>
                    <VerticalCardReview rating={card?.vote_average/2} />
                </Flex>
            </Flex>
        </Card>
    )
}

export default VerticalShowCard