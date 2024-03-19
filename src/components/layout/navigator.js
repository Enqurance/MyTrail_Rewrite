import {Avatar, Box, Button, Drawer, Grid, IconButton, Link, List, Stack, styled, useTheme} from "@mui/material";
import {useState, useEffect} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
import {useNavigate} from 'react-router-dom';
import ToggleThemeButton from "./themebutton";
import classNames from "classnames";

const Navigator = () => {

    const theme = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const navigate = useNavigate();
    const handleChangePage = (path) => {
        document.title = path === "/" ? "Homepage" : path;
        navigate(path);
    }
    const MobileList = () => (<Container
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
    >
        <List>
            <Link to="/" style={{textDecoration: "none"}}>
                <Item>
                    <JumpButton onClick={() => handleChangePage("/")}>Homepage</JumpButton>
                </Item>
            </Link>
            <Link to="/resume" style={{textDecoration: "none"}}>
                <Item>
                    <JumpButton onClick={() => handleChangePage("Resume")}>Resume</JumpButton>
                </Item>
            </Link>
            <Link to="/blogs" style={{textDecoration: "none"}}>
                <Item>
                    <JumpButton onClick={() => handleChangePage("Blogs")}>Blogs</JumpButton>
                </Item>
            </Link>
        </List>
    </Container>);

    const PCList = () => {
        return (<Box>
            <Link style={{paddingRight: "5px", textDecoration: "none"}}>
                <JumpButton onClick={() => handleChangePage("/")}>Homepage</JumpButton>
            </Link>
            <Link style={{paddingRight: "5px", textDecoration: "none"}}>
                <JumpButton onClick={() => handleChangePage("Resume")}>Resume</JumpButton>
            </Link>
            <Link style={{textDecoration: "none"}}>
                <JumpButton onClick={() => handleChangePage("Blogs")}>Blogs</JumpButton>
            </Link>
        </Box>)
    }

    const JumpButton = styled(Button)({
        color: theme.palette.mode === 'light' ? '#0033B3' : '#ffffff',
        fontWeight: 600,
        fontFamily: 'Josefin Sans, serif',
        fontSize: 25,
        textDecoration: 'none',
        textTransform: 'none'
    });

    return (<Box sx={{flexGrow: 1}}>
        <Grid container style={{paddingTop: "30px", paddingBottom: "30px"}}>
            <Grid item xs={12}>
                <Stack direction="row">
                    <Item>
                        <Avatar alt="Enqurance"
                                src="https://raw.githubusercontent.com/Enqurance/Figures/main/202311011725041.png"
                                sx={{width: 50, height: 50}}
                                variant="rounded"
                        />
                    </Item>
                    <Item>
                        <Grid container
                              className={classNames("nav-word-name", {"light-mode": theme.palette.mode === "light"})}>
                            Enqurance
                        </Grid>
                    </Item>
                    <Box flexGrow={1}/>
                    <Item>
                        <ToggleThemeButton/>
                    </Item>
                    {isMobile ? (<Item>
                        <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIcon fontSize="large"></MenuIcon>
                        </IconButton>
                        <Drawer
                            anchor='top'
                            open={isOpen}
                            onClose={toggleDrawer(false)}
                            style={{width: '100vw', height: '100vh'}}
                        >
                            <MobileList></MobileList>
                        </Drawer>
                    </Item>) : (<Item style={{display: 'flex', alignItems: 'center'}}>
                        <PCList></PCList>
                    </Item>)}
                </Stack>
            </Grid>
        </Grid>
    </Box>)
}

const Item = ({children}) => {
    return (<Grid sx={{
        boxShadow: 'none',
    }}>
        {children}
    </Grid>)
}

export default Navigator