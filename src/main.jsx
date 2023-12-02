import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css';
import { Provider } from 'react-redux';
import store from './store.js';

const styles = {
  global: (props) =>({
    body:{
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', 'rgb(17,17,17)')(props),
    }
  })
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({config, styles})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
