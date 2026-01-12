import * as React from 'react';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import {
    CalendarMonth,
    Flight,
    Home,
    Quiz,
    Science,
    School,
    Medication,
    Pets, Work,
    AirportShuttle,
    Landscape,
    TempleBuddhist
} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import timeline_data from "./timelinedata"
import "./homepage.css"


const Timeline = () => {
    return (
        <Box sx={{height: "200vh", display: "flex", flexDirection: "column"}}>
            {/* Top fixed area */}
            <Grid container>
                <Grid item xs={12} className="site-intro">
                    This site marks my important trails
                </Grid>
            </Grid>

            {/* Scrollable area below intro */}
            <Box
                sx={{
                    flex: 1,
                    overflowY: "auto",
                    overflowX: "hidden",
                    WebkitOverflowScrolling: "touch",
                    paddingBottom: 2,
                }}
            >
                <Grid container>
                    <Grid item xs={12} style={{paddingTop: 20}} className="year-text">
                        <Divider textAlign="left">2026</Divider>
                    </Grid>

                    <Grid item xs={12} paddingLeft={2}>
                        <Calendar color={"#032EA1"} time={"January"} />
                        <Module info={timeline_data.Cambodia}/>
                    </Grid>

                    <Grid item xs={12} style={{paddingTop: 20}} className="year-text">
                        <Divider textAlign="left">2025</Divider>
                    </Grid>

                    <Grid item xs={12} paddingLeft={2}>
                        <Calendar color={"#E30A17"} time={"December"}/>
                        <Module info={timeline_data.Taiwan}/>
                        <Module info={timeline_data.Egypt}/>
                        <Module info={timeline_data.Turkey}/>
                        <Calendar color={"#0B6623"} time={"November"}/>
                        <Module info={timeline_data.EMNLP}/>
                    </Grid>

                    <Grid item xs={12} paddingLeft={2}>
                        <Calendar color={"#FF6900"} time={"May"}/>
                        <Module info={timeline_data.Xiaomi}/>
                        <Calendar color={"#42A5F5"} time={"January"}/>
                        <Module info={timeline_data.Japan_2025}/>
                    </Grid>

                    <Grid item xs={12} style={{paddingTop: 20}} className="year-text">
                        <Divider textAlign="left">2024</Divider>
                    </Grid>

                    <Grid item xs={12} paddingLeft={2}>
                        <Calendar color={"#00BCD4"} time={"December"}/>
                        <Module info={timeline_data.Australia}/>
                        <Calendar color={"#FBC02D"} time={"August"}/>
                        <Module info={timeline_data.Begin_NUS}/>
                        <Calendar color={"#42A5F5"} time={"July"}/>
                        <Module info={timeline_data.Japan_2024}/>
                        <Module info={timeline_data.Graduate_BUAA}/>
                        <Calendar color={"#66BB6A"} time={"February"}/>
                        <Module info={timeline_data.Vietnam}/>
                        <Calendar color={"#EF6C00"} time={"January"}/>
                        <Module info={timeline_data.Malaysia}/>
                    </Grid>

                    <Grid item xs={12} style={{paddingTop: 20}} className="year-text">
                        <Divider textAlign="left">2023</Divider>
                    </Grid>

                    <Grid item xs={12} paddingLeft={2}>
                        <Calendar color={"#1664C0"} time={"December"}/>
                        <Module info={timeline_data.NTU}/>
                        <Calendar color={"#6D4C41"} time={"November"}/>
                        <Module info={timeline_data.Japan}/>

                         <Calendar color={"#2F7D32"} time={"October"}/>
                         <Module info={timeline_data.Yantai}/>
                        {/* <Module info={timeline_data.National}/> */}
                        {/* <Calendar color={"#EF6C00"} time={"September"}/> */}
                        {/* <Module info={timeline_data.Changsha}/> */}
                        {/* <Module info={timeline_data.Xiaan}/> */}
                        {/* <Calendar color={"#FBC02D"} time={"August"}/> */}
                        {/* <Module info={timeline_data.Month}/> */}

                        <Calendar color={"#7B1EA2"} time={"July"}/>
                        <Module info={timeline_data.HKU}/>

                        {/* <Calendar color={"#00BCD4"} time={"June"}/> */}
                        {/* <Module info={timeline_data.Changbai}/> */}
                        {/* <Calendar color={"#81C784"} time={"February"}/> */}
                        {/* <Module info={timeline_data.School}/> */}
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
};

const Module = ({info}) => {

    const logo = () => {
        switch (info.logo) {
            case "flight":
                return <Flight fontSize="large" sx={{color: info.color}}/>
            case "school":
                return <School fontSize="large" sx={{color: info.color}}/>
            case "science":
                return <Science fontSize="large" sx={{color: info.color}}/>
            case "home":
                return <Home fontSize="large" sx={{color: info.color}}/>
            case "quiz":
                return <Quiz fontSize="large" sx={{color: info.color}}/>
            case "medication":
                return <Medication fontSize="large" sx={{color: info.color}}/>
            case "pets":
                return <Pets fontSize="large" sx={{color: info.color}}/>
            case "work":
                return <Work fontSize="large" sx={{color: info.color}}/>
            case "airport":
                return <AirportShuttle fontSize="large" sx={{color: info.color}}/>
            case "landscape":
                return <Landscape fontSize="large" sx={{color: info.color}}/>
            case "temple":
                return <TempleBuddhist fontSize="large" sx={{color: info.color}}/>
            default:
                return <Flight fontSize="large" sx={{color: info.color}}/>
        }
    }

    return (
        <Stack direction="row" spacing={2} paddingLeft={1.5}>
            <Divider orientation="vertical" flexItem/>
            {info.link !== "" ? (
                <Link href={info.link} underline={"none"}
                      sx={{'&:hover': {opacity: 0.7}}}>
                    <Stack direction="row" spacing={2} paddingTop={2}>
                        {logo()}
                        <Grid container className="info-text" style={{color: info.color}}>
                            {info.time}
                            <br/>
                            {info.context}
                        </Grid>
                    </Stack>
                </Link>
            ) : (
                <Stack direction="row" spacing={2} paddingTop={2}>
                    {logo()}
                    <Grid container className="info-text" style={{color: info.color}}>
                        {info.time}
                        <br/>
                        {info.context}
                    </Grid>
                </Stack>
            )}
        </Stack>
    )
}

const Calendar = ({color, time}) => {
    return (
        <Stack direction="row" spacing={2} paddingTop={1.5}>
            <CalendarMonth sx={{color: color}}></CalendarMonth>
            <Grid container className="date-text" style={{color: color}}>
                {time}
            </Grid>
        </Stack>
    )
}

export default Timeline