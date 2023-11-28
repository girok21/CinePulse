import { Flex, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VerticalCastCard from "../card/VerticalCastCard";
import { useEffect, useRef, useState } from "react";

const CastSection = ({ showId }) => {
  
    console.log(showId);
    const cards = [
      {
        "adult": false,
        "gender": 2,
        "id": 74568,
        "known_for_department": "Acting",
        "name": "Chris Hemsworth",
        "original_name": "Chris Hemsworth",
        "popularity": 69.572,
        "profile_path": "/6fGCcu1bbc0tVCMhQRmeRryGVMa.jpg",
        "cast_id": 1,
        "character": "Thor Odinson",
        "credit_id": "52fe433f9251416c750091e5",
        "order": 0
      },
      {
        "adult": false,
        "gender": 1,
        "id": 524,
        "known_for_department": "Acting",
        "name": "Natalie Portman",
        "original_name": "Natalie Portman",
        "popularity": 60.146,
        "profile_path": "/edPU5HxncLWa1YkgRPNkSd68ONG.jpg",
        "cast_id": 5,
        "character": "Jane Foster",
        "credit_id": "52fe433f9251416c750091f7",
        "order": 1
      },
      {
        "adult": false,
        "gender": 2,
        "id": 91606,
        "known_for_department": "Acting",
        "name": "Tom Hiddleston",
        "original_name": "Tom Hiddleston",
        "popularity": 44.511,
        "profile_path": "/mclHxMm8aPlCPKptP67257F5GPo.jpg",
        "cast_id": 3,
        "character": "Loki",
        "credit_id": "52fe433f9251416c750091ef",
        "order": 2
      },
      {
        "adult": false,
        "gender": 2,
        "id": 4173,
        "known_for_department": "Acting",
        "name": "Anthony Hopkins",
        "original_name": "Anthony Hopkins",
        "popularity": 46.281,
        "profile_path": "/9ukJS2QWTJ22HcwR1ktMmoJ6RSL.jpg",
        "cast_id": 6,
        "character": "Odin",
        "credit_id": "52fe433f9251416c750091fb",
        "order": 3
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1640,
        "known_for_department": "Acting",
        "name": "Stellan Skarsgård",
        "original_name": "Stellan Skarsgård",
        "popularity": 19.322,
        "profile_path": "/x78BtYHElirO7Iw8bL4m8CnzRDc.jpg",
        "cast_id": 23,
        "character": "Erik Selvig",
        "credit_id": "52fe433f9251416c7500924d",
        "order": 4
      },
      {
        "adult": false,
        "gender": 1,
        "id": 52852,
        "known_for_department": "Acting",
        "name": "Kat Dennings",
        "original_name": "Kat Dennings",
        "popularity": 43.774,
        "profile_path": "/rrfyo9z1wW5nY9ZsFlj1Ozfj9g2.jpg",
        "cast_id": 18,
        "character": "Darcy Lewis",
        "credit_id": "52fe433f9251416c75009241",
        "order": 5
      },
      {
        "adult": false,
        "gender": 2,
        "id": 9048,
        "known_for_department": "Acting",
        "name": "Clark Gregg",
        "original_name": "Clark Gregg",
        "popularity": 13.535,
        "profile_path": "/7t2uHG5m4CN2lyYnGfZO54Hn3O0.jpg",
        "cast_id": 26,
        "character": "Phil Coulson",
        "credit_id": "52fe433f9251416c75009259",
        "order": 6
      },
      {
        "adult": false,
        "gender": 2,
        "id": 10132,
        "known_for_department": "Acting",
        "name": "Colm Feore",
        "original_name": "Colm Feore",
        "popularity": 13.925,
        "profile_path": "/oOxcf1qB1IvVZrBEE1PdrfMiyBK.jpg",
        "cast_id": 28,
        "character": "King Laufey",
        "credit_id": "52fe433f9251416c75009261",
        "order": 7
      },
      {
        "adult": false,
        "gender": 2,
        "id": 17605,
        "known_for_department": "Acting",
        "name": "Idris Elba",
        "original_name": "Idris Elba",
        "popularity": 47.446,
        "profile_path": "/be1bVF7qGX91a6c5WeRPs5pKXln.jpg",
        "cast_id": 22,
        "character": "Heimdall",
        "credit_id": "52fe433f9251416c75009249",
        "order": 8
      },
      {
        "adult": false,
        "gender": 2,
        "id": 56614,
        "known_for_department": "Acting",
        "name": "Ray Stevenson",
        "original_name": "Ray Stevenson",
        "popularity": 44.073,
        "profile_path": "/bI4r9prMaFiaky3uJTndq1lDlPR.jpg",
        "cast_id": 25,
        "character": "Volstagg",
        "credit_id": "52fe433f9251416c75009255",
        "order": 9
      },
      {
        "adult": false,
        "gender": 2,
        "id": 13275,
        "known_for_department": "Acting",
        "name": "Tadanobu Asano",
        "original_name": "Tadanobu Asano",
        "popularity": 24.673,
        "profile_path": "/wDw1z9Pk9dEzopzlZQ4X8wTbj1t.jpg",
        "cast_id": 24,
        "character": "Hogun",
        "credit_id": "52fe433f9251416c75009251",
        "order": 10
      },
      {
        "adult": false,
        "gender": 2,
        "id": 77880,
        "known_for_department": "Acting",
        "name": "Josh Dallas",
        "original_name": "Josh Dallas",
        "popularity": 7.582,
        "profile_path": "/f9cjzUtgasJTZgpdqFIREhUUxbQ.jpg",
        "cast_id": 36,
        "character": "Fandral",
        "credit_id": "530ba81592514158ca000193",
        "order": 11
      },
      {
        "adult": false,
        "gender": 1,
        "id": 59817,
        "known_for_department": "Acting",
        "name": "Jaimie Alexander",
        "original_name": "Jaimie Alexander",
        "popularity": 30.829,
        "profile_path": "/j3DZpaJJzgfNm3TAqhHKtFEQu01.jpg",
        "cast_id": 4,
        "character": "Sif",
        "credit_id": "52fe433f9251416c750091f3",
        "order": 12
      },
      {
        "adult": false,
        "gender": 1,
        "id": 14343,
        "known_for_department": "Acting",
        "name": "Rene Russo",
        "original_name": "Rene Russo",
        "popularity": 35.212,
        "profile_path": "/aYgylDWH9vUZOvwKUKM2v632Efm.jpg",
        "cast_id": 19,
        "character": "Frigga",
        "credit_id": "52fe433f9251416c75009245",
        "order": 13
      },
      {
        "adult": false,
        "gender": 1,
        "id": 270,
        "known_for_department": "Acting",
        "name": "Adriana Barraza",
        "original_name": "Adriana Barraza",
        "popularity": 8.674,
        "profile_path": "/1aE7wu22bdgVTa0PMKXbAOSLiZn.jpg",
        "cast_id": 56,
        "character": "Isabela Alvarez",
        "credit_id": "56c65346c3a3680d54003fdb",
        "order": 14
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1018947,
        "known_for_department": "Acting",
        "name": "Maximiliano Hernández",
        "original_name": "Maximiliano Hernández",
        "popularity": 5.536,
        "profile_path": "/yZYUmF4t7Wu3CWjAcSANvTlSop9.jpg",
        "cast_id": 31,
        "character": "Jasper Sitwell",
        "credit_id": "52fe433f9251416c7500926d",
        "order": 15
      },
      {
        "adult": false,
        "gender": 2,
        "id": 12371,
        "known_for_department": "Acting",
        "name": "Richard Cetrone",
        "original_name": "Richard Cetrone",
        "popularity": 5.793,
        "profile_path": "/lZQqNU3QUcnIssWhIfatePfU6M7.jpg",
        "cast_id": 37,
        "character": "Frost Giant Captain",
        "credit_id": "530fbcabc3a36829c400018b",
        "order": 16
      },
      {
        "adult": false,
        "gender": 2,
        "id": 125050,
        "known_for_department": "Acting",
        "name": "Darren Kendrick",
        "original_name": "Darren Kendrick",
        "popularity": 2.089,
        "profile_path": "/7IloyS6nJlylYgoDTIFjNM1ll90.jpg",
        "cast_id": 38,
        "character": "Frost Giant Sentry",
        "credit_id": "530fbcdbc3a36829e20001a3",
        "order": 17
      },
      {
        "adult": false,
        "gender": 2,
        "id": 78150,
        "known_for_department": "Acting",
        "name": "Josh Coxx",
        "original_name": "Josh Coxx",
        "popularity": 12.909,
        "profile_path": "/8Ytez6iD1f4mVSGbixkpfGO2v1l.jpg",
        "cast_id": 39,
        "character": "Frost Giant Hailstrum",
        "credit_id": "530fbd619251411013000119",
        "order": 18
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1579743,
        "known_for_department": "Acting",
        "name": "Justice Jesse Smith",
        "original_name": "Justice Jesse Smith",
        "popularity": 0.6,
        "profile_path": "/fTT1LYfn2JWiWJp0qbWgSNDebe2.jpg",
        "cast_id": 57,
        "character": "Frost Giant Brute",
        "credit_id": "56c65454c3a3680d52003d4e",
        "order": 19
      },
      {
        "adult": false,
        "gender": 2,
        "id": 58508,
        "known_for_department": "Acting",
        "name": "Joseph Gatt",
        "original_name": "Joseph Gatt",
        "popularity": 10.11,
        "profile_path": "/ufXNVj0gOpGOB6uUnNuTIzk5rpb.jpg",
        "cast_id": 58,
        "character": "Frost Giant Grundroth",
        "credit_id": "56c655b6c3a3680d4e0042a7",
        "order": 20
      },
      {
        "adult": false,
        "gender": 2,
        "id": 169653,
        "known_for_department": "Acting",
        "name": "Luke Massy",
        "original_name": "Luke Massy",
        "popularity": 2.856,
        "profile_path": "/bY0hwF7TCSnqNft7O5ZQRTizdgd.jpg",
        "cast_id": 59,
        "character": "Frost Giant Raze",
        "credit_id": "56c6575cc3a3680d4e0042dd",
        "order": 21
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1912180,
        "known_for_department": "Acting",
        "name": "Matthew Ducey",
        "original_name": "Matthew Ducey",
        "popularity": 1.068,
        "profile_path": "/hMLRwxbdHk2u879hmfHX7rIz7qc.jpg",
        "cast_id": 71,
        "character": "Einherjar Guard",
        "credit_id": "59f16dda9251416acb0291af",
        "order": 22
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1056049,
        "known_for_department": "Production",
        "name": "Jason Camp",
        "original_name": "Jason Camp",
        "popularity": 0.616,
        "profile_path": "/uVXtWF4IYJqQ5S7dPpv358lPkww.jpg",
        "cast_id": 60,
        "character": "Einherjar Guard",
        "credit_id": "56c6585ac3a3680d4e0042fc",
        "order": 23
      },
      {
        "adult": false,
        "gender": 2,
        "id": 963745,
        "known_for_department": "Acting",
        "name": "Buddy Sosthand",
        "original_name": "Buddy Sosthand",
        "popularity": 2.835,
        "profile_path": "/9VW3Ra9fUgCWmRuvtDO71OJBiW3.jpg",
        "cast_id": 61,
        "character": "Agent Delancey",
        "credit_id": "56c658df925141498f000285",
        "order": 24
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1147968,
        "known_for_department": "Acting",
        "name": "Blake Silver",
        "original_name": "Blake Silver",
        "popularity": 2.411,
        "profile_path": "/4xrISNwkmDkMwvdXtxi0enahMSF.jpg",
        "cast_id": 62,
        "character": "Techie",
        "credit_id": "56c658f5c3a3680d52003ddb",
        "order": 25
      },
      {
        "adult": false,
        "gender": 2,
        "id": 79079,
        "known_for_department": "Acting",
        "name": "Jamie McShane",
        "original_name": "Jamie McShane",
        "popularity": 18.803,
        "profile_path": "/wojvRZMpAwytyoFTMFOpvZ26qJq.jpg",
        "cast_id": 32,
        "character": "Agent Jackson",
        "credit_id": "52fe433f9251416c75009271",
        "order": 26
      },
      {
        "adult": false,
        "gender": 2,
        "id": 25310,
        "known_for_department": "Acting",
        "name": "Dale Godboldo",
        "original_name": "Dale Godboldo",
        "popularity": 2.91,
        "profile_path": "/ixhfAtYhECFnCQcKmKNrs0MkwKI.jpg",
        "cast_id": 63,
        "character": "Agent Garrett",
        "credit_id": "56c6595fc3a3680d3e004316",
        "order": 27
      },
      {
        "adult": false,
        "gender": 2,
        "id": 84341,
        "known_for_department": "Acting",
        "name": "Patrick O'Brien Demsey",
        "original_name": "Patrick O'Brien Demsey",
        "popularity": 1.833,
        "profile_path": "/dJ3pQOE9RBU2bKDl6zEkfnnd8q5.jpg",
        "cast_id": 64,
        "character": "Agent Cale",
        "credit_id": "56c659759251415475001bd1",
        "order": 28
      },
      {
        "adult": false,
        "gender": 2,
        "id": 9568,
        "known_for_department": "Acting",
        "name": "Jim Palmer",
        "original_name": "Jim Palmer",
        "popularity": 1.418,
        "profile_path": "/oFaoyxX8EPY6VxBJ3pVyMezseuZ.jpg",
        "cast_id": 80,
        "character": "SHIELD Guard",
        "credit_id": "59f16f05c3a3680ef10057b4",
        "order": 29
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1536517,
        "known_for_department": "Acting",
        "name": "Seth Coltan",
        "original_name": "Seth Coltan",
        "popularity": 2.617,
        "profile_path": "/9B46njWOvDT0SSLCLqEHhIYVnnK.jpg",
        "cast_id": 72,
        "character": "Townie",
        "credit_id": "59f16e08c3a36806c40273e0",
        "order": 30
      },
      {
        "adult": false,
        "gender": 2,
        "id": 33045,
        "known_for_department": "Writing",
        "name": "J. Michael Straczynski",
        "original_name": "J. Michael Straczynski",
        "popularity": 3.993,
        "profile_path": "/ezbudNhoJcgIGZdx74D6kPmu1Yp.jpg",
        "cast_id": 34,
        "character": "Townie",
        "credit_id": "52fe433f9251416c7500927b",
        "order": 31
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1912182,
        "known_for_department": "Acting",
        "name": "Ryan Schaefer",
        "original_name": "Ryan Schaefer",
        "popularity": 0.6,
        "profile_path": null,
        "cast_id": 73,
        "character": "Townie",
        "credit_id": "59f16e26c3a3686008007c22",
        "order": 32
      },
      {
        "adult": false,
        "gender": 2,
        "id": 15282,
        "known_for_department": "Acting",
        "name": "Matt Battaglia",
        "original_name": "Matt Battaglia",
        "popularity": 5.891,
        "profile_path": "/zM83khRe7aVWrNTDxSJlyU23u46.jpg",
        "cast_id": 74,
        "character": "Pete",
        "credit_id": "59f16e3a9251416ad002a259",
        "order": 33
      },
      {
        "adult": false,
        "gender": 2,
        "id": 7624,
        "known_for_department": "Writing",
        "name": "Stan Lee",
        "original_name": "Stan Lee",
        "popularity": 10.561,
        "profile_path": "/kKeyWoFtTqOPsbmwylNHmuB3En9.jpg",
        "cast_id": 35,
        "character": "Stan the Man",
        "credit_id": "52fe433f9251416c7500927f",
        "order": 34
      },
      {
        "adult": false,
        "gender": 2,
        "id": 12223,
        "known_for_department": "Acting",
        "name": "Joel McCrary",
        "original_name": "Joel McCrary",
        "popularity": 10.317,
        "profile_path": "/2zFMn8HRSkjz1PwVrev9P3dm9if.jpg",
        "cast_id": 75,
        "character": "Drunk Townie",
        "credit_id": "59f16e62c3a3680ef100572c",
        "order": 35
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1884648,
        "known_for_department": "Acting",
        "name": "Isaac Kappy",
        "original_name": "Isaac Kappy",
        "popularity": 2.359,
        "profile_path": "/t2Yy4YwlmQGHCp6IOaCeWnMKENh.jpg",
        "cast_id": 76,
        "character": "Pet Store Clerk",
        "credit_id": "59f16e70c3a3680682028343",
        "order": 36
      },
      {
        "adult": false,
        "gender": 1,
        "id": 1194993,
        "known_for_department": "Acting",
        "name": "Juliet Lopez",
        "original_name": "Juliet Lopez",
        "popularity": 1.848,
        "profile_path": "/aZHUeji9oZQ6kphgIQ2AocNp8FW.jpg",
        "cast_id": 77,
        "character": "Admission Nurse",
        "credit_id": "59f16e7dc3a3680ef40060c4",
        "order": 37
      },
      {
        "adult": false,
        "gender": 2,
        "id": 109422,
        "known_for_department": "Crew",
        "name": "Rob Mars",
        "original_name": "Rob Mars",
        "popularity": 10.202,
        "profile_path": "/hJFCXTiwTc4sh0c8eFTveBBEwYI.jpg",
        "cast_id": 78,
        "character": "Orderly",
        "credit_id": "59f16e8cc3a368064e029add",
        "order": 38
      },
      {
        "adult": false,
        "gender": 1,
        "id": 1158068,
        "known_for_department": "Acting",
        "name": "Carrie Lazar",
        "original_name": "Carrie Lazar",
        "popularity": 4.942,
        "profile_path": "/j93VdcDjrsC75KobRSpZiNognVB.jpg",
        "cast_id": 79,
        "character": "Viking Mother",
        "credit_id": "59f16e97c3a3680ef1005760",
        "order": 39
      },
      {
        "adult": false,
        "gender": 1,
        "id": 1212271,
        "known_for_department": "Acting",
        "name": "Harley Graham",
        "original_name": "Harley Graham",
        "popularity": 4.803,
        "profile_path": "/8TzYJqK4CKxP5OLzB6KFhM5wK9w.jpg",
        "cast_id": 81,
        "character": "Viking Child",
        "credit_id": "59f16f689251416a9e029a36",
        "order": 40
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1266788,
        "known_for_department": "Acting",
        "name": "Alexander Wright",
        "original_name": "Alexander Wright",
        "popularity": 0.738,
        "profile_path": "/nXPSMmeOTYh55i2laljMQHAGE4N.jpg",
        "cast_id": 82,
        "character": "Viking Elder",
        "credit_id": "59f16f72c3a36806c40274da",
        "order": 41
      },
      {
        "adult": false,
        "gender": 1,
        "id": 1077059,
        "known_for_department": "Acting",
        "name": "Hilary Pingle",
        "original_name": "Hilary Pingle",
        "popularity": 1.4,
        "profile_path": "/rnXjcoorz2v0DwYMTMt0QkzvK1d.jpg",
        "cast_id": 83,
        "character": "Viking",
        "credit_id": "59f16f7cc3a3680ef10057ff",
        "order": 42
      },
      {
        "adult": false,
        "gender": 2,
        "id": 141185,
        "known_for_department": "Acting",
        "name": "Shawn-Caulin Young",
        "original_name": "Shawn-Caulin Young",
        "popularity": 2.228,
        "profile_path": "/nM1xjkGwzwjCziW47idHTCOApiI.jpg",
        "cast_id": 84,
        "character": "Viking",
        "credit_id": "59f16f85c3a3686008007d43",
        "order": 43
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1222494,
        "known_for_department": "Acting",
        "name": "Walt Simonson",
        "original_name": "Walt Simonson",
        "popularity": 1.614,
        "profile_path": "/5dD0gNaTQBmFUErEr4Wj7DpBbia.jpg",
        "cast_id": 70,
        "character": "Guest",
        "credit_id": "59f15b259251416a9e0281c6",
        "order": 44
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1396824,
        "known_for_department": "Acting",
        "name": "Kinsey McLean",
        "original_name": "Kinsey McLean",
        "popularity": 1.24,
        "profile_path": "/lbCCx8FAxtXzYdg9WZiwDB2DdAg.jpg",
        "cast_id": 85,
        "character": "Viking",
        "credit_id": "59f16f92c3a3680ef1005812",
        "order": 45
      },
      {
        "adult": false,
        "gender": 1,
        "id": 1912186,
        "known_for_department": "Acting",
        "name": "Kelly Hawthorne",
        "original_name": "Kelly Hawthorne",
        "popularity": 1.046,
        "profile_path": "/tt4WHp1BAR5J0vBXTmmP6pogizp.jpg",
        "cast_id": 86,
        "character": "Viking",
        "credit_id": "59f16f9f9251416acb029315",
        "order": 46
      },
      {
        "adult": false,
        "gender": 2,
        "id": 234479,
        "known_for_department": "Acting",
        "name": "Dakota Goyo",
        "original_name": "Dakota Goyo",
        "popularity": 11.098,
        "profile_path": "/xHfxZDILa8JRZu5OoaXKiDa781o.jpg",
        "cast_id": 67,
        "character": "Young Thor",
        "credit_id": "59f15a8fc3a36806c4025d4e",
        "order": 47
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1332974,
        "known_for_department": "Acting",
        "name": "Ted Allpress",
        "original_name": "Ted Allpress",
        "popularity": 4.914,
        "profile_path": "/aBgkpIFfOBDmNZvASJElHyAGjgx.jpg",
        "cast_id": 68,
        "character": "Young Loki",
        "credit_id": "59f15aa09251416ac1027997",
        "order": 48
      },
      {
        "adult": false,
        "gender": 2,
        "id": 51301,
        "known_for_department": "Acting",
        "name": "Douglas Tait",
        "original_name": "Douglas Tait",
        "popularity": 7.257,
        "profile_path": "/srV2pY6rPyTpHGW5saOhdbRfcrv.jpg",
        "cast_id": 69,
        "character": "Frost Giant (uncredited)",
        "credit_id": "59f15afec3a3680ef40049b5",
        "order": 49
      },
      {
        "adult": false,
        "gender": 2,
        "id": 17604,
        "known_for_department": "Acting",
        "name": "Jeremy Renner",
        "original_name": "Jeremy Renner",
        "popularity": 35.962,
        "profile_path": "/yB84D1neTYXfWBaV0QOE9RF2VCu.jpg",
        "cast_id": 29,
        "character": "Clint Barton / Hawkeye (uncredited)",
        "credit_id": "52fe433f9251416c75009265",
        "order": 50
      },
      {
        "adult": false,
        "gender": 2,
        "id": 2231,
        "known_for_department": "Acting",
        "name": "Samuel L. Jackson",
        "original_name": "Samuel L. Jackson",
        "popularity": 43.239,
        "profile_path": "/nCJJ3NVksYNxIzEHcyC1XziwPVj.jpg",
        "cast_id": 30,
        "character": "Nick Fury (uncredited)",
        "credit_id": "52fe433f9251416c75009269",
        "order": 51
      },
      {
        "adult": false,
        "gender": 1,
        "id": 149516,
        "known_for_department": "Acting",
        "name": "Vanessa Bednar",
        "original_name": "Vanessa Bednar",
        "popularity": 1.434,
        "profile_path": "/ybZ7mDCncMqcMal0aFcdGG8FKYX.jpg",
        "cast_id": 330,
        "character": "Viking Villager (uncredited)",
        "credit_id": "5f08d9261d1bf40037677aeb",
        "order": 52
      },
      {
        "adult": false,
        "gender": 1,
        "id": 1950795,
        "known_for_department": "Acting",
        "name": "Michelle Csitos",
        "original_name": "Michelle Csitos",
        "popularity": 1.22,
        "profile_path": "/bUPg7yyNmGexlGw25CcGjbhMpBm.jpg",
        "cast_id": 331,
        "character": "Viking Village Wife (uncredited)",
        "credit_id": "5f08d9485e12000037e499b6",
        "order": 53
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1451123,
        "known_for_department": "Acting",
        "name": "Stephen Oyoung",
        "original_name": "Stephen Oyoung",
        "popularity": 2.859,
        "profile_path": "/oMdNxSd8cSZaYhpaDkaYQ40Z5o0.jpg",
        "cast_id": 357,
        "character": "Einherjar Guard (uncredited)",
        "credit_id": "60b37a6aaafebd00780fb4a9",
        "order": 54
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
                Cast
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
            {cards.map((card, index) => <VerticalCastCard key={index} card={card} />)}
        </Carousel>
    </Flex>
  )
}

export default CastSection