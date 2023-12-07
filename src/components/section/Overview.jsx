import { Flex, Image, Text, useMediaQuery } from "@chakra-ui/react"
import Socials from "./Socials";
import { WIDTH342_IMAGE_URL } from "../../constants";

const Overview = ({show}) => {
  const [isLargerThan1020] = useMediaQuery('(min-width: 1020px)')
  return (
        <Flex
            w={'100%'}
            // p={{base: 5, md: 7, lg: 10}}
            gap={{md: 8, lg: 10}}
        >
            {isLargerThan1020 &&
                <Flex
                    w={{base: '240px', md:'260px', lg:'280px'}}
                    bg={'#222222'}
                >   
                    <Image src={`${WIDTH342_IMAGE_URL}/${show?.poster_path}`} fallbackSrc="/fallback-vertical.jpg"/>
                </Flex>
            }
            <Flex
                flex={1}
                h={'100%'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                gap={{base: 1, md: 2}}
            >
                <Flex flexDirection={'column'} gap={{base:3, md: 4, lg: 5}}>
                    <Text fontSize={{base:'md', md:'lg', lg:'xl'}} fontWeight={'semibold'}>
                        Summary
                    </Text>
                    <Text fontSize={{base:'sm', md:'md'}} fontWeight={'lighter'}>
                        {show.overview}
                    </Text>
                </Flex>
                <Flex w={'100%'} flexDir={'column'}>
                  <Flex w={isLargerThan1020?'90%' : '100%'} justifyContent={'space-between'}>
                    <Text fontSize={{base:'sm', md:'md'}} fontWeight={'semi-bold'} minW={'50%'}>
                      {show.status==="Released"? "Released" : "Release"}  
                    </Text>
                    <Text fontSize={{base:'sm', md:'md'}} fontWeight={'lighter'} minW={'50%'}>
                      {show.release_date || 'N.A'}  
                    </Text>
                  </Flex>
                  <Flex w={isLargerThan1020?'90%' : '100%'} justifyContent={'space-between'}>
                    <Text fontSize={{base:'sm', md:'md'}} fontWeight={'semi-bold'} minW={'50%'}>
                      Runtime 
                    </Text>
                    <Text fontSize={{base:'sm', md:'md'}} fontWeight={'lighter'} minW={'50%'}>
                      {show.runtime || 'N.A'}  
                    </Text>
                  </Flex>
                  <Flex w={isLargerThan1020?'90%' : '100%'} justifyContent={'space-between'}>
                    <Text fontSize={{base:'sm', md:'md'}} fontWeight={'semi-bold'} minW={'50%'}>
                      Revenue 
                    </Text>
                    <Text fontSize={{base:'sm', md:'md'}} fontWeight={'lighter'} minW={'50%'}>
                      {show.revenue || 'N.A'}  
                    </Text>
                  </Flex>
                  <Flex w={isLargerThan1020?'90%' : '100%'} justifyContent={'space-between'}>
                    <Text fontSize={{base:'sm', md:'md'}} fontWeight={'semi-bold'} minW={'50%'}>
                      Languages 
                    </Text>
                    <Text fontSize={{base:'sm', md:'md'}} fontWeight={'lighter'} minW={'50%'}>
                      {commaSeperatedString(show.spoken_languages) || 'N.A'}  
                    </Text>
                  </Flex>
                  <Flex w={isLargerThan1020?'90%' : '100%'} justifyContent={'space-between'}>
                    <Text fontSize={{base:'sm', md:'md'}} fontWeight={'semi-bold'} minW={'50%'}>
                      Production 
                    </Text>
                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      fontWeight={'lighter'}
                      maxW={'50%'}
                      minW={'50%'}
                      wordBreak="break-word" // Allow long words to be broken and wrap to the next line
                      overflowWrap="break-word" // Allow normal words to wrap to the next line
                    >
                      {commaSeperatedString(show.production_companies) || 'N.A'}  
                    </Text>
                  </Flex>
                  <Flex w={isLargerThan1020?'90%' : '100%'} justifyContent={'space-between'}>
                    <Text fontSize={{base:'sm', md:'md'}} fontWeight={'semi-bold'} minW={'50%'}>
                      Production Countries
                    </Text>
                    <Text fontSize={{base:'sm', md:'md'}} fontWeight={'lighter'} minW={'50%'}>
                      {commaSeperatedString(show.production_countries) || 'N.A'}  
                    </Text>
                  </Flex>
                </Flex>
                <Socials imdblink={show?.imdb_id} homepagelink={show?.homepage}/>
            </Flex>
        </Flex>
    )
}

export default Overview

const commaSeperatedString = (arr)=>{
  if(!arr) return null;
  const names = arr.map(company => company.name);
  const commaSeparatedNames = names.join(', ');
  return commaSeparatedNames;
}