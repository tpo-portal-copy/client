import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'
import './index.scss'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: 'var(--bg-color)',
        color: 'var(--text-color-primary)',
        lineHeight: 'initial',
        fontFamily: "'Poppins', sans-serif",
      },
    }),
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
