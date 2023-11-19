import { Box, Flex, Text } from "@chakra-ui/react"
import TMDBLogo from '../../assets/TMDBLogo.jsx'

const Footer = () => {

  return (
    <>
    <Flex flexDirection={'row'} p={3}>
        <Flex flexDirection={'column'} gap={1}>
            <Text fontSize={'13px'}>
                Copyright © 2023 - All rights reserved.
            </Text>
            <Flex gap={2}>
                <Flex flexDirection={'column'} gap={1} pb={2}>
                    <Text fontSize={'13px'}>
                        Data Source
                    </Text>
                    <a href="https://www.themoviedb.org/" target="blank" height={'fit-content'}>
                        <TMDBLogo height={'10px'} />
                    </a>
                </Flex>
                <Box w={'2px'} h={'full'} bg={'gray.300'} />
                <Flex flexDirection={'column'} gap={1} pb={2} justifyContent={'center'}>
                    <Text fontSize={'13px'}>
                        Made with ❤ -
                        <a href="https://github.com/girok21" target="blank" height={'fit-content'}>
                            {` @girok21`}
                        </a>
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
    </>
  )
}

export default Footer

