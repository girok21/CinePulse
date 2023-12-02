import { Box, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ isHorizontalNavbar }) => {
  const navigate = useNavigate();

  return (
    <>
    <Flex 
        flexDirection={isHorizontalNavbar? 'row':'column'}
        gap={10}
        w={isHorizontalNavbar?'100%' :'100px'}
        h={isHorizontalNavbar? '100px':'100vh'}
        bg={'#101010'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRight={isHorizontalNavbar? "":'0.7px solid gray'}
        borderTop={isHorizontalNavbar?'0.7px solid gray' : ""}
        position={'fixed'}
        bottom={isHorizontalNavbar? '0': ''}
        left={isHorizontalNavbar? '': '0'}
    >
        <Box className='navbar-icon' onClick={()=>{navigate('/home')}}>
            <HomeSvg width={'45px'}/>
        </Box>
        <Box className='navbar-icon' onClick={()=>{navigate('/search')}}>
            <SearchSVG width={'45px'}/>
        </Box>
        <Box className='navbar-icon' onClick={()=>{navigate('/movies')}}>
            <MovieSVG width={'45px'}/>
        </Box>
        <Box className='navbar-icon' onClick={()=>{navigate('/shows')}}>
            <TVSVG width={'45px'}/>
        </Box>
        <Box className='navbar-icon'>
            <LightSVG width={'45px'}/>
        </Box>
    </Flex>
    {/* <Flex 
        flexDirection={'row'}
        gap={10}
        w={'100vw'}
        h={'100px'}
        bg={'tranparent'}
        justifyContent={'center'}
        alignItems={'center'}
        borderTop={'0.7px solid gray'}
        position={'sticky'}
    >
        <Box className='navbar-icon'>
            <HomeSvg width={'45px'}/>
        </Box>
        <Box className='navbar-icon'>
            <SearchSVG width={'45px'}/>
        </Box>
        <Box className='navbar-icon'>
            <MovieSVG width={'45px'}/>
        </Box>
        <Box className='navbar-icon'>
            <TVSVG width={'45px'}/>
        </Box>
        <Box className='navbar-icon'>
            <LightSVG width={'45px'}/>
        </Box>
    </Flex> */}
    </>    
  )
}

export default NavBar

const HomeSvg = (props)=> (
        <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        className="bg-nav text-3xl lg:text-5xl"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
        d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586 6 6V15l.001 5H6v-9.586l6-6z"
        stroke="none"
        />
        <path
        d="M12 18c3.703 0 4.901-3.539 4.95-3.689l-1.9-.621c-.008.023-.781 2.31-3.05 2.31-2.238 0-3.02-2.221-3.051-2.316l-1.899.627C7.099 14.461 8.297 18 12 18z"
        stroke="none"
        />
    </svg>
);

const SearchSVG = (props) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      id="searchIcon"
      className="bg-nav text-3xl lg:text-5xl"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
    </svg>
  );

  const MovieSVG = (props) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      className="bg-nav text-3xl lg:text-5xl"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 11c0-.959-.68-1.761-1.581-1.954C16.779 8.445 17 7.75 17 7c0-2.206-1.794-4-4-4-1.517 0-2.821.857-3.5 2.104C8.821 3.857 7.517 3 6 3 3.794 3 2 4.794 2 7c0 .902.312 1.727.817 2.396A1.994 1.994 0 0 0 2 11v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-2.638l4 2v-7l-4 2V11zm-5-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM6 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM4 19v-8h12l.002 8H4z"
        stroke="none"
      />
    </svg>
  );

  const TVSVG = (props) => (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      className="bg-nav text-3xl lg:text-5xl"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 6h-5.586l2.293-2.293-1.414-1.414L12 5.586 8.707 2.293 7.293 3.707 9.586 6H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM4 19V8h16l.002 11H4z"
        stroke="none"
      />
    </svg>
  ); 
  
  const LightSVG = (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2v1m0 18v1m10-10h-1M3 12H2m17.07-7.07-.392.393M5.322 18.678l-.393.393m14.141-.001-.392-.393M5.322 5.322l-.393-.393M6.341 10A6 6 0 1 0 10 6.341"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );