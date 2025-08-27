import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
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
  components: {
    Button: {
      baseStyle: {
        colorScheme: 'blue',
      },
      variants: {
        solid: {
          bg: '#2D6187',
          color: 'white',
          _hover: { bg: '#0A458E' },
        },
      },
    },
  },
})
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
