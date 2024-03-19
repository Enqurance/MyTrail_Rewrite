import {createContext, useContext, useState} from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';

export const ThemeContext = createContext(undefined);
export const useThemeContext = () => useContext(ThemeContext);
export const MyThemeProvider = ({children}) => {
    const [mode, setMode] = useState('light');

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    };

    const theme = createTheme({
        palette: {
            mode,
        },
    });

    return (
        <ThemeContext.Provider value={{toggleTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};