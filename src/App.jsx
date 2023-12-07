import { Box, Container, Flex } from '@chakra-ui/react'
import './App.css';
import { useMediaQuery } from '@chakra-ui/react'
import Footer from './components/general/Footer'
import NavBar from './components/general/NavBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ShowsPage from './pages/TV/ShowsPage';
import MoviesPage from './pages/Movies/MoviesPage';
import MovieShowPage from './pages/MovieShowPage';
import ScrollToTop from './components/general/ScrollToTop';
import TrendingMovies from './pages/Movies/TrendingMovies';
import PopularMovies from './pages/Movies/PopularMovies';
import UpcomingMovies from './pages/Movies/UpcomingMovies';
import TopRatedMovies from './pages/Movies/TopRatedMovies'
import NowPlayingMovies from './pages/Movies/NowPlayingMovies';
import AiringtodayShows from './pages/TV/AiringtodayShows';
import TrendingShows from './pages/TV/TrendingShows';
import OnTheAirShows from './pages/TV/OnTheAirShows';
import PopularShows from './pages/TV/PopularShows'
import TopRatedShows from './pages/TV/TopRatedShows'
import PersonPage from './pages/Person/PersonPage';

function App() {

  const [isHorizontalNavbar] = useMediaQuery('(max-width: 1280px)');//variable to dynamically change navbar position

  return (
    <>
        {!isHorizontalNavbar && <NavBar isHorizontalNavbar={isHorizontalNavbar}/>}
      <Flex minW={'100%'} minH={'calc(100% - 100px)'} flexDirection={isHorizontalNavbar? 'column':'row'}>
        {!isHorizontalNavbar && <Box w={'100px'} h={'100%'} />}
        <Container minW={isHorizontalNavbar? "100%": 'calc(100% - 100px)'} w={'100%'} minH={'100%'} m={0} p={0} position={'relative'}>
          <ScrollToTop />
          <Routes>
            <Route index="/" element={<HomePage />} />
            <Route path='home' element={<HomePage />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='movies' element={<MoviesPage />} />
            <Route path='movies/:movieId' element={<MovieShowPage />} />
            <Route path='movies/explore/trending' element={<TrendingMovies />} />
            <Route path='movies/explore/popular' element={<PopularMovies />} />
            <Route path='movies/explore/upcoming' element={<UpcomingMovies />} />
            <Route path='movies/explore/top-rated' element={<TopRatedMovies />} />
            <Route path='movies/explore/now-playing' element={<NowPlayingMovies />} />
            <Route path='shows' element={<ShowsPage />} />
            <Route path='shows/:showId' element={<MovieShowPage />} />
            <Route path='shows/explore/airing-today' element={<AiringtodayShows />} />
            <Route path='shows/explore/on-the-air' element={<OnTheAirShows />} />
            <Route path='shows/explore/popular' element={<PopularShows />} />
            <Route path='shows/explore/top-rated' element={<TopRatedShows />} />
            <Route path='shows/explore/trending' element={<TrendingShows />} />
            <Route path='persons/:personId' element={<PersonPage />} />
          </Routes>
           <Box w={'100%'} h={'100px'} /> {/*this box is to prevent footer from overlapping elements */}
          <Container 
            position={'absolute'}
            bottom={0}
            m={0} p={0}
            w={'inherit'}
          >
            <Footer isHorizontalNavbar={isHorizontalNavbar}/>
          </Container>
        </Container>
      {isHorizontalNavbar && <Box minW={'full'} minH={'100px'}/>}  {/*this box is to prevent NavBar from overlapping elements */}
      </Flex>
      {isHorizontalNavbar && <NavBar isHorizontalNavbar={isHorizontalNavbar}/>}
    </>
  )
}

export default App
