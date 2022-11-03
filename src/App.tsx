import React from 'react'
import { Header } from '@components/Header'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { LIGHT_THEME } from './styles/theme/light'
import { Container } from './styles/App'
import { AppRoutes } from './routes/routes'
import { UserContextProvider } from '@contexts/user'

function App() {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <UserContextProvider>
        <Header />
        <Container>
          <AppRoutes />
        </Container>
      </UserContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
