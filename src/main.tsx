import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import './index.scss'
// import {} from '@ta'

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
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
