import { Card, Flex, Image, Text } from "@chakra-ui/react";
import VerticalCardReview from '../review/VerticalCardReview';

const VerticalCard = ({card, exploremore}) => {
    if(exploremore){
        return (
            <Card
                className="vertical-card-container"
                w={'200px'}
                h={'365px'}
                bg={'#000000'}
                position={'relative'}
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
            w={'200px'}
            h={'365px'}
            overflow={'hidden'}
            bg={'#000000'}
        >
            <Flex
                w={'100%'}
                h={'100%'}
            >
                <Image src={card.image} />
            </Flex>
            <Flex flexDir={'column'}
                pl={2}
                pb={5}
            >
                <Flex flexDirection={'column'} gap={1}>
                    <Text fontWeight={'lighter'}>
                        {card.title}
                    </Text>
                    <VerticalCardReview rating={card.rating} />
                </Flex>
            </Flex>
        </Card>
    )
}

export default VerticalCard