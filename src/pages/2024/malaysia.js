import * as React from 'react'
import "../pages_styles.css"
import Markdown from 'react-markdown'
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import {Flight} from "@mui/icons-material";
import {orange} from "@mui/material/colors";
import MyImageList from "../../components/common/myimagelist";

const Malaysia = () => {
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
                <Markdown>
                    进入2024年，我也差不多在新加坡待了有一个月了。在这期间，我基本只在学校内活动，鲜有出门透气的机会。
                    而在学校里，我也处于一个“举目无亲”的状态，因此难免感到孤单。即便是元旦假期，大部分时间也是一人度过。
                    旅行对我来说，一直都是放松自己的最好途径，恰好马来西亚在去年年底开始了对中国护照的免签，
                    距离新加坡也是两小时内可达，因此我计划在1.4～1.6号的周末去马来西亚度假。经过调研，
                    我选择亚庇作为本次度假的目的地。
                </Markdown>
                <Markdown>
                    亚庇，又称哥打京那巴鲁（马来语Kota Kinabalu），是东马来西亚沙巴州的首府，以美丽的海滩、海岛和优越的潜水条件著称。
                    从樟宜机场出发到亚庇，只需要两个小时，而我在2024年的第一次飞行将在赤道附近开始。
                </Markdown>
                <MyImageList info={flying}/>
                <Markdown>
                    ## 1月4号
                </Markdown>
                <Markdown>
                    我在中午到达亚庇国际机场，并在海关排队入境。入境马来西亚的人们拿着各形各色护照，有新加坡护照、香港护照、
                    台湾护照、法国护照，也有中国护照。在海关处排队的人非常多，海关的效也不算快。不过亚庇的海关的表现还是相当专业，
                    只查看了我的回程机票和入境卡，就马上放行。入境后，我用Grab打车前往酒店，马来西亚打车的开销甚至比国内还低。
                    这次我选择住在IHG旗下的智选假日酒店。东南亚的服务业的确发达，工作人员热情地接待每一位客人，
                    而普通的会员也能获得一杯迎宾饮品和免费的早餐。
                </Markdown>
                <MyImageList info={hotel}/>
                <Markdown>
                    在酒店稍事休整后，差不多到下午五点了。沙巴的日落一直为人们所称道，我也打车前往了沙巴的西海岸，刚好赶上了日落的时间。
                </Markdown>
                <MyImageList info={sunset}/>
                <Markdown>
                    随着太阳缓缓沉入海平线，金色的余晖洒满了整个海岸，我在旁边的Sunset Bar找到了一个完美的座位，
                    用晚餐作为这一天的美好收官。海风轻拂，带着淡淡的咸味和不远处花朵的香气，让人心情格外舒畅。
                    餐吧内灯光柔和，营造出一种温馨而放松的氛围，仿佛时间在这一刻变得缓慢。
                    四周的每一桌都座无虚席，刚刚结束忙碌一天的人们在这里找到了他们的避风港。
                    餐吧里播放着轻松的摇滚乐，让人们感到轻松和愉悦。马来裔的服务员们穿梭于桌间，他们的笑容亲切而温暖，
                    让每一位客人都感到宾至如归。精心准备的美食和海景相得益彰。在这样的傍晚，所有的烦恼似乎都随着海风飘散。
                    随着低烈的鸡尾酒入口，我的脸颊也变得红润起来。我沉浸在这份宁静和满足之中，在微醺中结束我的一天。
                </Markdown>
                <MyImageList info={bar}/>
                <Markdown>
                    用完餐后，我往市区步行了一段路，随后打车回到市区。在市区闲逛了一会，我便回到酒店休息了。
                    这里有一个小插曲，我跟酒店的前台服务员破开了一张100令吉的纸币。之前在其他的酒店交换零钱时，
                    倒是都被拒绝了。
                </Markdown>
                <Markdown>
                    第二天的行程比较辛苦。我在飞猪上预订了一个跟团行，是一个六人小团。当天早上，我们会一起坐船出海40公里，
                    前往距离亚庇海岸线附近的环滩岛。因此当天，我也早早休息了。
                </Markdown>
                <Markdown>
                    ## 1月5号
                </Markdown>
                <Markdown>
                    ### 环滩岛
                </Markdown>
                <Markdown>
                    今天一大早，我就起床洗漱准备出门了。由于今天参的团有浮潜的活动，因此我在新加坡的迪卡侬提前购买了一些潜水装备，
                    并且带到了马来西亚。等我下楼时，司机已经在等我了。上车后不过二十分钟，司机就接齐了今天组团的所有人，
                    除了我之外，还有一对年轻情侣，和一对年轻的夫妇。过一会，司机把我们送到了码头，我们见到了今天的导游阿胜。
                </Markdown>
                <Markdown>
                    阿胜是一个高高瘦瘦的、年纪不过二十多的年轻人，牙齿不是很齐，头发也是比较随意地耷拉着。他脸上总是挂着笑容，
                    普通话说的也很是不错。后来，我才知道他的祖籍是广西，能说马来语、闽南话、英语粤语和普通话。
                    当天天气非常好，码头上的风景很不错。
                </Markdown>
                <MyImageList info={dock}/>
                <Markdown>
                    随后，我们搭乘快艇出发，前往环滩岛，这大约是一个半小时的航程。快艇从码头出发，先是在近海行驶，
                    大约开了半个小时后，就看不到陆地了。这时，海面上的浪逐渐地大了起来，海风也变得更加凶狠。
                    我们的快艇被无尽的海洋所包围，我感受到大海的庞大与深邃。快艇在波浪中跳跃，当船头从浪头砸到海面上时，
                    就仿佛在崎岖的路面上行驶一般。偶尔遇到的船只或是其他人造物，也会在几十秒内淹没在茫茫的蓝色当中。
                    在这广袤无垠的太平洋上，我体会到了“大海无量”这个词语的真正含义。
                </Markdown>
                <Markdown>
                    大约在一个半小时的颠簸后，我们逐渐能在海面上看到陆地的轮廓。随着岛屿在海面上越来越明显，
                    我们看到了岛上的棕榈树和白色的沙滩。这个时候，海水开始变得不那么汹涌澎湃了，海面的颜色也开始发生了变化，
                    从深邃的蓝色变成了透亮的青绿色，透亮、如果冻般。阿胜告诉我们，这是因为岛屿附近有细致的白沙，
                    导致水的颜色看起来不一样了。
                </Markdown>
                <MyImageList info={island}/>
                <Markdown>
                    随后，我们就上岛开始了自由活动。岛上是完全没有网络的，因此我们在阿胜的安排下开始自行互动。
                    我随阿胜一起去浮潜，并且请阿胜用GoPro帮我拍了一些照片。当天的天气不错，水下比较清晰，
                    我看到了之前只在电视上看到过的水下美景。不过由于是第一次浮潜，我不小心被水底的珊瑚划破了脚，
                    因此只潜水了半个小时，随后便回到船上休息了。
                </Markdown>
                <MyImageList info={diving}/>
                <Markdown>
                    上岸后，阿胜非常体贴地帮我处理了伤口，并且并且叮嘱我需要注意的事情。随后，我们用了午餐。
                    我和那一对年轻的情侣很是聊得来，交流了不少自己的经历，这或许是因为我们年龄相近的原因吧。
                    午餐后，我们在岛上自由活动了一段时间，拍了一些纪念照片。大约下午一点半，阿胜见天气有变化，
                    因此叫上我们提前返航。临行前，我在船上留下了最后一张环滩岛的照片。
                </Markdown>
                <MyImageList info={sea}/>
                <Markdown>
                    回程的路上，我们又花了一个半小时。到了下午，我还是感到有些疲惫，因此在船上休息，没有拍摄更多照片。
                    到岸上后，一半的人选择回酒店休息，而我还要去参加随后的红树林之旅。
                </Markdown>
                <Markdown>
                    ### 红树林之旅
                </Markdown>
                <Markdown>
                    红树因其枝干呈红褐色，故而得名。红树是耐盐性极高的灌木，适合生长于海岸边的潮间带。我们上岸后，
                    搭乘汽车到一处河口码头，看到了这种只在纪录片里见过的植物。
                </Markdown>
                <MyImageList info={mangrove}/>
                <Markdown>
                    在码头上，我们先涂了一些本地的防蚊液，随后乘坐游船开始红树林之旅。到了下午，由于天气不佳，
                    没有拍到很好的照片，也没有见到红树林里出名的猴子。不过我们倒是拍到了鳄鱼的照片。鳄鱼的情绪比较稳定，
                    一般情况下对于人类没有很强的攻击性。
                </Markdown>
                <MyImageList info={afternoon}/>
                <Markdown>
                    随后，我们用了晚餐。在晚上，我们再次乘坐游船，欣赏了萤火虫。我抓了一只萤火虫放在手中，
                    希望它能给我带来一年的好运。
                </Markdown>
                <MyImageList info={firefly}/>
                <Markdown>
                    最后的旅程结束后，阿胜送我们回到了市区，并且带我去买了创可贴。我和另外一位大哥都给了阿胜一些小费，
                    以感谢他一天的付出。今天的旅程充实而又辛苦，回到酒店后，我稍微处理了一下伤口，整理了一下行李便休息了。
                </Markdown>
                <Markdown>
                    ## 1月6号 返程
                </Markdown>
                <Markdown>
                    周一早上，我一早起来准备返回新加坡。我在酒店享用了美味的早餐后，打车来到亚庇国际机场。
                    马来西亚的智选假日酒店早餐味道比国内的水准要高许多，还有一些特色小吃，的确是服务业发达地方应有的水准。
                    早上八点半，我登上了返程的飞机。这段在马来西亚的旅程虽然短暂，但十分的充实和愉快。这里拥有最世界上最美丽的海滩，
                    同时也有淳朴的人们和物美价廉的旅游服务。如果有机会，我还会再来马来西亚，去探索这个国家更多的可能性。
                </Markdown>
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


const hotel = {
    caption: "亚庇智选假日酒店",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404201702079.jpeg",
            title: "hotel",
        },
    ],
    width: "60%",
    col: 1
}

const sunset = {
    caption: "日落",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404201717225.jpeg",
            title: "sunset",
        },
    ],
    width: "60%",
    col: 1
}

const bar = {
    caption: "日落餐吧",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404201807947.jpeg",
            title: "singing",
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404201808442.png",
            title: "steak",
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404201809062.jpeg",
            title: "bar",
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404201809419.jpeg",
            title: "wine",
        },
    ],
    width: "60%",
    col: 2
}

const dock = {
    caption: "码头",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404202014455.png",
            title: "singing",
        },
    ],
    width: "80%",
    col: 1
}

const island = {
    caption: "环滩岛",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404202052953.jpeg",
            title: "land",
        },
    ],
    width: "60%",
    col: 1
}

const diving = {
    caption: "浮潜",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404202058374.jpeg",
            title: "me",
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404202058346.jpeg",
            title: "fish"
        }
    ],
    width: "80%",
    col: 2
}

const sea = {
    caption: "环滩岛的海",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404202104094.png",
            title: "me",
        },
    ],
    width: "40%",
    col: 1
}

const mangrove = {
    caption: "红树",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404202146517.jpeg",
            title: "mangrove",
        },
    ],
    width: "60%",
    col: 1
}


const afternoon = {
    caption: "红树林之旅",
    images: [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404202205622.jpeg",
            title: "tree",
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202404202211712.jpeg",
            title: "crocodile"
        }
    ],
    width: "80%",
    col: 2
}

const firefly = {
    caption: "手中的萤火虫",
    images: [
        {
            img: "    https://raw.githubusercontent.com/Enqurance/Figures/main/202404202217192.jpeg",
            title: "firefly",
        }
    ],
    width: "40%",
    col: 1
}

export default Malaysia