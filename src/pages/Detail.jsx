import React, { Component } from 'react'
import { Carousel } from 'antd'
import Slider from "react-slick";
import './detail.scss'
import api from '@/api/detail'
// import Header from '@/components/common/Header'
// import { threadId } from 'worker_threads';

class Com extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      list:[],
      list1:[],
      list2:[], 
      list3:[],
      list4:[],
      list5:[],
      list6:[],
      pageswich:0,
      titlelist: ['玄幻', '都市', '恐怖', '校园', '悬疑', '科幻', '生活', '热血', '爆笑', '纯爱', '推理', '魔幻', '历史', '少儿',
        '动作', '战争', '彩虹', '萌系', '穿越', '后宫', '唯美', '完结'],
      shownum:0,
      pagelist: [],
      looklist: [],
      hotlist: [],
      hotnum:0,
      hot1list: []
    }
  }
  componentDidMount() {
    // console.log(this.props.location.search.slice(4))
    var id = this.props.location.search.slice(4)
    api.requestData(id).then(data=>{
        // console.log(data.data)
        this.setState({
            list: data.data
          })
    }) 
    api.requestData1(id).then(data=>{
        // console.log(data.data)
        this.setState({
            list1: data.data
          })
    }) 
    api.requestData2(id).then(data=>{
        // console.log(data.data)
        this.setState({
            list2: data.data
          })
    }) 
    api.requestData3(id).then(data=>{
        this.setState({
            list3: data.data.data
          })
    }) 
    api.requestData4(id).then(data=>{
        // console.log( data.data)
        this.setState({
            list4: data.data
          })
    }) 
    api.requestData5(id).then(data=>{
        // console.log(data)
        this.setState({
            list5: data
          })
    }) 
    api.requestData6().then(data=>{
        console.log(data)
        this.setState({
            list6: data
        })
    })
    api.requestpagelist(0,id).then(data => {
    	this.setState({
    		pagelist:data.data
    	})
    })
   api.requestlooklist().then(data => {
   	console.log(data.data)
    	this.setState({
    		looklist:data.data
    	})
    })
   api.requesthotlist(this.state.hotnum).then(data => {
   	console.log(data)
   		this.setState({
    		hotlist:data.data
    	})
   })
   api.requesthot1list(this.state.hotnum).then(data => {
   	console.log(data.data)
   		this.setState({
    		hot1list:data.data
    	})
   })
  }
  
showallpage(){
	var showflag = this.state.shownum
	if(showflag == 0) {
		showflag =1
	}else {
		showflag =0
	}
	this.setState({
		shownum: showflag
	})
}

paget(index) {
	var id = this.props.location.search.slice(4)
	api.requestpagelist(index,id).then(data => {
    	this.setState({
    		pagelist:data.data,
    		shownum: 0
    	})
   })
}
  render() {
  	let settings = {
      autoplay: true,
      infinite: true,
      speed: 500,
      fade: true,
      dots:true
    };
    
    let hot1html = []
    this.state.hot1list.map((item,index) =>{
    	hot1html.push(
    		<li class="mod-rank-first">
            <a class="mod-rank-cover ui-left">
                <img width="78px" height="104px" src={item.img}/>
            </a>
            <a class="mod-rank-no" title="心跳300秒" >
               {item.ranknum}
            </a>
            <dl class="mod-rank-info ui-left">
                <dt class="mod-rank-title">
                    <a>
                    {item.title}
                    </a>
                </dt>
                <dd>
                    <sup class="ui-rank-trend-up">
                    </sup>
                </dd>
            </dl>
        </li>
    	)
    })
    
    let hothtml = [] 
    this.state.hotlist.map((item,index) =>{
    	hothtml.push(
    		<li>
	        <sub class="mod-rank-keep ui-left">
	            {item.ranknum}
	        </sub>
	        <a class="mod-rank-name ui-left">
	            {item.title}
	        </a>
	        <sup class="ui-rank-trend-up">
	        </sup>
	    	</li>
    	)
    })
    
    let lookhtml = []
    this.state.looklist.map((item,index) =>{
    	lookhtml.push(
    		<li data-recommend="908|552463|2_908_10.205.147.176_1552014153">
                    <a className="mod-cover-list-thumb mod-cover-effect ui-db" data-ping="new.ac_comicInfo.see.other.1">
                        <img src={item.img}/>
                        <span className="mod-layer-mask">
                            &nbsp;&nbsp;
                        </span>
                    </a>
                    <p className="mod-cover-list-updata">
                        <a className="mod-cover-list-mask" data-ping="new.ac_comicInfo.see.other.1">
                            <span className="mod-cover-list-text" style={{ color:'#fff' }}>
                                {item.updata}
                            </span>
                        </a>
                    </p>
                    <h5>
                        <a className="mod-cover-list-name" data-ping="new.ac_comicInfo.see.other.1">
                            {item.title}
                        </a>
                    </h5>
                    <p className="mod-cover-list-intro">
                        {item.decs}
                    </p>
                    <p className="mod-cover-list-tag">
                        <a className="mod-tag-item" >{item.tags[0]}</a>   <a className="mod-tag-item" >
                            {item.tags[1]}
                        </a>   <a className="mod-tag-item" >
                            {item.tags[2]}
                        </a>
                    </p>
                </li>
    	)
    })
    
    let page1html = []
	    this.state.pagelist.map((item,index) =>{
	    	page1html.push(                    
		        <span className="works-chapter-item" style={{width:'200px',textAlign:'center',height:'50px'}}>
	            <a style={{marginLeft:'20px'}}>
	            	{item.title}
	            </a>
		        </span>
	    	)
	    })   
    let titlehtml = []
    this.state.titlelist.map((item, index) => {
      titlehtml.push(
        <li key={index}><a href=''>{item}</a></li>
      )
    })

    let bannerhtml = []
    this.state.list1.map((item,index)=>{
        bannerhtml.push(
            <li key={index} style={{ float: 'none', listStyle: 'none', position: 'absolute', width: '297px', zIndex: '0', display: 'listItem' }}>
                <a href="#" target="_blank" data-ping="new.ac_comicInfo.events.right.1">
                    <img src={item.img} />
                </a>
            </li>   
        )
    })

    let listhtml = []
    this.state.list3.map((item,index)=>{
        listhtml.push(
            <a onClick={this.paget.bind(this,index)}>
                {item}
            </a> 
        )
    })

    let pagehtml = []
    this.state.list4.map((item,index)=>{
        pagehtml.push(
            
        )
    })

    
    var goods=[]
    for(var i=0; i<6;i++){
        var goods=this.state.list6  
    }

    return (
      <div className="wrap">

        <div className="mod-top-wr">
          <div className="mod-top-frame">
            <div className="mod-top-tool-wr ui-wm">
              <div className="mod-top-logo-wr ui-left">
                <div className="mod-top-logo ui-left ui-text-hide">
                  <a title="动漫-腾讯动漫官方网站" href="/" onClick={this.pgvSendClick}>
                    <img className="header-pic-logo" src="//ac.gtimg.com/media/images/ac_logo.png" alt="腾讯动漫官方网站" />
                    <span className="ico-ani"></span>
                  </a>
                </div>

                <div className="mod-top-event ui-left ui-dn"></div>
              </div>
              <div className="mod-top-search-wr ui-left">
                <div id="top-search" className="mod-top-search">
                  <div className="mod-search-input-wr ui-left">
                    <label htmlFor="top-search-input" className="mod-search-label">请输入作品名称</label>
                    <input className="mod-search-input ac_input" type="text" id="top-search-input" autoComplete="off" />
                    <div className="ac_results"></div>
                  </div>
                  <button className="mod-search-submit ui-left ui-text-hide" type="submit">搜索</button>

                  {/*
                    <!-- 新添搜索提示 --> */}
                  <div id="ui-search-list-div" className="ui-search-list-wrap"></div>
                </div>

                <ul className="mod-top-tag" id="hotWord">
                  <li><a target="_blank" href='' onClick={this.pgvSendClick}
                    title="腾讯动漫-酷大叔的恋爱物语">酷大叔的恋爱物语</a></li>
                  <li><a target="_blank" href=" " onClick={this.pgvSendClick}
                    title="腾讯动漫-猫妖的诱惑">猫妖的诱惑</a></li>
                  <li><a target="_blank" href=" " onClick={this.pgvSendClick}
                    title="腾讯动漫-万事万灵">万事万灵</a></li>
                  <li><a target="_blank" href=" " onClick={this.pgvSendClick}
                    title="腾讯动漫-霸凰传说">霸凰传说</a></li>
                </ul>
              </div>

              {/*
        <!-- 顶部右侧广告位 --> */}
              <a href='#' onClick={this.pgvSendClick} title="腾讯动漫小程序" target="_blank"
                className="btn-tps" ></a>
              {/* style="background:url(https://ac.tc.qq.com/store_file_download?buid=15017&amp;uin=10001&amp;dir_path=/admin/swf/&amp;name=QQ图片20170523144527.gif) no-repeat;" */}
            </div>
          </div>


          <div className="mod-top-nav-wr">
            {/*
      <!-- 主导航栏开始 --> */}
            <div className="mod-top-nav ui-wm">
              {/*
        <!-- 主导航 --> */}
              <ul className="mod-top-nav-list ui-left">
                <li className="active">
                  <a className="mod-top-nav-home" href="/data/build/#/index" title="首页" onClick={this.pgvSendClick}>
                    <span>首页</span>
                    <i className="top-nav-i nav-i-no1"></i>
                  </a>
                </li>
                <li>
                  <a href="/data/build/#/riman" title="日漫" onClick={this.pgvSendClick}>
                    <span>日漫</span>
                    <i className="top-nav-i nav-i-no3"></i>
                  </a>
                </li>
                <li>
                  <a href="/data/build/#/qxs" title="轻小说" onClick={this.pgvSendClick}>
                    <span>轻小说</span>
                    <i className="top-nav-i nav-i-no4"></i>
                  </a>
                </li>
                <li>
                  <a href="/" title="福利社" onClick={this.pgvSendClick}>
                    <span>福利社</span>
                    <i className="top-nav-i nav-i-no4"></i>
                  </a>
                </li>
                <li>
                  <a href="/" target="comic" title="资讯" onClick={this.pgvSendClick}>
                    <span>资讯</span>
                    <i className="top-nav-i nav-i-no5"></i>
                  </a>
                </li>
                <li>
                  <a href="/data/build/#/flash" title="动画" onClick={this.pgvSendClick}>
                    <span>动画</span>
                    <i className="top-nav-i nav-i-no6"></i>
                  </a>
                </li>
                <li>
                  <a href="/data/build/#/rank" title="排行榜" onClick={this.pgvSendClick}>
                    <span>排行榜</span>
                    <i className="top-nav-i nav-i-no8"></i>
                  </a>
                </li>
                <li>
                  <a href="/data/build/#/user" title="个人中心" onClick={this.pgvSendClick}>
                    <span>个人中心</span>
                    <i className="top-nav-i nav-i-no9"></i>
                  </a>
                </li>
                <li className="mod-top-nav-rank">
                  <a href="/" title="手机版" onClick={this.pgvSendClick}>
                    <span>手机版</span>
                    <i className="top-nav-i nav-i-no10"></i>
                  </a>
                </li>
              </ul>
              {/*
        <!-- 上传充值 --> */}
              <div className="mod-top-nav-tool ui-right">
                <div className="mod-top-nav-btn">
                  <a href=" " className="mod-top-nav-maker" title="作者追梦计划" onClick={this.pgvSendClick}
                    target="_blank">作者追梦计划</a>
                  <span className="mod-top-shu">&nbsp;</span>
                  <a href="/MyComic/createComic" title="作品上传" onClick={this.pgvSendClick}>作品上传</a>
                </div>
                <a className="mod-top-nav-replenish ui-right" href="/VIP/pay" title="点券充值" onClick={this.pgvSendClick}><i
                  className="ui-left"></i>点券充值</a>
              </div>
            </div>
            {/*
      <!-- 主导航栏结束 --> */}
          </div>
        </div>
        <div className="bg-wrap">
          {/* <!-- nav --> */}
          <div className="mod-tags-wr ui-wm">
            <ul className="mod-tags-list">
              {titlehtml}
              <li className="last">
                <a className="mod-tags-all ui-btn-gray" href='/data/build/#/kind '>
                  <i className="mod-tags-icon"></i>全部分类
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* content */}
        <div id="special_bg" className='works-bg-1'>
          <div className="ui-wm ui-mb40 clearfix">
            <div className="ui-left works-intro-wr">
              <div className="works-intro clearfix">
                <div className="works-cover ui-left">
                  <a href="/ComicView/index/id/633864/cid/1" >
                    <img src={this.state.list.img}  height="280" width="210" />
                  </a>
                  <div className="works-cover-shadow"></div>
                  <label className="works-intro-status">{this.state.list.status}</label>
                </div>

                <div className="works-intro-detail ui-left">
                  <div className="works-intro-text">
                    <div className="works-intro-head clearfix">
                      <h2 className="works-intro-title ui-left">
                        <strong>{this.state.list.title}</strong>
                      </h2>
                    </div>
                    <div className="works-score clearfix">
                      <div className="works-score-act ui-left">
                        <div id="score" className="works-intro-star mod-star ui-right" style={{ cursor: "pointer", width: "136px" }}>

                            <img src="https://ac.gtimg.com/media/images/star_off.gif" alt="1" title="很差" />&nbsp;
                            <img src="https://ac.gtimg.com/media/images/star_off.gif" alt="2" title="较差" />&nbsp;
                            <img src="https://ac.gtimg.com/media/images/star_off.gif" alt="3" title="还行" />&nbsp;
                            <img src="https://ac.gtimg.com/media/images/star_off.gif" alt="4" title="推荐" />&nbsp;
                            <img src="https://ac.gtimg.com/media/images/star_off.gif" alt="5" title="力荐" />
                          <input type="hidden" name="score" />
                        </div>
                        <label id="score-label" className="ui-left">请您评分：</label>
                      </div>
                      <p className="ui-left">
                        评分：<strong className="ui-text-orange">{this.state.list.fraction}</strong>
                        (<span>{this.state.list.people}</span>人评分)
                                </p>
                    </div>
                    <p className="works-intro-digi">
                      <span className="first" style={{ paddingRight: "10px" }}>
                        作者：<em style={{ maxWidth: "168px" }}>{this.state.list.author}&nbsp;图：青哥&amp;十一ball 文：壹仔</em>
                      </span>
                      <span>人气：<em>{this.state.list.hot}</em></span>
                      <span>收藏数：<em id="coll_count">{this.state.list.fav}</em></span>
                    </p>
                    <p className="works-intro-short ui-text-gray9">
                    {this.state.list.intro}</p>
                  </div>
                  <div className="works-intro-opera">
                    <div className="ui-left">
                      
                      <div className="works-intro-active clearfix">
                        <a className="works-intro-view ui-btn-orange ui-radius3" title="开始阅读本草孤虚录" href="/ComicView/index/id/633864/cid/1" >开始阅读</a>
                        <div className="works-button-wr ">
                          <div id="div_collection_btn" className="ui-left"><a id="works-favorite" className="works-intro-fav ui-btn-pink" collection="add" title="收藏" href="javascript:void(0);"><i className="unfav">收藏</i></a></div>
                          <a href="javascript:void(0);" className="works-intro-ticket pop-month-tic ui-btn-pink" title="投月票" ><i className="icon-ticket">投月票</i></a>
                        </div>
                      </div>
                    </div>
                    <div className="ui-right">
                      <p className="clearfix"><a id="works_report_active" className="works-report ui-right" href="javascript:void(0);" title="举报">举报</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="works-vote clearfix">
                  <ul className="works-vote-list ui-left clearfix">
                      <li>
                          <strong id="redcount">{this.state.list.rednum}</strong>
                          <a id="vote-red" vote="1" className="works-vote-red works-vote-btn" href="javascript:void(0);" title="红票">红票</a>
                          <p>红票</p>
                      </li>
                      <li>
                          <strong>{this.state.list.blacknum}</strong>
                          <a id="vote-black" vote="2" className="works-vote-black works-vote-btn" href="javascript:void(0);" title="红票">黑票</a>
                          <p>黑票</p>
                      </li>
                      <li>
                          <span className="border-right"></span>
                      </li>
                  </ul>
                  <div id="works-status" className="works-status ui-left">
              <svg height="100%" version="1.1" width="100%" xmlns="https://www.w3.org/2000/svg"
                style={{ overflow: 'hidden', position: 'relative', left: '-0.5px' }}>

                <path fill="none" stroke="#fea250" d="M0,74L40,52L79.25,64L119,57L159.25,64L199,62L238.25,64L278,63L318.25,64L358,58L397.25,64L437,56L477.25,64L517,30L556.25,64L596,60L635.75,74"
                  strokeWidth="1" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                </path>
                <text x="594" y="94" textAnchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  fontSize="12px" fontFamily="宋体" fontWeight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                    
            </tspan>
                </text>

                <text x="596" y="94" textAnchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  fontSize="12px" fontFamily="宋体" fontWeight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                  爽爆了
            </tspan>
                </text>

                <text x="517" y="94" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  font-size="12px" font-family="宋体" font-weight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                  萌翻了
            </tspan>
                </text>

                <text x="437" y="94" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  font-size="12px" font-family="宋体" font-weight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                  美呆了
            </tspan>
                </text>

                <text x="358" y="94" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  font-size="12px" font-family="宋体" font-weight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                  吓尿了
            </tspan>
                </text>

                <text x="278" y="94" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  font-size="12px" font-family="宋体" font-weight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                  寒到了
            </tspan>
                </text>

                <text x="199" y="94" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  font-size="12px" font-family="宋体" font-weight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                  虐哭了
            </tspan>
                </text>

                <text x="119" y="94" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  font-size="12px" font-family="宋体" font-weight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                  笑喷了
            </tspan>
                </text>

               

                <desc style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                  Created with Raphael 2.1.2
               </desc>

                <desc style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                </desc>

                <path fill="#fffbf8" stroke="none" d="M0,74L40,52L79.25,64L119,57L159.25,64L199,62L238.25,64L278,63L318.25,64L358,58L397.25,64L437,56L477.25,64L517,30L556.25,64L596,60L635.75,74"
                  style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                </path>

                <text x="40" y="10" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{
                    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体',
                    fontSize:"12px", fontFamily:"宋体"
                  }}>
                  <tspan dy="4" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                    23185
              </tspan>
                </text>

                <path fill="#ffdbb9" stroke="none" d="M2,74L40,54L79.75,66L79.75,74" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', display: 'none' }}>
                </path>

                <text x="60" y="94" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#ff9026" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '10px Arial', display: 'none' }}>
                  <tspan dy="3.5" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                    +1
            </tspan>
                </text>



                <text x="119" y="10" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  font-size="12px" font-family="宋体" font-weight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                    12250
            </tspan>
                </text>

                <path fill="#ffdbb9" stroke="none" d="M79.25,74L79.25,66L119,59L158.75,66L158.75,74"
                  style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', display: 'none' }}>
                </path>

                <text x="139" y="94" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#ff9026" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '10px Arial', display: 'none' }}>
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                    +1
            </tspan>
                </text>

                <text x="199" y="10" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  font-size="12px" font-family="宋体" font-weight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                    3575
            </tspan>
                </text>

                <path fill="#ffdbb9" stroke="none" d="M159.25,74L159.25,66L199,64L238.75,66L238.75,74"
                  style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', display: 'none' }}>
                </path>

                <text x="139" y="94" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#ff9026" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '10px Arial', display: 'none' }}>
                  <tspan dy="3.5" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                    +1
            </tspan>
                </text>

                <text x="278" y="10" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  font-size="12px" font-family="宋体" font-weight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                   2575
            </tspan>
                </text>

                <path fill="#ffdbb9" stroke="none" d="M238.25,74L238.25,66L278,65L317.75,66L317.75,74"
                  style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', display: 'none' }}>
                </path>

                <text x="298" y="94" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#ff9026" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '10px Arial', display: 'none' }}>
                  <tspan dy="3.5" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                    +1
            </tspan>
                </text>

                <text x="358" y="10" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  font-size="12px" font-family="宋体" font-weight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                    10790
            </tspan>
                </text>

                <path fill="#ffdbb9" stroke="none" d="M318.25,74L318.25,66L358,60L397.75,66L397.75,74"
                  style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', display: 'none' }}>
                </path>

                <text x="378" y="94" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#ff9026" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '10px Arial', display: 'none' }}>
                  <tspan dy="3.5" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                    +1
            </tspan>
                </text>

                <text x="437" y="10" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  font-size="12px" font-family="宋体" font-weight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                    14698
            </tspan>
                </text>
                <path fill="#ffdbb9" stroke="none" d="M397.25,74L397.25,66L437,58L476.75,66L476.75,74"
                  style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', display: 'none' }}>
                </path>

                <text x="457" y="94" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#ff9026" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '10px Arial', display: 'none' }}>
                  <tspan dy="3.5" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                    +1
            </tspan>
                </text>

                <text x="517" y="10" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  font-size="12px" font-family="宋体" font-weight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                    63696
            </tspan>
                </text>

                <path fill="#ffdbb9" stroke="none" d="M477.25,74L477.25,66L517,32L556.75,66L556.75,74"
                  style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', display: 'none' }}>
                </path>

                <text x="537" y="94" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#ff9026" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '10px Arial', display: 'none' }}>
                  <tspan dy="3.5" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                    +1
             </tspan>
                </text>

                <text x="596" y="10" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#666666" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px 宋体' }}
                  font-size="12px" font-family="宋体" font-weight="normal">
                  <tspan dy="4" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                    7713
                </tspan>
                </text>

                <path fill="#ffdbb9" stroke="none" d="M556.25,74L556.25,66L596,62L633.75,74"
                  style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', display: 'none' }}>
                </path>

                <text x="616" y="94" text-anchor="middle" font="10px &quot;Arial&quot;"
                  stroke="none" fill="#ff9026" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '10px Arial', display: 'none' }}>
                  <tspan dy="3.5" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                    +1
            </tspan>
                </text>

                <circle cx="40" cy="52" r="2.5" fill="#feb77a" stroke="none" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                </circle>

                <circle cx="119" cy="57" r="2.5" fill="#feb77a" stroke="none" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                </circle>

                <circle cx="199" cy="62" r="2.5" fill="#feb77a" stroke="none" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                </circle>

                <circle cx="278" cy="63" r="2.5" fill="#feb77a" stroke="none" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                </circle>

                <circle cx="358" cy="58" r="2.5" fill="#feb77a" stroke="none" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                </circle>

                <circle cx="437" cy="56" r="2.5" fill="#feb77a" stroke="none" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                </circle>

                <circle cx="517" cy="30" r="2.5" fill="#feb77a" stroke="none" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                </circle>

                <circle cx="596" cy="60" r="2.5" fill="#feb77a" stroke="none" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>
                </circle>

                <rect x="0" y="0" width="79.5" height="104" r="0" rx="0" ry="0" fill="#ffffff"
                  stroke="none" style={{
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", cursor: 'pointer', opacity: "0",
                    opacity:"0"
                  }}>
                </rect>

                <rect x="79.5" y="0" width="79.5" height="104" r="0" rx="0" ry="0" fill="#ffffff"
                  stroke="none" style={{
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", cursor: 'pointer', opacity: "0",
                    opacity:"0"
                  }}>
                </rect>

                <rect x="159" y="0" width="79.5" height="104" r="0" rx="0" ry="0" fill="#ffffff"
                  stroke="none" style={{
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", cursor: 'pointer', opacity: "0",
                    opacity:"0"
                  }}>
                </rect>

                <rect x="238.5" y="0" width="79.5" height="104" r="0" rx="0" ry="0" fill="#ffffff"
                  stroke="none" style={{
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", cursor: 'pointer', opacity: "0",
                    opacity:"0"
                  }}>
                </rect>

                <rect x="318" y="0" width="79.5" height="104" r="0" rx="0" ry="0" fill="#ffffff"
                  stroke="none" style={{
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", cursor: 'pointer', opacity: "0",
                    opacity:"0"
                  }}>
                </rect>

                <rect x="397.5" y="0" width="79.5" height="104" r="0" rx="0" ry="0" fill="#ffffff"
                  stroke="none" style={{
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", cursor: 'pointer', opacity: "0",
                    opacity:"0"
                  }}>
                </rect>

                <rect x="477" y="0" width="79.5" height="104" r="0" rx="0" ry="0" fill="#ffffff"
                  stroke="none" style={{
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", cursor: 'pointer', opacity: "0",
                    opacity:"0"
                  }}>
                </rect>

                <rect x="556.5" y="0" width="79.5" height="104" r="0" rx="0" ry="0" fill="#ffffff"
                  stroke="none" style={{
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", cursor: 'pointer', opacity: "0",
                    opacity:"0"
                  }}>
                </rect>
              </svg>
            </div>
              </div>
            </div>
           
            <div className="ui-right">
              <div className="works-author-wr">
                <div className="works-author-intro clearfix">
                  <a className="works-author-face ui-left" href="/Comic/searchList/uin/dSswdXFYN21xaXVGUFkxeFUxWWJPUT09" title="岐黄小神龙">
                    <img src={this.state.list.authorimg} alt="岐黄小神龙" />
                  </a>
                  <dl className="works-author-info ui-left">
                    <dt>
                      <a className="works-author-name" href="/Comic/searchList/uin/dSswdXFYN21xaXVGUFkxeFUxWWJPUT09" title="岐黄小神龙">
                      {this.state.list.authorname}
                      </a>
                    </dt>
                    <dd>
                    {this.state.list.authorsign}
                    </dd>
                    <dd>
                      <a className="works-author-count" href="/Comic/searchList/uin/dSswdXFYN21xaXVGUFkxeFUxWWJPUT09">
                        作品数：<em>{this.state.list.authorcount}</em>
                      </a>
                    </dd>
                  </dl>
                </div>
                <div className="clearfix">
                  <h3 className="works-author-title">作者公告</h3>
                  <p className="works-author-notice">
                    {this.state.list.authornatice}
                  </p>
                  <span className="works-author-robe"></span>
                </div>
              </div>

              <div className="works-slider-ad">
                <div className="bx-wrapper mod-slider" style={{ maxWidth: '100%', position: 'relative' }}>
                  <div className="bx-viewport" style={{ width: '100%', overflow: 'hidden', position: 'relative', height: '187px' }}>
                    <ul className="works-slider-list" style={{ width: 'auto', position: 'relative' }}>
                      <Slider {...settings}>
                    		{bannerhtml}
											</Slider>
                    </ul>
                  </div>

                  <div className="bx-controls bx-has-pager bx-has-controls-direction">
                    <div class="bx-pager bx-default-pager">
                      {/* <div className="bx-pager-item">
                        <a href="" data-slide-index="0" className="bx-pager-link">1</a>
                      </div>
                      <div className="bx-pager-item">
                        <a href="" data-slide-index="1" className="bx-pager-link active">2</a>
                      </div>
                      <div className="bx-pager-item">
                        <a href="" data-slide-index="2" className="bx-pager-link">3</a>
                      </div>
                      <div className="bx-pager-item">
                        <a href="" data-slide-index="3" className="bx-pager-link">4</a>
                      </div>
                      <div className="bx-pager-item">
                        <a href="" data-slide-index="4" class="bx-pager-link">5</a>
                      </div> */}

                    </div>
                   
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className="subscribe-tip-wrap ui-wm clearfix">
            <div className="subscribe-tip" id="subscribe-tip" style={{visibility: 'hidden'}}><span id="subscribe-tip-txt">订阅漫画到桌面，追漫画更方便哦</span><a href="javascript:void(0)" id="subscribe-tip-close" class="tip-close"></a>
            </div>
          </div>         
          
          <div className="works-chapter-wr works-stack ui-wm ui-mb40">
              <div className="subscribe-btn-wrap" style={{display: 'none'}}>
                  <i>
                  </i>
                  <sup>
                  </sup>
                  <a href="javascript:void(0)" title="订阅至桌面" id="subscribe-btn" className="subscribe-btn">
                      订阅至桌面
                  </a>
              </div>
              <ul className="words-xone-menu clearfix works-chapter-menu">
                  <li className="active" value="505430">
                      <a href="#">
                          章节列表
                          <span className="works-ico works-ico-2">
                          </span>
                      </a>
                  </li> 
              </ul>
              <div className="works-chapter-list-tabcon">
                  <div className="works-chapter-list-con" id="chapter" style={{display: 'block'}}>
                      <div className="works-chapter-top subscribe-wrap" style={{width: '932px'}}>
                          <ul className="works-chapter-log ui-left">
                              <li>
                                  <span className="ui-font-fb">
                                      最新话：{this.state.list2.newupdata}
                                  </span>
                                  
                                  <span className="ui-pl10 ui-text-gray6">
                                      {this.state.list2.time}
                                  </span>
                              </li>
                          </ul>
                          <div className="chapter-page-pager">
                              <a className="chapter-page-btn-first chapter-page-btn active">
                                1-20
                              </a>
                              <a className="chapter-page-btn-all chapter-page-btn " onClick={this.showallpage.bind(this)}>
                                  …
                              </a>
                              <div className="chapter-page-more chapter-japan-page-more"  style={this.state.shownum === 0 ? {display:'none',position: 'absolute', Zindex: '60', left: '558px', top: '582px',width:'auto'} : {display:'block',position: 'absolute', Zindex: '60', left: '558px', top: '582px',width:'auto'}}>
                                  {listhtml}  
                              </div>
                              <a className="chapter-page-btn-new chapter-page-btn " href="javascript:void(0);">
                                  最新20话
                              </a>
                          </div>
                          <div className="subscribe-tip-wrap sub-qqb-tip-wrap">
                              <div className="subscribe-tip" id="subscribe-qqb-tip" style={{visibility: 'hidden'}}>
                                  用QQ浏览器可以订阅漫画到桌面哦
                                  <a href="javascript:void(0)" className="tip-close" id="subscribe-qbb-tip-close">
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="works-chapter-list-wr ui-left">
	                      <ol className="chapter-page-all works-chapter-list" style={{display: 'block'}}>
	                      <li style={{width:'auto',height:'100%',marginLeft:'120px'}}>
		                      {page1html}
		                    </li>
	                      </ol>
                      </div>
                  </div>


                  <div className="works-chapter-list-con" id="chapter3" style={{display: 'none'}}>
                      <div className="works-chapter-top" style={{width: '932px'}}>
                          <ul className="works-chapter-log ui-left">
                              <li>
                                  <span className="ui-font-fb">
                                      上次看到：
                                  </span>
                                  <a id="comic_history_531616" href="javascript:void(0);" className="works-unlink">
                                      --
                                  </a>
                              </li>
                              <li>
                                  <span className="ui-font-fb">
                                      最新话：
                                  </span>
                                  <a className="works-ft-new" href="/ComicView/index/id/531616/cid/1">
                                      [番外1 草帽剧场:海的音乐会]
                                  </a>
                                  <span className="ui-pl10 ui-text-gray6">
                                      2015.03.09
                                  </span>
                              </li>
                          </ul>
                          <div className="chapter-page-pager">
                          </div>
                      </div>
                      <div className="works-chapter-list-wr ui-left">
                          <ol className="chapter-page-all works-chapter-list">
                              <li>
                                  <p>
                                      <span className="works-chapter-item">
                                          <a target="_blank" title="航海王（番外篇）：番外1 草帽剧场:海的音乐会" href="/ComicView/index/id/531616/cid/1">
                                              番外1 草帽剧场:海的音乐会
                                          </a>
                                          <i className="ui-icon-free">
                                          </i>
                                          <i className="ui-icon-wnew">
                                          </i>
                                      </span>
                                  </p>
                              </li>
                          </ol>
                          <ol className="chapter-page-new works-chapter-list">
                              <li>
                              </li>
                          </ol>
                      </div>
                  </div>
              </div>
          </div>
          
          <div class='ui-wm ui-mb40 clearfix'>
<div className="ui-left">
	<div className="works-more-wr works-stack ui-mb40" id="youMayLike">
            <h3 className="works-title-small">
                {this.state.list5.title}
            </h3>
            <ul id="mod-cover-list" className="mod-cover-list clearfix">
                {lookhtml}
            </ul>
        </div>
</div>

		
				
				<div class="ui-right">
    <div class="works-rank-wr mod-rank-wr ui-mb20">
            <h3 class="works-title">
                作品人气榜
            </h3>
            <h4 id="works-rank-head" class="mod-rank-head tabs-handle">
                <a id="rank_all_day_pgv" class="active" href="javascript:void(0);">
                    当日
                </a>
                <a id="rank_all_week_pgv" href="javascript:void(0);">
                    本周
                </a>
                <a id="rank_all_month_pgv" href="javascript:void(0);">
                    本月
                </a>
            </h4>
            <div id="works-rank-list" class="mod-rank-list-wr tabs-panel">
                <ol class="mod-rank-list">
                		{hot1html}
                    {hothtml}
                </ol>
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
