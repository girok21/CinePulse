import { Card, Flex, Image, Text } from "@chakra-ui/react";
import { WIDTH342_IMAGE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";

const VerticalPersonCard = ({card}) => {
    const navigate = useNavigate();
    // const handleCardClick = ()=>{
    //     navigate(`/persons/${card.id}`)
    // }
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
                <Image src={`${WIDTH342_IMAGE_URL}/${card?.profile_path}`}/>
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
                        Known for {card?.known_for_department}
                    </Text>
                </Flex>
            </Flex>
        </Card>
    )
}

export default VerticalPersonCard