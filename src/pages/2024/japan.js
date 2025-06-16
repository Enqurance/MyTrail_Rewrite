import * as React from 'react'
import "../pages_styles.css"
import Markdown from 'react-markdown'
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import {School} from "@mui/icons-material";

const Graduate = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Stack direction="row">
                    <School sx={{fontSize: 40}} style={{color: "#42A5F5", opacity: 1}}></School>
                    <Grid className="post-title" style={{color: "#42A5F5", opacity: 1}}>
                        Addd
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

// const flying = {
//     caption: "正在前往Kota Kinabalu",
//     images: [
//         {
//             img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404201637873.jpeg",
//             title: "flying",
//         },
//         {
//             img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404201641428.jpeg",
//             title: "land",
//         }
//     ],
//     width: "60%",
//     col: 2
// }

export default Graduate