import { useRef } from 'react';
import ReactPlayer from 'react-player'
const Videos = () => {

    const demoData = {
        "id": 872585,
        "results": [
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Yours to Own Promo",
            "key": "UdFeVo0cODs",
            "site": "YouTube",
            "size": 1080,
            "type": "Teaser",
            "official": true,
            "published_at": "2023-10-17T13:00:24.000Z",
            "id": "652e887bea84c7010c1d8436"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Oppenheimer 70mm film reel running in the BFI IMAX",
            "key": "e25RoI3rykw",
            "site": "YouTube",
            "size": 1080,
            "type": "Featurette",
            "official": true,
            "published_at": "2023-08-03T10:00:35.000Z",
            "id": "64dbc2d3d100b600ada3225b"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Oppenheimer's cast on their first viewing of Christopher Nolan's film",
            "key": "-nlQtxwdfR4",
            "site": "YouTube",
            "size": 1080,
            "type": "Featurette",
            "official": true,
            "published_at": "2023-07-28T13:00:08.000Z",
            "id": "64c4235295ce2400af1a8f96"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "The Music of Oppenheimer | The #DolbyInstitute Podcast",
            "key": "qZCsZCyHFRM",
            "site": "YouTube",
            "size": 1080,
            "type": "Featurette",
            "official": true,
            "published_at": "2023-07-25T16:00:11.000Z",
            "id": "655cfe5f3d74540100580b2d"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Get Tickets NOW",
            "key": "pPG8TS23xR4",
            "site": "YouTube",
            "size": 1080,
            "type": "Teaser",
            "official": true,
            "published_at": "2023-07-22T21:22:29.000Z",
            "id": "64e3afd2c9054f01386dc814"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Christopher Nolan, Cillian Murphy, Emily Blunt and Matt Damon on Oppenheimer",
            "key": "afaeQS_Lgcc",
            "site": "YouTube",
            "size": 1080,
            "type": "Featurette",
            "official": true,
            "published_at": "2023-07-21T12:46:46.000Z",
            "id": "64c03edc0582240151f3bc05"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Matt Damon, Emily Blunt and Cillian Murphy Discuss Oppenheimer",
            "key": "at-LPQS7Dvg",
            "site": "YouTube",
            "size": 1080,
            "type": "Featurette",
            "official": false,
            "published_at": "2023-07-19T10:28:21.000Z",
            "id": "6533edaaa0be280139a25a52"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "The Score",
            "key": "SJXNUJS5TU8",
            "site": "YouTube",
            "size": 1080,
            "type": "Behind the Scenes",
            "official": true,
            "published_at": "2023-07-18T19:00:11.000Z",
            "id": "64e3b0405258ae00add2743d"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Trinity Test",
            "key": "5ZYD-H4V2M0",
            "site": "YouTube",
            "size": 1080,
            "type": "Behind the Scenes",
            "official": true,
            "published_at": "2023-07-16T11:29:00.000Z",
            "id": "64e3b03ae0ca7f011ddb33b8"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "UK Premiere",
            "key": "Z98ojw6sK_w",
            "site": "YouTube",
            "size": 1080,
            "type": "Featurette",
            "official": true,
            "published_at": "2023-07-13T18:29:03.000Z",
            "id": "64b049e58a0e9b0100c61482"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Opening Look",
            "key": "sOsIKu2VAkM",
            "site": "YouTube",
            "size": 1080,
            "type": "Clip",
            "official": true,
            "published_at": "2023-07-13T16:00:40.000Z",
            "id": "64b040ad3e2ec800cbd1327c"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Christopher Nolan & Cast Interviews",
            "key": "wearzXv7WIE",
            "site": "YouTube",
            "size": 1080,
            "type": "Featurette",
            "official": true,
            "published_at": "2023-07-13T03:27:43.000Z",
            "id": "64b001b98a0e9b00c6ce47d6"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "The Cast",
            "key": "l5QXphRn-TM",
            "site": "YouTube",
            "size": 1080,
            "type": "Behind the Scenes",
            "official": true,
            "published_at": "2023-07-11T14:00:34.000Z",
            "id": "64aef62a3e2ec8014f4aaf57"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Pushing The Button",
            "key": "Y9EiLF7l8ug",
            "site": "YouTube",
            "size": 1080,
            "type": "Behind the Scenes",
            "official": true,
            "published_at": "2023-07-10T16:30:07.000Z",
            "id": "64ac3c153e2ec8010dacd59e"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Shooting For IMAX",
            "key": "jrMdXEtAse8",
            "site": "YouTube",
            "size": 1080,
            "type": "Behind the Scenes",
            "official": true,
            "published_at": "2023-06-01T12:00:09.000Z",
            "id": "6478a7fb0e29a200dcb99eaf"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "New Trailer",
            "key": "uYPbbksJxIg",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": true,
            "published_at": "2023-05-08T07:01:04.000Z",
            "id": "6458a73277d23b0170372259"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Official Trailer",
            "key": "bK6ldnjE3Y0",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": true,
            "published_at": "2022-12-19T00:29:01.000Z",
            "id": "639fb365223e20007d3d3618"
          }
        ]
      }

      const videoRef = useRef();

  return (
    <ReactPlayer 
        ref={videoRef}
        controls={true}
        playing={true}
        url={`https://www.youtube.com/watch?v=${demoData.results[4].key}`} 
        light={true}
        onEnded={() => videoRef.current.showPreview()}
    />
  )
}

export default Videos