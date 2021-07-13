import React, { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Layout from './components/Layout'
import { lightTheme, darkTheme } from './themes'
import { ThemeProvider } from 'styled-components'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Layout toggleTheme={toggleTheme}/>
      </>
    </ThemeProvider>
  )
}

export default App
