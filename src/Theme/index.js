import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from "react-redux";
import MainPage from '../Views/Pages/Main';

const getActiveTheme = (themeMode) => {
  console.log('themeMode: ', themeMode)
  return createTheme({
    pageColor: '#fff',

    bgPrimary: '#161616',
    bgSecondary: 'red',

    textPrimary: '#ffffff',
    textSecondary: 'black',
    textTertiary: '#1765FF',

    switchColor: '#b1b1b1',
  })
}
const ThemeContainer = () => {
  const currentTheme = useSelector((state) => state.LDTheme.value);
  const [activeTheme, setActiveTheme] = useState(getActiveTheme(currentTheme));

  useEffect(()=>{    
    setActiveTheme(getActiveTheme(currentTheme))
  },[currentTheme]);
  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <MainPage toggleTheme='' />
    </ThemeProvider>
  );
}

export default ThemeContainer;