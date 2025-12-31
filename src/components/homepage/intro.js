import {Grid, Typography, useTheme} from "@mui/material";
import "./homepage.css"
import MyImageList from "../common/myimagelist";
import Carousel from 'react-material-ui-carousel';
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


const SelfIntro = () => {
    return (
        <Grid container>
            <MyName></MyName>
            <Grid item xs={12} className="self-intro">
                Hello, my name is Zijie Lin and Enqurnace is my
                <span className="self-intro-bold"> nick name</span>
                , I am currently a master student of National University of Singapore
                (NUS). Before that, I obtained my bachelor's degree in Computer Science
                from Beihang University(Also known as BUAA).
            </Grid>
            <Grid item xs={12} className="self-intro">
                I have many hobbies, among which programming, photography, and travelling are my favorites.
                I also play League of Legends(LOL) and Valorant for recreation😆.
                I do LLM related research topics at both BUAA and NUS. I am truly honored to be supervised by Professor
                Bryan, a kind, responsible, and supportive supervisor whose guidance I deeply value.
            </Grid>
            <Grid item xs={12}>
                <MyImageList info={changbai}/>
            </Grid>
            <Grid item xs={12} className="self-intro">
                I own two lovely cats🐱, Xiangxiang and Oubao. Together with my parents,
                I live a happy life. I wish for them to be healthy and joyful everyday.
            </Grid>
            <Grid item xs={12}>
                <MyImageList info={cats}/>
            </Grid>
            <Grid item xs={12} className="self-intro">
                It is also truly fortunate for me to have crossed paths with my wonderful friends throughout various
                stages of my life, with whom I have shared countless meaningful moments🎇.
            </Grid>
            <Grid item xs={12} className="self-intro">
                <ImageCarousel/>
            </Grid>
        </Grid>
    )
}

const MyName = () => {
    const theme = useTheme()

    return (
        <Grid container>
            <Grid item xs={12} className=" avatar-text">
                <span style={{color: "#4286F3"}}>B</span>
                <span style={{color: "#FBC805"}}>o</span>
                <span style={{color: "#EB4335"}}>n</span>
                <span style={{color: "#4286F3"}}>j</span>
                <span style={{color: "#34A853"}}>o</span>
                <span style={{color: "#4286F3"}}>u</span>
                <span style={{color: "#EB4335"}}>r</span>
                <span style={{color: "#FBC805"}}>!</span>
                <Grid style={{
                    whiteSpace: 'pre-wrap',
                    color: theme.palette.mode === "light" ? "#0133B3" : "#ffffff",
                    fontSize: 25,
                    paddingTop: 20
                }}>
                    Welcome to Enqurnace's Site~
                </Grid>
            </Grid>
        </Grid>
    )
}

const ImageCarousel = () => {
    return (
        <Carousel autoPlay={true} animation="slide" indicators={false} height={400}>
            {items.map((item, index) => (
                <Card key={index} out style={{alignItems: 'center'}} variant="outlined">
                    <CardMedia component="img" image={item.img} title={item.title} style={{height: '250px'}}/>
                    <CardContent>
                        <Typography className="my-caption">
                            {item.title}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Carousel>
    );
};

const changbai = {
    "caption": "This was taken on Changbai Mountain in Jul. 2023",
    "images": [
        {
            "img": "https://raw.githubusercontent.com/Enqurance/Figures/main/202403031816454.png",
            "title": "changbai"
        }
    ],
    "width": "100%",
    "col": 1
}

const cats = {
    "caption": "Xiangxiang & Oubao",
    "images": [
        {
            "img": "https://raw.githubusercontent.com/Enqurance/Figures/main/202408281602980.jpg",
            "title": "Ou",
        },
        {
            "img": "https://raw.githubusercontent.com/Enqurance/Figures/main/202408281602731.png",
            "title": "Xiang",
        }
    ],
    "width": "100%",
    "col": 2
}

const items = [
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202408281602813.png",
        title: "My Graduation, the photo is taken at THU"
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/99c69e67b8e1566e94a2374c60787197.jpg",
        title: "Visted Taiwan with Songxiao. We travelled around Taiwan island."
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/d065fa82a3b46c1f4d2bb0be2c601556.jpg",
        title: "Visted Türkiye with Xindu Yu (MA. at NUS)"
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202408281605982.png",
        title: "Visited Japan with Raywha Chen, X. Tuo(Now Ph.D at THU), Q. Zhang(Now MA. at THU), 2024"
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311012342376.png",
        title: "HKU, 2023.7-2023.9",
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311020000127.png",
        title: "Ruihua Chen(Now Ph.D at THU)",
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311020002390.jpeg",
        title: "Alxa Union, 2021-2024",
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311020004159.jpeg",
        title: "2022 Beijing Winter Olympics, 2022.1-2022.3"
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311020806412.png",
        title: "ZY Qu(Now MA. at BUAA)"
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311020010662.jpeg",
        title: "Sia Yang(Now MA. at HUST) and James Jian(Now Ph.D at SYSU)"
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311020017110.png",
        title: "Erenrat Zeng(Now MA. at ANU)"
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202506162357607.jpeg",
        title: "An unforgettable journey with Erenrat in Australia!"
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202506170008560.jpeg",
        title: "Meeting Dr. Guo in Singapore"
    }
]
export default SelfIntro