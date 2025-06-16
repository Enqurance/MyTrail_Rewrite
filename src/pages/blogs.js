import * as React from 'react'
import Grid from '@mui/material/Grid';
import BlogCard from "../components/blogs/blogcard";
import {items} from "./assets/blogsdata"
import Divider from '@mui/material/Divider';
import "./assets/blogs.css"

const Blogs = () => {
    return (
        <Grid container>
            <Grid item xs={12} className="blogs-head">
                History Blogs
            </Grid>
            <Grid item xs={12} style={{paddingTop: 20}}>
                <Divider></Divider>
            </Grid>
            <Grid item xs={12} md={6} className="card-grid-style">
                <BlogCard info={items.australia}></BlogCard>
            </Grid>
            <Grid item xs={12} md={6} className="card-grid-style">
                <BlogCard info={items.japan_2024}></BlogCard>
            </Grid>
            <Grid item xs={12} md={6} className="card-grid-style">
                <BlogCard info={items.singapore}></BlogCard>
            </Grid>
            <Grid item xs={12} md={6} className="card-grid-style">
                <BlogCard info={items.vietnam}></BlogCard>
            </Grid>
            <Grid item xs={12} md={6} className="card-grid-style">
                <BlogCard info={items.malaysia}></BlogCard>
            </Grid>
            <Grid item xs={12} md={6} className="card-grid-style">
                <BlogCard info={items.japan_2023}></BlogCard>
            </Grid>
            <Grid item xs={12} md={6} className="card-grid-style">
                <BlogCard info={items.yantai}></BlogCard>
            </Grid>
            <Grid item xs={12} style={{paddingTop: 40}}>
                <Divider></Divider>
            </Grid>

        </Grid>
    )
}

export default Blogs