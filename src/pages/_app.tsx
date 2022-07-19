import {AppProps} from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarNavContextProvider } from '../context/SidebarNavContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarNavContextProvider>
        <Component {...pageProps} />
      </SidebarNavContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
