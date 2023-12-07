import { Flex, Image, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { useGetUpcomingMoviesQuery } from '../../slices/movieApiSlice';
import { useCallback, useEffect, useState } from 'react';
import VerticalShowCard from '../../components/card/VerticalShowCard';

const UpcomingMovies = () => {
  
  const media_type = 'movie';

  const navigate = useNavigate();
  const [pagenum, setPagenum] = useState(1);

  const { data, loading: isUpcomingMoviesLoading, error: upcomingmoviesError, refetch } = useGetUpcomingMoviesQuery(pagenum, {
    onSuccess: () => {
      console.log("Got Data, calling from onsuccess!");
    }
  });
  const [ movies, setMovies ] = useState([]);

  const handleScroll = useCallback(() => {
    if(isUpcomingMoviesLoading) return;

    const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
    
    if (isBottom && !isUpcomingMoviesLoading && data?.total_pages > pagenum) {
      setPagenum((prevPageNum) => prevPageNum + 1);
      console.log("pagechange", pagenum)
    }
  }, [data, pagenum, isUpcomingMoviesLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!isUpcomingMoviesLoading && data) {
      // Update state only if not loading and data is available
      setMovies((prevTrendingMovies) => prevTrendingMovies.concat(data.results));
    }
  }, [isUpcomingMoviesLoading, data]);

  useEffect(() => {
    // Refetch when pagenum changes
    refetch();
  }, [pagenum, refetch]);

  if(upcomingmoviesError){
    return <div>
      Error has occured.
    </div>
  }

  return (
    <Flex
        w={'100%'}
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
        <Flex w={'100%'}>
          <Text
            fontSize={{base:'md', md:'lg', lg: 'xl'}}
            pl={{base: 3, md: 5, lg: 7}}
          >
            Upcoming Movies:
          </Text>
        </Flex>
        {movies && 
          <Flex w={'100%'}
            justifyContent={'center'}
            justifyItems={'center'}
            wrap={'wrap'}
            gap={{base: 1, md: 2, lg: 3}}
          >
            {movies.map((result, index)=>(
                <VerticalShowCard key={result?.id + index} media_type={media_type} card={result}/>
            ))}
          </Flex>
        }
    </Flex>
  )
}

export default UpcomingMovies