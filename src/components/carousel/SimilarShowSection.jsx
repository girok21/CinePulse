import { Flex, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VerticalShowCard from "../card/VerticalShowCard.jsx";
import { useEffect, useRef, useState } from "react";

const SimilarShowSection = ({ movieId }) => {
    console.log(movieId)
    const cards = [
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          14
        ],
        "id": 938180,
        "original_language": "pt",
        "original_title": "Iemanjá – Deusa do Oceano",
        "overview": "Following a crucial theme in Brazilian culture, “Iemanjá – Ocean’s Goddess” will tell the story of Iemanjá, an Orixá or goddess adored by the Brazilian people and also known as the Queen of the Sea. With Ogum, the King of War, as her mentor, Iemanjá, who has psychic abilities, battles with Iansã, an Orixá worshiped as the Storm Goddess.",
        "popularity": 0.84,
        "poster_path": "/iK5b0ubasHTRbZzd0F0rYpx74U3.jpg",
        "release_date": "2025-01-01",
        "title": "Iemanjá - Ocean's Goddess",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/6EJ3kjtIzo33mZlhN0RsTYApy37.jpg",
        "genre_ids": [
          28,
          878,
          18,
          35
        ],
        "id": 936048,
        "original_language": "ja",
        "original_title": "仮面ライダーフォーゼ スペシャルイベント 天ノ川学園高等学校 春の学園祭スペシャル",
        "overview": "The Kamen Rider Fourze Special Event Amanogawa Gakuen High School Spring School Festival Special was held at Grand Prince Hotel New Takanawa on May 3rd and 4th, 2012. The video features  Kamen Rider Fourze Special Show,  a must-see original stage show, followed by a Cast Special Talk Show",
        "popularity": 0.636,
        "poster_path": "/7cL1Kyneatx2zOv5VX1sFPqVtMt.jpg",
        "release_date": "2012-09-21",
        "title": "Kamen Rider Fourze Special Event: Amanogawa High School Spring Festival Special",
        "video": true,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/xfBnQ4mgf1jYZsscJGJjr6ce0Ar.jpg",
        "genre_ids": [
          878,
          28,
          12
        ],
        "id": 1724,
        "original_language": "en",
        "original_title": "The Incredible Hulk",
        "overview": "Scientist Bruce Banner scours the planet for an antidote to the unbridled force of rage within him: the Hulk. But when the military masterminds who dream of exploiting his powers force him back to civilization, he finds himself coming face to face with a new, deadly foe.",
        "popularity": 68.113,
        "poster_path": "/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg",
        "release_date": "2008-06-12",
        "title": "The Incredible Hulk",
        "video": false,
        "vote_average": 6.206,
        "vote_count": 11111
      },
      {
        "adult": false,
        "backdrop_path": "/bOShwFksS0d8QBI1uZWUcmN2yCi.jpg",
        "genre_ids": [
          28,
          878,
          80,
          35,
          18
        ],
        "id": 936093,
        "original_language": "ja",
        "original_title": "風都 Presents 仮面ライダー W スペシャルイベント",
        "overview": "The special event is a stage show held on December 20, 2009 at Shibuya C.C. Lemon Hall, to commemorate the release of the movie Kamen Rider x Kamen Rider W & Decade Movie Taisen 2010. It features the casts and song artists from the Kamen Rider W TV series.",
        "popularity": 0.6,
        "poster_path": "/mC0bf43hs7LAOhbGuTopSXhdmr.jpg",
        "release_date": "2010-04-21",
        "title": "Fuuto Presents: Kamen Rider W Special Event Supported by Windscale",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          16,
          10751,
          14
        ],
        "id": 936108,
        "original_language": "en",
        "original_title": "The Smurf Movie",
        "overview": "An animated musical film focused on Peyo's iconic creations.",
        "popularity": 2.346,
        "poster_path": null,
        "release_date": "2025-02-12",
        "title": "The Smurf Movie",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": "/cyecB7godJ6kNHGONFjUyVN9OX5.jpg",
        "genre_ids": [
          28,
          878,
          12
        ],
        "id": 1726,
        "original_language": "en",
        "original_title": "Iron Man",
        "overview": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        "popularity": 120.877,
        "poster_path": "/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
        "release_date": "2008-04-30",
        "title": "Iron Man",
        "video": false,
        "vote_average": 7.639,
        "vote_count": 25076
      },
      {
        "adult": false,
        "backdrop_path": "/4NWWpT0jiMUak8r6jfpvG4eBgFU.jpg",
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 1771,
        "original_language": "en",
        "original_title": "Captain America: The First Avenger",
        "overview": "During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
        "popularity": 66.911,
        "poster_path": "/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
        "release_date": "2011-07-22",
        "title": "Captain America: The First Avenger",
        "video": false,
        "vote_average": 6.995,
        "vote_count": 20413
      },
      {
        "adult": false,
        "backdrop_path": "/wXzdoMyLYvz7AoXPGx5STZ1XZDd.jpg",
        "genre_ids": [
          14,
          35,
          12
        ],
        "id": 1832,
        "original_language": "en",
        "original_title": "Dogma",
        "overview": "The latest battle in the eternal war between Good and Evil has come to New Jersey in the late, late 20th Century. Angels, demons, apostles and prophets (of a sort) walk among the cynics and innocents of America and duke it out for the fate of humankind.",
        "popularity": 20.411,
        "poster_path": "/xI5beD8Td79E2uZNAxgd1gWWOEd.jpg",
        "release_date": "1999-11-12",
        "title": "Dogma",
        "video": false,
        "vote_average": 6.913,
        "vote_count": 2315
      },
      {
        "adult": false,
        "backdrop_path": "/aDfGKWdtNHzDmnHkdDyXz7zoDuy.jpg",
        "genre_ids": [
          12,
          14,
          28,
          35,
          53
        ],
        "id": 4442,
        "original_language": "en",
        "original_title": "The Brothers Grimm",
        "overview": "Folklore collectors and con artists, Jake and Will Grimm, travel from village to village pretending to protect townsfolk from enchanted creatures and performing exorcisms. However, they are put to the test when they encounter a real magical curse in a haunted forest with real magical beings, requiring genuine courage.",
        "popularity": 31.956,
        "poster_path": "/v6J7QGCSrtvwvqAt6783BbO3h61.jpg",
        "release_date": "2005-08-26",
        "title": "The Brothers Grimm",
        "video": false,
        "vote_average": 5.803,
        "vote_count": 2567
      },
      {
        "adult": false,
        "backdrop_path": "/rxBajxk8nRAtxKDBYCV5yR2qR0u.jpg",
        "genre_ids": [
          16,
          12,
          10751,
          14
        ],
        "id": 938409,
        "original_language": "en",
        "original_title": "Royal Enchantimals: A Royal Rescue",
        "overview": "",
        "popularity": 1.771,
        "poster_path": "/5qm8WFuvrjyIsX0xV1q6fYas165.jpg",
        "release_date": "2021-01-20",
        "title": "Royal Enchantimals: A Royal Rescue",
        "video": false,
        "vote_average": 9,
        "vote_count": 1
      },
      {
        "adult": false,
        "backdrop_path": "/iYdgEUE2W2aJkgqfSjf1x3gFfuV.jpg",
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 363088,
        "original_language": "en",
        "original_title": "Ant-Man and the Wasp",
        "overview": "Just when his time under house arrest is about to end, Scott Lang once again puts his freedom at risk to help Hope van Dyne and Dr. Hank Pym dive into the quantum realm and try to accomplish, against time and any chance of success, a very dangerous rescue mission.",
        "popularity": 63.043,
        "poster_path": "/cFQEO687n1K6umXbInzocxcnAQz.jpg",
        "release_date": "2018-07-04",
        "title": "Ant-Man and the Wasp",
        "video": false,
        "vote_average": 6.948,
        "vote_count": 12614
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          10752,
          28,
          18
        ],
        "id": 199581,
        "original_language": "en",
        "original_title": "Captain Battle: Legacy War",
        "overview": "By adopting the experimental drug while the military, battle of Sam followed in the footsteps of the super hero of World War II, known great-grandfather, as his battle CAPTAIN. Drug turns him into super-being and intelligence beyond that of an ordinary human strength, and agility. After his service, he returns home to home over to the ruthless neo-Nazi thugs by referring to the mastermind of evil known as the service is Necromancer. Third Reich is equipped again raise re-animation by Himmler them. Sam only, as captain of the battle, will be able to save them!",
        "popularity": 2.185,
        "poster_path": "/eHc3meYDTLo7rS5bVT1gVRVpWFo.jpg",
        "release_date": "2013-01-12",
        "title": "Captain Battle: Legacy War",
        "video": false,
        "vote_average": 0.875,
        "vote_count": 4
      },
      {
        "adult": false,
        "backdrop_path": "/dnpSUzbvUy1sULcLddMMpUXsCAo.jpg",
        "genre_ids": [
          28,
          18,
          35,
          12
        ],
        "id": 199584,
        "original_language": "ko",
        "original_title": "은밀하게 위대하게",
        "overview": "Three elite North Korean sleeper agents live under cover for so long that they believe their cover stories are their real identities. They are shocked when they are ordered to kill one another or face death at the hands of an elite hit team.",
        "popularity": 10.89,
        "poster_path": "/n5ESZzOGxnmugkLvyd45wOsn0mg.jpg",
        "release_date": "2013-06-05",
        "title": "Secretly, Greatly",
        "video": false,
        "vote_average": 7.074,
        "vote_count": 170
      },
      {
        "adult": false,
        "backdrop_path": "/98kbLdg6rDqhYySxROTluRbLy5t.jpg",
        "genre_ids": [
          28,
          80,
          14
        ],
        "id": 414,
        "original_language": "en",
        "original_title": "Batman Forever",
        "overview": "Batman must battle a disfigured district attorney and a disgruntled former employee with help from an amorous psychologist and a young circus acrobat.",
        "popularity": 45.513,
        "poster_path": "/mzzNBVwTiiY94xAXDMWJpNPW2US.jpg",
        "release_date": "1995-06-16",
        "title": "Batman Forever",
        "video": false,
        "vote_average": 5.408,
        "vote_count": 4821
      },
      {
        "adult": false,
        "backdrop_path": "/tgPFZxhDuxWd4VXYaz8eAUznGTF.jpg",
        "genre_ids": [
          28,
          878,
          12
        ],
        "id": 415,
        "original_language": "en",
        "original_title": "Batman & Robin",
        "overview": "Batman and Robin deal with relationship issues while preventing Mr. Freeze and Poison Ivy from attacking Gotham City.",
        "popularity": 38.474,
        "poster_path": "/cGRDufDDSrFrv7VI4YnmWnslne0.jpg",
        "release_date": "1997-06-20",
        "title": "Batman & Robin",
        "video": false,
        "vote_average": 4.336,
        "vote_count": 4665
      },
      {
        "adult": false,
        "backdrop_path": "/frDS8A5vIP927KYAxTVVKRIbqZw.jpg",
        "genre_ids": [
          14,
          28,
          80
        ],
        "id": 268,
        "original_language": "en",
        "original_title": "Batman",
        "overview": "Batman must face his most ruthless nemesis when a deformed madman calling himself \"The Joker\" seizes control of Gotham's criminal underworld.",
        "popularity": 56.755,
        "poster_path": "/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg",
        "release_date": "1989-06-21",
        "title": "Batman",
        "video": false,
        "vote_average": 7.22,
        "vote_count": 7231
      },
      {
        "adult": false,
        "backdrop_path": "/lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg",
        "genre_ids": [
          28,
          80,
          18
        ],
        "id": 272,
        "original_language": "en",
        "original_title": "Batman Begins",
        "overview": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
        "popularity": 73.493,
        "poster_path": "/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg",
        "release_date": "2005-06-10",
        "title": "Batman Begins",
        "video": false,
        "vote_average": 7.703,
        "vote_count": 19774
      },
      {
        "adult": false,
        "backdrop_path": "/kPcHuPYqzkSo4bmPHtH82GaeEgX.jpg",
        "genre_ids": [
          12,
          14,
          28
        ],
        "id": 285,
        "original_language": "en",
        "original_title": "Pirates of the Caribbean: At World's End",
        "overview": "Captain Barbossa, long believed to be dead, has come back to life and is headed to the edge of the Earth with Will Turner and Elizabeth Swann. But nothing is quite as it seems.",
        "popularity": 103.009,
        "poster_path": "/jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg",
        "release_date": "2007-05-19",
        "title": "Pirates of the Caribbean: At World's End",
        "video": false,
        "vote_average": 7.244,
        "vote_count": 13479
      },
      {
        "adult": false,
        "backdrop_path": "/x7fK0oOUX8Ks1B1lZsACmCXUybI.jpg",
        "genre_ids": [
          28,
          14,
          9648,
          80
        ],
        "id": 314,
        "original_language": "en",
        "original_title": "Catwoman",
        "overview": "Liquidated after discovering a corporate conspiracy, mild-mannered graphic artist Patience Phillips washes up on an island, where she's resurrected and endowed with the prowess of a cat — and she's eager to use her new skills... as a vigilante. Before you can say \"cat and mouse\", handsome gumshoe Tom Lone is on her tail, fascinated by both of her personas.",
        "popularity": 36.675,
        "poster_path": "/pvnPgukFyEKgCzyOxyLiwyZ8T1C.jpg",
        "release_date": "2004-07-22",
        "title": "Catwoman",
        "video": false,
        "vote_average": 4.586,
        "vote_count": 3110
      },
      {
        "adult": false,
        "backdrop_path": "/7OsGo8yVkTgD1ZJMBi9M8GP5aes.jpg",
        "genre_ids": [
          28,
          12,
          35,
          10751
        ],
        "id": 332,
        "original_language": "en",
        "original_title": "Inspector Gadget",
        "overview": "John Brown is a bumbling but well-intentioned security guard who is badly injured in an explosion planned by an evil mastermind. He is taken to a laboratory, where Brenda, a leading robotics surgeon, replaces his damaged limbs with state-of-the-art gadgets and tools. Named \"Inspector Gadget\" by the press, John -- along with his niece, Penny, and her trusty dog, Brain -- uses his new powers to discover who was behind the explosion.",
        "popularity": 19.953,
        "poster_path": "/eKpK8FaQDpkgp3HHm3YrIDqUjWh.jpg",
        "release_date": "1999-07-23",
        "title": "Inspector Gadget",
        "video": false,
        "vote_average": 4.5,
        "vote_count": 1112
      }
    ]
    const carouselContainerRef = useRef(); 
    const [dynamicWidth, setDynamicWidth] = useState(null);
    useEffect(()=>{
        // setDynamicWidth on first mount
    setDynamicWidth(carouselContainerRef.current.offsetWidth);

    const setSizer = () => {
      setDynamicWidth(carouselContainerRef.current.offsetWidth);
    };
    window.addEventListener("resize", setSizer);

    // cleanup function
    return () => window.removeEventListener("resize", setSizer);
    }, [dynamicWidth])
    const responsive ={
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: dynamicWidth/210
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: dynamicWidth/157
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: dynamicWidth/110
        }
      };

  return (
    <Flex 
        gap={{base: '2', md:'3', lg:'4'}} 
        w={'100%'} h={'fit-content'}
        flexDirection={'column'}
        ref={carouselContainerRef}
    >
        <Flex gap={5} alignItems={'center'}>
            <Text fontSize={{base:'md', md:'lg', xl:'2xl'}} fontWeight={'semibold'}>
                More Like This
            </Text>
            {/* <Button
                onClick={()=>{navigate(exploreLink)}}
                size={'sm'}
            >
                EXPLORE ALL
            </Button> */}
        </Flex>
        <Carousel
            containerClass="carousel-container"
            responsive={responsive}
        >
            {cards.map((card, index) => <VerticalShowCard key={index} card={card} />)}
        </Carousel>
    </Flex>
  )
}

export default SimilarShowSection