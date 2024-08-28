import Container from '@mui/material/Container';
import {Grid, Link} from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FaceIcon from '@mui/icons-material/Face';
import Statistic from "./statistic";
import "./layout.css"


const Footer = () => {
    return (
        <Container>
            <Grid container justifyContent={"center"}>
                <Grid item paddingTop={5}>
                    <Link href={"https://github.com/Enqurance"}>
                        <GitHubIcon fontSize="large"></GitHubIcon>
                    </Link>
                    <Link href={"mailto:lin.zijie@u.nus.edu"}>
                        <EmailIcon fontSize="large" style={{marginLeft: "10px", marginRight: "5px"}}></EmailIcon>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/%E5%AD%90%E6%9D%B0-%E6%9E%97-604690296/?locale=en_US"}>
                        <LinkedInIcon fontSize="large" style={{marginLeft: "5px", marginRight: "10px"}}></LinkedInIcon>
                    </Link>
                    <Link href={"https://enqurance.github.io/"}>
                        <FaceIcon fontSize="large"></FaceIcon>
                    </Link>
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item paddingTop={1} className={"layout-copyright"}>
                    ©️{} Enqurance · 2023-2024
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item paddingTop={1} paddingBottom={1}>
                    <Statistic></Statistic>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer