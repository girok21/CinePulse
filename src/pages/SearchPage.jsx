import { Flex, Image, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useGetMultiSearchResultsQuery } from "../slices/commonApiSlice";
import { useEffect, useState } from "react";
import VerticalShowCard from "../components/card/VerticalShowCard";
import VerticalPersonCard from "../components/card/VerticalPersonCard";

const SearchPage = () => {

  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState(null)
  
  const { data, isloading, error} = useGetMultiSearchResultsQuery({page: 1, searchString}, {
    skip: searchString.length === 0
  });

  useEffect(()=>{
    if(!isloading && data){
      setSearchResults(data.results)
    }

  }, [data, isloading, error, searchString, searchResults])

  const onSearchStringChange = (event) => {
    setSearchString(event.target.value);
  }

  const navigate = useNavigate();
  return (
    <Flex
      w={'100%'}
      minH={'300px'}
      p={{base:'5px', md:'10px', lg:'15px'}}
      boxSizing="border-box"
      alignItems={'center'}
      gap={{base:2, md: 3, lg: 5}}
      flexDirection={'column'}
    >
      <Image 
        src="/golden-logo-large.svg"
        h={{base:'30px', md: '35px', lg : '40px'}}
        onClick={()=>{navigate('/home')}}
        cursor={'pointer'}
      />
      <InputGroup w={{base: '95%', md : '70%'}}>
        <InputLeftElement pointerEvents='none'>
          <SearchSvg />
        </InputLeftElement>
        <Input type='text' placeholder='Search for a movie, show or person...' onChange={onSearchStringChange}/>
      </InputGroup>
      {!isloading && data && searchString.length > 0 &&
        <Flex w={{base:'95%', md: '90%', lg:'85%'}} flexDir={'column'} gap={1}>
          <Text>
            Showing results for {searchString}...
          </Text>
          <Flex w={'100%'}
            justifyContent={'center'}
            justifyItems={'center'}
            wrap={'wrap'}
            gap={{base: 1, md: 2, lg: 3}}
          >
            {searchResults?.map((result)=>(
              result?.media_type === "person" ? 
                <VerticalPersonCard key={result?.id} card={result}/> : 
                <VerticalShowCard key={result?.id} card={result}/>
            ))}
          </Flex>
        </Flex>
      }
    </Flex>
  )
}

export default SearchPage

const SearchSvg = () => {
  return (
    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 17L21 21" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#323232" strokeWidth="2"/>
    </svg>
  )
}