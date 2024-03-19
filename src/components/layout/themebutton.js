import {useThemeContext} from "../../contexts/themecontext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {IconButton, useTheme} from "@mui/material";
import "./layout.css"

const ToggleThemeButton = () => {
    const {toggleTheme} = useThemeContext();
    const theme = useTheme()

    return (
        <IconButton aria-label="menu" onClick={toggleTheme}>
            {theme.palette.mode === "dark" ?
                (<LightModeIcon  fontSize="large"/>) :
                (<DarkModeIcon  fontSize="large" style={{color:"#0133B3"}}/>)
            }
        </IconButton>
    );
};

export default ToggleThemeButton;
