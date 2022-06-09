import React from 'react'
import Hero from "./Hero"
import Header from "./Header"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import  BackgroundImage from '../assest/BackgroundImage.js';




function Layout({ children }) {

    const theme = createTheme({
        typography: {
          fontFamily: [
            'Poppins',
            'sans-serif',
          ].join(','),
        },
      });

    return (
        <>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <BackgroundImage />
        <Header />
        <Hero />
        
        </ThemeProvider>
        </>
    
      );
    }
    

export default Layout