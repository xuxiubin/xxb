import React, { Component } from 'react'
import './kind.css'
import api from '@/api/kind'
import Header from '@/components/common/Header'
// import { threadId } from 'worker_threads';

class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pagename: ['/data/build/#/index', '/data/build/#/kind', '/data/build/#/riman', '/data/build/#/qxs', '/data/build/#/fls', '/data/build/#/zixun', '/data/build/#/flash', '/data/build/#/rank', '/data/build/#/user', '/data/build/#/phone'],
      prop0: ['全部', '免费', '付费'],
      prop1:['全部', '连载', '完结'],
      prop2:['全部','爆笑','热血','冒险','恐怖','科幻','魔幻','玄幻','校园','悬疑','推理','萌系','穿越','后宫', '都市', '恋爱', '武侠', '格斗', '战争', '历史', '彩虹', '同人', '竞技', '励志', '百合', '治愈', '机甲', '纯爱', '美食', '恶搞', '虐心', '生活', '动作', '惊险', '唯美', '震撼', '复仇', '侦探', '其它', '脑洞', '奇幻', '宫斗', '爆笑', '运动', '青春', '穿越', '古风', '权谋', '明星', '社会', '浪漫', '栏目'],
      prop3:['全部','少年','少女','青年','少儿',],
      prop4:['全部','签约','精品','热门','新手',],
      prop5:['全部','故事漫画','轻小说','四格','绘本', '单幅', '同人'],
      prop6:['全部','内地','港台','韩国','日本',],
      prop7:['全部','首发','独家'],
      prop8:['全部','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0~9'],
      listdata: [],
      vip: 0,
      finish: 0,
      theme: 0,
      audience: 0,
      state: 0,
      type: 0,
      nation: 0,
      copyright: 0,
      mark: 0,
      page: 1,
      propnum0:0,
      propnum1:0,
      propnum2:0,
      propnum3:0,
      propnum4:0,
      propnum5:0,
      propnum6:0,
      propnum7:0,
      propnum8:0,
      npage: 1
    }
    this.firstpage = this.firstpage.bind(this)  //绑定this因为作用域的问题
    this.lastpage = this.lastpage.bind(this)

  }
  componentDidMount() {
    api.requestData(this.state.vip, this.state.finish, this.state.theme, this.state.audience, this.state.state, this.state.type, this.state.nation, this.state.copyright, this.state.mark, this.state.page).then(data => {
      this.setState({
        list: data.data,
      })
    })
  }
  // 1. 将 第几页、每页条数、查询条件 这些参数 传入操作数据库的方法中,每次改变页数 便从数据库获取相应记录段的数据 ， 循环显示在页面
  // 2. 先从数据库获取所有记录 ，在页面进行设置（可以配合使用jQuery插件），根据上下页 +-参数  通过js 方法 对数据进行分组显示


  firstpage() {
    let newpage = this.state.page   //setState就是对state的一个更新
    if (newpage <= 1) {                 //就是如果newpage<=0 就让page：0
      newpage = 1
        api.requestData(this.state.vip, this.state.finish, this.state.theme, this.state.audience, this.state.state, this.state.type, this.state.nation, this.state.copyright, this.state.mark, newpage).then(data => {
        this.setState({
          list: data.data,
          page: newpage,
          npage: newpage
        })
      })
    } else {
      newpage--               //setstate里面 可能 不能运算 所以这样写 没有直接在里面写
        api.requestData(this.state.vip, this.state.finish, this.state.theme, this.state.audience, this.state.state, this.state.type, this.state.nation, this.state.copyright, this.state.mark, newpage).then(data => {
        this.setState({
          list: data.data,
          page: newpage,
          npage: newpage
        })
      })
    }
  }

  lastpage() {
    let newpage = this.state.page
    //console.log(newpage)
    if (newpage >= 1000) {
      newpage = 1000
        api.requestData(this.state.vip, this.state.finish, this.state.theme, this.state.audience, this.state.state, this.state.type, this.state.nation, this.state.copyright, this.state.mark, newpage).then(data => {
        this.setState({
          list: data.data,
          page: newpage,
          npage: newpage
        })
      })
    } else {
      newpage++
        api.requestData(this.state.vip, this.state.finish, this.state.theme, this.state.audience, this.state.state, this.state.type, this.state.nation, this.state.copyright, this.state.mark, newpage).then(data => {
        this.setState({
          list: data.data,
          page: newpage,
          npage: newpage
        })
      })
    }
  }


  // 免费 付费数据请求 VIP=2
  tabs0(index) {
    api.requestData(index, this.state.finish, this.state.theme, this.state.audience, this.state.state, this.state.type, this.state.nation, this.state.copyright, this.state.mark, 1).then(data => {
      this.setState({
        list: data.data,
        propnum0: index,
        page: 1,
        npage: 1,
        vip: index
      })
    })
  }
  
  tabs1(index) {
    api.requestData(this.state.vip, index, this.state.theme, this.state.audience, this.state.state, this.state.type, this.state.nation, this.state.copyright, this.state.mark, 1).then(data => {
      this.setState({
        list: data.data,
        propnum1: index,
        page: 1,
        npage: 1,
        finish: index
      })
    })
  }
  
  tabs2(index) {
    api.requestData(this.state.vip, this.state.finish, index, this.state.audience, this.state.state, this.state.type, this.state.nation, this.state.copyright, this.state.mark, 1).then(data => {
      this.setState({
        list: data.data,
        propnum2: index,
        page: 1,
        npage: 1,
        theme: index
      })
    })
  }  

  tabs3(index) {
    api.requestData(this.state.vip, this.state.finish, this.state.theme, index, this.state.state, this.state.type, this.state.nation, this.state.copyright, this.state.mark, 1).then(data => {
      this.setState({
        list: data.data,
        propnum3: index,
        page: 1,
        npage: 1,
        audience: index
      })
    })
  }  

  tabs4(index) {
    let type = ''
    switch (index) {
      case 0: type = '0'; break;
      case 1: type = 'right'; break;
      case 2: type = 'pink'; break;
      case 3: type = 'pop'; break;
      case 4: type = 'rookie'; break;
    }
    api.requestData(this.state.vip, this.state.finish, this.state.theme, this.state.audience, type, this.state.type, this.state.nation, this.state.copyright, this.state.mark, 1).then(data => {
      this.setState({
        list: data.data,
        propnum4: index,
        page: 1,
        npage: 1,
        state: type
      })
    })
  }
  
  tabs5(index) {
    let type = ''
    switch (index) {
      case 0: type = '0'; break;
      case 1: type = '3'; break;
      case 2: type = '8'; break;
      case 3: type = '2'; break;
      case 4: type = '4'; break;
      case 5: type = '1'; break;
      case 6: type = '5'; break;
    }
    api.requestData(this.state.vip, this.state.finish, this.state.theme, this.state.audience, this.state.state, type, this.state.nation, this.state.copyright, this.state.mark, 1).then(data => {
      this.setState({
        list: data.data,
        propnum5: index,
        page: 1,
        npage: 1,
        type: type
      })
    })
  }   

  tabs6(index) {
    api.requestData(this.state.vip, this.state.finish, this.state.theme, this.state.audience, this.state.state, this.state.type, index, this.state.copyright, this.state.mark, 1).then(data => {
      this.setState({
        list: data.data,
        propnum6: index,
        page: 1,
        npage: 1,
        nation: index
      })
    })
  } 

  tabs7(index) {
    let type = ''
    switch (index) {
      case 0: type = '0'; break;
      case 1: type = 'first'; break;
      case 2: type = 'sole'; break;
    }
    api.requestData(this.state.vip, this.state.finish, this.state.theme, this.state.audience, this.state.state, this.state.type, this.state.nation, type, this.state.mark, 1).then(data => {
      this.setState({
        list: data.data,
        propnum7: index,
        page: 1,
        npage: 1,
        copyright: type
      })
    })
  }  

  tabs8(item, index) {
    if(item === '0~9') {
      item = '9'
    }
    api.requestData(this.state.vip, this.state.finish, this.state.theme, this.state.audience, this.state.state, this.state.type, this.state.nation, this.state.mark, item, 1).then(data => {
      this.setState({
        list: data.data,
        propnum8: index,
        page: 1,
        npage: 1,
        mark: item
      })
    })
  }

  topage(index) {
    api.requestData(this.state.vip, this.state.finish, this.state.theme, this.state.audience, this.state.state, this.state.type, this.state.nation, this.state.copyright, this.state.mark, index).then(data => {
      this.setState({
        list: data.data,
        page: index,
        npage: index
      })
    })    
  }

 

  render() {
    // console.log(this.state.list)
    let listdata = this.state.list;

    let prophtml0 = []
    this.state.prop0.map((item,  index) =>{
      prophtml0.push(
        <a key={index} className={ this.state.propnum0 == index? 'active' : ''} onClick={this.tabs0.bind(this, index)}>{item}</a>
      )                 
    })
    //在这里定义一个空数组 用来存放遍历的数据
    let prophtml1 = []
    this.state.prop1.map((item,index) => {
      prophtml1.push(
        <a key={index} className={this.state.propnum1 === index ? 'active' : ''} onClick={this.tabs1.bind(this, index)}>{item}</a>             
      )
    })

    let prophtml2 = []
    this.state.prop2.map((item,index) =>{
      prophtml2.push(
        <a key={index} className={this.state.propnum2 === index ? 'active' : ''} onClick={this.tabs2.bind(this, index)}>{item}</a>
       
      )
    })

    let prophtml3 = []
    this.state.prop3.map((item,index) =>{
      prophtml3.push(
        <a key={index} className={this.state.propnum3 === index ? 'active' : ''} onClick={this.tabs3.bind(this, index)}>{item}</a>
       
      )
    })
    
    let prophtml4 = []
    this.state.prop4.map((item,index) =>{
      prophtml4.push(
        <a key={index} className={this.state.propnum4 === index ? 'active' : ''} onClick={this.tabs4.bind(this, index)}>{item}</a>
       
      )
    })
    
    let prophtml5 = []
    this.state.prop5.map((item,index) =>{
      prophtml5.push(
        <a key={index} className={this.state.propnum5 === index ? 'active' : ''} onClick={this.tabs5.bind(this, index)}>{item}</a>
       
      )
    })
 
    let prophtml6 = []
    this.state.prop6.map((item,index) =>{
      prophtml6.push(
        <a key={index} className={this.state.propnum6 === index ? 'active' : ''} onClick={this.tabs6.bind(this, index)}>{item}</a>               
      )
    })

    let prophtml7 = []
    this.state.prop7.map((item,index) =>{
      prophtml7.push(
        <a key={index} className={this.state.propnum7 === index ? 'active' : ''} onClick={this.tabs7.bind(this, index)}>{item}</a>               
      )
    })
    
    let prophtml8 = []
    this.state.prop8.map((item,index) =>{
      prophtml8.push(
        <a key={index} className={this.state.propnum8 === index ? 'active' : ''} onClick={this.tabs8.bind(this, item,index)}>{item}</a>               
      )
    })

    let lists = [];
    if (listdata.length === 0) {
      lists = <h1>你搜索的东西暂无!!!! 你的要求太高了吧!!!!!!! 能否低调点!!!!!!!!!!</h1>
    } else {
      // console.log(this.state.page)
      for (var i = 0; i < this.state.list.length; i++) {
        lists.push(
          <li key={i} className="ret-search-item clearfix">
            <div className="ret-works-cover">
              <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="尸兄（我叫白小飞）">
                <img className="lazy" src={this.state.list[i].img} data-original="y" />
                <span className="mod-layer-mask">&nbsp;&nbsp;</span>
              </a>
              <p className="mod-cover-list-updata">
                <a className="mod-cover-list-mask"  href={"/data/build/#/detail?id=" + this.state.list[i].id}>
                  <span className="mod-cover-list-text">{this.state.list[i].updata}</span>
                </a>
              </p>
            </div>
            <div className="ret-works-info">
              <h3 className="ret-works-title clearfix">
                <a title="尸兄（我叫白小飞）">{this.state.list[i].title}</a>
                <i className="ui-icon-sign">签约</i>
                <i className="ui-icon-bout">精品</i>
              </h3>
              <p className="ret-works-author" title={this.state.list[i].title}>{this.state.list[i].author}</p>
              <p className="ret-works-tags">
                <a  >{this.state.list[i].tags[0]}</a>
                <a>{this.state.list[i].tags[1]}</a>
                <a >{this.state.list[i].tags[2]}</a>
                <span><em>{this.state.list[i].hot}</em></span>
              </p>
              <p className="ret-works-decs">{this.state.list[i].decs}</p>
              <a className="ret-works-view ui-btn-pink"  href={"/data/build/#/detail?id=" + this.state.list[i].id}>开始阅读</a>
            </div>
          </li>
        )
      }
    }
    return (
      <div className="wrap">
        <Header hnum='1' pagename={this.state.pagename}>
        </Header>
        <div className="ret-bg-type-0 ui-bg-rank-change">
          <div className="ui-wms ui-mb40 ui-mt40 clearfixs">

            <div className="ret-side-wr ui-left">
              <div className="ret-tags-wr">
                <h2 className="ret-title">检索</h2>
                <div className="ret-check-all clearfix">
                  <span className="ui-left ret-check-ft">全部 &gt;</span>
                </div>
                <div className="ret-tags-type">
                  <h3 className="ret-tags-title ret-tags-sx">属性</h3>
                  <div className="ret-tags-items single" id="p_vip">
                    {prophtml0}
                  </div>
                </div>
                <div className="ret-tags-type">
                  <h3 className="ret-tags-title ret-tags-jd">进度</h3>
                  <div className="ret-tags-items single" id="p_finish">
                    {prophtml1}
                  </div>
                </div>
                <div className="ret-tags-type">
                  <h3 className="ret-tags-title ret-tags-bq">标签</h3>
                  <div className="ret-tags-items single" id="p_theme">
                    {prophtml2}
                  </div>
                </div>
                <div className="ret-tags-type">
                  <h3 className="ret-tags-title ret-tags-sz">受众</h3>
                  <div className="ret-tags-items single" id="p_audience">
                    {prophtml3}
                  </div>
                </div>
                <div className="ret-tags-type">
                  <h3 className="ret-tags-title ret-tags-sx">品质</h3>
                  <div className="ret-tags-items single" id="p_state">
                    { prophtml4 }
                  </div>
                </div>
                <div className="ret-tags-type">
                  <h3 className="ret-tags-title ret-tags-lx">类型</h3>
                  <div className="ret-tags-items single" id="p_type">
                    { prophtml5 }
                  </div>
                </div>
                <div className="ret-tags-type">
                  <h3 className="ret-tags-title ret-tags-dq">地区</h3>
                  <div className="ret-tags-items single" id="p_nation">
                    {prophtml6}
                  </div>
                </div>
                <div className="ret-tags-type">
                  <h3 className="ret-tags-title ret-tags-dq">版权</h3>
                  <div className="ret-tags-items single" id="p_copyright">
                    {prophtml7}
                  </div>
                </div>

                <div className="ret-tags-type last">
                  <h3 className="ret-tags-title  ret-tags-zm">字母</h3>
                  <div className="ret-tags-items single" id="p_mark">
                    {prophtml8}
                  </div>
                </div>
              </div>
            </div>

            <div className="ret-main-wr ui-mb40 ui-left">
              <div className="ret-main">
                <div className="ret-search-head clearfix">
                  <ul id="search-condition" className="ret-search-type ui-left">
                    <li className="active" id="time">
                      <a title="点击后按时间排序" className="ret-search-time">更新时间</a>
                    </li>
                    <li id="hot">
                        <a title="点击后按人气从高到低" className="ret-search-rank" href="#">热门人气</a>
                    </li>
                  </ul>
                  <div className="ret-head-page ui-right" id="pagination1">
                    <a onClick={this.firstpage} className="mod_page_next">上一页</a>
                    <a className={this.state.npage == 1 ? 'current' : ''} onClick={this.topage.bind(this,1)}>1</a>
                    <a className={this.state.npage == 2 ? 'current' : ''} onClick={this.topage.bind(this,2)}>2</a>
                    <a className={this.state.npage == 3 ? 'current' : ''} onClick={this.topage.bind(this,3)}>3</a>
                    <a className={this.state.npage == 4 ? 'current' : ''} onClick={this.topage.bind(this,4)}>4</a>
                    <a className={this.state.npage == 5 ? 'current' : ''} onClick={this.topage.bind(this,5)}>5</a>
                    <a className={this.state.npage == 6 ? 'current' : ''} onClick={this.topage.bind(this,6)}>6</a>
                    <span>...</span>
                    <a className={this.state.npage == 7 ? 'current' : ''} onClick={this.topage.bind(this,999)}>999</a>
                    <a className={this.state.npage == 8 ? 'current' : ''} onClick={this.topage.bind(this,1000)}>1000</a>
                    <a onClick={this.lastpage} className="mod_page_next">下一页</a>
                  </div>
                  {/* <span className="ret-result-num ui-right">共<em>1715</em>个结果</span> */}
                </div>

                <div className="ret-search-result">
                  <ul className="ret-search-list clearfix">
                    {lists}
                  </ul>
                  <div className="ret-page-wr mod-page" id="pagination2">
                    <a onClick={this.firstpage} className="mod_page_next">上一页</a>
                    <a className={this.state.npage == 1 ? 'current' : ''} onClick={this.topage.bind(this,1)}>1</a>
                    <a className={this.state.npage == 2 ? 'current' : ''} onClick={this.topage.bind(this,2)}>2</a>
                    <a className={this.state.npage == 3 ? 'current' : ''} onClick={this.topage.bind(this,3)}>3</a>
                    <a className={this.state.npage == 4 ? 'current' : ''} onClick={this.topage.bind(this,4)}>4</a>
                    <a className={this.state.npage == 5 ? 'current' : ''} onClick={this.topage.bind(this,5)}>5</a>
                    <a className={this.state.npage == 6 ? 'current' : ''} onClick={this.topage.bind(this,6)}>6</a>
                    <span>...</span>
                    <a className={this.state.npage == 7 ? 'current' : ''} onClick={this.topage.bind(this,999)}>999</a>
                    <a className={this.state.npage == 8 ? 'current' : ''} onClick={this.topage.bind(this,1000)}>1000</a>
                    <a onClick={this.lastpage} className="mod_page_next">下一页</a>
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
