import * as React from 'react'
import "../pages_styles.css"
import Markdown from 'react-markdown'
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import {Flight} from "@mui/icons-material";
import {orange} from "@mui/material/colors";
import MyImageList from "../../components/common/myimagelist";

const Graduate = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Stack direction="row">
                    <Flight sx={{fontSize: 40}} style={{color: orange[800], opacity: 1}}></Flight>
                    <Grid className="post-title" style={{color: orange[800], opacity: 1}}>
                        Jan. 2024 · Malaysia🇲🇾
                    </Grid>
                </Stack>
            </Grid>
            <Grid item xs={12} className="text-style">
                <Markdown sx={{fontSize: 40}}>
                    A Chinese blog coming soon.
                </Markdown>
                {/*<MyImageList info={flying}/>*/}
            </Grid>
        </Grid>
    )
}

const flying = {
    caption: "正在前往Kota Kinabalu",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404201637873.jpeg",
            title: "flying",
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404201641428.jpeg",
            title: "land",
        }
    ],
    width: "60%",
    col: 2
}

export default Graduate