import React, { Component } from 'react'
import './flash.css'
import './riman.scss'
// import api from '@/api/flash'
import Header from '@/components/common/Header'

class Com extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pagename: ['/data/build/#/index', '/data/build/#/kind', '/data/build/#/riman', '/data/build/#/qxs', '/data/build/#/fls', '/data/build/#/zixun', '/data/build/#/flash', '/data/build/#/rank', '/data/build/#/user', '/data/build/#/phone']
        }
      }
    render() {
        return (
            <div class="top_wrap">
                <div class='header'>
                    <Header hnum='6' pagename={this.state.pagename}>
                    </Header>
                </div>

                <div class="top_con">
                    <div class="mid">
                        <h1 class="hide">动漫放映室</h1>
                        <a href="https://ac.qq.com/" target="_blank" title="动漫" class="logo t">动漫</a>
                    </div>
                </div>
                <div class="con1">
                    <div class="mid">
                        <div class="hot_wrap">
                            <ul class="hot_links clear">
                                 <li style={{Zindex: '1'}}>
                                    <div class='dian'>
                                    <a href="http://ac.qq.com/event/sshf2016/index.html" target="_blank" class="links_a">生死回放</a>
                                        <div class="links_info" style={{display: 'none'}}>
                                            <a href="http://ac.qq.com/event/sshf2016/index.html" target="_blank" class="links_pic">
                                                <img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/m_sshf.jpg" width="210" height="118" alt="生死回放"/>
                                                <span class="links_video_cov"></span>
                                            </a>
                                            <p class="links_text">生死回放</p>
                                        </div>
                                    </div>    
                                 </li>
                                <li>
                                    <a href="http://ac.qq.com/event/mashen/" target="_blank" class="links_a">麻神</a>
                                    <div class="links_info">
                                        <a href="http://ac.qq.com/event/mashen/" target="_blank" class="links_pic">
                                            <img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/m_ms.jpg" width="210" height="118" alt="麻神" />
                                            <span class="links_video_cov"></span>
                                        </a>
                                        <p class="links_text">麻神</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="http://ac.qq.com/event/ljs2016_2/index.html" target="_blank" class="links_a">从前有座灵剑山</a>
                                    <div class="links_info">
                                        <a href="http://ac.qq.com/event/ljs2016_2/index.html" target="_blank" class="links_pic">
                                            <img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/m_ljs.jpg" width="210" height="118" alt="从前有座灵剑山" />
                                            <span class="links_video_cov"></span>
                                        </a>
                                        <p class="links_text">从前有座灵剑山</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="http://ac.qq.com/event/huyao/index.html" target="_blank" class="links_a">狐妖小红娘</a>
                                    <div class="links_info">
                                        <a href="http://ac.qq.com/event/huyao/index.html" target="_blank" class="links_pic">
                                            <img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/m_hy.jpg" width="210" height="118" alt="狐妖小红娘" />
                                            <span class="links_video_cov"></span>
                                        </a>
                                        <p class="links_text">狐妖小红娘</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="http://ac.qq.com/event/index1223.html" target="_blank" class="links_a">通职者</a>
                                    <div class="links_info">
                                        <a href="http://ac.qq.com/event/index1223.html" target="_blank" class="links_pic">
                                            <img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/m_tzz.jpg" width="210" height="118" alt="通职者" />
                                            <span class="links_video_cov"></span>
                                        </a>
                                        <p class="links_text">通职者</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="http://ac.qq.com/event/yiren/" target="_blank" class="links_a">一人之下</a>
                                    <div class="links_info">
                                        <a href="http://ac.qq.com/event/yiren/" target="_blank" class="links_pic">
                                            <img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/m_yr.jpg" width="210" height="118" alt="一人之下" />
                                            <span class="links_video_cov"></span>
                                        </a>
                                        <p class="links_text">一人之下</p>
                                    </div>
                                </li>
                                <li class="no_bor">
                                    <a href="http://ac.qq.com/event/835d044d6dd88a012ef06a244da6d3a6.html" target="_blank" class="links_a">双生灵探</a>
                                    <div class="links_info">
                                        <a href="http://ac.qq.com/event/835d044d6dd88a012ef06a244da6d3a6.html" target="_blank" class="links_pic">
                                            <img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/m_ss.jpg" width="210" height="118" alt="双生灵探" />
                                            <span class="links_video_cov"></span>
                                        </a>
                                        <p class="links_text">双生灵探</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="http://ac.qq.com/event/jlcx2016/index.html" target="_blank" class="links_a">君临臣下</a>
                                    <div class="links_info">
                                        <a href="http://ac.qq.com/event/jlcx2016/index.html" target="_blank" class="links_pic">
                                            <img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/m_jl.jpg" width="210" height="118" alt="君临臣下" />
                                            <span class="links_video_cov"></span>
                                        </a>
                                        <p class="links_text">君临臣下</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="http://ac.qq.com/event/index0321.html" target="_blank" class="links_a">勇者大冒险</a>
                                    <div class="links_info">
                                        <a href="http://ac.qq.com/event/index0321.html" target="_blank" class="links_pic">
                                            <img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/m_yz.jpg" width="210" height="118" alt="勇者大冒险" />
                                            <span class="links_video_cov"></span>
                                        </a>
                                        <p class="links_text">勇者大冒险</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="http://comic.qq.com/zt2016/skst2016/index.htm" target="_blank" class="links_a">时空使徒</a>
                                    <div class="links_info">
                                        <a href="http://comic.qq.com/zt2016/skst2016/index.htm" target="_blank" class="links_pic">
                                            <img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/m_skst.jpg" width="210" height="118" alt="时空使徒" />
                                            <span class="links_video_cov"></span>
                                        </a>
                                        <p class="links_text">时空使徒</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="http://ac.qq.com/event/dgxj2016/index.html" target="_blank" class="links_a">东郭小节</a>
                                    <div class="links_info">
                                        <a href="http://ac.qq.com/event/dgxj2016/index.html" target="_blank" class="links_pic">
                                            <img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/m_dgxj.jpg" width="210" height="118" alt="东郭小节" />
                                            <span class="links_video_cov"></span>
                                        </a>
                                        <p class="links_text">东郭小节</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="http://ac.qq.com/event/index0426.html" target="_blank" class="links_a">戒魔人</a>
                                    <div class="links_info">
                                        <a href="http://ac.qq.com/event/index0426.html" target="_blank" class="links_pic">
                                            <img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/m_jmr.jpg" width="210" height="118" alt="戒魔人" />
                                            <span class="links_video_cov"></span>
                                        </a>
                                        <p class="links_text">戒魔人</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="http://ac.qq.com/event/transLink/ygmd2017.html" target="_blank" class="links_a">妖怪名单</a>
                                    <div class="links_info">
                                        <a href="http://ac.qq.com/event/transLink/ygmd2017.html" target="_blank" class="links_pic">
                                            <img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/m_ygmd.jpg" width="210" height="118" alt="妖怪名单" />
                                            <span class="links_video_cov"></span>
                                        </a>
                                        <p class="links_text">妖怪名单</p>
                                    </div>
                                </li>
                            </ul>
                            <ul class="hot_list clear">
                                <li class="lar">
                                    <a href="javascript:alert('12月上线，敬请期待！')" title="">
                                        <img src={require("../../public/maoyao.jpg")} width="298" height="489" alt="" />
                                    </a>
                                    <div class="txt_box">
                                        <p class="txt_tit clear">
                                            <strong class="fl">猫妖的诱惑</strong>
                                            <span class="fl sm_btn">恋爱 古风</span>
                                        </p>
                                        <p class="txt_deta">大猪蹄子！插他两刀！</p>
                                    </div>
                                </li>
                                <li class="lar">
                                    <a href="http://ac.qq.com/event/greenblue/index.html" target="_blank" title="">
                                        <img src={require("../../public/xiaolv.jpg")} width="298" height="489" alt="" /></a>
                                    <div class="txt_box">
                                        <p class="txt_tit clear">
                                            <strong class="fl">小绿和小蓝</strong>
                                            <span class="fl sm_btn">黑科技</span></p>
                                        <p class="txt_deta">笑着笑着就哭了</p>
                                    </div>
                                </li>
                                <li class="sml">
                                    <div class="sm_box">
                                        <a href="https://ac.qq.com/event/transLink/?name=tlf2019" title=""><img src="https://ac.gtimg.com/comic/images/2018/txanime/tongling.jpg" width="298" height="219" alt="" /></a>
                                        <div class="txt_box">
                                            <p class="txt_tit clear"><strong class="fl">通灵妃</strong><span class="fl sm_btn">魔性 甜虐</span></p>
                                        </div>
                                    </div>
                                    <div class="sm_box sm_box01">
                                        <a href="https://new.qq.com/ch/comic/zt2018/shanhe2018/index.htm" target="_blank" title=""><img src="https://ac.gtimg.com/comic/images/2018/txanime/shanhe.jpg" width="298" height="219" alt="" /></a>
                                        <div class="txt_box">
                                            <p class="txt_tit clear"><strong class="fl">山河社稷图</strong><span class="fl sm_btn">冒险 友情</span></p>
                                        </div>
                                    </div>
                                </li>
                                <li class="sml sml_01 clear">
                                    <div class="sm_box fl">
                                        <a href="  http://ac.qq.com/event/transLink/yiren2.html" target="_blank" title=""><img src="https://ac.gtimg.com/comic/images/2018/txanime/yiren.jpg" width="298" height="219" alt="" /></a>
                                        <div class="txt_box">
                                            <p class="txt_tit clear"><strong class="fl">一人之下2</strong><span class="fl sm_btn">玄幻  热血</span></p>
                                        </div>
                                    </div>
                                    <div class="sm_box fl">
                                        <a href=" http://ac.qq.com/event/huyao/index.html" target="_blank" title=""><img src="https://ac.gtimg.com/comic/images/2018/txanime/huyao.jpg" width="298" height="219" alt="" /></a>
                                        <div class="txt_box">
                                            <p class="txt_tit clear"><strong class="fl">狐妖小红娘</strong><span class="fl sm_btn">玄幻  恋爱</span></p>
                                        </div>
                                    </div>
                                    <div class="sm_box sm_box02 fl">
                                        <a href="https://v.qq.com/x/page/m0026e4iqyg.html" target="_blank" title=""><img src="https://img1.gtimg.com/comic/pics/hv1/237/108/2281/148349802.jpg" width="298" height="219" alt="" /></a>
                                        <div class="txt_box">
                                            <p class="txt_tit clear"><strong class="fl">西行纪</strong><span class="fl sm_btn">冒险  热血</span></p>

                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div class="con2">
                    <div class="mid">
                        <div class="my_tab">
                            <p class="date_tit clear"><strong>周一</strong><strong>周二</strong><strong>周三</strong><strong>周四</strong><strong>周五</strong></p>
                            <div class="book_list clear">
                                <ul class="wrap_box fl">
                                    <li>
                                        <div class="dj_box">
                                            <a href="http://ac.qq.com/event/greenblue/index.html" target="_blank" class="clear">
                                                <img src="https://ac.gtimg.com/comic/images/2018/txanime/lvlan1.jpg" width="60" height="56" alt="" />
                                                <p class="dj_tit fl"><em>小绿和小蓝</em></p>
                                                <p class="dj_name fl">日常篇</p>
                                            </a>
                                            <span class="line"></span>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="wrap_box wrap_box01 fl">
                                    <li>
                                        <div class="dj_box">
                                            <a href="http://ac.qq.com/event/greenblue/index.html" target="_blank" title="" class="clear">
                                                <img src="https://ac.gtimg.com/comic/images/2018/txanime/lvlan2.jpg" width="60" height="56" alt="" />
                                                <p class="dj_tit fl"><em>小绿和小蓝</em></p>
                                                <p class="dj_name fl">魔王篇</p>
                                            </a>
                                            <span class="line"></span>
                                        </div>
                                    </li>

                                </ul>
                                <ul class="wrap_box wrap_box01 fl">
                                    <li>

                                        <div class="dj_box">
                                            <a href="http://ac.qq.com/event/greenblue/index.html" target="_blank" title="" class="clear">
                                                <img src="https://ac.gtimg.com/comic/images/2018/txanime/lvlan1.jpg" width="60" height="56" alt="" />
                                                <p class="dj_tit fl"><em>小绿和小蓝</em></p>
                                                <p class="dj_name fl">校园篇</p>
                                            </a>
                                            <span class="line"></span>
                                        </div>
                                    </li>

                                </ul>
                                <ul class="wrap_box wrap_box01 fl">
                                    <li>
                                        <div class="dj_box">
                                            <a href="https://new.qq.com/ch/comic/zt2018/shanhe2018/index.htm" target="_blank" title="" class="clear">
                                                <img src="https://ac.gtimg.com/comic/images/2018/txanime/shanhe2.jpg" width="60" height="56" alt="" />
                                                <p class="dj_tit fl">山河社稷图</p>
                                                <p class="dj_name fl">原来我们的世界是幅画</p>
                                            </a>
                                            <span class="line"></span>
                                        </div>

                                        <div class="dj_box">
                                            <a href="http://ac.qq.com/event/greenblue/index.html" target="_blank" title="" class="clear">
                                                <img src="https://ac.gtimg.com/comic/images/2018/txanime/lvlan2.jpg" width="60" height="56" alt="" />
                                                <p class="dj_tit fl"><em>小绿和小蓝</em></p>
                                                <p class="dj_name fl">网络篇</p>
                                            </a>
                                            <span class="line"></span>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="wrap_box wrap_box02 fl">
                                    <li>
                                        <div class="dj_box">
                                            <a href="http://ac.qq.com/event/greenblue/index.html" target="_blank" title="" class="clear">
                                                <img src="https://ac.gtimg.com/comic/images/2018/txanime/lvlan1.jpg" width="60" height="56" alt="" />
                                                <p class="dj_tit fl"><em>小绿和小蓝</em></p>
                                                <p class="dj_name fl">机器人篇</p>
                                            </a>
                                            <span class="line"></span>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="dj_box">
                                            <a href="http://ac.qq.com/event/huyao/index.html" target="_blank" title="" class="clear">
                                                <img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/hy_icon.jpg" width="60" height="56" alt="" />
                                                <p class="dj_tit fl">狐妖小红娘</p>
                                                <p class="dj_name fl">打着纯爱名号的虐狗番</p>
                                            </a>
                                            <span class="line"></span>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="con3">
                    <div class="mid">

                        <div class="tab">
                            <div class="tab_list">
                                <div class="tabImg">

                                    <ul class="clearfix">

                                        <li>
                                            <a href="http://ac.qq.com/event/cysj2016/index.html" target="_blank" title=""><img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/20170609/cysj.jpg" width="166" height="291" alt="" /></a>
                                            <div class="slide_info">
                                                <p class="info01"><strong>超游世界</strong></p>
                                                <p class="info02">假的假的全都都是假的</p>
                                            </div>
                                        </li>


                                        <li>
                                            <a href="http://ac.qq.com/event/ljs2016_2/index.html" target="_blank" title=""><img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/20170609/ljs.jpg" width="166" height="291" alt="" /></a>
                                            <div class="slide_info">
                                                <p class="info01"><strong>从前有座灵剑山2</strong></p>
                                                <p class="info02">逗逼龙傲天修仙之路</p>
                                            </div>
                                        </li>

                                        <li>
                                            <a href="http://ac.qq.com/event/dgxj2016/index.html" target="_blank" title=""><img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/20170609/dgxj.jpg" width="166" height="291" alt="" /></a>
                                            <div class="slide_info">
                                                <p class="info01"><strong>东郭小节</strong></p>
                                                <p class="info02">唯美古风</p>
                                            </div>
                                        </li>

                                        <li>
                                            <a href="http://ac.qq.com/event/jlcx2016/index.html" target="_blank" title=""><img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/20170609/jl.jpg" width="166" height="291" alt="" /></a>
                                            <div class="slide_info">
                                                <p class="info01"><strong>君临臣下</strong></p>
                                                <p class="info02">同时出轨七个帅哥是什么体验</p>
                                            </div>
                                        </li>

                                        <li>
                                            <a href="http://ac.qq.com/event/sshf2016/index.html" target="_blank" title=""><img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/20170609/sshf.jpg" width="166" height="291" alt="" /></a>
                                            <div class="slide_info">
                                                <p class="info01"><strong>生死回放</strong></p>
                                                <p class="info02">开写轮眼破案是犯规的！</p>
                                            </div>
                                        </li>

                                        <li>
                                            <a href="http://ac.qq.com/event/index0321.html" target="_blank" title=""><img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/yongzhe.jpg" width="166" height="291" alt="" /></a>
                                            <div class="slide_info">
                                                <p class="info01"><strong>勇者大冒险</strong></p>
                                                <p class="info02">官方逼死同人</p>
                                            </div>
                                        </li>

                                        <li>
                                            <a href="http://ac.qq.com/event/yiren/" target="_blank" title=""><img src="https://ac.gtimg.com/comic/images/2016/txanime/pc/images/slide09.jpg" width="166" height="291" alt="" /></a>
                                            <div class="slide_info">
                                                <p class="info01"><strong>一人之下</strong></p>
                                                <p class="info02">套路再深也怕菜刀</p>
                                            </div>
                                        </li>
                                    </ul>   
                                </div>
                            </div>
                            <a href="javascript:;" class="tab_left btn t" title="上一个">上一个</a>
                            <a href="javascript:;" class="tab_right btn t" title="下一个">下一个</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Com














