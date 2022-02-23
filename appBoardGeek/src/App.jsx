import * as React from 'react';
import './App.css'
import { ThemeProvider } from '@mui/material/styles';

import  theme  from './themeConf'
import NavBar from './components/layout/Navbar'
import BoardgameList from './components/boardgames/BoardgameList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <BoardgameList/>
    </ThemeProvider>
  )
}

export default App
