import {createTheme} from "@mui/material";


export const themeDefault = createTheme({
    palette: {
        primary: {
            main: '#009fe0'
        },
        secondary: {
            main: '#f50057'
        },
        info: {
            main: '#a8a8a9'
        },
        background: {
            default: 'rgb(31, 41, 55)'
        }
    },
    typography: {
        h2: {
            fontSize: 24,
        }
    },
});
