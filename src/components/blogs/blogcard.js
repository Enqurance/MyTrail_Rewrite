import * as React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import './blogcard.css'
import Grid from "@mui/material/Grid";
import {useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";

const BlogCard = ({info}) => {

    const theme = useTheme();

    const navigate = useNavigate();
    const handleChangePage = (path) => {
        document.title = path === "/" ? "Homepage" : path;
        navigate(path);
    }

    return (
        <Grid className="card-style">
            <Card>
                <Grid container style={{cursor: "pointer"}} onClick={() => handleChangePage(info.link)}
                      underline="none">
                    <CardMedia
                        component="img"
                        height="200"
                        image={info.image}
                        alt={info.alt}
                    />
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={12}
                                  className={theme.palette.mode === "light" ? "card-title-style-light" : "card-title-style"}>
                                {info.title}
                            </Grid>
                            <Grid item xs={12}
                                  className={theme.palette.mode === "light" ? "card-time-style-light" : "card-time-style"}>
                                {info.time}
                            </Grid>
                            <Grid item xs={12}
                                  className={theme.palette.mode === "light" ? "card-text-style-light" : "card-text-style"}>
                                {info.text}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
            </Card>
        </Grid>
    );
}

export default BlogCard