import { Flex, Text } from "@chakra-ui/react"
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const HeroCardReview = ({rating, reviews}) => {
  return (
    <>
    <Flex flexDir={'row'} alignItems={'center'} gap={2}>
      <Flex>
        {Array.from(Array(Math.floor(rating)).keys()).map((index)=>( <FaStar size={'20px'} key={index} />))}
        {rating - Math.floor(rating)>0 && <FaStarHalfAlt size={'20px'} />}
        {Array.from(Array(5 - Math.ceil(rating)).keys()).map((index)=>( <FaRegStar size={'20px'} key={index} />))}
      </Flex>
      <Text>
        {reviews} Reviews
      </Text>
    </Flex>
    </>
  )
}

export default HeroCardReview;

