import { Flex } from "@chakra-ui/layout"
import { FaGlobe, FaImdb } from "react-icons/fa";
const Socials = ({imdblink, homepagelink}) => {
    const IMDB_URL = "https://www.imdb.com/title"

  return (
        <Flex gap={2}>
            <a href={`${IMDB_URL}/${imdblink}`} target="_blank" rel="noreferrer">
                <FaImdb size={20}/>
            </a>
            <a href={`${homepagelink}`} target="_blank" rel="noreferrer">
                <FaGlobe size={20} />
            </a>
        </Flex>
    )
}

export default Socials