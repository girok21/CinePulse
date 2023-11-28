import { Card, Flex, Image, Text } from "@chakra-ui/react";

const VerticalCastCard = ({card}) => {
  return (
        <Card
            className="vertical-card-container"
            w={{base: '105px', md: '150px',  lg: '200px'}}
            h={{base: '192px', md: '274px',  lg: '365px'}}
            overflow={'hidden'}
            bg={'#000000'}
        >
            <Flex
                w={'100%'}
                h={'100%'}
            >
                <Image src={card?.profile_path} />
            </Flex>
            <Flex flexDir={'column'}
                pl={2}
                pb={5}
            >
                <Flex flexDirection={'column'} gap={1}>
                    <Text fontWeight={'semi-bold'}>
                        {card?.original_name}
                    </Text>
                    <Text fontWeight={'lighter'} fontSize={{base: 'sm', md: 'md'}}>
                        {card?.character}
                    </Text>
                </Flex>
            </Flex>
        </Card>
    )
}

export default VerticalCastCard