import React, { Component } from 'react'
import { Carousel } from 'antd'
import api from '@/api/riman'
import Slider from "react-slick";
import './riman.scss'
import Header from '@/components/common/Header'
class Com extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      bannerdata1: [],
      bannerdata2: [],
      bannerdata3: [],
      titlelist: ['全部', '连载中', '已完结', '番外篇', '全彩版'],
      num: 0,
      page: 0,
      active: 'comic-list-all active',
      classnum: 0,
      pagename: ['/data/build/#/index', '/data/build/#/kind', '/data/build/#/riman', '/data/build/#/qxs', '/data/build/#/fls', '/data/build/#/zixun', '/data/build/#/flash', '/data/build/#/rank', '/data/build/#/user', '/data/build/#/phone']
    }
    this.firstpage = this.firstpage.bind(this)
    this.lastpage = this.lastpage.bind(this)
  }

  componentDidMount() {
    const num = this.state.num
    api.requestData(num).then(data => {
      this.setState({
        list: data.data
      })
    })

    api.requestBannerData1().then(data => {
      this.setState({
        bannerdata1: data.data
      })
    })

    api.requestBannerData2().then(data => {
      this.setState({
        bannerdata2: data.data
      })
    })

    api.requestBannerData3().then(data => {
      this.setState({
        bannerdata3: data.data
      })
    })
  }
  
  firstpage () {
    let newpage = this.state.page
    if (newpage <= 0) {
      this.setState({
        page: 0
      }) 
    } else {
      newpage--
      this.setState({
        page: newpage--
      })      
    }
  }
  
lastpage () {
    let newpage = this.state.page
    if (newpage >= 2) {
      this.setState({
        page: 2
      }) 
    } else {
      newpage++
      this.setState({
        page: newpage
      })      
    }
}

changeclass (index) {
  this.setState({
    classnum: index
  })
  api.requestData(index).then(data => {
    this.setState({
      list: data.data
    })
  })
}

  render() {
    let banner1html = []
    let banner2html = []
    let banner3html = []
    let listhtml = [] 
    let titlelisthtml = []
    let settings = {
      autoplay: true,
      infinite: true,
      speed: 500,
      fade: true
    };
    this.state.bannerdata1.map((item, index) => {
      banner1html.push(
        <a className="in-rise-tab-num" key={index}>
           <img src={ item.img } width="65" height="40" alt="{}"/>
        </a>
      )
    })
    this.state.bannerdata2.map((item, index) => {
      banner2html.push(
        <li key={index}>
          <a className="banner-img" >
              <img src={ item.img } />
          </a>
          <div className="banner-slider-text">
              <a href="/" className="banner-slider-a"></a>
          </div>
        </li>
      )
    })

    let classnum = this.state.classnum

    this.state.titlelist.map((item, index) => {
      titlelisthtml.push(
        <li key={index} className={classnum === index ? this.state.active : ''} onClick={ this.changeclass.bind(this, index) }><a title={item}>{item}</a></li>
      )
    })
    
    for(var i=this.state.page*12; i<this.state.list.length; i++) {

      listhtml.push(
        <li key={i} className="comic-content-item">
                    <div className="comic-text">
                      <a className="Japan-comic-title"href={"/data/build/#/detail?id=" + this.state.list[i].id} title={this.state.list[i].title}>
                        <img src={this.state.list[i].img} alt={this.state.list[i].title}/><span className="mod-layer-mask"></span>
                      </a>
                      <div className="Japan-comic-mask clearfix">
                        <a href="/"  className="japan-comic-a">{this.state.list[i].title}</a>
                        <a href="/" className="japan-comic-new">更新至<span>{this.state.list[i].uptate}</span>话</a>
                      </div>
                    </div>
                    <div className="Japan-comic-detail" >
                      <ul className="clearfix">
                        <li>
                          <a href="/" title={this.state.list[i].uptate} >[{this.state.list[i].uptate}]</a>
                        </li>
                        <li>
                          <a href="/" title={this.state.list[i].uptate-1} >[{this.state.list[i].uptate-1}]</a>
                        </li>
                        <li>
                          <a href="/" title={this.state.list[i].uptate-2} >[{this.state.list[i].uptate-2}]</a>
                        </li>
                        <li>
                          <a href="/" title={this.state.list[i].uptate-3} >[{this.state.list[i].uptate-3}]</a>
                        </li>
                        <li>
                          <a href="/" title={this.state.list[i].uptate-4} >[{this.state.list[i].uptate-4}]</a>
                        </li>
                        <li><span>...</span></li>
                        <li>
                          <a href="/" title="001" >[001]</a>
                        </li>
                        <li>
                          <a href="/" title="更多章节" target="_blank">更多章节&gt;&gt;</a>
                        </li>
                      </ul>
                    </div>
                  </li>
      )
    }

    return(
      <div className="wrap">
        <Header hnum='2' pagename={ this.state.pagename }>
        </Header>
        <div className="japan-works ui-wm clearfix">
          <div className="japan-banner">
            <div className="japan-banner-slider">
              <span className="banner-border-right">&nbsp;</span>
              <div className="japan-rise-tab">
                        <a title="上一页" className="arrow japan-rise-leftbtn first">上一页</a>
                          { banner1html }
                        <a title="下一页" className="arrow japan-rise-rightbtn last">下一页</a>
              </div>
              <div className="bx-wrapper">
                <div className="bx-viewport">
                  <ul className="banner-slider-list" id="japan-slider-list">
                    <Slider {...settings}>
                      { banner2html }
                    </Slider> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="japan-new ui-right">
                <h2 className="tit">最近更新</h2>
                <span className="new-border-left">&nbsp;</span>
                <div className="japan-new-slider">
                    <div className="bx-wrapper mod-slider">
                      <div className="bx-viewport">
                      <ul className="japan-new-list" id="japan-new-list">
                        <li>
                          <div className="japan-new-mod">
                                <a href="/" title="银魂" className="new-img">
                                    <img width="100" height="133" src="https://manhua.qpic.cn/vertical/0/17_16_48_7642609fa4832c44475feecd7c8c7c8e.jpg/420" alt="银魂"/><span className="mod-layer-mask"></span>
                                </a>
                                <div className="new-text">
                                    <p className="new-name">
                                        <a href="/" title="银魂">银魂</a>
                                    </p>
                                    <a href="/" className="new-a" title="更新至701话">更新至701话</a>
                                </div>
                            </div>
                                                                                                    <div className="japan-new-mod">
                                <a href="/" title="食戟之灵" className="new-img">
                                    <img width="100" height="133" src="https://manhua.qpic.cn/vertical/0/17_17_05_271c4706bd15942fe93b7b39fc550062.jpg/420" alt="食戟之灵"/><span className="mod-layer-mask"></span>
                                </a>
                                <div className="new-text">
                                    <p className="new-name">
                                        <a href="/" title="食戟之灵">食戟之灵</a>
                                    </p>
                                    <a href="/" className="new-a" title="更新至300话">更新至300话</a>
                                </div>
                            </div>
                                                                                                    <div className="japan-new-mod">
                                <a href="/" title="排球少年！！" className="new-img">
                                    <img width="100" height="133" src="https://manhua.qpic.cn/vertical/0/17_17_06_69712f879c7dd8820552602b95496fa9.jpg/420" alt="排球少年！！"/><span className="mod-layer-mask"></span>
                                </a>
                                <div className="new-text">
                                    <p className="new-name">
                                        <a href="/" title="排球少年！！" >排球少年！！</a>
                                    </p>
                                    <a href="/" className="new-a" title="更新至339话">更新至339话</a>
                                </div>
                            </div>
                           </li>
                           <li>
                                                    <div className="japan-new-mod">
                                <a href="/" title="航海王" className="new-img">
                                    <img width="100" height="133" src="https://manhua.qpic.cn/vertical/0/17_16_48_0e28c8aabf48e91d395689b5f6a7689f.jpg/420" alt="航海王"/><span className="mod-layer-mask"></span>
                                </a>
                                <div className="new-text">
                                    <p className="new-name">
                                        <a href="/" title="航海王">航海王</a>
                                    </p>
                                    <a href="/" className="new-a" title="更新至934话">更新至934话</a>
                                </div>
                            </div>
                                                                                                    <div className="japan-new-mod">
                                <a href="/" title="新网球王子" className="new-img">
                                    <img width="100" height="133" src="https://manhua.qpic.cn/vertical/0/17_17_06_3d96d8d11d9b624025966c257b2de905.jpg/420" alt="新网球王子"/><span className="mod-layer-mask"></span>
                                </a>
                                <div className="new-text">
                                    <p className="new-name">
                                        <a href="/" title="新网球王子">新网球王子</a>
                                    </p>
                                    <a href="/" className="new-a" title="更新至259话">更新至259话</a>
                                </div>
                            </div>
                                                                                                    <div className="japan-new-mod">
                                <a href="/" title="境界触发者" className="new-img">
                                    <img width="100" height="133" src="https://manhua.qpic.cn/vertical/0/17_17_05_c2b2977e322e711fc966a71ce070b618.jpg/420" alt="境界触发者"/><span className="mod-layer-mask"></span>
                                </a>
                                <div className="new-text">
                                    <p className="new-name">
                                        <a href="/" title="境界触发者">境界触发者</a>
                                    </p>
                                    <a href="/" className="new-a" title="更新至175话">更新至175话</a>
                                </div>
                            </div>
                                                </li>
                                                                                                <li >
                                                    <div className="japan-new-mod">
                                <a href="/" title="美食的俘虏" className="new-img">
                                    <img width="100" height="133" src="https://manhua.qpic.cn/vertical/0/17_17_06_657b50f4170c66960c6d56a6eec7cc23.jpg/420" alt="美食的俘虏"/><span className="mod-layer-mask"></span>
                                </a>
                                <div className="new-text">
                                    <p className="new-name">
                                        <a href="/" title="美食的俘虏">美食的俘虏</a>
                                    </p>
                                    <a href="/" className="new-a" title="更新至396话">更新至396话</a>
                                </div>
                            </div>
                                                                                                    <div className="japan-new-mod">
                                <a href="/" title="好想告诉你" className="new-img">
                                    <img width="100" height="133" src="https://manhua.qpic.cn/vertical/0/17_17_06_35f4d50dd420dfdd22d1261defea60a5.jpg/420" alt="好想告诉你"/><span className="mod-layer-mask"></span>
                                </a>
                                <div className="new-text">
                                    <p className="new-name">
                                        <a href="/" title="好想告诉你" >好想告诉你</a>
                                    </p>
                                    <a href="/" className="new-a" title="更新至124话" >更新至124话</a>
                                </div>
                            </div>
                                                                                                    <div className="japan-new-mod">
                                <a href="/" title="死神/境·界"  className="new-img">
                                    <img width="100" height="133" src="https://manhua.qpic.cn/vertical/0/21_15_33_bb362c807858aeb83d0406dae321cf12_1498030439364.jpg/420" alt="死神/境·界"/><span className="mod-layer-mask"></span>
                                </a>
                                <div className="new-text">
                                    <p className="new-name">
                                        <a href="/" title="死神/境·界" >死神/境·界</a>
                                    </p>
                                    <a href="/" className="new-a" title="更新至686话">更新至686话</a>
                                </div>
                            </div>
                                                </li> 
                                            </ul>
                                            </div>
                                            </div>
                </div>
            </div>
          
        </div>
        <div className="Japan-comic ui-wm">
          <div className="Japan-bx-head clearfix">
                <h2>正版漫画</h2>
                <div className="Japan-head-content clearfix">
                    <h3 className="ui-txt-hide">集英社独家授权  大陆唯一正版发行</h3>
                    <div className="Japan-head-comics">
                        <a href="/" title="少年JUMP官网" className="ui-inbl JUMP" ></a>
                        <a href="/" title="JUMP SQUARE官网" className="ui-inbl SQ" ></a>
                        <a href="/" title="别册玛格丽特官网" className="ui-inbl MAGALETO" ></a>
                        <a href="/" className="ui-inbl logo-lt" title="玛格丽特官网" ></a>
                    </div>
                </div>
            </div>
            <div className="Japan-comic-box clearfix clearfix">
                <h2>看漫画<i></i></h2>
                <ul>
                    <li>
                        <strong className="ui-japan-red">连载中</strong>
                        <a href="/" title="航海王" >【航海王】</a>
                        <a href="/" title="排球少年！！" >【排球少年！！】</a>
                        <a href="/" title="死神（境•界）" >【死神（境•界）】</a>
                        <a href="/" title="食戟之灵" >【食戟之灵】</a>
                        <a href="/" title="银魂" >【银魂】</a>
                        <a href="/" title="境界触发者" >【境界触发者】</a>
                        <a href="/" title="美食的俘虏" >【美食的俘虏】</a>
                        <a href="/" title="新网球王子" >【新网球王子】</a>
                        <a href="/" title="好想告诉你" >【好想告诉你】</a>
                    </li>
                    <li>
                        <strong>已完结</strong>
                        <a href="/" title="火影忍者" >【火影忍者】</a>
                        <a href="/" title="龙珠" >【龙珠】</a>
                        <a href="/" title="阿拉蕾" >【阿拉蕾】</a>
                        <a href="/" title="家庭教师" >【家庭教师】</a>
                        <a href="/" title="游戏王" >【游戏王】</a>
                        <a href="/" title="圣斗士星矢" >【圣斗士星矢】</a>
                        <a href="/" title="网球王子" >【网球王子】</a>
                        <a href="/" title="食梦者（爆漫王）" >【食梦者（爆漫王）】</a>
                        <a href="/" title="黑子的篮球" >【黑子的篮球】</a>
                        <a href="/" title="花样男子" >【花样男子】</a>
                        <a href="/" title="恶魔奶爸" >【恶魔奶爸】</a>
                    </li>
                </ul>   
            </div>
            <div className="Japan-comic-wrap clearfix">
              <div className="Japan-comic-list">
              <div className="Japan-comic-head clearfix">
                        <h3 className="ui-left">漫画列表</h3>
                        <ul className="clearfix Japan-list-tab" id="Japan-list-tab-ani">
                            { titlelisthtml }
                        </ul>
                    </div>
              
                  <div className="japan-comic-wrap">
      <div className="japan-comic-mod">
        <div className="clearfix">
          <div className="Japan-page-tab  Japan-page-mt japan-tab-0">
            <span><span className="ft-current">{ this.state.page+1 }</span>/<span className="ft-length">3</span></span>
            <div className="japan-arrow-wrap">
              <a onClick={ this.firstpage } title="上一页" className="japan-arrow-left first">&lt;</a>
              <a onClick={ this.lastpage} title="下一页" className="japan-arrow-right last">&gt;</a>
            </div>
          </div>
        </div>
        <div className="bx-wrapper" >
          <div className="bx-viewport">
            <ul className="japan-list-slider" id="japan-list-slider-0" >
              <li>
                <ul className="Japan-comic-content clearfix">
                  { listhtml }
                </ul>
              </li>
            </ul> 
          </div>
          </div>
          </div>
        </div>
        </div>
            </div>
        </div>
      </div>
    )
  }

}

export default Com