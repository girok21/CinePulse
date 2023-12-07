import { Flex, Grid, Text, useMediaQuery } from '@chakra-ui/react';
import { useRef } from 'react';
import ReactPlayer from 'react-player'
const Videos = ({videos}) => {
  const videoRef = useRef();
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)');
  const [isSmallerThan1020] = useMediaQuery('(max-width: 1020px)');
  const [isSmallerThan1300] = useMediaQuery('(max-width: 1300px)');

  return (
    <Grid 
      w={'100%'}
      maxW={'100%'}
      templateColumns={`repeat(${isSmallerThan600? 1 : isSmallerThan1020? 2 : isSmallerThan1300? 3 : 4}, 1fr)`} gap={1}
    >
      {videos.map((video)=>(
        <Flex key={video.id} w={"100%"} flexDir={'column'} bg={'black'} _hover={{ transform: "scale(1.01)", ease: "ease-in" }}>
          <ReactPlayer 
              ref={videoRef}
              controls={true}
              width="100%"
              url={`https://www.youtube.com/watch?v=${video.key}`} 
              light={true}
              onEnded={() => videoRef.current.showPreview()}
            />
            <Text fontWeight={'semi-bold'}>
              {video.name}
            </Text>
            <Text fontWeight={'lighter'}>
              {video.type}
            </Text>
        </Flex>
      ))}
    </Grid>

  )
}

export default Videos