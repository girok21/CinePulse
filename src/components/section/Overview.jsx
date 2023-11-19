import { Flex, Image, useMediaQuery } from "@chakra-ui/react"

const Overview = () => {

    const poster = '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg';
    const [isLargerThan1020] = useMediaQuery('(min-width: 1020px)')

  return (
        <Flex
            w={'100%'}
            p={{base: 5, md: 7, lg: 10}}
        >
            {isLargerThan1020 &&
                <Flex
                    w={{base: '240px', md:'260px', lg:'280px'}}
                    bg={'#222222'}
                >   
                    <Image src={poster} />
                </Flex>
            }
            <Flex
                w={{base: 'calc(100% - 240px)', md:'260px', lg:'280px'}}
            >

            </Flex>
        </Flex>
    )
}

export default Overview