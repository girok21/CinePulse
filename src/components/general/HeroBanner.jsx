import { Box, Button, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react"
import { FaCirclePlay } from "react-icons/fa6";
import PlaySVG from '../../assets/PlaySVG.jsx'
import HeroCardReview from "../review/HeroCardReview.jsx";

const HeroBanner = () => {

    const [isSmallerThan1020] = useMediaQuery('(max-width: 1020px)');
    const [isGreaterThan760] = useMediaQuery('(min-width: 760px)');
    const [isSmallPlayButton] = useMediaQuery('(max-width: 600px)')
  return (
    <Flex flexDirection={isSmallerThan1020? 'column':'row-reverse'} position={'relative'}>
        <Box 
            id="hero-banner-container"
            w={isSmallerThan1020? '100%':'75%'} 
            h={'fit-content'}
            position={'relative'}
        >
            <Image id="hero-banner-poster"  src="/6SyHoFNHQWCLIQEc41uflHsaGwE.jpg" w={'100%'} zIndex={"-5"}/>
            {isSmallerThan1020 && 
                <Box
                    position={'absolute'}
                    w={'fit-content'}
                    h={'fit-content'}
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    margin={'auto'}
                    cursor={'pointer'}
                >
                    <PlaySVG width={isSmallPlayButton? '55px' : '70px'}/>
                </Box>
            }
            {!isSmallerThan1020 && <Box id="image-left-fade" />}
            {isSmallerThan1020 && <Box id="image-bottom-fade" />}
        </Box>
        <Flex 
            width={isSmallerThan1020? '100%':{md:'30%', lg:'35%', xl:'40%'}}
            gap={{base:1, md: 2}}
            position={isSmallerThan1020? "":'absolute'}
            left={isSmallerThan1020? '':'0px'}
            flexDirection={'column'}
            height={isSmallerThan1020?'fit-content': '100%'}
            justifyContent={'center'}
            pl={{base:'20px', sm:'30px', md:'40px' , xl:'60px'}}
            pr={isSmallerThan1020? {base:'20px', sm:'30px', md:'40px' , xl:'60px'}: ''}
            border={0}
            pb={isSmallerThan1020?3 : 0}
        >
            <Text id="underline-text" fontSize={{base: '2xl', md:'3xl', lg: '4xl', xl:'5xl'}} fontWeight={'semibold'} lineHeight={'initial'}>
                Monarch: Legacy of Monsters
            </Text>
            <HeroCardReview rating={2.5} reviews={20}/>
            {isGreaterThan760 && <Text fontSize={{base: 'sm', md:'sm', lg: 'md', xl:'lg'}}>
                {`After surviving Godzilla's attack on San Francisco, Cate is shaken yet again by a shocking secret. Amid monstrous threats, she embarks on a globetrotting adventure to learn the truth about her family—and the mysterious organization known as Monarch.`}
            </Text>}
            {!isSmallerThan1020 && 
                <Button            
                    w={'fit-content'}
                    pl={{base: 4, sm: 5, md:6 , xl: 8}}
                    pr={{base: 4, sm: 5, md:6 , xl: 8}}
                    pt={{base: 2, sm: 3, xl: 6}}
                    pb={{base: 2, sm: 3, xl: 6}}
                    gap={2}
                >
                    {`Watch Trailer`}<FaCirclePlay size={20} />
                </Button>
            }
        </Flex>
    </Flex>
  )
}

export default HeroBanner