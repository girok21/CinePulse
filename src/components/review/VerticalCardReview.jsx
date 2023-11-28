import { Flex } from "@chakra-ui/react"
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const VerticalCardReview = ({rating}) => {
  return (
    <>
    <Flex flexDir={'row'} alignItems={'center'}>
        {Array.from(Array(Math.floor(rating)).keys()).map((index)=>( <FaStar color='#fb923c' size={'15px'} key={index} />))}
        {rating - Math.floor(rating)>0 && <FaStarHalfAlt color='#fb923c' size={'15px'} />}
        {Array.from(Array(5 - Math.ceil(rating)).keys()).map((index)=>( <FaRegStar color='#321d0c' size={'17px'} key={index} />))}
    </Flex>
    </>
  )
}

export default VerticalCardReview;