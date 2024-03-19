import * as React from 'react'
import "../pages_styles.css"
import Markdown from 'react-markdown'
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import {Flight} from "@mui/icons-material";
import {red} from "@mui/material/colors";
import MyImageList from "../../components/common/myimagelist";

const Vietnam = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Stack direction="row">
                    <Flight sx={{fontSize: 40}} style={{color: red[800], opacity: 1}}></Flight>
                    <Grid className="post-title" style={{color: red[800], opacity: 1}}>
                        Feb. 2024 · Vietnam🇻🇳
                    </Grid>
                </Stack>
            </Grid>
            <Grid item xs={12} className="text-style">
                <Markdown>
                    之前和朋友聊天时，我开玩笑地说新加坡还没有佛山大。事实上也确实是如此，
                    尽管新加坡是一个高度发达的国家，但是作为旅游目的地来说，并不是非常的理想。
                    某天上班摸鱼的时候，我发现到缅甸、越南的机票比较便宜，因此心血来潮，
                    又想要计划一场旅行。最后，处于安全的考虑，我还是选择了越南。
                </Markdown>
                <Markdown>
                    出发前，我在飞猪上办理了越南的电子签证，需要的材料比想象中的要简单，
                    并且越南也是落地签证，去越南旅游还是相当方便的。2.2号中午，
                    我从新加坡樟宜机场再次出发。
                </Markdown>
                <MyImageList info={changi}/>
                <Markdown>
                    大约两个小时，我就到达了胡志明市，也就是以前的西贡。一出机场，一股热气扑面而来，
                    这里甚至比新加坡更加闷热。机场外面围了一圈又一圈拉客的司机，因为时间比较着急，
                    我在这个时候上了一辆不应该上的黑车。事后我才反应过来，我应该是在这里丢了180美金和500人民币...
                    但事已至此，在越南这种地方报警也是不太现实的，只能当作买个教训了。
                </Markdown>
                <Markdown>
                    在胡志明市的下午，我参观了粉红教堂、统一宫和滨城市场，并且吃了麦当劳。
                    胡志明给人一种00年代中国的感觉，喧嚣、热闹，而且到处都是摩托车。
                    摩托车是胡志明的灵魂。“九百万人，九百万辆摩托车”。人们在出行的时候会把摩托车停在街边，
                    而越南因此诞生了一种特殊的职业：摩托车保安。他们穿着制服，在每个店铺门口的摩托车停车位守候着，
                    看守一排排的摩托。
                </Markdown>
                <MyImageList info={saigon}/>
                <Markdown>
                    晚上，我准备搭乘越南的Sleeping Bus前往芽庄。这种长途汽车是可以在上面睡觉的，
                    也算是一种新奇的体验。不过一路上还是十分颠簸，加上我的精神比较兴奋，所以并没有睡的很好。
                </Markdown>
                <MyImageList info={bus}/>
                <Markdown>
                    早上五点，我到达了芽庄。一大早，已经有很多人在海边锻炼了，不过天气仍旧是很冷。
                    我叫了一辆摩托前往酒店，一路上非常的冷，冻的我直打哆嗦。到了酒店，
                    还不能马上入住，所以我寄存了行李，然后去海边吃了一顿早餐。
                    太阳从海面上升起，金色的光辉洒在海滩上，这样的景色让人流连忘返。
                </Markdown>
                <MyImageList info={sunrise}/>
                <Markdown>
                    入住之后，由于前一晚实在是太累了，因此我先睡了几个小时，直到下午三四点才起来。
                    然后，我泡了点咖啡，点了一份粉，并且吃了酒店赠送的马卡龙。酒店的视角非常好，
                    在国内你很少能在这么好的沙滩旁找到这么好的度假酒店。其实出来旅游不一定要为各类景点奔波，
                    能够全面地放松身心，也是不错的选择。
                </Markdown>
                <MyImageList info={hotel}/>
                <Markdown>
                    晚上，我在酒店附近逛了一下，点了一些本地的外卖，就早早休息了。
                    第二天还要去参加跳岛游，因此需要保证充沛的精力。
                </Markdown>
                <Markdown>
                    第二天一大早，我就起床了。都说越南的本地咖啡很有特色，因此我再次使用了酒店的送餐午饭。
                    早点到了以后，好家伙，咖啡只装了半杯。我尝了一口，首先感觉到的是一股腥味儿，
                    随后则有一股特别甜腻的味道从舌根涌上来。说真的，味道不咋地，我个人也很难理解为什么东南亚人都喜欢甜口咖啡。
                    不过既来之则安之，就当作一种特别的经历吧。
                </Markdown>
                <Markdown>
                    随后，我便跟团出发了。这次的团并不需要出远海，只是在近海的几个岛上游玩，因此也不算特别累。
                    在第一个岛上，我再次尝试了浮潜。有了上一次的经验后，我的动作显得相当的熟练。
                    另外，当天恰好没有风，水下也比较清澈，这次的浮潜经历确实非常不错。
                </Markdown>
                <MyImageList info={dive}/>
                <Markdown>
                    中午，我们在另外一个岛上用了午饭，然后前往一个岛上进行休息。
                    岛上有很多娱乐项目，包括摩托艇、快艇、滑翔伞等。但是我身上的越南盾实在是没剩多少了，
                    遂放弃，买了一杯Coconut Latte，在沙滩椅上稍微睡了一觉。
                    睡醒之后，我就跟随旅行团回岸上了。
                </Markdown>
                <Markdown>
                    在回程的大巴上，我和白天认识的一位小姐姐聊了不少有关学生时代的事情。
                    聊的还是非常投机，于是我们约好晚上到附近一家著名的甜品店去吃甜品。
                    我们聊了非常多的内容，包括本科阶段的事情、在外国读书的事情、工作后的事情...
                    有的时候，我也不的不感慨，尽管只是几年的时间，但是世界却发生了如此翻天覆地的变化，
                    实在是令人感慨。有的时候，我也会回忆我在高中读书的那段时光，一切事情看起来都是欣欣向荣。
                    然而今日的我，却并没有以往憧憬的那般快乐、自由...不过过多惆怅也不会有任何帮助，
                    还是尽可能地着眼当下，努力做好自己吧。
                </Markdown>
                <MyImageList info={night}/>
                <Markdown>
                    由于第二天还要赶回新加坡的飞机，我当天夜早早回到酒店休息了。第二天早上，
                    我吃了一个早餐，然后搭上酒店帮忙预约的的士，就出发了。酒店预约的的士还是非常便宜的，
                    比Grab上的价格少了15万越南盾。
                </Markdown>
                <MyImageList info={breakfast}/>
                <Markdown>
                    下午，我就回到了新加坡。落地的时候，我还是有些感慨的，因为我在东南亚的时光也马上要结束了。
                    在这两个月。我去了很多地方，也遇到了很多人——有好的回忆也有不好的回忆。然而我是幸运的，
                    能够拥有这样的机会，去看，去观察，去用双脚丈量世界，从而在焦虑与混乱中为自己寻找喘息的机会。
                    2024年也已经过去了一个月，希望今年的我，也可以一切顺利吧。
                </Markdown>
            </Grid>
        </Grid>
    )
}

const changi = {
    caption: "再次来到樟宜机场",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402242115428.jpg",
            title: "changi",
        }
    ],
    width: "60%",
    col: 1
}


const saigon = {
    caption: "胡志明City Walk",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402242133817.jpg",
            title: "pink",
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402242138576.jpg",
            title: "street",
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402242141373.jpg",
            title: "street2",
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402242139686.jpg",
            title: "market",
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402242139095.jpg",
            title: "palace"
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402242140848.png",
            title: "night"
        }
    ],
    width: "80%",
    col: 3
}

const bus = {
    caption: "Sleeping Bus",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402242156963.jpg",
            title: "bus"
        }
    ],
    width: "60%",
    col: 1
}

const sunrise = {
    caption: "芽庄的日出",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402262340229.png",
            title: "beach"
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402262340702.png",
            title: "breakfast"
        }
    ],
    width: "80%",
    col: 2
}

const hotel = {
    caption: "在酒店休息",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402262352475.jpg",
            title: "macaron"
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402262353851.jpg",
            title: "meal"
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402262354185.jpg",
            title: "view"
        },
    ],
    width: "80%",
    col: 2
}

const dive = {
    caption: "芽庄潜水",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402270005140.jpg",
            title: "dive1"
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402270006774.jpg",
            title: "dive2"
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402270006929.jpg",
            title: "dive3"
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402270011554.png",
            title: "dive4"
        }
    ],
    width: "80%",
    col: 2
}

const night = {
    caption: "在芽庄的夜晚",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402271823769.jpg",
            title: "menu"
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402271823209.png",
            title: "ice cream"
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402271825685.jpg",
            title: "flags"
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402271825527.jpg",
            title: "mixue"
        }
    ],
    width: "80%",
    col: 2
}

const breakfast = {
    caption: "在越南的最后一顿早餐",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202402271828179.png",
            title: "breakfast"
        }
    ],
    width: "60%",
    col: 1
}

export default Vietnam