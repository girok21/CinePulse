import { Box, Container, Flex } from '@chakra-ui/react'
import './App.css';
import { useMediaQuery } from '@chakra-ui/react'
import Footer from './components/general/Footer'
import NavBar from './components/general/NavBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ShowsPage from './pages/ShowsPage';
import MoviesPage from './pages/MoviesPage';
import MoviePage from './pages/MoviePage';
import ScrollToTop from './components/general/ScrollToTop';

function App() {

  const [isHorizontalNavbar] = useMediaQuery('(max-width: 1280px)');//variable to dynamically change navbar position

  return (
    <>
      <Flex minW={'100%'} minH={'calc(100% - 100px)'} flexDirection={isHorizontalNavbar? 'column':'row'}>
        {!isHorizontalNavbar && <NavBar isHorizontalNavbar={isHorizontalNavbar}/>}
        {!isHorizontalNavbar && <Box w={'100px'} h={'100%'} />}
        <Container minW={isHorizontalNavbar? "100%": 'calc(100% - 100px)'} w={'100%'} minH={'100%'} m={0} p={0} position={'relative'}>
          <ScrollToTop />
          <Routes>
            <Route index="/" element={<HomePage />} />
            <Route path='home' element={<HomePage />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='movies' element={<MoviesPage />} />
            <Route path='movies/:movieId' element={<MoviePage />} />
            <Route path='shows' element={<ShowsPage />} />
          </Routes>
           <Box w={'100%'} h={'100px'} /> {/*this box is to prevent footer from overlapping elements */}
          <Container 
            position={'absolute'}
            bottom={0}
            m={0} p={0}
          >
            <Footer isHorizontalNavbar={isHorizontalNavbar}/>
          </Container>
        </Container>
      </Flex>
      {isHorizontalNavbar && <Box minW={'full'} minH={'100px'}/>}  {/*this box is to prevent NavBar from overlapping elements */}
      {isHorizontalNavbar && <NavBar isHorizontalNavbar={isHorizontalNavbar}/>}
    </>
  )
}

export default App
