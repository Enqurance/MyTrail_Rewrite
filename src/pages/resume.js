import * as React from 'react'
import Grid from "@mui/material/Grid";
import './assets/resume.css'
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Stack from "@mui/material/Stack";

const Resume = () => {
    return (<Grid container>
        <Grid container rowSpacing={3}>
            <Grid item xs={12} className="my-name">Zijie Lin</Grid>
            <Grid item xs={12} className="sub-title">Education</Grid>
        </Grid>
        <Stack direction="row">
            <Item>
                <ImageList cols={1}>
                    {BUAA.map((item) => (<ImageListItem key={item.img} style={{width: 80, height: 80}}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>))}
                </ImageList>
            </Item>
            <Item style={{paddingLeft: '20px', paddingTop: '20px'}}>
                <Stack className="school-title">Beihang University(Former BUAA)</Stack>
                <Stack className="text-content">Bachelor of Engineering - Computer Science and Engineering</Stack>
                <Stack className="text-content">2020.9 - Now, Beijing, China(Expected Completion: 2024)</Stack>
            </Item>
        </Stack>
        <Grid container style={{paddingTop: '20px'}}>
            <Grid item xs={24} className="sub-title">Services</Grid>
        </Grid>
        <Stack direction="row">
            <Item>
                <ImageList cols={1}>
                    {PKUSE.map((item) => (<ImageListItem key={item.img} style={{width: 80, height: 40}}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>))}
                </ImageList>
            </Item>
            <Item>
                <Stack className="school-title">PKUSE Co. </Stack>
                <Stack className="text-content">Cooperative Intern(Onsite) - Algorithm Development</Stack>
                <Stack className="text-content">2024.3 - Now, Beijing, China </Stack>
            </Item>
        </Stack>
        <Stack direction="row">
            <Item>
                <ImageList cols={1}>
                    {NTU.map((item) => (<ImageListItem key={item.img} style={{width: 80, height: 105}}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>))}
                </ImageList>
            </Item>
            <Item style={{height: '100%', alignItems: 'center', paddingLeft: '25px', paddingTop: '20px'}}>
                <Stack className="school-title">Nanyang Technological University</Stack>
                <Stack className="text-content">Intern(Onsite) - School of Computer Science and Engineering</Stack>
                <Stack className="text-content">2023.11 - 2024.2, Singapore</Stack>
            </Item>
        </Stack>
        <Stack direction="row">
            <Item>
                <ImageList cols={1}>
                    {HKU.map((item) => (<ImageListItem key={item.img} style={{width: 80, height: 90}}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>))}
                </ImageList>
            </Item>
            <Item style={{paddingLeft: '25px', paddingTop: '20px'}}>
                <Stack className="school-title">University of Hong Kong</Stack>
                <Stack className="text-content">Intern(Onsite) - Department of Computer Science</Stack>
                <Stack className="text-content">2023.7 - 2023.9, Hong Kong, China</Stack>
            </Item>
        </Stack>
        <Stack direction="row">
            <Item>
                <ImageList cols={1}>
                    {BUAA.map((item) => (<ImageListItem key={item.img} style={{width: 80, height: 80}}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>))}
                </ImageList>
            </Item>
            <Item>
                <Stack className="school-title">Beihang University(Former BUAA)</Stack>
                <Stack className="text-content">Academic Assistant - Computer Organisation, Compile
                    Technology</Stack>
                <Stack className="text-content">2022.9 -2023.1, 2023.9 - 2024.1, Beijing, China </Stack>
            </Item>
        </Stack>
        <Grid container spacing={1} style={{paddingTop: '20px'}}>
            <Grid item xs={12} className="sub-title">Skills</Grid>
            <Grid item xs={12} className={"sub-sub-title"}>
                Programming & Texting Languages:
            </Grid>
            <Grid item xs={12} className="text-content">
                C, C++, Java, Python, Golang, Verilog, JavaScript, HTML, LaTeX, Markdown
            </Grid>
            <Grid item xs={12} className="sub-sub-title">
                Frameworks & Tools:
            </Grid>
            <Grid item xs={12} className="text-content">
                React, Vue, Django, Vivado, TensorFlow, Docker
            </Grid>
            <Grid item xs={12} className="sub-sub-title">
                Languages:
            </Grid>
            <Grid item xs={12} className="text-content">
                Chinese (Native), English (IELTS Band 7)
            </Grid>
        </Grid>
        {/*<Grid container style={{paddingTop: '20px'}}>*/}
        {/*    <Grid item xs={24} className="sub-title">Projects</Grid>*/}
        {/*</Grid>*/}
    </Grid>)
}

const BUAA = [{
    img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202402162154743.png', title: 'BUAA'
}]

const HKU = [{
    img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202403172036004.png', title: 'HKU'
}]

const NTU = [{
    img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202403172029304.png", title: 'NTU'
}]

const PKUSE = [{
    img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202403191924143.jpg", title: "PKUSE"
}]


const Item = ({children}) => {
    return (<Grid sx={{
        boxShadow: 'none', paddingLeft: '10px',
    }}>
        {children}
    </Grid>)
}
export const Head = () => <title>Resume</title>

export default Resume