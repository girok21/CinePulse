import { Flex, Image, Text, useMediaQuery } from "@chakra-ui/react"
import Socials from "./Socials"

const Overview = () => {

    //dummy data to help me with immitating
    const data = {
        "adult": false,
        "backdrop_path": "/mDnBf8hStlfF9oSBu79vYqq2lTx.jpg",
        "belongs_to_collection": null,
        "budget": 0,
        "genres": [
          {
            "id": 35,
            "name": "Comedy"
          }
        ],
        "homepage": "https://www.netflix.com/title/81416268",
        "id": 987490,
        "imdb_id": "tt7038762",
        "original_language": "en",
        "original_title": "Best. Christmas. Ever!",
        "overview": "When a twist of fate lands Charlotte and her family at her old college friend’s Jackie’s house only days before Christmas, she seizes the opportunity to prove her old friend's life isn’t as wonderful as it seems from her holiday newsletter.",
        "popularity": 122.22,
        "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "production_companies": [
          {
            "id": 2090,
            "logo_path": "/jYlUttNqcN5u1pzMQrh5AEhZ27t.png",
            "name": "Motion Picture Corporation of America",
            "origin_country": "US"
          },
          {
            "id": 64216,
            "logo_path": "/Eg9VjIFt743LPYaK8Ag0fuhWGo.png",
            "name": "Brad Krevoy Television",
            "origin_country": "US"
          }
        ],
        "production_countries": [
          {
            "iso_3166_1": "US",
            "name": "United States of America"
          }
        ],
        "release_date": "2023-11-16",
        "revenue": 0,
        "runtime": 82,
        "spoken_languages": [
          {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
          }
        ],
        "status": "Released",
        "tagline": "Make amends with old friends.",
        "title": "Best. Christmas. Ever!",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 20
      }
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
                    <Image src={data?.poster_path} />
                </Flex>
            }
            <Flex
                flex={1}
                h={'100%'}
                flexDirection={'column'}
                justifyContent={'space-between'}
            >
                <Flex flexDirection={'column'} gap={{base:3, md: 4, lg: 5}}>
                    <Text fontSize={{base:'md', md:'lg', lg:'xl'}} fontWeight={'semibold'}>
                        Summary
                    </Text>
                    <Text fontSize={{base:'sm', md:'md'}} fontWeight={'lighter'}>
                        {data.overview}
                    </Text>
                </Flex>
                <Socials imdblink={data?.imdb_id} homepagelink={data?.homepage}/>
            </Flex>
        </Flex>
    )
}

export default Overview