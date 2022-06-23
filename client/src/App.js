import React from 'react';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider} from '@mui/material/styles';
 import  BackgroundImage from './assest/BackgroundImage.js';
  import Hero from './components/Hero';




function App() {
  const theme = createTheme({
    typography: {
      h1: {
        fontFamily: ['Dosis'],
        fontWeight: 800
      },
      h2: {
        fontFamily: ['Dosis'],
        fontWeight:  400
      },
      h3: {
        fontFamily: ['Dosis', 'sans-serif'],
        fontWeight:  400
      },
      h4: {
        fontFamily: ['Dosis', 'sans-serif'],
        fontWeight:  400
      },
      button: {
        fontFamily: ['Dosis', 'sans-serif'],
        fontWeight:  200
      },
      palette: {
        red: '#ab003c',
        },
    },
  });
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <BackgroundImage />
        <Header />
        <Hero />
        
        </ThemeProvider>
    </div>
  );
}

export default App;
