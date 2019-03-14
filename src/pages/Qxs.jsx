import React, { Component } from 'react';
import api from '@/api/Qxs/index.js'
// import './Qxs.scss'

// import React from 'react';
// import ReactDOM from 'react-dom';

// import { Carousel } from 'element-react';

// import 'element-theme-default';

class Com extends Component {
    constructor(props){
        super(props);
        this.state = {
            zjlist: [],
            num:0,
            changelist: ["1-10","11-20","21-30"],
            qclist: [],
            lalist: [],
            xhlist: [],
            gxlist: [],
            change1list: ["1-10","11-20","21-30"],
            num1: 0,
            rqlist: [],
            sclist: [],
            nvlist: [],
            nanlist: [],
            rqnum:0,
            scnum: 0,
            nvnum: 0,
            nannum: 0,
			swiperlist: [],
            swipernum:0,
            pagename: ['/data/build/#/index', '/data/build/#/kind', '/data/build/#/riman', '/data/build/#/qxs', '/data/build/#/fls', '/data/build/#/zixun', '/data/build/#/flash', '/data/build/#/rank', '/data/build/#/user', '/data/build/#/phone']
        }
    }

    componentDidMount(){
        api.requestzjlistData().then(data => {
            // console.log(data.data)
            this.setState({
              zjlist: data.data
            })
          })
          api.requestqclistData().then(data => {
            // console.log(data.data)
            this.setState({
              qclist: data.data
            })
          })
          api.requestlalistData().then(data => {
            // console.log(data.data)
            this.setState({
              lalist: data.data
            })
          })
          api.requestxhlistData().then(data => {
            // console.log(data.data)
            this.setState({
              xhlist: data.data
            })
          })
          api.requestgxlistData().then(data => {
            // console.log(data.data)
            this.setState({
              gxlist: data.data
            })
          })
          api.requestrqlistData().then(data => {
              console.log(data.data)
              this.setState({
                rqlist: data.data
              })
          })
          api.requestsclistData().then(data => {
            console.log(data.data)
            this.setState({
              sclist: data.data
            })
        })
        api.requestnvlistData().then(data => {
            console.log(data.data)
            this.setState({
            nvlist: data.data
            })
        })
        api.requestnanlistData().then(data => {
            console.log(data.data)
            this.setState({
              nanlist: data.data
            })
        })
        api.requestswiperlistData().then(data => {
            console.log(data.data)
            this.setState({
              swiperlist: data.data
            })
        })
    
    }

changelist(index){
    console.log(index)
    this.setState({
        num: index
    })
    api.requestchangelistData(index).then(data => {
        this.setState({
            zjlist: data.data
          })
    })
}
        
change1list(index){
    this.setState({
        num1: index
    })
    api.requestchange1listData(index).then(data => {
        this.setState({
            gxlist: data.data
        })
    })
}

changerqclass(index) {
    this.setState({
        rqnum: index
    })
   console.log(this.state.rqnum)
}
before(){
    let upnum = this.state.num
    if(upnum <= 0) {
        upnum = 2
    }else {
        upnum--
    }
    console.log(this.state.num)
    api.requestchangelistData(upnum).then(data => {
        this.setState({
            zjlist: data.data,
            num: upnum
        })
    })
}

after(){
    let upnum = this.state.num
    if(upnum >= 2) {
        upnum = 0
    }else {
        upnum++
    }
    console.log(this.state.num)
    api.requestchangelistData(upnum).then(data => {
        this.setState({
            zjlist: data.data,
            num: upnum
        })
    })
}

changescclass(index) {
this.setState({
    scnum: index
})
}

changenvclass(index) {
this.setState({
    nvnum: index
})
}

changenanclass(index) {
this.setState({
    nannum: index
})
}

besw(index){
	if(index <=0) {
		index =4
	}else{
		index--
	}
	this.setState({
		swipernum : index
	})
}
  
afsw(index){
	if(index >=4 ) {
		index =0
	}else{
		index++
	}
	this.setState({
		swipernum : index
	})
}
  
render(){
    let zjhtml = []
    let chnagehtml = []
    let qchtml = []
    let lahtml = []
    let xhhtml = []
    let gxhtml = []
    let change1html = []
    let rqhtml = []
    let schtml = []
    let nvhtml = []
    let nanhtml = []
	let swiperhtml = []
	let swiperchtml = []
//	this.state.swiperlist.map((item,index) => {
		for(var i = 0 ;i<this.state.swiperlist.length;i++){
			swiperhtml.push(
	            <li className={'banner'+(i+1)} key={i}>
	                <a href="javascript:void(0)">
	                    <img width="210" height="280" src={this.state.swiperlist[i].img}/>
	                </a>
	            </li>
			)
		}
		for(var i = 0 ;i<this.state.swiperlist.length;i++){
			swiperchtml.push(
				<div>
					<a className="ui-left img" style={this.state.swipernum === (i) ? {display:'block'} : {display:'none'}}>
		                <img width="210px" height="280px" src={this.state.swiperlist[i].img}/>
		            </a>
					<div className="banner-detail ui-left" style={this.state.swipernum === (i) ? {display:'block'} : {display:'none'}} >
		                <div className="banner-detail-head clearfix">
		                    <a>
		                        <h3 className="ui-left">{this.state.swiperlist[i].title}</h3>
		                    </a>
		                    <i className="ui-icon-lNovel ui-inbl"></i>
		                    <i className="ui-icon-bout">精品</i>
		                    <i className="ui-icon-exclusive">独家</i>
		                </div>
		                <p className="author">{this.state.swiperlist[i].author}</p>
		                <p className="update">{this.state.swiperlist[i].update}</p>
		                <p className="intro">{this.state.swiperlist[i].intro}</p>
		                <a className="read ui-btn-orange">翻开看看</a>
		            </div>
	            </div>
			)
		}

    this.state.zjlist.map((item,index) => {
        let tagshtml =[]
        item.tags.map((val,idx) =>{
            tagshtml.push(
                <a  className="tag-item">{val}</a>
            )
        })
        zjhtml.push(
            <div className="update-item">
                <a className="cover-item" title={ item.title} href={"/data/builddetail?id=" + item.id} >
                    <img src={ item.img} className="lazy" 
                    // style={{ width: "133px",height: "177px",display: "block"}}
                    />
                    <span className="cover-mask"></span>
                </a>
                <p className="update-info">
                    <a title="暗黑革命" className="update-info-mask">
                        <span className="update-info-txt">{ item.update}</span>
                    </a>
                </p>
                <h5>
                    <a title="暗黑革命" className="cover-name" target="_blank">{item.title}</a>
                </h5>
                <p className="cover-intro">{ item.intro}</p>
                <p className="cover-tag-list">
                    {tagshtml} 
                </p>
            </div>
                            
        )
    })

    this.state.changelist.map((item,index) => {
        chnagehtml.push(
            <a className={ this.state.num == index? "update-tab-num current" : "update-tab-num"}  onClick= { this.changelist.bind(this, index)}>{item}</a>
        )
    })
    this.state.qclist.map((item,index) => {
        qchtml.push(
            <li className="update-item" key= { item.id}>
            <a className="cover-item" href={"/data/build/#/detail?id=" + item.id}>
                <img src={ item.img} className="lazy" width="100" height="133" />
                <span className="cover-mask"></span>
            </a>
            <p className="update-info">
                <a className="update-info-mask">
                    <span className="update-info-txt">{ item.update}</span>
                </a>
            </p>
            <h5>
                <a className="cover-name" target="_blank">{ item.title} </a>
            </h5>
            <p className="cover-intro">{ item.intro}</p>
        </li>
       
        )
    })

    this.state.lalist.map((item,index) => {
        lahtml.push(
            <li className="update-item" key= { item.id}>
            <a className="cover-item"  href={"/data/build/#/detail?id=" + item.id} >
                <img src={ item.img} className="lazy" width="100" height="133" />
                <span className="cover-mask"></span>
            </a>
            <p className="update-info">
                <a className="update-info-mask">
                    <span className="update-info-txt">{ item.update}</span>
                </a>
            </p>
            <h5>
                <a className="cover-name" target="_blank">{ item.title} </a>
            </h5>
            <p className="cover-intro">{ item.intro}</p>
        </li>
       
        )
    })

    this.state.xhlist.map((item,index) => {
        xhhtml.push(
            <li className="update-item" key= { item.id}>
            <a className="cover-item"  href={"/data/build/#/detail?id=" + item.id} >
                <img src={ item.img} className="lazy" width="100" height="133" />
                <span className="cover-mask"></span>
            </a>
            <p className="update-info">
                <a className="update-info-mask">
                    <span className="update-info-txt">{ item.update}</span>
                </a>
            </p>
            <h5>
                <a className="cover-name" target="_blank">{ item.title} </a>
            </h5>
            <p className="cover-intro">{ item.intro}</p>
        </li>
       
        )
    })

    this.state.gxlist.map((item, index) => {
        let tagshtml =[]
        item.tags.map((val,idx) => {
            tagshtml.push(
                <a  title={ val}>{val}</a>
            )
        })
        gxhtml.push(
            <tr key= {item.id} >
                <td width="390px">
                    <span className="update-bottom-className">
                        【 . {tagshtml} 】
                    </span>
                    <a className="ft-weight" href={"/data/build/#/detail?id=" + item.id} 
                        title={item.title}>{item.title}</a>
                    <a >{ item.zj }</a>
                </td>
                <td width="230px" className="ui-text-gray9" >{ item.author }</td>
                <td className="ui-text-gray9">{ item.time }</td>
            </tr>
                                       
        )
    })
    this.state.change1list.map((item,index) => {
        change1html.push(
            <a className={this.state.num1 ==index? "update-tab-num current" : "update-tab-num "}  onClick= { this.change1list.bind(this, index)}>{ item }</a>
        )
    })

    this.state.rqlist.map((item,index) => {
        rqhtml.push(
            <li className={this.state.rqnum === index ? "rank-active" :''} onMouseEnter ={this.changerqclass.bind(this,index)}>
            <sub className="ui-left ">{ item.ranknum }</sub>
            <a className="rank-name ui-left" href={"/data/build/#/detail?id=" + item.id}  title={item.title}>{item.title}</a>
            <sup className="rank-ico rank-keep"></sup>
            <span className="rank-num ui-right">{item.hotnum }</span>
            <div className="rank-hover">
                <a className="rank-cover ui-left" href={"/data/build/#/detail?id=" + item.id} title={item.title}>
                    <img width="78px" height="104px" src={ item.img}
                         alt={item.title} className="lazy" />
                </a>
                <a className={(index+1)>3?'':"rank-tag rank-tag-"+(index+1)} href={"/data/build/#/detail?id=" + item.id}  title={item.title}></a>
                <dl className="ui-left">
                    <dt>
                        <a title={item.title}>{item.title}</a>
                    </dt>
                    <dd>{item.intro} </dd>
                    <dd className="ui-right">
                        <span className="ui-left">人气：<em>{ item.hotnum}</em></span>
                        <sup className="rank-keep rank-ico"></sup>
                    </dd>
                </dl>
            </div>
        </li>
        )
    })
    this.state.sclist.map((item,index) => {
        schtml.push(
            <li className={this.state.scnum ===index? "rank-active": ''} onMouseEnter ={this.changescclass.bind(this,index)}>
                <sub className="ui-left ">{item.ranknum}</sub>
                <a  className="rank-name ui-left" href={"/data/build/#/detail?id=" + item.id}  title={item.title}>{item.title}</a>
                <sup className="rank-ico rank-keep"></sup>
                <div className="rank-hover">
                    <a className="rank-cover ui-left" href={"/data/build/#/detail?id=" + item.id}  title={item.title}>
                        <img width="78px" height="104px" src={item.img} alt={item.title} className="lazy"/>
                    </a>
                    <a className={(index+1)>3?'':"rank-tag rank-tag-"+(index+1)} title={item.title}></a>
                    <dl className="ui-left">
                        <dt>
                            <a  target="_blank" href={"/data/build/#/detail?id=" + item.id}  title={item.title}>{item.title}</a>
                        </dt>
                        <dd>{item.intro}</dd>
                        <dd className="ui-right">
                            <sup className="rank-keep rank-ico"></sup>
                        </dd>
                    </dl>
                </div>
            </li>
                    
        )
    })
    this.state.nvlist.map((item,index) => {
        nvhtml.push(
            <li className={this.state.nvnum === index ? "rank-active" :''} onMouseEnter ={this.changenvclass.bind(this,index)}>
                <sub className="ui-left ">{item.ranknum}</sub>
                <a className="rank-name ui-left"  href={"/data/build/#/detail?id=" + item.id} title={item.title}>{item.title}</a>
                <sup className="rank-ico rank-keep"></sup>
                <div className="rank-hover">
                    <a className="rank-cover ui-left"  href={"/data/build/#/detail?id=" + item.id} title={item.title}>
                        <img width="78px" height="104px" src={item.img} alt={item.title} className="lazy"/>
                    </a>
                    <a className={(index+1)>3?'':"rank-tag rank-tag-"+(index+1)} title={item.title}></a>
                    <dl className="ui-left">
                        <dt>
                            <a title={item.title}>{item.title}</a>
                        </dt>
                        <dd>{item.intro}</dd>
                        <dd className="ui-right">
                        <sup className="rank-keep rank-ico"></sup>
                        </dd>
                    </dl>
                </div>
            </li>
            
        )
    })
    this.state.nanlist.map((item,index) => {
        nanhtml.push(
            <li className={this.state.nannum === index ? "rank-active" :''} onMouseEnter ={this.changenanclass.bind(this,index)}>
                <sub className="ui-left ">{item.ranknum}</sub>
                <a className="rank-name ui-left" href={"/data/build/#/detail?id=" + item.id}  title={item.title}>{item.title}</a>
                <sup className="rank-ico rank-keep"></sup>
                <div className="rank-hover">
                    <a className="rank-cover ui-left" href={"/data/build/#/detail?id=" + item.id}  title={item.title}>
                        <img width="78px" height="104px" src={item.img} alt={item.title} className="lazy"/>
                    </a>
                    <a className={(index+1)>3?'':"rank-tag rank-tag-"+(index+1)} title={item.title}></a>
                    <dl className="ui-left">
                        <dt>
                            <a title={item.title}>{item.title}</a>
                        </dt>
                        <dd>{item.intro}</dd>
                        <dd className="ui-right">
                        <sup className="rank-keep rank-ico"></sup>
                        </dd>
                    </dl>
                </div>
            </li>
            
        )
    })
return (

<div className="index">

<div className="mod-top-small-wr">
    <div className="ui-wm mod-top-small-head">
        <h1 className="mod-top-small-logo ui-left"><a title="腾讯动漫" href="/">腾讯动漫</a></h1>
        <ul className="mod-top-small-nav ui-left active">
            <li><a href="/" title="首页">首页</a></li>
            <li><a href="/Comic/index/state/pink" title="全部作品">全部作品</a></li>
            <li><a href="/Jump" title="日漫">日漫</a></li>
            <li className="active"><a href="/Light" title="轻小说">轻小说</a></li>
            <li><a href="/Ground" title="福利社" target="_blank">福利社</a></li>
            <li><a href="//new.qq.com/ch/comic" title="资讯" target="_blank">资讯</a></li>
            <li><a href="/event/cartoon2016/index.html" title="动画">动画</a></li>
            {/* <!--<li><a href="javascript:alert('敬请期待');" title="周边商城">周边商城</a></li>--> */}
            <li><a href="/Rank" title="排行榜">排行榜</a></li>
            <li><a href="/Home" title="个人中心">个人中心</a></li>
            <li><a href="//m.ac.qq.com/event/downloadForPc/index.html" title="手机版" target="_blank">手机版</a></li>
        </ul>
    </div>
</div>
<div className="top-border"></div>
{/* banner */}
<div className="top-wrap" id="top-wrap">
    {/* <canvas id="myCanvas" width="1440" height="485px" style="width: 1440px;">
    </canvas>
    <canvas id="myCanvas2" width="1440" height="485px" style="width: 1440px;">
    </canvas>
    <canvas id="myCanvas3" width="1440" height="485px" style="width: 1440px;">
    </canvas> */}
    <div id="carousel-box">
        <span className="prev arrow" id="prev" onClick={this.besw.bind(this,this.state.swipernum)}></span>
        <span className="next arrow" id="next" onClick={this.afsw.bind(this,this.state.swipernum)}></span>
        <div className="clearfix banner-focus">
            {swiperchtml}
        </div>
        <ul id="banner-list">
            {swiperhtml}
        </ul>
    </div>
</div>


<div className="cont-wrap clearfix">
    <div className="ui-left update-wrap">
        <div className="update-title clearfix">
            <h2 className="ui-left">最近更新</h2>
            <div className="update-tab ui-right" id="in-rise-tab">
                <a className="update-tab-prev in-rise-tab-leftbtn" title="上一页" onClick={this.before.bind(this)}></a>
                { chnagehtml}
                <a className="update-tab-next in-rise-tab-rightbtn" title="下一页" onClick={this.after.bind(this)}></a>
           
            </div>
        </div>
        <div className="bx-wrapper" style={{maxWidth:'9000px'}}>
            <div className="bx-viewport" style={{ width: '100%', overflow: "hidden", position: "relative", height: "552px"}}>
                <ul id="in-rise-list" className="update-list clearfix" style= {{ width: "auto", position: "relative"}} >
                    <li style ={{ float: "none", listStyle: "none", position: "absolute", width: "9000px", zIndex: "50", display: "block"}}>
                        <div className="update-con clearfix">
                            { zjhtml}
                        </div>
                    </li>
                    <li >
                        <div className="update-con clearfix">
                         
                        </div>
                    </li>
                    <li>
                        <div className="update-con clearfix">
                         
                         
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        {/* <!-- 中部广告 --> */}
        <div className="advertise">
            <a >
                <img src="https://manhua.qpic.cn/operation/0/29_11_36_d5791df9a76aab044027b31e280891b8_1546054598410.jpg/0"
                    alt="镜·朱颜" className="lazy"/>
            </a>
        </div>

        <div className="stack-title clearfix">
            <h2 className="cover ui-left">分类<em>书库</em></h2>
        </div>
        {/* <!-- 恋爱 · 校园 --> */}
        <div className="classNameify-wrap" >
            <div className="classNameify-top clearfix" style={{  position: 'relative', lineHeight :'18px', borderBottom :'2px solid #494949' }}>
                <h2 style={{ float: 'left', paddingBottom: '8px',paddingRight: '6px', borderBottom: '3px solid #3f3f3f',color: '#333',fontSize: '22px',lineHeight: '28px',fontFamily: "Microsoft YaHei"}}>恋爱 · 校园</h2>
                <a title="更多"  style={{ float: 'right', marginTop: '8px', height: '24px', lineHeight: '24px',color: '#3f3f3f' }}>更多&gt;&gt;</a>
            </div>
        </div>
        <ul className="book-list clearfix">
            { lahtml}
        </ul>
        {/* <!-- 玄幻 · 战斗 --> */}
        <div className="classNameify-wrap" style={{paddingTop: '24px'}}>
            <div className="classNameify-top clearfix" style={{  position: 'relative', lineHeight :'18px', borderBottom :'2px solid #494949'}}>
                <h2 style={{ float: 'left', paddingBottom: '8px',paddingRight: '6px', borderBottom: '3px solid #3f3f3f',color: '#333',fontSize: '22px',lineHeight: '28px',fontFamily: "Microsoft YaHei"}}>玄幻 · 战斗</h2>
                <a title="更多">更多&gt;&gt;</a>
            </div>
        </div>
        <ul className="book-list clearfix">
            {xhhtml}
        </ul>

        {/* <!-- 青春 · 生活 -->/ */}
        <div className="classNameify-wrap"style={{paddingTop: '24px'}}>
            <div className="classNameify-top clearfix"  style={{  position: 'relative', lineHeight :'18px', borderBottom :'2px solid #494949'}} >
                <h2 style={{ float: 'left', paddingBottom: '8px',paddingRight: '6px', borderBottom: '3px solid #3f3f3f',color: '#333',fontSize: '22px',lineHeight: '28px',fontFamily: "Microsoft YaHei"}}>青春 · 生活</h2>
                <a style={{ float: 'right', marginTop: '8px', height: '24px', lineHeight: '24px',color: '#3f3f3f'}}>更多&gt;&gt;</a>
            </div>
        </div>
        <ul className="book-list clearfix" style={{ width: '786px', paddingTop: '10px'}}>
            
           
        {qchtml}
        </ul>

        {/* <!-- 更新列表 --> */}
        <div className="update-title clearfix update-bottom">
            <h2 className="ui-left">更新<em>列表</em></h2>
            <div className="update-tab ui-right" id="update-bottom-tab">
                <a className="update-tab-prev in-rise-tab-leftbtn" href="javascript:void(0);" title="上一页"></a>
                {change1html}
                <a className="update-tab-next in-rise-tab-rightbtn" href="javascript:void(0);" title="下一页"></a>
            </div>
        </div>
        <div className="update-bottom-con">
            <div className="bx-wrapper" style={{maxWidth: '9000px'}} >
                <div className="bx-viewport" style={{width: '100%', overflow: 'hidden', position: 'relative', height: '370px'}}>
                    <ul id="update-bottom-list" className="update-bottom-list clearfix" style={{width: 'auto', position: 'relative'}} >
                        <li style={{float: 'none', listStyle: 'none', position: 'absolute', width: '9000px', zIndex: '50', display: 'block'}}>
                            <div className="update-bottom-wrap">
                                <table border="0" cellSpacing="1" cellPadding="0">
                                    <tbody>
                                      {gxhtml}
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li >
                            <div className="update-bottom-wrap">
                                <table border="0" cellSpacing="1" cellPadding="0">
                                    <tbody>
                                       
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li>
                            <div className="update-bottom-wrap">
                                <table border="0" cellSpacing="1" cellPadding="0">
                                    <tbody>
                                       
                                       
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="ui-right rank">
        {/* <!-- 人气总榜 --> */}
        <div className="rank-wrap">
            <div className="rank-head">
                <h3 className="ui-left">
                    人气总榜
                </h3>
            </div>
            <div className="rank-list">
                <ol className="rank-ol">
                {rqhtml}
                </ol>
            </div>
        </div>

        {/* <!-- 收藏排行 --> */}
        <div className="rank-wrap">
            <div className="rank-head collect-head">
                <h3 className="ui-left">
                    收藏排行
                </h3>
            </div>
            <div className="rank-list">
                <ol className="rank-ol">
                {schtml}
                </ol>
            </div>
        </div>

        {/* <!-- 女生最爱 --> */}
        <div className="rank-wrap">
            <div className="rank-head girl-head">
                <h3 className="ui-left">
                    女生最爱
                </h3>
            </div>
            <div className="rank-list">
                <ol className="rank-ol">
                    { nvhtml}
                </ol>
            </div>
        </div>
        {/* <!-- 男生最爱 --> */}
        <div className="rank-wrap">
            <div className="rank-head boy-head">
                <h3 className="ui-left">
                    男生最爱
                </h3>
                <a title="更多" className="ui-right rank-more" 
                // style="display:none;"
                >更多&gt;&gt;</a>
            </div>
            <div className="rank-list">
                <ol className="rank-ol">
                    {nanhtml}
                </ol>
            </div>
        </div>
    </div>
</div>
// {/* <!-- 底部广告 --> */}
<div className="advertise advertise-bottom">
    <ul id="adv-cont">
        <li>
            <a href="https://ac.qq.com/Comic/comicInfo/id/636283" title="酷大叔的恋爱物语" target="_blank">
                <img src="https://manhua.qpic.cn/operation/0/26_11_33_d9acfc078ce8fd9fc91589bcd25c6be3_1545795199580.jpg/0"
                    alt="酷大叔的恋爱物语" className="lazy"/>
            </a>
        </li>
        <li 
        // style="display: none;"
        >
            <a href="http://ac.qq.com/event/light201510/index.shtml" title="收藏轻小说赢Q币活动" target="_blank">
                <img src="https://manhua.qpic.cn/manhua_detail/0/12_11_46_3799be435adc32297f7c2edf1cced69f.jpg/0" alt="收藏轻小说赢Q币活动"
                    className="lazy"/>
            </a>
        </li>
    </ul>
    <ul id="adv-tab" >
        <li className="current"></li>
        <li></li>
        <li></li>
    </ul>
</div>

</div>
)
}

}
export default Com