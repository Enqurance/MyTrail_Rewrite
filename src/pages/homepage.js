import SelfIntro from "../components/homepage/intro";
import Timeline from "../components/homepage/timeline";
import {Grid} from "@mui/material";


const Homepage = () => {

    document.title = "Homepage";

    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <SelfIntro/>
            </Grid>
            <Grid item xs={12} md={6}  style={{paddingLeft: 20, paddingRight: 20}}>
                <Timeline/>
            </Grid>
        </Grid>
    )
}

export default Homepage