import Container from "@mui/material/Container";
import Footer from "./footer";
import "./layout.css"
import Navigator from "./navigator";
import Homepage from "../../pages/homepage";
import Resume from "../../pages/resume";
import Blogs from "../../pages/blogs";
import Japan from "../../pages/2023/japan";
import Yantai from "../../pages/2023/yantai";
import Vietnam from "../../pages/2024/vietnam";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {CssBaseline} from "@mui/material";
import {MyThemeProvider} from "../../contexts/themecontext";

const Layout = () => {
    return (
        <Container maxWidth="100vh" className={"fade-animation"}>
            <Container maxWidth="md">
                <MyThemeProvider>
                    <CssBaseline/>
                    <Router>
                        <Navigator></Navigator>
                        <Routes>
                            <Route path="/" element={<Homepage/>}/>
                            <Route path="/resume" element={<Resume/>}/>
                            <Route path="/blogs" element={<Blogs/>}/>
                            <Route path="/posts/2023/japan" element={<Japan/>}/>
                            <Route path="/posts/2023/yantai" element={<Yantai/>}/>
                            <Route path="/posts/2024/vietnam" element={<Vietnam/>}/>
                        </Routes>
                        <Footer></Footer>
                    </Router>
                </MyThemeProvider>
            </Container>
        </Container>
    )
}

export default Layout