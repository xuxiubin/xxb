import React, { Component } from 'react';
import api from '@/api/index/index.js'
import './index.scss'

class Com extends Component {
  constructor (props) {
    super (props);
     this.state = {
      titlelist: ['玄幻', '都市', '恐怖', '校园', '悬疑', '科幻', '生活', '热血', '爆笑', '纯爱', '推理', '魔幻', '历史', '少儿',
       '动作', '战争', '彩虹', '萌系','穿越', '后宫', '唯美', '完结'],
      newtit: ['神女大人套路多','恋上一屋吸血鬼','酷大叔的恋爱物语','化龙记','卜算子','万事万灵','影帝X影帝','我是大神仙'
       ],
       changxiaotit: [
          '一人之下','全职法师','重生之都市修仙','我在末世有套房','武炼巅峰','我的天劫女友','从前有座灵剑山','妖怪名单',
          '我的微信连三界','超级兵王在都市','修真聊天群','百炼成神','狐妖小红娘','我为苍生','王牌御史','驭灵师'
       ],
       dashanglist: [
        '中山公园走失的兔子','洛黎岚','三儿','云臻','介','星辰、地动','超人','我永远喜欢橘','寡言花瓶萌','墨多多','左一'
       ],
     dhtitlelist: [],
     gmlist: [], 
     className: 'mod-ani-info active1',
     num: -1,
     hotlist: ['国漫', '日漫', '综合'],
     hotnum: 0,
     btnlist: [], 
     yp1list: [],
     ypnum: 0,
     yplist: ['1-15','16-30','31-45'],
     sslist: [],
     changess: ['1-10','11-20','21-30'],
     ssnum:0,
     gxlist: [],
     gx1list: ['1-15','16-30','31-45'],
     gx1num: 0,
     swipernum:0,
     tjlist: ['上一页','第二页','下一页'],
     qtlist: [],
     qtlinum: 0,
     qtlilist: [],
     qtzplist: ['全部作品','女生推荐'],
     qtzpnum: 0,
     qtpage: 1,
     qylist: [],
     bigqynum: 0,
     bigqxsnum: 0,
     nvlist: [],
     nanlist: [],
     tjnum: 1, 
     qxslist: []
    }  
  }

  componentDidMount() {
    api.requestdhtitleData().then(data => {
      // console.log(data.data)
      this.setState({
        dhtitlelist: data.data
      })
    })
    api.requestgmlistData().then(data => {
      // console.log(data.data)
      this.setState({
        gmlist: data.data
      })
    })
    api.requestbtnlistData().then(data => {
      // console.log(data.data)
      this.setState({
        btnlist: data.data
      })
    })
    api.requestyplistData().then(data => {
      // console.log(data.data)
      this.setState({
        yp1list: data.data
      })
    })
    api.requestgxlistData().then(data => {
      // console.log(data.data)
      this.setState({
        gxlist: data.data
      })
    })
    api.requestqtlistData().then(data => {
      // console.log(data.data)
      this.setState({
        qtlist: data.data
      })
    })

    api.requestqylistData().then(data => {
      // console.log(data.data)
      this.setState({
        qylist: data.data
      })
    })

    api.requestsslistData().then(data => {
      console.log(data)
      this.setState({
        sslist: data
      })
    })
    api.requestnvlistData().then(data => {
      // console.log(data.data)
      this.setState({
        nvlist: data.data
      })
    })
    api.requestnanlistData().then(data => {
      this.setState({
        nanlist: data.data
      })
    })
    api.requestqxsData().then(data => {
      this.setState({
        qxslist: data.data
      })
    })
    
  }

  show(index){
    if(this.state.num === index) {
      this.setState({
        num: -1
      })
    }else {
      this.setState({
        num: index
      }) 
    }
  }

  tab(index){
    this.setState({
      tjnum: index,
      qtpage: 1
    })
    if(index == 0) {
      api.requestnvlistData(1).then(data => {
      this.setState({
        qtlist: data.data,
        tjpage: 1
        })
      })
    }else if (index ==1) {
      api.requestqtlistData(1).then(data => {
      this.setState({
        qtlist: data.data,
        tjpage: 1
      })
    })
      
    }
      
  }
  
  changehot (index) {
    this.setState({
      hotnum: index
    })
    api.requestchangehotlistData(index).then(data => {
      this.setState({
        gmlist: data.data
      })
    })
  }
  changeyp (index) {
    this.setState({
      ypnum: index
    })
    api.requestchangeyplistData(index).then(data => {
      this.setState({
        yp1list: data.data
      })
    })
  }
  changegx (index) {
    this.setState({
      gxnum: index
    })
    api.requestchangegxlistData(index).then(data => {
      this.setState({
        gxlist: data.data
      })
    })
  }
  changess (index) {
    api.requestchangesslistData(index).then(data => {
      this.setState({
        sslist: data,
        ssnum: index
      })
    })
    console.log(this.state.ssnum)
  }

//推荐
  swiper(){
    let sn=this.state.swipernum
    if( sn >= 2){
      sn=0
    }else{
      sn++
    }
    this.setState({
      swipernum: sn
    })
  }

  swiper1(index){
    this.setState({
      swipernum: index
    })
  }
  //强推
  qtli(index){
    let qtlinum= 0
    this.setState({
      qtlinum: index
    })
    console.log(qtlinum)
    api.requestqtlistData().then(data => {
      console.log(data.data)
      this.setState({
        qtlist: data.data
      })
    })

  }
  qtzp(index){
    this.setState({
      qtzpnum: index
    })

  }
  
  changeqtpage(index) {
    console.log(this.state.tjnum)
    if(this.state.tjnum == 0) {
      if(index == 0) {
        let num = this.state.qtpage
        if(num <= 1) {
          num = 1
        }else {
          num -- 
        api.requestnvlistData(num).then(data => {
        this.setState({
          qtlist: data.data,
          qtpage: num
          })
        })
        }
      } else {
        let num = this.state.qtpage
        if(num >= 3) {
          num = 3
        }else {
          num ++    
        api.requestnvlistData(num).then(data => {
        this.setState({
          qtlist: data.data,
          qtpage: num
          })
        })
        }
      }
    }else {
      if(index == 0) {
        let num = this.state.qtpage
        if(num <= 1) {
          num = 1
        }else {
          num -- 
        api.requestqtlistData(num).then(data => {
        this.setState({
          qtlist: data.data,
          qtpage: num
          })
        })
        }
      } else {
        let num = this.state.qtpage
        if(num >= 3) {
          num = 3
        }else {
          num ++    
        api.requestqtlistData(num).then(data => {
        this.setState({
          qtlist: data.data,
          qtpage: num
          })
        })
        }
      }
  }
}
  qyenter(index) {
    this.setState({
      bigqynum: index
    })
  }
  qxsenter(index) {
    this.setState({
      bigqxsnum: index
    })
  }
  
  render(){
    let titlehtml = []
    let newhtml =[]
    let changxiaohtml =[]
    let dashanghtml = [] 
    
    //动画
    let dhtitlehtml =[]
    
    //热门
    let hothtml = []
    let gm1html =[]
    let gm2html =[]
    //月票
    let yphtml = []
    let yp1html= []
    //上升
    let sshtml = []
    let changesshtml = []
    
    //更新
    let gxhtml = []
    let gx1html = []
    
    // 推荐
    let tjhtml = []
    let btnhtml = []
    //强推
    let qthtml = []
    let qtlihtml = []
    let qtzphtml = []

    //签约
    let qyhtml = []
    let bigqyhtml = []
    let bigtitlehtml = []
    
    //轻小说
    let qxshtml= []
    let bigqxsthtml = []
    let bigqxshtml = []
    
    //少女
    let nvhtml = []


    //少年
    let nanhtml = []


    //动画
    this.state.dhtitlelist.map((item,index)=>{
      let oncekindhtml = []
      // console.log(item)
      item.oncekind.map((val, num) => {
        oncekindhtml.push(
          <li key={num} className="current">
           <a  href="">{val}</a>
        </li>
        )
       })
      dhtitlehtml.push(
        <li key={index} onClick={this.show.bind(this, index)}>
          <a className="mod-top-ani-a">{item.title}</a>
          <div className={index == this.state.num ? this.state.className : 'mod-ani-info'}>   
            <span className="mod-ico-top">&nbsp;</span>
            <a className="mod-ani-img" href="" >
              <img className="lazy" src={item.img}  width="214" height="126" alt={item.title}/>
              <span className="mod-ani-bg">
                <span className="mod-ani-ft">{item.until}</span>
              </span>
            </a>
            <div className="mod-ani-text1 clearfix">
              <a href="" className="ui-left ui-fs-18">{item.title}</a>
              <a href="" className="ui-right ui-txt-fb">{item.update}</a>
            </div>
            <div className="mod-ani-text2">
              <p className="ui-ani-fplay">{item.viewc}</p>
              <a href="" title="全部剧集" 
                    target="_blank">全部剧集</a>
            </div>
            <ul className="mod-ani-ul clearfix">
            { oncekindhtml }
            </ul>
          </div>
        
        </li>
      )
    })
    //推荐点击
    this.state.tjlist.map((item,index) => {
      tjhtml.push(
       <a key={index} className={ this.state.swipernum == index? 'in-slider-btn ui-btn-round active' : 'in-slider-btn ui-btn-round' }  onClick={this.swiper1.bind(this,index)}>{ item }</a>
      )

    })
    //推荐
    for( var i=this.state.swipernum*4;i<this.state.btnlist.length;i++){
             btnhtml.push(
              <li key={ this.state.btnlist[i].id} className="bx-clone">
              <a className="mod-cover-list-thumb mod-cover-effect ui-db"  href={"/data/build/#/detail?id=" + this.state.btnlist[i].id} >
                <img src={this.state.btnlist[i].cover_url} alt=""/>
                <span className="mod-layer-mask">&nbsp;&nbsp;</span>
              </a>
              <p className="mod-cover-list-updata">
                <a className="mod-cover-list-mask" style={{ color:'#fff'}} >
                  <span className="mod-cover-list-text">{this.state.btnlist[i].update_info}</span>
                </a>
              </p>
              <h5>
                <a className="mod-cover-list-name" >{this.state.btnlist[i].title}</a>
              </h5>
              <p className="mod-cover-list-intro"  href={"/data/build/#/detail?id=" + this.state.btnlist[i].id}>{this.state.btnlist[i].intrd}</p>
              <p className="mod-cover-list-tag">
                <a className="mod-tag-item"  target="_blank" title="都市">数据结构有问题</a>
              </p>
            </li>
             )
    } 
    
//热门
    this.state.hotlist.map((item, index) => {
      hothtml.push(
        <li key={index} className={ this.state.hotnum == index ? 'active' : '' } onClick={this.changehot.bind(this,index)}><a>{ item }</a></li>
      )
    })
//月票所有
this.state.yplist.map((item, index) => {
  yphtml.push(
        <a key={index} className={ this.state.ypnum == index? 'active' : '' }  onClick={this.changeyp.bind(this,index)}>{ item }</a>
    )
})
        //月票1-15
  this.state.yp1list.map((item,index) => {
      yp1html.push(
          <li key={index} className="in-monrank-list-hot">
          <b>{ item.sort}</b>
          <a  href={"/data/build/#/detail?id=" + item.id}>
            <em className="no1" >{ item.title }</em>
            <em className="no2" >{ item.author}</em>
            <em className="last">{ item.monnum}</em>
          </a>
         </li>
         
      )
  })
  //上升
  this.state.sslist.map((item, index) => {
    sshtml.push(
      <div className="in-rise-item">
      <a className="mod-cover-list-thumb-samll mod-cover-effect ui-db mod-cover-list-thumb-small" href={"/data/build/#/detail?id=" + item.id}>
        <img className="lazy" src={item.cover_url}  style={{width:'98px',height:'131px'}}/>
        <span className="mod-layer-mask">&nbsp;&nbsp;</span>
      </a>
      <h5>
        <a className="mod-cover-list-name"  href={"/data/build/#/detail?id=" + item.id}>
          {item.less_title} </a>
      </h5>
      <p className="mod-cover-list-intro">{item.intrd}</p>
      <p className="mod-cover-list-tag">
        <a className="mod-tag-item" >{item.tags}</a>
      </p>

    </div>
    
    )
  })
  this.state.changess.map((item, index) => {
    changesshtml.push(
      <a className={ this.state.ssnum == index? 'in-rise-tab-num current' : 'in-rise-tab-num' } onClick={this.changess.bind(this,index)}>{ item }</a>
    )
  })
//更新所有
this.state.gx1list.map((item, index) => {
  gx1html.push(
    <a key={index} className={ this.state.gxnum == index? 'in-rise-tab-num current active' : 'in-rise-tab-num' }  onClick={this.changegx.bind(this,index)}>{ item }</a>
    )
})
//更新
   this.state.gxlist.map((item, index) => {
    gxhtml.push(
        <tr key={ item.id }>
        <td className= 'td1' >
          <span className="in-risecon-first">
            【<a >武侠</a>·<a >纯爱</a>】
          </span>
          <a className="ft-weight" href={"/data/build/#/detail?id=" + item.id}> { item.title} </a>
        </td>
        <td className="ui-text-gray9 td2" > { item.author}</td>
        <td className="ui-text-gray9 td3">{ item.time }</td>
      </tr>
    )
  }) 

//强推

   //强推推荐点击
   this.state.tjlist.map((item,index) => {
    qtzphtml.push(
     <a className={ this.state.qtzplist == index? ' active' : '' }  onClick={this.qtzp.bind(this,index)}>{ item }</a>
    )

  })
 

  this.state.qtlist.map((item,index) =>{
      qthtml.push(
        <div key={index} className="in-anishe-text">
                  <a className="mod-cover-list-thumb mod-cover-effect ui-db" href={"/data/build/#/detail?id=" + item.id}>
                     <img src= { item.img }/>
                    <span className="mod-layer-mask">
                      &nbsp;&nbsp;
                    </span>

                  </a>
                  <p className="mod-cover-list-updata">
                    <a target="_blank" className="mod-cover-list-mask" >
                      <span className="mod-cover-list-text">{item.updata}</span>
                    </a>
                  </p>
                  <h5>
                    <a className="mod-cover-list-name"> {item.title}</a>
                  </h5>
                  <p className="mod-cover-list-intro">{item.decs }</p>

                  <p className="mod-cover-list-tag">
                    <a className="mod-tag-item"> { item.tags[0] } { item.tags[1] } { item.tags[2] }</a>
                  </p>
                </div>

      )
    })


// //签约
this.state.qylist.map((item,index) =>{
  bigqyhtml.push(
     <a className="" href={"/data/build/#/detail?id=" + item.id} style={this.state.bigqynum === index ? {display: 'block'} : {display:'none'}}>
        <img className="lazy" src={ item.img }/>
    </a>
  )
  
  bigtitlehtml.push(
    <div className="in-sign-work " style={this.state.bigqynum === index ? {display: 'block'} : {display:'none'}}>
        <div className="clearfix">
          <h4 className="ui-left">
            <a className="in-sign-work-name ui-ahover-normal" href="">{item.title}</a>
          </h4>
          <p className="in-star-wr ui-left">
            <sub className="ui-star ui-star-8"></sub>
            <sub className="in-sign-work-score">8.7</sub>
          </p>
          <a className="in-title-more ui-right" href="/Comic/index/state/right" target="_blank">更多<span className="ui-icon-gt"
              data-ping="new.ac_index.Sign.more">&gt;&gt;</span></a>
        </div>
        <p className="in-sign-work-author ui-text-gray9">
          <strong>{item.author}</strong>
          <a className="mod-tag-item" >{item.tags[1]}</a>
          <a className="mod-tag-item" >{item.tags[2]}</a>
          <a className="mod-tag-item" >{item.tags[3]}</a>
        </p>
        <p className="in-sign-work-intro"><a href="">{item.decs}</a></p>
      </div>
  )
  
  qyhtml.push(
    <li  className="" data-ping="new.ac_index.Sign.works.2" onMouseEnter={this.qyenter.bind(this,index)}>
    <a className="in-sign-thumb ui-db" href={"/data/build/#/detail?id=" + item.id}>
      <img className="lazy" src={ item.img }/>
      <span className="in-sign-mask">&nbsp;&nbsp;</span>
    </a>
    <h5 className="in-sign-name"><a className="ui-text-gray3">{item.title}</a></h5>
  </li>
 
  )
})

//轻小说
this.state.qxslist.map((item,index) =>{
  bigqxshtml.push(
     <a className="" href={"/data/build/#/detail?id=" + item.id}  style={this.state.bigqxsnum === index ? {display: 'block'} : {display:'none'}}>
        <img className="lazy" src={ item.img }/>
    </a>
  )
  
  bigqxsthtml.push(
    <div className="in-sign-work " style={this.state.bigqxsnum === index ? {display: 'block'} : {display:'none'}}>
        <div className="clearfix">
          <h4 className="ui-left">
            <a className="in-sign-work-name ui-ahover-normal" href={"/data/build/#/detail?id=" + item.id}>{item.title}</a>
          </h4>
          <p className="in-star-wr ui-left">
            <sub className="ui-star ui-star-8"></sub>
            <sub className="in-sign-work-score">8.7</sub>
          </p>
          <a className="in-title-more ui-right" href="/Comic/index/state/right" target="_blank">更多<span className="ui-icon-gt"
              data-ping="new.ac_index.Sign.more">&gt;&gt;</span></a>
        </div>
        <p className="in-sign-work-author ui-text-gray9">
          <strong>{item.author}</strong>
          <a className="mod-tag-item" >{item.tags[1]}</a>
          <a className="mod-tag-item" >{item.tags[2]}</a>
          <a className="mod-tag-item" >{item.tags[3]}</a>
        </p>
        <p className="in-sign-work-intro"><a href="">{item.decs}</a></p>
      </div>
  )
  
  qxshtml.push(
    <li  className="" data-ping="new.ac_index.Sign.works.2" onMouseEnter={this.qxsenter.bind(this,index)}>
    <a className="in-sign-thumb ui-db" href={"/data/build/#/detail?id=" + item.id}>
      <img className="lazy" src={ item.img }/>
      <span className="in-sign-mask">&nbsp;&nbsp;</span>
    </a>
    <h5 className="in-sign-name"><a className="ui-text-gray3">{item.title}</a></h5>
  </li>
 
  )
})


//少年
this.state.nanlist.map((item,index) =>{
  let tagshtml = []
  // console.log(item)
  item.tags.map((val, num) => {
    tagshtml.push(
      <a className="mod-tag-item" >{val}</a>
    )
   })
   nanhtml.push(
    <li>
    <a className="mod-cover-list-thumb mod-cover-effect ui-db" href={"/data/build/#/detail?id=" + item.id}>
      <img className="lazy" src={ item.img}/>
      <span className="mod-layer-mask">&nbsp;&nbsp;</span>
    </a>
    <p className="mod-cover-list-updata">
      <a className="mod-cover-list-mask">
        <span className="mod-cover-list-text">{item.update}</span>
      </a>
    </p>
    <h5>
      <a className="mod-cover-list-name">
        {item.title} </a>
    </h5>
    <p className="mod-cover-list-intro">{item.decs}</p>
    <p className="mod-cover-list-tag">
    {tagshtml}
    </p>
  </li>

  )
})




//少女
this.state.nvlist.map((item,index) =>{
  let tagshtml = []
  // console.log(item)
  item.tags.map((val, num) => {
    tagshtml.push(
      <a className="mod-tag-item" >{val}</a>
    )
   })
   nvhtml.push(
    <li>
    <a className="mod-cover-list-thumb mod-cover-effect ui-db" href={"/data/build/#/detail?id=" + item.id}>
      <img className="lazy" src={ item.img}/>
      <span className="mod-layer-mask">&nbsp;&nbsp;</span>
    </a>
    <p className="mod-cover-list-updata">
      <a className="mod-cover-list-mask">
        <span className="mod-cover-list-text">{item.update}</span>
      </a>
    </p>
    <h5>
      <a className="mod-cover-list-name">
        {item.title} </a>
    </h5>
    <p className="mod-cover-list-intro">{item.decs}</p>
    <p className="mod-cover-list-tag">
    {tagshtml}
    </p>
  </li>

  )
})



   for(var i=0 ; i<this.state.gmlist.length ;i++){
      gm1html.push(
        <li key= {i}>
          <sub className="in-rank-no-orange">{ i +1}</sub>
          <a className="in-rank-name">
            {this.state.gmlist[i].title} </a>
          <i className="ui-rank-trend-keep"></i>
        </li>
      )
    }

    for(var i=8 ; i<this.state.gmlist.length ;i++){
      gm2html.push(
        <li key= {i+20}>
          <sub className="in-rank-no-orange">{ i +1}</sub>
          <a className="in-rank-name">
            {this.state.gmlist[i].title} </a>
          <i className="ui-rank-trend-keep"></i>
        </li>
      )
    }




    this.state.titlelist.map((item, index) => {
      titlehtml.push(
        <li key={ index}><a href=''>{ item }</a></li>
    )
  })

    this.state.newtit.map((item, index) => {
      newhtml.push(
        <a href="#" key={index} title={ item } >{ item }
          <strong>17话</strong><i className="ui-icon-hot"></i></a>
    )
  })

  this.state.changxiaotit.map((item, index) => {
    changxiaohtml.push(
          <li key={index} style={{padding:0}}>
            <div className="in-sherank-mod">
              <em className="ui-border-em ui-sherank-top">{ index +1 }</em>
              <a href="" className="in-anishe-name" title={ '腾讯动漫-'+item }>{ item }</a>
              <i className="ui-rank-trend-keep"></i>
              <i className=""></i>
            </div>
        </li>
  )
})

this.state.dashanglist.map((item, index) => {
  dashanghtml.push(
    <li key={index}>
    <em className="ui-border-em ui-red-border">{ index+1 }</em>
    <a className="in-award-name ui-left" title={ item } >{ item }</a>
    <span className="award-num">58725 张</span>
  </li>
)
})


      


return (
<div className='index'>

  <div className="mod-top-wr">
    <div className="mod-top-frame">
      <div className="mod-top-tool-wr ui-wm">
        <div className="mod-top-logo-wr ui-left">
          <div className="mod-top-logo ui-left ui-text-hide">
            <a title="动漫-腾讯动漫官方网站" href="/" onClick={this.pgvSendClick}>
              <img className="header-pic-logo" src="//ac.gtimg.com/media/images/ac_logo.png" alt="腾讯动漫官方网站"/>
              <span className="ico-ani"></span>
            </a>
          </div>

          <div className="mod-top-event ui-left ui-dn"></div>
        </div>
        <div className="mod-top-search-wr ui-left">
          <div id="top-search" className="mod-top-search">
            <div className="mod-search-input-wr ui-left">
              <label htmlFor="top-search-input" className="mod-search-label">请输入作品名称</label>
              <input className="mod-search-input ac_input" type="text" id="top-search-input"autoComplete="off"/>
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
            <a href="/" title="手机版"  onClick={this.pgvSendClick}>
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
        { titlehtml }
        <li className="last">
        <a className="mod-tags-all ui-btn-gray" href='/data/build/#/kind '>
        <i className="mod-tags-icon"></i>全部分类
        </a>
         </li>
      </ul>
    
      {/* <!-- 独家动画 --> */}
      <ul className="mod-animate-list clearfix">
        <li className="first">
          <span className="ui-ico-animate">独家动画</span>
        </li>
        { dhtitlehtml }
      </ul>
    </div>
  
      {/* <!-- banner --> */}
      <div className="ui-wm clearfix in-banner-wrap">
    <div className="banner blur-banner" id="banner">
      <div className="in-banner-con">
        <div className="bx-wrapper">
          <div className="bx-viewport">
            <ul className="in-banner" id="in-banner" >
              
              <li>
                <a href='' className="no21" target="_blank" title="通灵妃"onClick={this.pgvSendClick}>
                  <img src=
                  "https://manhua.qpic.cn/operation/0/02_00_21_fc8a7f2be49bbcd2060d85470e33a021_1551457296906.jpg/0"
                    alt="通灵妃"/>
                  <p className="in-banner-info">
                    <strong>通灵妃</strong>
                    <span className="in-banner-ft-info">身负异能，被视为不详之人</span>
                    <i className="in-banner-icon">&nbsp;</i>
                  </p>
                  <span className="in-banner-bg"></span>
                  <span className="in-banner-name bg-org">《通灵妃》<span className="icon-right"></span></span>
                </a>
                <a href=''className="no22" target="_blank" title="猫妖的诱惑"onClick={this.pgvSendClick}>
                  <img src="https://manhua.qpic.cn/operation/0/02_00_34_b6f17857deb12a9be6e83922104fa9e1_1551458058655.jpg/0"
                    alt="猫妖的诱惑"/>
                  <p className="in-banner-info">
                    <strong>猫妖的诱惑</strong>
                    <span className="in-banner-ft-info">精分猫妖带着前世记忆重生</span>
                    <i className="in-banner-icon">&nbsp;</i>
                  </p>
                  <span className="in-banner-bg"></span>
                  <span className="in-banner-name bg-org">《猫妖的诱惑》<span className="icon-right"></span></span>
                </a>
                <a href='' className="no23" target="_blank" title="听见宝石的声音" onClick={this.pgvSendClick}>
                  <img src="https://manhua.qpic.cn/operation/0/22_09_45_9ac82b7eedcc1fbbd9835d0ba0963dee_1550799935203.jpg/0"
                    alt="听见宝石的声音"/>
                  <p className="in-banner-info">
                    <strong>听见宝石的声音</strong>
                    <span className="in-banner-ft-info">巨额的“假”翡翠、午夜传来的抽泣声、被诅咒的少女......</span>
                    <i className="in-banner-icon">&nbsp;</i>
                  </p>
                  <span className="in-banner-bg"></span>
                  <span className="in-banner-name bg-org">《听见宝石的声音》<span className="icon-right"></span></span>
                </a>
                <a href='' className="no24"target="_blank" title="小绿和小蓝" onClick={this.pgvSendClick}>
                  <img src="https://manhua.qpic.cn/operation/0/02_00_36_6659ca48b3c3a20249809786058c1f2b_1551458211444.jpg/0"
                    alt="小绿和小蓝"/>
                  <p className="in-banner-info">
                    <strong>小绿和小蓝</strong>
                    <span className="in-banner-ft-info">有句话我忍很久了，我喜欢你</span>
                    <i className="in-banner-icon">&nbsp;</i>
                  </p>
                  <span className="in-banner-bg"></span>
                  <span className="in-banner-name bg-org">《小绿和小蓝》<span className="icon-right"></span></span>
                </a>
                <a href='' className="no25" target="_blank" title="书灵破境" onClick={this.pgvSendClick}>
                  <img src="https://manhua.qpic.cn/operation/0/02_00_35_4c486d10f98011c9032fe359841b7e87_1551458142414.jpg/0"
                    alt="书灵破境"/>
                  <p className="in-banner-info">
                    <strong>书灵破境</strong>
                    <span className="in-banner-ft-info">斯坦·李先生的创意与中国文化的一次激动人心的邂逅！</span>
                    <i className="in-banner-icon">&nbsp;</i>
                  </p>
                  <span className="in-banner-bg"></span>
                  <span className="in-banner-name bg-org">《书灵破境》<span className="icon-right"></span></span>
                </a>
              </li>
           
            </ul>
          </div>
        </div>
        <div className="in-banner-arrow" id="in-banner-arrow">
          <a className="in-banner-leftbtn" title="上一页">上一页</a>
          <a className="in-banner-rightbtn" title="下一页">下一页</a>
        </div>
      </div>
      <div className="in-banner-page clearfix" id="in-banner-page">
        <a className="in-banner-item in-banner-green current">
          <span className="in-banner-focus">
          <span id="in-animate-egg"className="in-animate-egg-2" ></span>
          </span>
         </a>
        <a className="in-banner-item"></a>
        <a className="in-banner-item in-banner-green"></a>
      </div>
    </div>
  
    <div className="in-rank-wr ui-right">
      {/* <!--hotRank--> */}
      <div className="mod-tab-handle clearfix">
        <h2>热门排行</h2>
        <ul id="top-rank-handle">
          { hothtml }
        </ul>
      </div>
      <div id="top-rank-panel" className="mod-tab-content-wr">
      <div className="mod-tab-content clearfix onenone" >
        <ol className="in-rank-list ui-left ui-pr10">
          { gm1html }
        </ol>
        <ol className="in-rank-list ui-left">
          { gm2html }
        </ol>
        </div>
        <div className="mod-tab-content ui-dn clearfix" >

        </div>
        <div className="mod-tab-content ui-dn clearfix">
          
        </div>
      </div>
      <div className="in-rank-spacing"></div>

      {/* --xia */}
      <ul className="in-rank-recommend">
        <li><i className="in-icon-jian"></i><a >少女张飞</a></li>
        <li><i className="in-icon-jian"></i><a>欢迎来到地球</a></li>
        <li><i className="in-icon-jian"></i><a >东邻西厢</a></li>
        <li><i className="in-icon-jian"></i><a>酷大叔的恋爱物语</a></li>
      </ul>
    </div>
  </div>
      {/* <!-- new -->*/}
  <div className="in-news-wr ui-wm clearfix">
    <div className="in-news-list">
      <dl>
        <dt className="in-news-title">近期动画</dt>
        <dd className="in-news-video">
          <p className="in-news-first">
            <a href="" 
                  target="_blank" title="通灵妃" data-ping="new.ac_index.nearCartoon.1">通灵妃</a>
            <span> 第10集</span>
          </p>
          <span className="in-news-date">03月08日更新</span>
          <p>剧集：<a title="9">[09集]</a>
            <a title="8">[08集]</a>
            <a title="7">[07集]</a>
            <a title="6">[06集]</a>
            ...
            <a title="01">[01集]</a>
          </p>
        </dd>
        <dd className="in-news-video">
          <p className="in-news-first">
            <a title="山河社稷图">山河社稷图</a>
            <span> 第19集</span>
          </p>
          <span className="in-news-date">03月07日更新</span>
          <p>剧集：<a title="18">[18集]</a>
            <a title="17">[17集]</a>
            <a title="16">[16集]</a>
            <a title="15">[15集]</a>
            ...
            <a title="01">[01集]</a>
          </p>
        </dd>
      </dl>
      <div className="in-news-position">
        <dl>
          <dt className="ui-dn"></dt>
          <dd className="in-news-video">
            <p className="in-news-first">
              <a title="猫妖的诱惑" >猫妖的诱惑</a>
              <span> 第6集</span>
            </p>
            <span className="in-news-date">02月28日更新</span>
            <p>剧集：<a title="5">[05集]</a>
              <a title="4">[04集]</a>
              <a title="3">[03集]</a>
              <a title="2">[02集]</a>
              ...
              <a title="01">[01集]</a>
            </p>
          </dd>
          <dd className="in-news-video">
            <p className="in-news-first">
              <a title="小绿和小蓝">小绿和小蓝</a>
              <span> 第81集</span>
            </p>
            <span className="in-news-date">02月16日更新</span>
            <p>剧集：<a title="80">[80集]</a>
              <a title="79">[79集]</a>
              <a title="78">[78集]</a>
              <a title="77">[77集]</a>
              ...
              <a title="01">[01集]</a>
            </p>
          </dd>
        </dl>
      </div>
    </div>
    <dl className="in-updata-list">
      <dt className="in-news-title">最新漫画</dt>
      <dd className="clearfix">
        { newhtml }
      </dd>
    </dl>
  </div>
  
  {/* <!-- AD2 --> */}
  <div className="mod-ad-full ui-mb40">
    <a href="" target="_blank">
      <img className="lazy ad2" src="https://manhua.qpic.cn/operation/0/28_10_52_cea890214ad51724c2ada2c5b5f8f4ac_1551322355865.jpg/0"/>
    </a>
  </div>
  
  {/* <!-- recommend --> */}
  <div className="in-strong-wr ui-wm ui-mb40" id="in-strong-wr">
    <div className="in-title-wr title-line-bg ui-mb20 clearfix">
      <h3 className="in-title-big ui-left veins">强档<em>推荐</em></h3>
      <div id="in-slider-btns" className="in-slider-handle ui-ma veins">
        { tjhtml }
        
      </div>
    </div>
  
    <div id="in-slider-wr" className="in-slider-wr in-content">
      <div className="bx-wrapper" >
        <div className="bx-viewport">
          <ul id="in-slider-list" className="in-slider-list tuijian-list mod-cover-list clearfix" >
           
          {btnhtml}
           
          </ul>
        </div>
        <div className="bx-controls bx-has-controls-direction">
          <div className="bx-controls-direction">
          <a className="bx-prev" >Prev</a>
          <a className="bx-next"onClick={this.swiper.bind(this)} >Next</a></div>
        </div>
      </div>
    </div>
  
  </div> 
  
  
  </div>
  
     {/* <!--VIP动画社--> */}
  <div className="in-anishe-wrap ui-wm" id="in-anishe-wrap">
  <div className="in-anishe-top clearfix">
    <h2 className="in-anishe-tit"><span className="in-ft-30">畅销</span>漫画</h2>
    <div className="in-anishe-tab">
      <a href="/data/build/#/kind" title="玄幻·科幻">玄幻·科幻</a> |
      <a href="/data/build/#/kind" title="都市·校园">都市·校园</a> |
      <a href="/data/build/#/kind" title="恐怖·悬疑">恐怖·悬疑</a> |
      <a href="/data/build/#/kind" title="少儿·生活">少儿·生活</a> |
      <a href="/data/build/#/kind" title="海外·精品">海外·精品</a>
    </div>
  </div>
  <div className="in-anishe-xone clearfix" style={{marginBottom:"25px"}}>
    <div className="in-anishe-mod-left ui-left">

      <div className="in-anishe-mod-tit clearfix">
        <h3 className="in-anishe-h3 ui-left">强推作品</h3>
        <div className="in-anishe-btn" id="in-anishe-tabbtn">
          <a className={this.state.tjnum == 0 ? 'active' : ''} onClick={this.tab.bind(this,0)}>全部作品</a>
          <a className={this.state.tjnum == 1 ? 'active' : ''} onClick={this.tab.bind(this,1)}>女生推荐</a>
        </div>
      </div>

      <div className="in-anishe-tab-1">
        <div className="bx-wrapper" >
          <div className="bx-viewport" >
            <ul className="in-anishe-list clearfix bxslider" id="in-anishe-list1">
              <li>
              {qthtml}
            </li>

            </ul>
          </div>

          <div className="bx-controls bx-has-pager bx-has-controls-direction">
            <div className="bx-pager bx-default-pager">{''+ this.state.qtpage +'/3'}</div>
            <div className="bx-controls-direction">
            <a className="bx-prev" onClick={ this.changeqtpage.bind(this, 0) }>&lt;</a>
            <a className="bx-next" onClick={ this.changeqtpage.bind(this, 1) }>&gt;</a></div>
          </div>
        </div>
        <ul className="in-anishe-list clearfix" id="in-anishe-list2" 
        // style="display: none;"------------------
        >
          <li>
            <div className="in-anishe-text">
              <a className="mod-cover-list-thumb mod-cover-effect ui-db">
                <img alt="风炫漫画"  className="lazy" src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
              <p className="mod-cover-list-updata">
                <a className="mod-cover-list-mask">
                  <span className="mod-cover-list-text">
                    更新至1话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-风炫漫画" href="http://ac.qq.com/Comic/comicInfo/id/549692" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.1">
                  风炫漫画 </a>
              </h5>
              <p className="mod-cover-list-intro">风炫漫画</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/2" className="mod-tag-item" title="热血">热血</a>
                <a target="_blank" href="/Comic/index/theme/5" className="mod-tag-item" title="科幻">科幻</a>
              </p>
            </div>
            <div className="in-anishe-text">
              <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544429" title="斗破苍穹·药老传奇" className="mod-cover-list-thumb mod-cover-effect ui-db"
                data-ping="new.ac_index.VIPComic.girl.2">
                <img alt="斗破苍穹·药老传奇" data-original="https://manhua.qpic.cn/vertical/0/17_17_15_a8a0c9e53bcb903898af03e4733ce709.jpg/420"
                  className="lazy" 
                  // style="displ/ay: block;"
                   src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
              <p className="mod-cover-list-updata">
                <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544429" className="mod-cover-list-mask"
                  data-ping="new.ac_index.VIPComic.girl.2">
                  <span className="mod-cover-list-text">
                    更新至25话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-斗破苍穹·药老传奇" href="http://ac.qq.com/Comic/comicInfo/id/544429" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.2">
                  斗破苍穹·药老传 </a>
              </h5>
              <p className="mod-cover-list-intro">斗破苍穹·药老传奇</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/2" className="mod-tag-item" title="热血">热血</a>
                <a target="_blank" href="/Comic/index/theme/6" className="mod-tag-item" title="魔幻">魔幻</a>
              </p>
            </div>
            <div className="in-anishe-text">
              <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544426" title="三生三世 十里桃花" className="mod-cover-list-thumb mod-cover-effect ui-db"
                data-ping="new.ac_index.VIPComic.girl.3">
                <img alt="三生三世 十里桃花" data-original="https://manhua.qpic.cn/vertical/0/17_17_15_913d35b3aa88c255c4f35e55c91b5c68.jpg/420"
                  className="lazy" 
                  // style="displ/ay: block;"
                   src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
              <p className="mod-cover-list-updata">
                <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544426" className="mod-cover-list-mask"
                  data-ping="new.ac_index.VIPComic.girl.3">
                  <span className="mod-cover-list-text">
                    更新至18话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-三生三世 十里桃花" href="http://ac.qq.com/Comic/comicInfo/id/544426" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.3">
                  三生三世 十里桃 </a>
              </h5>
              <p className="mod-cover-list-intro">三生三世 十里桃花</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/7" className="mod-tag-item" title="玄幻">玄幻</a>
                <a target="_blank" href="/Comic/index/theme/27" className="mod-tag-item" title="纯爱">纯爱</a>
              </p>
            </div>
            <div className="in-anishe-text">
              <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/547341" title="神医嫡女" className="mod-cover-list-thumb mod-cover-effect ui-db"
                data-ping="new.ac_index.VIPComic.girl.4">
                <img alt="神医嫡女" data-original="https://manhua.qpic.cn/vertical/0/17_17_16_9946580dc9aea13961352ede17aaa0a4.jpg/420"
                  className="lazy" 
                  // style="display: b/lock;" 
                  src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
              <p className="mod-cover-list-updata">
                <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/547341" className="mod-cover-list-mask"
                  data-ping="new.ac_index.VIPComic.girl.4">
                  <span className="mod-cover-list-text">
                    更新至43话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-神医嫡女" href="http://ac.qq.com/Comic/comicInfo/id/547341" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.4">
                  神医嫡女 </a>
              </h5>
              <p className="mod-cover-list-intro">圣手女神医穿越物语</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/12" className="mod-tag-item" title="穿越">穿越</a>
              </p>
            </div>
            <div className="in-anishe-text">
              <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544410" title="阿衰 on line" className="mod-cover-list-thumb mod-cover-effect ui-db"
                data-ping="new.ac_index.VIPComic.girl.5">
                <img alt="阿衰 on line" data-original="https://manhua.qpic.cn/vertical/0/17_17_15_4a329034be5430357499a38f11acaf0b.jpg/420"
                  className="lazy" 
                  // style="disp/lay: block;"
                   src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
              <p className="mod-cover-list-updata">
                <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544410" className="mod-cover-list-mask"
                  data-ping="new.ac_index.VIPComic.girl.5">
                  <span className="mod-cover-list-text">
                    更新至15话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-阿衰 on line" href="http://ac.qq.com/Comic/comicInfo/id/544410" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.5">
                  阿衰 on li </a>
              </h5>
              <p className="mod-cover-list-intro">阿衰 on line</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/1" className="mod-tag-item" title="爆笑">爆笑</a>
                <a target="_blank" href="/Comic/index/theme/8" className="mod-tag-item" title="校园">校园</a>
              </p>
            </div>
          </li>
          <li>
            <div className="in-anishe-text">
              <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544423" title="星太奇" className="mod-cover-list-thumb mod-cover-effect ui-db"
                data-ping="new.ac_index.VIPComic.girl.6">
                <img alt="星太奇" data-original="https://manhua.qpic.cn/vertical/0/17_17_15_9800b1c34376feeeaad2e5589e7dae87.jpg/420"
                  className="lazy" 
                  // style="display: bl/ock;"
                   src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
              <p className="mod-cover-list-updata">
                <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544423" className="mod-cover-list-mask"
                  data-ping="new.ac_index.VIPComic.girl.6">
                  <span className="mod-cover-list-text">
                    更新至15话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-星太奇" href="http://ac.qq.com/Comic/comicInfo/id/544423" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.6">
                  星太奇 </a>
              </h5>
              <p className="mod-cover-list-intro">星太奇</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/1" className="mod-tag-item" title="爆笑">爆笑</a>
                <a target="_blank" href="/Comic/index/theme/8" className="mod-tag-item" title="校园">校园</a>
              </p>
            </div>
            <div className="in-anishe-text">
              <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544646" title="金龟子龟子" className="mod-cover-list-thumb mod-cover-effect ui-db"
                data-ping="new.ac_index.VIPComic.girl.7">
                <img alt="金龟子龟子" data-original="https://manhua.qpic.cn/vertical/0/17_17_15_4e74249a55cb8e26bef643df2dbb0d88.jpg/420"
                  className="lazy" 
                  // style="display: /block;" 
                  src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
              <p className="mod-cover-list-updata">
                <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544646" className="mod-cover-list-mask"
                  data-ping="new.ac_index.VIPComic.girl.7">
                  <span className="mod-cover-list-text">
                    更新至54话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-金龟子龟子" href="http://ac.qq.com/Comic/comicInfo/id/544646" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.7">
                  金龟子龟子 </a>
              </h5>
              <p className="mod-cover-list-intro">金龟子龟子</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/1" className="mod-tag-item" title="爆笑">爆笑</a>
                <a target="_blank" href="/Comic/index/theme/11" className="mod-tag-item" title="萌系">萌系</a>
              </p>
            </div>
            <div className="in-anishe-text">
              <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544642" title="那闪亮的世界" className="mod-cover-list-thumb mod-cover-effect ui-db"
                data-ping="new.ac_index.VIPComic.girl.8">
                <img alt="那闪亮的世界" data-original="https://manhua.qpic.cn/vertical/0/17_17_15_e59dedb61378c946691925fb8525448b.jpg/420"
                  className="lazy" 
                  // style="display:/ block;" 
                  src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
              <p className="mod-cover-list-updata">
                <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544642" className="mod-cover-list-mask"
                  data-ping="new.ac_index.VIPComic.girl.8">
                  <span className="mod-cover-list-text">
                    更新至90话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-那闪亮的世界" href="http://ac.qq.com/Comic/comicInfo/id/544642" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.8">
                  那闪亮的世界 </a>
              </h5>
              <p className="mod-cover-list-intro">那闪亮的世界</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/14" className="mod-tag-item" title="都市">都市</a>
                <a target="_blank" href="/Comic/index/theme/27" className="mod-tag-item" title="纯爱">纯爱</a>
              </p>
            </div>
            <div className="in-anishe-text">
              <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544640" title="拜托你了，分手鬼" className="mod-cover-list-thumb mod-cover-effect ui-db"
                data-ping="new.ac_index.VIPComic.girl.9">
                <img alt="拜托你了，分手鬼" data-original="https://manhua.qpic.cn/vertical/0/17_17_15_79650abb2943fe37a410701278540e3f.jpg/420"
                  className="lazy" 
                  // style="displa/y: block;" 
                  src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
              <p className="mod-cover-list-updata">
                <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544640" className="mod-cover-list-mask"
                  data-ping="new.ac_index.VIPComic.girl.9">
                  <span className="mod-cover-list-text">
                    更新至96话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-拜托你了，分手鬼" href="http://ac.qq.com/Comic/comicInfo/id/544640" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.9">
                  拜托你了，分手鬼 </a>
              </h5>
              <p className="mod-cover-list-intro">拜托你了，分手鬼</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/1" className="mod-tag-item" title="爆笑">爆笑</a>
                <a target="_blank" href="/Comic/index/theme/6" className="mod-tag-item" title="魔幻">魔幻</a>
              </p>
            </div>
            <div className="in-anishe-text">
              <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544636" title="动物园物语" className="mod-cover-list-thumb mod-cover-effect ui-db"
                data-ping="new.ac_index.VIPComic.girl.10">
                <img alt="动物园物语" data-original="https://manhua.qpic.cn/vertical/0/17_17_15_3340db1e596d6dc8bdb14d216dd726ae.jpg/420"
                  className="lazy" 
                  // style="display: /block;" 
                  src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
              <p className="mod-cover-list-updata">
                <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544636" className="mod-cover-list-mask"
                  data-ping="new.ac_index.VIPComic.girl.10">
                  <span className="mod-cover-list-text">
                    更新至58话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-动物园物语" href="http://ac.qq.com/Comic/comicInfo/id/544636" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.10">
                  动物园物语 </a>
              </h5>
              <p className="mod-cover-list-intro">动物园物语</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/1" className="mod-tag-item" title="爆笑">爆笑</a>
                <a target="_blank" href="/Comic/index/theme/27" className="mod-tag-item" title="纯爱">纯爱</a>
              </p>
            </div>
          </li>
          <li>
            <div className="in-anishe-text">
              <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544632" title="一起吃晚饭吧？" className="mod-cover-list-thumb mod-cover-effect ui-db"
                data-ping="new.ac_index.VIPComic.girl.11">
                <img alt="一起吃晚饭吧？" data-original="https://manhua.qpic.cn/vertical/0/22_14_59_6ca22455ed10d978bb12adebbd67b027_1495436394187.jpg/420"
                  className="lazy" 
                  // style="display: block;" 
                  src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
              <p className="mod-cover-list-updata">
                <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544632" className="mod-cover-list-mask"
                  data-ping="new.ac_index.VIPComic.girl.11">
                  <span className="mod-cover-list-text">
                    更新至61话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-一起吃晚饭吧？" href="http://ac.qq.com/Comic/comicInfo/id/544632" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.11">
                  一起吃晚饭吧？ </a>
              </h5>
              <p className="mod-cover-list-intro">一起吃晚饭吧？</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/14" className="mod-tag-item" title="都市">都市</a>
                <a target="_blank" href="/Comic/index/theme/27" className="mod-tag-item" title="纯爱">纯爱</a>
              </p>
            </div>
            <div className="in-anishe-text">
              <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544631" title="苍白的马" className="mod-cover-list-thumb mod-cover-effect ui-db"
                data-ping="new.ac_index.VIPComic.girl.12">
                <img alt="苍白的马" data-original="https://manhua.qpic.cn/vertical/0/17_17_15_aba9987f13c85ddefcf4fbc30d08ff27.jpg/420"
                  className="lazy" 
                  // style="display: b/lock;" 
                  src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
              <p className="mod-cover-list-updata">
                <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/544631" className="mod-cover-list-mask"
                  data-ping="new.ac_index.VIPComic.girl.12">
                  <span className="mod-cover-list-text">
                    更新至93话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-苍白的马" href="http://ac.qq.com/Comic/comicInfo/id/544631" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.12">
                  苍白的马 </a>
              </h5>
              <p className="mod-cover-list-intro">苍白的马</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/6" className="mod-tag-item" title="魔幻">魔幻</a>
                <a target="_blank" href="/Comic/index/theme/15" className="mod-tag-item" title="恋爱">恋爱</a>
              </p>
            </div>
            <div className="in-anishe-text">
              <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/531241" title="精灵契约" className="mod-cover-list-thumb mod-cover-effect ui-db"
                data-ping="new.ac_index.VIPComic.girl.13">
                <img alt="精灵契约" data-original="https://manhua.qpic.cn/vertical/0/27_14_00_c392e337967c1116c0a62f4c7a2e8d3f_1495864822823.jpg/420"
                  className="lazy"
                  //  style="display: block;" 
                  src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
              <p className="mod-cover-list-updata">
                <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/531241" className="mod-cover-list-mask"
                  data-ping="new.ac_index.VIPComic.girl.13">
                  <span className="mod-cover-list-text">
                    更新至61话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-精灵契约" href="http://ac.qq.com/Comic/comicInfo/id/531241" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.13">
                  精灵契约 </a>
              </h5>
              <p className="mod-cover-list-intro">精灵与守护者的契约</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/3" className="mod-tag-item" title="冒险">冒险</a>
                <a target="_blank" href="/Comic/index/theme/6" className="mod-tag-item" title="魔幻">魔幻</a>
              </p>
            </div>
            <div className="in-anishe-text">
              <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/543612" title="斗罗大陆3龙王传说" className="mod-cover-list-thumb mod-cover-effect ui-db"
                data-ping="new.ac_index.VIPComic.girl.14">
                <img alt="斗罗大陆3龙王传说" data-original="https://manhua.qpic.cn/vertical/0/17_17_14_4d53231144e7aaf04184d398f01e11dd.jpg/420"
                  className="lazy" 
                  // style="displ/ay: block;" 
                  src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
             <p className="mod-cover-list-updata">
                <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/543612" className="mod-cover-list-mask"
                  data-ping="new.ac_index.VIPComic.girl.14">
                  <span className="mod-cover-list-text">
                    更新至49话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-斗罗大陆3龙王传说" href="http://ac.qq.com/Comic/comicInfo/id/543612" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.14">
                  斗罗大陆3龙王传 </a>
              </h5>
              <p className="mod-cover-list-intro">斗罗大陆经典续作</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/2" className="mod-tag-item" title="热血">热血</a>
                <a target="_blank" href="/Comic/index/theme/3" className="mod-tag-item" title="冒险">冒险</a>
              </p>
            </div>
            <div className="in-anishe-text">
              <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/543388" title="你走以后的青春" className="mod-cover-list-thumb mod-cover-effect ui-db"
                data-ping="new.ac_index.VIPComic.girl.15">
                <img alt="你走以后的青春" data-original="https://manhua.qpic.cn/vertical/0/17_17_14_e9dc9673e06d4d067674a54ccff06c87.jpg/420"
                  className="lazy" 
                  // style="display/: block;"
                   src="//ac.gtimg.com/media/images/blank.gif"/>
                <span className="mod-layer-mask">
                  &nbsp;&nbsp;
                </span>

              </a>
                           <p className="mod-cover-list-updata">
                <a target="_blank" href="http://ac.qq.com/Comic/comicInfo/id/543388" className="mod-cover-list-mask"
                  data-ping="new.ac_index.VIPComic.girl.15">
                  <span className="mod-cover-list-text">
                    更新至21话
                  </span>
                </a>
              </p>
              <h5>
                <a target="_blank" title="腾讯动漫-你走以后的青春" href="http://ac.qq.com/Comic/comicInfo/id/543388" className="mod-cover-list-name"
                  data-ping="new.ac_index.VIPComic.girl.15">
                  你走以后的青春 </a>
              </h5>
              <p className="mod-cover-list-intro">你走以后的青春</p>
              <p className="mod-cover-list-tag">
                <a target="_blank" href="/Comic/index/theme/14" className="mod-tag-item" title="都市">都市</a>
                <a target="_blank" href="/Comic/index/theme/15" className="mod-tag-item" title="恋爱">恋爱</a>
              </p>
            </div>
          </li>
        </ul>
      
      </div>
    </div>
    {/* 畅销榜 */}
    <div className="in-anishe-rank">
      <div className="in-anishe-rank-top clearfix">
        <i></i>
        <h2>畅销榜</h2>
      </div>
      <ul className="in-sherank-list">
        { changxiaohtml}
        </ul>  

    </div>
  </div>

</div>

{/* <!--AD中部二合一--!> */}
  <div className="in-show-wr ui-wm ui-mb40">
    <ul className="in-show-list">
      <li>
        <a title="狐妖小红娘" href="" target="_blank" data-ping="new.ac_index.events.bianji.1">
          <img className="lazy" src="https://manhua.qpic.cn/operation/0/01_14_11_a13585944346dd89cf77418e199f0919_1551420679979.jpg/0"
            alt="狐妖小红娘" />
        </a>
      </li>
      <li>
        <a title="听见宝石的声音" href="" target="_blank" data-ping="new.ac_index.events.bianji.2">
          <img className="lazy" src="https://manhua.qpic.cn/operation/0/01_10_16_0165bb42d31449ff9b8365f58e83c7e1_1551406617406.jpg/0"
            alt="听见宝石的声音" />
        </a>
      </li>
      <li>
        <a title="书灵破境" href="" target="_blank" data-ping="new.ac_index.events.bianji.3">
          <img className="lazy" src="https://manhua.qpic.cn/operation/0/02_00_41_37ea32ea58b9ada97eea4a9673490383_1551458492165.jpg/0"
            alt="书灵破境" />
        </a>
      </li>
      <li>
        <a title="诞下龙种吧！" href="" target="_blank" data-ping="new.ac_index.events.bianji.4">
          <img className="lazy" src="https://manhua.qpic.cn/operation/0/28_10_53_b59d930a383d3d041f2a09853da0def7_1551322415397.jpg/0"
            alt="诞下龙种吧！"  />
        </a>
      </li>
      <li>
        <a title="《山河社稷图》表情包" href="" target="_blank" data-ping="new.ac_index.events.bianji.5">
          <img className="lazy" src="https://manhua.qpic.cn/operation/0/21_17_45_a526ede099cef63e8e0e8afc465f8b05_1550742337134.jpg/0"
            alt="《山河社稷图》表情包"/>
        </a>
      </li>
    </ul>
  </div>
  
{/* // <!--签约作品--!> */}
<div className="in-sign-wr ui-wm ui-mb40" id="in-sign-wr">
<div className="in-title-wr  ui-mb20">
  <h3 className="in-title-big">签约<em>作品</em></h3>
</div>
<div className="in-content-wr">
  <div className="in-sign-left-wr">
    <div id="in-sign-cover" className="in-sign-cover">
      { bigqyhtml }
    </div>
  </div>
  <div className="in-sign-right-wr">
    <a href="" className="in-sign-stimulate-link" title="作者追梦计划" target="_blank" onClick={this.pgvSendClick}>作者追梦计划</a>
    <div id="in-sign-intro" className="in-sign-work-wr">
    { bigtitlehtml }
    </div>
    <div className="in-sign-handle">
      <ul id="in-sign-handle" className="in-sign-list clearfix">
      {qyhtml}
      </ul>
    </div>
  </div>
</div>
</div>

  {/* <!--轻小说--!> */}
  <div className="in-sign-wr ui-wm ui-mb40">
 <div className="in-title-wr  ui-mb20">
   <h3 className="in-title-big">轻小说</h3>
 </div>
 <div className="in-content-wr">
   <div className="in-sign-left-wr">
     <div id="in-sign-cover-qtxt" className="in-sign-cover">
       {bigqxshtml}
     </div>
   </div>
   <div className="in-sign-right-wr">
     <div id="in-sign-intro-qtxt" className="in-sign-work-wr">
        { bigqxsthtml }
     </div>

     <div className="in-sign-handle">
       <ul id="in-sign-handle-qtxt" className="in-sign-list clearfix">
        {qxshtml}
       </ul>
     </div>
   </div>
 </div>
</div>

 {/* <!--独家动画--!> */}
 <div className="video in-video-wr ui-wm ui-mb40" id="in-video-wr">
<div className="in-title-wr">
  <h3 className="in-title-big">独家<em>动画</em></h3>
</div>
<div className="dvideo-wrap">
  <div className="dvideo-ul-wrap">
    <ul className="video-content-ul" id="video-content-ul">
      <li>
        <div className="video-content">
          <a href="https://new.qq.com/ch/comic/zt2018/maoyao2019/index.htm" target="_blank" className="video-big-cover">
            <img src="https://manhua.qpic.cn/operation/0/20_23_18_4bfe08f5e92acfe8823f8b4f4ba6c1f0_1545319133239.jpg/0"
              alt="猫妖的诱惑"/>
          </a>
          <div className="video-content-text">
            <ul className="video-information">
              <li>
                <h3>
                  <a href="https://new.qq.com/ch/comic/zt2018/maoyao2019/index.htm" target="_blank" className="name"
                    title="腾讯动漫-猫妖的诱惑" data-ping="new.ac_index.soleCartoon.1">
                    猫妖的诱惑 </a>
                  <a href="http://v.qq.com/x/page/a0842j58f9j.html" target="_blank" className="new-video" data-ping="new.ac_index.soleCartoon.1">[更新至5集]</a>
                  <span>每周五更新</span>
                  <a className="more-information in-hover-under" href="https://new.qq.com/ch/comic/zt2018/maoyao2019/index.htm"
                    target="_blank" data-ping="new.ac_index.soleCartoon.1">详细信息 &gt;&gt;</a>
                </h3>
              </li>
              <li className="about-author">作者：青玉 </li>
              <li className="information-text">
                <p>
                  《猫妖的诱惑》主要讲述了猫妖苏清寒与仙门玄华子沈墨卿之间跨越千年的爱恨纠葛故事。故事中，千年后重生的苏清寒变身“精分猫妖”苏冉冉，扬言要找前世恋人沈墨卿复仇，但是看到他就好想亲亲扑倒怎么办？！看史上最没节操的女主在高冷禁欲男神和邪魅冷艳妖王之间，如何抉择！</p>
                <a href="https://new.qq.com/ch/comic/zt2018/maoyao2019/index.htm" target="_blank" title="这就去看"
                  data-ping="new.ac_index.soleCartoon.1">【这就去看】</a>
              </li>
            </ul>
            <div className="video-play-list">
              <div className="video-play-list-title clearfix">
                <h3 className="ui-left">猫妖的诱惑 播放列表</h3>
                <a href="https://new.qq.com/ch/comic/zt2018/maoyao2019/index.htm" title="全部剧集" className="ui-right ui-hover-line"
                  target="_blank" data-ping="new.ac_index.soleCartoon.1">全部剧集&gt;&gt;</a>
              </div>
              <ul className="play-list-li" data-ping="new.ac_index.soleCartoon.1">
                <li className="first ">
                  <a href="http://v.qq.com/x/page/a0842j58f9j.html" target="_blank" title="猫妖的诱惑-第5集">05</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/cover/z4ulitk78335qjq/l0840wufmpi.html" target="_blank" title="猫妖的诱惑-第4集">04</a>
                </li>
                <li className=" ">
                  <a href="http://v.qq.com/x/page/g08374l6nsa.html" target="_blank" title="猫妖的诱惑-第3集">03</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/cover/in1fr2gazju36fh/u0819mpxrnj.html" target="_blank" title="猫妖的诱惑-第2集">02</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/cover/in1fr2gazju36fh/g08159ql4v6.html" target="_blank" title="猫妖的诱惑-第1集">01</a>
                </li>
                <li className="middle">&nbsp;</li>
                <li className="">&nbsp;</li>
                <li className="">&nbsp;</li>
                <li className="">&nbsp;</li>
                <li className="">&nbsp;</li>
                <li className="">&nbsp;</li>
                <li className="middle">&nbsp;</li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="video-content">
          <a href="http://ac.qq.com/event/greenblue/index.html" target="_blank" className="video-big-cover" data-ping="new.ac_index.soleCartoon.2">
            <img src="https://manhua.qpic.cn/operation/0/24_19_53_3caf31db0ee167a30a655d4bf62affec_1535111588435.jpg/0"
              alt="小绿和小蓝"/>
          </a>
          <div className="video-content-text">
            <ul className="video-information">
              <li>
                <h3>
                  <a href="http://ac.qq.com/event/greenblue/index.html" target="_blank" className="name" title="腾讯动漫-小绿和小蓝"
                    data-ping="new.ac_index.soleCartoon.2">
                    小绿和小蓝 </a>
                  <a href="https://v.qq.com/x/page/i08433akgu2.html" target="_blank" className="new-video" data-ping="new.ac_index.soleCartoon.2">[更新至80集]</a>
                  <span>每周一至周六 日更</span>
                  <a className="more-information in-hover-under" href="http://ac.qq.com/event/greenblue/index.html"
                    target="_blank" data-ping="new.ac_index.soleCartoon.2">详细信息 &gt;&gt;</a>
                </h3>
              </li>
              <li className="about-author">作者：腾讯动漫 </li>
              <li className="information-text">
                <p>
                  有句话忍很久了，我喜欢你啊！
                  这里有史上名字最随意动画主角——温柔的小绿和爱脸红的小蓝，在这个每集世界观都不同的动画里，如何一次次不期而遇？光有刀？太虐！只有糖？太腻！来看动画《小绿和小蓝》吧，你永远猜不到故事结局！</p>
                <a href="http://ac.qq.com/event/greenblue/index.html" target="_blank" title="这就去看" data-ping="new.ac_index.soleCartoon.2">【这就去看】</a>
              </li>
            </ul>
            <div className="video-play-list">
              <div className="video-play-list-title clearfix">
                <h3 className="ui-left">小绿和小蓝 播放列表</h3>
                <a href="http://ac.qq.com/event/greenblue/index.html" title="全部剧集" className="ui-right ui-hover-line"
                  target="_blank" data-ping="new.ac_index.soleCartoon.2">全部剧集&gt;&gt;</a>
              </div>
              <ul className="play-list-li" data-ping="new.ac_index.soleCartoon.2">
                <li className="first ">
                  <a href="https://v.qq.com/x/page/i08433akgu2.html" target="_blank" title="小绿和小蓝-总集篇 第11集">80</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/page/g0840ucnm0j.html" target="_blank" title="小绿和小蓝-总集篇 第10集">79</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/cover/lgoty81x6m41mgb/w0838e9otk0.html" target="_blank" title="小绿和小蓝-第72集">78</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/cover/lgoty81x6m41mgb/l0838besynt.html" target="_blank" title="小绿和小蓝-第71集">77</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/cover/lgoty81x6m41mgb/h083750prql.html" target="_blank" title="小绿和小蓝-第70集">76</a>
                </li>
                <li className=" middle">
                  <a href="https://v.qq.com/x/cover/lgoty81x6m41mgb/c0837qgqcva.html" target="_blank" title="小绿和小蓝-第69集">75</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/page/d0834mfs84q.html" target="_blank" title="小绿和小蓝-第68集">74</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/cover/lgoty81x6m41mgb/j0834qkhb4s.html" target="_blank" title="小绿和小蓝-第67集">73</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/page/s08348mcqfv.html" target="_blank" title="小绿和小蓝-第66集">72</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/cover/lgoty81x6m41mgb/z0834isrixa.html" target="_blank" title="小绿和小蓝-第65集">71</a>
                </li>
                <li><span className="in-ico-sl">...</span></li>
                <li className="middle"><a href="http://v.qq.com/x/page/a0769e3bk2m.html" target="_blank" title="小绿和小蓝第64集">01</a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="video-content">
          <a href="https://ac.qq.com/event/transLink/?name=shanhe2018" target="_blank" className="video-big-cover"
            data-ping="new.ac_index.soleCartoon.3">
            <img src="https://manhua.qpic.cn/operation/0/24_19_12_976a2709850223864eeb5669747cc726_1540379534814.jpg/0"
              alt="山河社稷图"/>
          </a>
          <div className="video-content-text">
            <ul className="video-information">
              <li>
                <h3>
                  <a href="https://ac.qq.com/event/transLink/?name=shanhe2018" target="_blank" className="name" title="腾讯动漫-山河社稷图"
                    data-ping="new.ac_index.soleCartoon.3">
                    山河社稷图 </a>
                  <a href="https://v.qq.com/x/cover/ndfmfsbsd9ze9h3/n0842dhzs69.html" target="_blank" className="new-video"
                    data-ping="new.ac_index.soleCartoon.3">[更新至18集]</a>
                  <span>每周四更新</span>
                  <a className="more-information in-hover-under" href="https://ac.qq.com/event/transLink/?name=shanhe2018"
                    target="_blank" data-ping="new.ac_index.soleCartoon.3">详细信息 &gt;&gt;</a>
                </h3>
              </li>
              <li className="about-author">作者：月藏 </li>
              <li className="information-text">
                <p>
                  搞了半天，原来我们人类的世界其实不是真实世界，而是古代神祉女娲用法器『山河社稷图』创造出来的幻想世界。于是，在我们所身处的虚拟空间之外，还有一个充满仙术的真实世界。</p>
                <a href="https://ac.qq.com/event/transLink/?name=shanhe2018" target="_blank" title="这就去看" data-ping="new.ac_index.soleCartoon.3">【这就去看】</a>
              </li>
            </ul>
            <div className="video-play-list">
              <div className="video-play-list-title clearfix">
                <h3 className="ui-left">山河社稷图 播放列表</h3>
                <a href="https://ac.qq.com/event/transLink/?name=shanhe2018" title="全部剧集" className="ui-right ui-hover-line"
                  target="_blank" data-ping="new.ac_index.soleCartoon.3">全部剧集&gt;&gt;</a>
              </div>
              <ul className="play-list-li" data-ping="new.ac_index.soleCartoon.3">
                <li className="first ">
                  <a href="https://v.qq.com/x/cover/ndfmfsbsd9ze9h3/n0842dhzs69.html" target="_blank" title="山河社稷图-第18集">18</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/cover/ndfmfsbsd9ze9h3/w0840z3ncl1.html?" target="_blank" title="山河社稷图-第17集">17</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/page/i0837rxrzhd.html" target="_blank" title="山河社稷图-第16集 ">16</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/cover/ndfmfsbsd9ze9h3/j0833h61dz6.html" target="_blank" title="山河社稷图-第15集">15</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/page/s0831o1tx06.html" target="_blank" title="山河社稷图-第14集">14</a>
                </li>
                <li className=" middle">
                  <a href="https://v.qq.com/x/cover/ndfmfsbsd9ze9h3/d0828jm9ohk.html" target="_blank" title="山河社稷图-第13集">13</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/cover/ndfmfsbsd9ze9h3/q0825dps1vj.html" target="_blank" title="山河社稷图-第12集">12</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/cover/ndfmfsbsd9ze9h3/a082276e12f.html" target="_blank" title="山河社稷图-第11集">11</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/cover/ndfmfsbsd9ze9h3/l0819wnhpct.html" target="_blank" title="山河社稷图-第10集">10</a>
                </li>
                <li className=" ">
                  <a href="https://v.qq.com/x/cover/ndfmfsbsd9ze9h3/j0815dfljot.html" target="_blank" title="山河社稷图-第9集">09</a>
                </li>
                <li><span className="in-ico-sl">...</span></li>
                <li className="middle"><a href="https://v.qq.com/x/page/z0763t921ky.html" target="_blank" title="山河社稷图第8集">01</a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="video-content">
          <a href="http://ac.qq.com/event/transLink/hjw2018.html" target="_blank" className="video-big-cover" data-ping="new.ac_index.soleCartoon.4">
            <img src="https://manhua.qpic.cn/operation/0/23_14_58_888413c586361aba3e29e5b9d44d2476_1527058701085.jpg/0"
              alt="幻界王"/>
          </a>
          <div className="video-content-text">
            <ul className="video-information">
              <li>
                <h3>
                  <a href="http://ac.qq.com/event/transLink/hjw2018.html" target="_blank" className="name" title="腾讯动漫-幻界王"
                    data-ping="new.ac_index.soleCartoon.4">
                    幻界王 </a>
                  <a href="https://v.qq.com/x/cover/ioxe3qstr0en0pa/v0749ioql8f.html" target="_blank" className="new-video"
                    data-ping="new.ac_index.soleCartoon.4">[更新至20集]</a>
                  <span>平凡小子成为幻兽之王</span>
                  <a className="more-information in-hover-under" href="http://ac.qq.com/event/transLink/hjw2018.html"
                    target="_blank" data-ping="new.ac_index.soleCartoon.4">详细信息 &gt;&gt;</a>
                </h3>
              </li>
              <li className="about-author">作者：绘漫 </li>
              <li className="information-text">
                <p>
                  《幻界王》主要讲述在大多数人天生就拥有“幻魂力”的幻兽大陆上，一名天生没有能力的少年从小就梦想成为下一任幻界王。可是，没有半点能力的他能实现自己的梦想吗？在天武考试前的某一天，他遇见了上次大战中落败的魔武的间谍少女。就这样，背负着复兴魔武而潜入天武的间谍少女与梦想单排成王的“零天赋”的青铜少年，将卷入这个幻兽大陆中天武和魔武两大势力的各种阴谋和斗争中……</p>
                <a href="http://ac.qq.com/event/transLink/hjw2018.html" target="_blank" title="这就去看" data-ping="new.ac_index.soleCartoon.4">【这就去看】</a>
              </li>
            </ul>
            <div className="video-play-list">
              <div className="video-play-list-title clearfix">
                <h3 className="ui-left">幻界王 播放列表</h3>
                <a href="http://ac.qq.com/event/transLink/hjw2018.html" title="全部剧集" className="ui-right ui-hover-line"
                  target="_blank" data-ping="new.ac_index.soleCartoon.4">全部剧集&gt;&gt;</a>
              </div>
              <ul className="play-list-li" data-ping="new.ac_index.soleCartoon.4">
                <li className="first ">
                  <a href="https://v.qq.com/x/cover/ioxe3qstr0en0pa/v0749ioql8f.html" target="_blank" title="幻界王-第20集">20</a>
                </li>
                <li className=" ">
                  <a href="http://v.qq.com/x/page/a07389jezn4.html" target="_blank" title="幻界王-第19集">19</a>
                </li>
                <li className=" ">
                  <a href="http://v.qq.com/x/page/s0717idzl26.html" target="_blank" title="幻界王-第18集">18</a>
                </li>
                <li className=" ">
                  <a href="http://v.qq.com/x/page/c07076g2i6e.html" target="_blank" title="幻界王-第17集">17</a>
                </li>
                <li className=" ">
                  <a href="http://v.qq.com/x/page/j078487sa4a.html" target="_blank" title="幻界王-第16集">16</a>
                </li>
                <li className=" middle">
                  <a href="http://v.qq.com/x/page/o07763udekj.html" target="_blank" title="幻界王-第15集">15</a>
                </li>
                <li className=" ">
                  <a href="http://v.qq.com/x/page/x0772kj8l8a.html" target="_blank" title="幻界王-第14集">14</a>
                </li>
                <li className=" ">
                  <a href="http://v.qq.com/x/page/s0763ary36o.html" target="_blank" title="幻界王-第13集">13</a>
                </li>
                <li className=" ">
                  <a href="http://v.qq.com/x/page/w0756qyjceu.html" target="_blank" title="幻界王-第12集">12</a>
                </li>
                <li className=" ">
                  <a href="http://v.qq.com/x/page/t0749sg14h5.html" target="_blank" title="幻界王-第11集">11</a>
                </li>
                <li><span className="in-ico-sl">...</span></li>
                <li className="middle"><a href="https://v.qq.com/x/cover/ioxe3qstr0en0pa/o0670l3jd3l.html" target="_blank"
                    title="幻界王第10集">01</a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div className="video-list-wrap">
    <div className="bx-wrapper" >
      <div className="bx-viewport" >
        <div className="video-list" id="video-list"  >

          {/* <!-- <a title="上一页" href="javascript:void(0);" className="in-rise-tab-leftbtn">&nbsp;</a>--> */}
          <a title="猫妖的诱惑" href="http://v.qq.com/x/page/a0842j58f9j.html" target="_blank">
            <img className="play-man" src="https://manhua.qpic.cn/operation/0/25_14_41_5ca9824b8f242e793e6df5835e88f230_1545720105775.png/0"
              alt="猫妖的诱惑"/>
            <span className="play-button">&nbsp;</span>
            <span className="play-text">
              <i className="play-text-sub1">猫妖的诱惑</i>
              <i className="play-text-sub2">[更新至 第5集]</i>
            </span>
          </a>

          <a title="小绿和小蓝" href="https://v.qq.com/x/page/i08433akgu2.html" target="_blank" >
            <img className="play-man" src="https://manhua.qpic.cn/operation/0/27_15_30_c38fe81f243e4990b0d411190b2ede6d_1535355058401.png/0"
              alt="小绿和小蓝"/>
            <span className="play-button">&nbsp;</span>
            <span className="play-text">
              <i className="play-text-sub1">小绿和小蓝</i>
              <i className="play-text-sub2">[更新至 第80集]</i>
            </span>
          </a>
          <a title="山河社稷图" href="https://v.qq.com/x/cover/ndfmfsbsd9ze9h3/n0842dhzs69.html" target="_blank">
            <img className="play-man" src="https://manhua.qpic.cn/operation/0/25_10_56_05a971153ce98c4c0203a3a89beb3279_1540436186615.png/0"
              alt="山河社稷图"/>
            <span className="play-button">&nbsp;</span>
            <span className="play-text">
              <i className="play-text-sub1">山河社稷图</i>
              <i className="play-text-sub2">[更新至 第18集]</i>
            </span>
          </a>
          <a title="幻界王" href="https://v.qq.com/x/cover/ioxe3qstr0en0pa/v0749ioql8f.html" target="_blank">
            <img className="play-man" src="https://manhua.qpic.cn/operation/0/01_11_48_a479c7e4274c32d074fe0aaf59451776_1527824915772.png/0"
              alt="幻界王"/>
            <span className="play-button">&nbsp;</span>
            <span className="play-text">
              <i className="play-text-sub1">幻界王</i>
              <i className="play-text-sub2">[更新至 第20集]</i>
            </span>
          </a>
        </div>
      </div>
      <div className="bx-controls bx-has-controls-direction">
        <div className="bx-controls-direction">
        <a className="bx-prev disabled" href="">Prev</a>
        <a className="bx-next" href="">Next</a>
      </div>
      </div>
    </div>
  </div>
</div>
</div>


{/* //  <!--上升最快和月票排行榜--!> */}
<div className="in-vip-wr ui-wm ui-mb40 clearfix" id="in-vip-wr">
<div className="in-rise-wr ui-left">
  <div className="in-title-wr clearfix">
    <h3 className="in-title-big ui-left veins">上升<em>最快</em></h3>
    <div className="in-rise-tab ui-right veins" id="in-rise-tab">
      {changesshtml}
    </div>
  </div>
  <div className="bx-wrapper">
    <div className="bx-viewport" >
      <ul id="in-rise-list" className="in-rise-list mod-cover-list-samll clearfix">
        <li style={{display:'block'}}>
          <div className="in-rise-con clearfix">
          {sshtml}
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>


<div className="in-monrank-wr clearfix">
  <div className="in-monrank-title clearfix">
    <h3 className="in-monrank-name in-title ui-left">月票排行榜</h3>
    <span className="in-monrank-txt ui-left">2019.03.04-2019.03.10 统计进行中...</span>
    <a className="in-monrank-link ui-left" href="" target="_blank" title="去看完整排名">去看完整排名&gt;&gt;</a>
    <a className="in-monrank-btn ui-btn-gray ui-right" href="#" target="_blank" title="折现规则">折现规则</a>
  </div>

  <div className="in-monrank-item">
    <h4 className="in-monrank-tit">本期排名（持续变更中）</h4>
    <div className="in-ranrank-tab-right clearfix">
      <div className="in-ranrank-tab-a ui-right">
      {yphtml}
      </div>
    </div>
    <div className="in-monrank-tab-con">
    <div className="in-monrank-con">
        <span className="in-ico-td in-ico-td1">&nbsp;</span>
        <ul className="in-monrank-list clearfix">
          <li>
            <span className="s">实时排名</span>
            <span>作品名称</span>
            <span className="z">作者</span>
            <span>此时月票</span>
          </li>
     { yp1html }
     </ul>
      </div>
    </div>
  </div>
</div>
</div>

{/* // <!--audience--!> */}
<div className="ui-wm ui-mb30 clearfix in-ad-none" id="in-box">
<div className="in-main-wr ui-left">
  {/*
  <!-- teen --> */}
  <div className="in-teen-list-wr ui-mb30" id="in-teen-list-wr">
    <div className="in-title-wr ui-mb20 clearfix">
      <h3 className="in-title-big ui-left">少年<em>漫画</em></h3>
      <a className="in-title-more ui-right" >更多<span
          className="ui-icon-gt">&gt;&gt;</span></a>
      <h3 id="in-teen-handle" className="ui-right ui-mr24">
        <i className="in-icon-inten"></i>
        <a className="in-title-mid ui-ahover-normal">少年榜</a>
      </h3>
    </div>
    <div className="in-content-wr">
      <ul id="in-teen-list" className="in-teen-list mod-cover-list clearfix">
        { nanhtml}
      </ul>
    </div>
  </div>

  {/* <!-- girl --> */}
  <div className="in-girl-list-wr ui-mb30">
    <div className="in-title-wr ui-mb20 clearfix">
      <h3 className="in-title-big ui-left">少女<em>漫画</em></h3>
      <a className="in-title-more ui-right">更多<span
          className="ui-icon-gt">&gt;&gt;</span></a>
      <h3 id="in-girl-handle" className="ui-right ui-mr24">
        <i className="in-icon-inten"></i>
        <a className="in-title-mid ui-ahover-normal">少女榜</a>
      </h3>
    </div>
    <div className="in-content-wr">
      <ul id="in-girl-list" className="in-girl-list mod-cover-list clearfix">
      {nvhtml}
      </ul>
    </div>
  </div>

  {/* <!-- gamble --> */}
  <div className="in-gamble-wr ui-mb30">
    <div className="in-title-wr ui-mb20 clearfix">
      <h3 className="in-gamble-title mod-tab-handle ui-left" id="in-gamble-title">
        <a className="active first">热血<span className="ico-gam-dian">冒险</span>
          <span className="in-gamble-s">&nbsp;</span>
        </a>
        <a >搞笑<span className="ico-gam-dian">四格</span>
          <span className="in-gamble-s">&nbsp;</span>
        </a>
        <a >恐怖<span className="ico-gam-dian">灵异</span>
          <span className="in-gamble-s">&nbsp;</span>
        </a>
        <a >侦探<span className="ico-gam-dian">推理</span>
        </a>
      </h3>
      <div id="in-gamble-more" className="ui-right in-gamble-more">
        <div className="">
          <a className="in-title-more ui-right" >更多<span className="ui-icon-gt">&gt;&gt;</span></a>
          <h3 id="in-rx-handle" className="ui-right ui-mr24">
            <i className="in-icon-inten"></i>
            <a className="in-title-mid ui-ahover-normal" >热血冒险榜</a>
          </h3>
        </div>
        <div className="ui-dn" 
        // style="display: none;"
        >
          <a className="in-title-more ui-right">更多<span className="ui-icon-gt">&gt;&gt;</span></a>
          <h3 id="in-gx-handle" className="ui-right ui-mr24">
            <i className="in-icon-inten"></i>
            <a className="in-title-mid ui-ahover-normal">搞笑四格榜</a>
          </h3>
        </div>
        <div className="ui-dn" >
          <a className="in-title-more ui-right" >更多<span
              className="ui-icon-gt">&gt;&gt;</span></a>
          <h3 id="in-kb-handle" className="ui-right ui-mr24">
            <i className="in-icon-inten"></i>
            <a className="in-title-mid ui-ahover-normal">恐怖灵异榜</a>
          </h3>
        </div>
        <div className="ui-dn">
          <a className="in-title-more ui-right">更多<span
              className="ui-icon-gt">&gt;&gt;</span></a>
          <h3 id="in-zt-handle" className="ui-right ui-mr24">
            <i className="in-icon-inten"></i>
            <a className="in-title-mid ui-ahover-normal">侦探推理榜</a>
          </h3>
        </div>
      </div>
    </div>

    <div className="mod-tab-content" id="in-gamble-content">
      {/* <!-- 热血 --> */}
      <div className="in-gamble-content-wr">
        <div className="in-gamble-list-wr" id="rxComicList">
          <div className="in-gamble-left in-gamble-rx">
            <div className="in-gamble-intro-wr ui-right">
              <h4 className="in-gamble-intro-title ui-ahover-normal"><a title="腾讯动漫-星海镖师">星海镖师</a></h4>
              <p className="in-gamble-intro"><a >星海镖师的科幻冒险</a></p>
            </div>
            <a className="in-gamble-thumb">
              <img className="lazy" src="https://manhua.qpic.cn/vertical/0/17_17_05_a3078a3690d91946767153b5896332ad.jpg/420" alt="星海镖师"  />
            </a>
          </div>

          <div className="in-gamble-right">
            <ul className="in-gamble-list mod-cover-list clearfix">
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="仙逆">
                  <img className="lazy" src="https://manhua.qpic.cn/vertical/0/17_17_09_63945a75c6f871b0730a26b2b8b3bf93.jpg/420" />
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask" >
                    <span className="mod-cover-list-text">18小时前更新至308话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name">
                    仙逆 </a>
                </h5>
                <p className="mod-cover-list-intro">平凡少年扬名仙界</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" target="_blank" title="爆笑">爆笑</a>
                  <a className="mod-tag-item" target="_blank" title="热血">热血</a>
                </p>
              </li>
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="龙域猎手">
                  <img className="lazy" src="https://manhua.qpic.cn/vertical/0/04_00_16_7a51e1554d6e1218b77298429151da1b_1533313007696.jpg/420"/>
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask">
                    <span className="mod-cover-list-text">1天前更新至243话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name" >
                    龙域猎手 </a>
                </h5>
                <p className="mod-cover-list-intro">和蛋蛋一起并肩作战！</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" title="热血">热血</a>
                  <a className="mod-tag-item" title="冒险">冒险</a>
                </p>
              </li>
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="生存日">
                  <img className="lazy" src="https://manhua.qpic.cn/vertical/0/17_17_00_c5662e115c941693b9051d03415f9ee4.jpg/420"alt="生存日"   />
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask">
                    <span className="mod-cover-list-text">1天前更新至398话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name" 
                    data-ping="new.ac_index.other.rexue.works4">
                    生存日 </a>
                </h5>
                <p className="mod-cover-list-intro">人类对抗僵尸狂潮</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" href="/Comic/index/theme/3" target="_blank" title="冒险">冒险</a>
                  <a className="mod-tag-item" href="/Comic/index/theme/30" target="_blank" title="僵尸">僵尸</a>
                </p>
              </li>
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" >
                  <img className="lazy" src="https://manhua.qpic.cn/vertical/0/17_14_05_10d25ddd99a5681546191d909a0b8751_1539756307472.jpg/420" alt="凡人不凡"  />
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask">
                    <span className="mod-cover-list-text">1天前更新至109话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name">
                    凡人不凡 </a>
                </h5>
                <p className="mod-cover-list-intro">热血少年逆袭成长</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" title="魔幻">魔幻</a>
                  <a className="mod-tag-item" title="冒险">冒险</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- 搞笑 --> */}
      <div className="in-gamble-content-wr ui-dn" 
      // style="display: none;"
      >
        <div className="in-gamble-list-wr" id="sgComicList">
          <div className="in-gamble-left in-gamble-gx">
            <div className="in-gamble-intro-wr ui-right">
              <h4 className="in-gamble-intro-title ui-ahover-normal"><a href="/Comic/ComicInfo/id/2606" target="_blank"
                  title="腾讯动漫-憨老头">憨老头</a></h4>
              <p className="in-gamble-intro"><a href="/Comic/ComicInfo/id/2606" target="_blank">本人作品：漫画《憨老...</a></p>
            </div>
            <a className="in-gamble-thumb" href="/Comic/ComicInfo/id/2606" target="_blank" title="憨老头" data-ping="new.ac_index.other.gaoxiao.works.1">
              <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/07_01_55_44bf62e37df8694a175a8f0b502dfdda_1515261300828.jpg/420"
                title="憨老头" alt="憨老头"/>
            </a>
          </div>

          <div className="in-gamble-right">
            <ul className="in-gamble-list mod-cover-list clearfix">
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="公交男女爆笑漫画" href="/Comic/ComicInfo/id/512650"
                  target="_blank" data-ping="new.ac_index.other.gaoxiao.works.2">
                  <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/22_09_36_bed9ea99ea96b5e2f7b90b3ebf0c09ee_1540172182775.jpg/420"
                    alt="公交男女爆笑漫画"/>
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask" href="/Comic/ComicInfo/id/512650" target="_blank" data-ping="new.ac_index.other.gaoxiao.works.2">
                    <span className="mod-cover-list-text">02-14更新至1298话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name" href="/Comic/ComicInfo/id/512650" title="腾讯动漫-公交男女爆笑漫画" target="_blank"
                    data-ping="new.ac_index.other.gaoxiao.works.2">
                    公交男女爆笑漫画 </a>
                </h5>
                <p className="mod-cover-list-intro">老司机已开车</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" href="/Comic/index/theme/1" target="_blank" title="爆笑">爆笑</a>
                  <a className="mod-tag-item" href="/Comic/index/theme/33" target="_blank" title="生活">生活</a>
                </p>
              </li>
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="阿U" href="/Comic/ComicInfo/id/485286"
                  target="_blank" data-ping="new.ac_index.other.gaoxiao.works.3">
                  <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/17_16_43_874fd69343c382065d670d7329eeaaf3.jpg/420"
                    alt="阿U"/>
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask" href="/Comic/ComicInfo/id/485286" target="_blank" data-ping="new.ac_index.other.gaoxiao.works.3">
                    <span className="mod-cover-list-text">01-02更新至271话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name" href="/Comic/ComicInfo/id/485286" title="腾讯动漫-阿U" target="_blank"
                    data-ping="new.ac_index.other.gaoxiao.works.3">
                    阿U </a>
                </h5>
                <p className="mod-cover-list-intro">阿u的学校日常</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" href="/Comic/index/theme/1" target="_blank" title="爆笑">爆笑</a>
                </p>
              </li>
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="站住！王小敏！" href="/Comic/ComicInfo/id/531762"
                  target="_blank" data-ping="new.ac_index.other.gaoxiao.works.4">
                  <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/17_17_06_b7331c9fc0ec69440ddab20eb4161f1e.jpg/420"
                    alt="站住！王小敏！"/>
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask" href="/Comic/ComicInfo/id/531762" target="_blank" data-ping="new.ac_index.other.gaoxiao.works.4">
                    <span className="mod-cover-list-text">11-05更新至84话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name" href="/Comic/ComicInfo/id/531762" title="腾讯动漫-站住！王小敏！" target="_blank"
                    data-ping="new.ac_index.other.gaoxiao.works.4">
                    站住！王小敏！ </a>
                </h5>
                <p className="mod-cover-list-intro">王小敏的爆笑校园生活...</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" href="/Comic/index/theme/8" target="_blank" title="校园">校园</a>
                  <a className="mod-tag-item" href="/Comic/index/theme/1" target="_blank" title="爆笑">爆笑</a>
                </p>
              </li>
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="悠哉三国乡" href="/Comic/ComicInfo/id/534584"
                  target="_blank" data-ping="new.ac_index.other.gaoxiao.works.5">
                  <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/17_17_08_dc980295446b5cc09ae3275d5cbf5301.jpg/420"
                    alt="悠哉三国乡"/>
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask" href="/Comic/ComicInfo/id/534584" target="_blank" data-ping="new.ac_index.other.gaoxiao.works.5">
                    <span className="mod-cover-list-text">10-16更新至92话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name" href="/Comic/ComicInfo/id/534584" title="腾讯动漫-悠哉三国乡" target="_blank"
                    data-ping="new.ac_index.other.gaoxiao.works.5">
                    悠哉三国乡 </a>
                </h5>
                <p className="mod-cover-list-intro">某三国的悠哉日常</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" href="/Comic/index/theme/1" target="_blank" title="爆笑">爆笑</a>
                  <a className="mod-tag-item" href="/Comic/index/theme/12" target="_blank" title="穿越">穿越</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- 恐怖 --> */}
      <div className="in-gamble-content-wr ui-dn" 
      // style="display: none;"
      >
        <div className="in-gamble-list-wr" id="kbComicList">
          <div className="in-gamble-left in-gamble-kb">
            <div className="in-gamble-intro-wr ui-right">
              <h4 className="in-gamble-intro-title ui-ahover-normal"><a href="/Comic/ComicInfo/id/630295" target="_blank"
                  title="腾讯动漫-末世凡人">末世凡人</a></h4>
              <p className="in-gamble-intro"><a href="/Comic/ComicInfo/id/630295" target="_blank">末世之中，人类努力求...</a></p>
            </div>
            <a className="in-gamble-thumb" href="/Comic/ComicInfo/id/630295" target="_blank" title="末世凡人" data-ping="new.ac_index.other.kongbu.works.1">
              <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/19_14_33_6190d00a562e38a1498929f235edceb2_1529390012384.jpg/420"
                title="末世凡人" alt="末世凡人"/>
            </a>
          </div>

          <div className="in-gamble-right">
            <ul className="in-gamble-list mod-cover-list clearfix">
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="这个QQ群绝逼有毒轻读版" href="/Comic/ComicInfo/id/628543"
                  target="_blank" data-ping="new.ac_index.other.kongbu.works.2">
                  <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/02_21_48_99302aa5920b6e3e781c9fcccdef20df_1533217726463.jpg/420"
                    alt="这个QQ群绝逼有毒轻读版"/>
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask" href="/Comic/ComicInfo/id/628543" target="_blank" data-ping="new.ac_index.other.kongbu.works.2">
                    <span className="mod-cover-list-text">4天前更新至103话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name" href="/Comic/ComicInfo/id/628543" title="腾讯动漫-这个QQ群绝逼有毒轻读版" target="_blank"
                    data-ping="new.ac_index.other.kongbu.works.2">
                    这个QQ群绝逼有 </a>
                </h5>
                <p className="mod-cover-list-intro">这一切都要从我们下流...</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" href="/Comic/index/theme/9" target="_blank" title="悬疑">悬疑</a>
                  <a className="mod-tag-item" href="/Comic/index/theme/4" target="_blank" title="恐怖">恐怖</a>
                </p>
              </li>
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="亡灵之王" href="/Comic/ComicInfo/id/525176"
                  target="_blank" data-ping="new.ac_index.other.kongbu.works.3">
                  <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/01_10_36_c6216ce87c107e8940ec7d199213f5d1_1501554970888.jpg/420"
                    alt="亡灵之王"/>
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask" href="/Comic/ComicInfo/id/525176" target="_blank" data-ping="new.ac_index.other.kongbu.works.3">
                    <span className="mod-cover-list-text">3天前更新至346话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name" href="/Comic/ComicInfo/id/525176" title="腾讯动漫-亡灵之王" target="_blank"
                    data-ping="new.ac_index.other.kongbu.works.3">
                    亡灵之王 </a>
                </h5>
                <p className="mod-cover-list-intro">活死人的阴谋与战争</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" href="/Comic/index/theme/3" target="_blank" title="冒险">冒险</a>
                  <a className="mod-tag-item" href="/Comic/index/theme/4" target="_blank" title="恐怖">恐怖</a>
                </p>
              </li>
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="异饵删肆" href="/Comic/ComicInfo/id/483414"
                  target="_blank" data-ping="new.ac_index.other.kongbu.works.4">
                  <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/14_08_34_754c6f373c6cbff7baa8a797660ce926_1536885258696.jpg/420"
                    alt="异饵删肆"/>
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask" href="/Comic/ComicInfo/id/483414" target="_blank" data-ping="new.ac_index.other.kongbu.works.4">
                    <span className="mod-cover-list-text">11-27更新至9话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name" href="/Comic/ComicInfo/id/483414" title="腾讯动漫-异饵删肆" target="_blank"
                    data-ping="new.ac_index.other.kongbu.works.4">
                    异饵删肆 </a>
                </h5>
                <p className="mod-cover-list-intro">每回一个虐心小故事</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" href="/Comic/index/theme/33" target="_blank" title="生活">生活</a>
                  <a className="mod-tag-item" href="/Comic/index/theme/10" target="_blank" title="推理">推理</a>
                </p>
              </li>
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="锺馗传奇" href="/Comic/ComicInfo/id/521232"
                  target="_blank" data-ping="new.ac_index.other.kongbu.works.5">
                  <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/21_11_02_074fb6ccd75e2b997822d1bf89a8d4e8_1511233375512.jpg/420"
                    alt="锺馗传奇"/>
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask" href="/Comic/ComicInfo/id/521232" target="_blank" data-ping="new.ac_index.other.kongbu.works.5">
                    <span className="mod-cover-list-text">10-22更新至120话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name" href="/Comic/ComicInfo/id/521232" title="腾讯动漫-锺馗传奇" target="_blank"
                    data-ping="new.ac_index.other.kongbu.works.5">
                    锺馗传奇 </a>
                </h5>
                <p className="mod-cover-list-intro">钟馗卫道除魔</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" href="/Comic/index/theme/4" target="_blank" title="恐怖">恐怖</a>
                  <a className="mod-tag-item" href="/Comic/index/theme/7" target="_blank" title="玄幻">玄幻</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- 侦探 --> */}
      <div className="in-gamble-content-wr ui-dn" 
      // style="display: none;"
      >
        <div className="in-gamble-list-wr" id="tlComicList">
          <div className="in-gamble-left in-gamble-zt">
            <div className="in-gamble-intro-wr ui-right">
              <h4 className="in-gamble-intro-title ui-ahover-normal"><a href="/Comic/ComicInfo/id/535587" target="_blank"
                  title="腾讯动漫-手感">手感</a></h4>
              <p className="in-gamble-intro"><a href="/Comic/ComicInfo/id/535587" target="_blank">隐匿的钓鱼历史事件</a></p>
            </div>
            <a className="in-gamble-thumb" href="/Comic/ComicInfo/id/535587" target="_blank" title="手感" data-ping="new.ac_index.other.zhentan.works.1">
              <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/17_17_09_fb850261a8085aeb1ca1da022b65ff24.jpg/420"
                title="手感" alt="手感"/>
            </a>
          </div>

          <div className="in-gamble-right">
            <ul className="in-gamble-list mod-cover-list clearfix">
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="绯弹的亚里亚" href="/Comic/ComicInfo/id/536079"
                  target="_blank" data-ping="new.ac_index.other.zhentan.works.2">
                  <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/30_11_10_ae40a135d78d4770c7da18b10d703e44_1540869036286.jpg/420"
                    alt="绯弹的亚里亚"/>
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask" href="/Comic/ComicInfo/id/536079" target="_blank" data-ping="new.ac_index.other.zhentan.works.2">
                    <span className="mod-cover-list-text">10-30更新至224话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name" href="/Comic/ComicInfo/id/536079" title="腾讯动漫-绯弹的亚里亚" target="_blank"
                    data-ping="new.ac_index.other.zhentan.works.2">
                    绯弹的亚里亚 </a>
                </h5>
                <p className="mod-cover-list-intro">在一场警察无法应对的...</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" href="/Comic/index/theme/2" target="_blank" title="热血">热血</a>
                  <a className="mod-tag-item" href="/Comic/index/theme/3" target="_blank" title="冒险">冒险</a>
                </p>
              </li>
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="无尽之轨" href="/Comic/ComicInfo/id/627019"
                  target="_blank" data-ping="new.ac_index.other.zhentan.works.3">
                  <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/29_15_43_5b0372183e316f4b613fd41e363d8d8b_1506671031372.jpg/420"
                    alt="无尽之轨"/>
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask" href="/Comic/ComicInfo/id/627019" target="_blank" data-ping="new.ac_index.other.zhentan.works.3">
                    <span className="mod-cover-list-text">08-15更新至45话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name" href="/Comic/ComicInfo/id/627019" title="腾讯动漫-无尽之轨" target="_blank"
                    data-ping="new.ac_index.other.zhentan.works.3">
                    无尽之轨 </a>
                </h5>
                <p className="mod-cover-list-intro">这是一趟神明为你特制...</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" href="/Comic/index/theme/7" target="_blank" title="玄幻">玄幻</a>
                  <a className="mod-tag-item" href="/Comic/index/theme/9" target="_blank" title="悬疑">悬疑</a>
                </p>
              </li>
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="神探少女M" href="/Comic/ComicInfo/id/536665"
                  target="_blank" data-ping="new.ac_index.other.zhentan.works.4">
                  <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/17_17_10_fe1e9c136a1209ff687425930163ec3f.jpg/420"
                    alt="神探少女M"/>
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask" href="/Comic/ComicInfo/id/536665" target="_blank" data-ping="new.ac_index.other.zhentan.works.4">
                    <span className="mod-cover-list-text">06-05更新至61话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name" href="/Comic/ComicInfo/id/536665" title="腾讯动漫-神探少女M" target="_blank"
                    data-ping="new.ac_index.other.zhentan.works.4">
                    神探少女M </a>
                </h5>
                <p className="mod-cover-list-intro">美女版柯南屡破悬案</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" href="/Comic/index/theme/8" target="_blank" title="校园">校园</a>
                  <a className="mod-tag-item" href="/Comic/index/theme/9" target="_blank" title="悬疑">悬疑</a>
                </p>
              </li>
              <li>
                <a className="mod-cover-list-thumb mod-cover-effect ui-db" title="他来了，请闭眼" href="/Comic/ComicInfo/id/543523"
                  target="_blank" data-ping="new.ac_index.other.zhentan.works.5">
                  <img className="lazy" src="//ac.gtimg.com/media/images/blank.gif" data-original="https://manhua.qpic.cn/vertical/0/17_17_14_19d4dc5747eaad948339efdee04e51fb.jpg/420"
                    alt="他来了，请闭眼"/>
                  <span className="mod-layer-mask">&nbsp;&nbsp;</span>
                </a>
                <p className="mod-cover-list-updata">
                  <a className="mod-cover-list-mask" href="/Comic/ComicInfo/id/543523" target="_blank" data-ping="new.ac_index.other.zhentan.works.5">
                    <span className="mod-cover-list-text">03-28更新至125话</span>
                  </a>
                </p>
                <h5>
                  <a className="mod-cover-list-name" href="/Comic/ComicInfo/id/543523" title="腾讯动漫-他来了，请闭眼" target="_blank"
                    data-ping="new.ac_index.other.zhentan.works.5">
                    他来了，请闭眼 </a>
                </h5>
                <p className="mod-cover-list-intro">破案恋爱两不误的人生</p>
                <p className="mod-cover-list-tag">
                  <a className="mod-tag-item" href="/Comic/index/theme/9" target="_blank" title="悬疑">悬疑</a>
                  <a className="mod-tag-item" href="/Comic/index/theme/10" target="_blank" title="推理">推理</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- fine --> */}
  <div className="in-exce-list-wr">
    <div className="in-title-wr ui-mb20 clearfix">
      <h3 className="in-title-big ui-left">优秀<em>绘本</em></h3>
      <a className="in-title-more ui-right" title="更多">更多<span className="ui-icon-gt">&gt;&gt;</span></a>
    </div>
    <div className="in-content-wr">
      <div className="in-flowimage-wr flow-aniamte">
        <ul id="in-flowimage-list" className="in-flowimage-list">
          <li className="in-flowimage-row row-1">
            <div className="in-flowimage-item img-1">
              <a className="in-flowimage-img">
                <img className="lazy"src="https://manhua.qpic.cn/operation/0/22_20_51_08b3f0836d7ebb55a21bbc0b67ca7233_1495457515933.png/0"
                  alt="毛毛猫" />
              </a>
              <a className="in-flowimage-info" >
                <h5 className="in-exce-name" title="腾讯动漫-毛毛猫">毛毛猫</h5>
                <h6 className="in-exce-author" title="尹戈">作者：尹戈</h6>
                <p className="in-exce-intro">简介：一肚子生活哲理的流浪猫</p>
              </a>
            </div>

          </li>
          <li className="in-flowimage-row row-2">
            <div className="in-flowimage-item img-2">
              <a className="in-flowimage-img" >
                <img className="lazy" src="https://manhua.qpic.cn/operation/0/22_20_59_f8abd0f14d440278a7aee3b35705ab32_1495457992543.png/0"
                  alt="卷卷漫画" />
              </a>
              <a className="in-flowimage-info">
                <h5 className="in-exce-name" title="腾讯动漫-卷卷漫画">卷卷漫画</h5>
                <h6 className="in-exce-author" title="姚文爽">作者：姚文爽</h6>
                <p className="in-exce-intro">简介：有爱就有幸福</p>
              </a>
            </div>

            <div className="in-flowimage-item img-2">
              <a className="in-flowimage-img">
                <img className="lazy" src="https://manhua.qpic.cn/operation/0/22_20_53_4679541da87cc16191a04e108a84071e_1495457606595.png/0"
                  alt="执子之爪" />
              </a>
              <a className="in-flowimage-info">
                <h5 className="in-exce-name" title="腾讯动漫-执子之爪">执子之爪</h5>
                <h6 className="in-exce-author" title="易书科技">作者：易书科技</h6>
                <p className="in-exce-intro">简介：小白羊爱上了狮子男</p>
              </a>
            </div>

            <div className="in-flowimage-item img-6">
              <a className="in-flowimage-img">
                <img className="lazy" src="https://manhua.qpic.cn/operation/0/22_20_53_4679541da87cc16191a04e108a84071e_1495457606595.png/0"
                  alt="执子之爪" />
              </a>
              <a className="in-flowimage-info">
                <h5 className="in-exce-name" title="腾讯动漫-执子之爪">执子之爪</h5>
                <h6 className="in-exce-author" title="易书科技">作者：易书科技</h6>
                <p className="in-exce-intro">简介：小白羊爱上了狮子男</p>
              </a>
            </div>
          </li>
          <li className="in-flowimage-row row-3">
            <div className="in-flowimage-item img-3">
              <a className="in-flowimage-img" target="_blank">
                <img className="lazy"src="https://manhua.qpic.cn/operation/0/22_21_01_f0da99bfe673e7f4a6aee8bb1365b3f4_1495458061451.png/0"
                  alt="日常 日不常(第一季)"/>
              </a>
              <a className="in-flowimage-info">
                <h5 className="in-exce-name" title="腾讯动漫-日常 日不常(第一季)">日常 日不常(第一季)</h5>
                <h6 className="in-exce-author" title="倔强的小画笔">作者：倔强的小画笔</h6>
                <p className="in-exce-intro">简介：贱贱的活着也不错</p>
              </a>
            </div>

          </li>
          <li className="in-flowimage-row row-4">
            <div className="in-flowimage-item img-4">
              <a className="in-flowimage-img">
                <img className="lazy" src="https://manhua.qpic.cn/operation/0/22_20_57_fe5e803495af2df0f2aff703d9afa509_1495457830382.png/0"
                  alt="和老妈的日常"/>
              </a>
              <a className="in-flowimage-info">
                <h5 className="in-exce-name" title="腾讯动漫-和老妈的日常">和老妈的日常</h5>
                <h6 className="in-exce-author" title="阿达">作者：阿达</h6>
                <p className="in-exce-intro">简介：人这一生的浪漫和宠溺，记得分给母亲一份</p>
              </a>
            </div>

            <div className="in-flowimage-item img-4">
              <a className="in-flowimage-img" >
                <img className="lazy"src="https://manhua.qpic.cn/operation/0/22_21_01_00bf716555c1a468625003bddb7a5995_1495458103969.png/0"
                  alt="萤光精灵"/>
              </a>
              <a className="in-flowimage-info" >
                <h5 className="in-exce-name" title="腾讯动漫-萤光精灵">萤光精灵</h5>
                <h6 className="in-exce-author" title="小女">作者：小女</h6>
                <p className="in-exce-intro">简介：森林里住着一群会发光的精灵，人们称之为萤光精灵~</p>
              </a>
            </div>

            <div className="in-flowimage-item img-5">
              <a className="in-flowimage-img">
                <img className="lazy"src="https://manhua.qpic.cn/operation/0/22_21_01_00bf716555c1a468625003bddb7a5995_1495458103969.png/0"
                  alt="萤光精灵" />
              </a>
              <a className="in-flowimage-info" >
                <h5 className="in-exce-name" title="腾讯动漫-萤光精灵">萤光精灵</h5>
                <h6 className="in-exce-author" title="小女">作者：小女</h6>
                <p className="in-exce-intro">简介：森林里住着一群会发光的精灵，人们称之为萤光精灵~</p>
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* <!-- AD3 --> */}
      <div className="in-ad-midd ui-mb40 ui-dn" id="thirdAds"  >

      </div>

      {/* <!-- 最近更新 --> */}
      <div className="in-new">
        <div className="in-new-top clearfix">
          <h2 className="in-title-big ui-left">最近<em>更新</em></h2>
          <a className="in-new-more ui-right in-hover-under" >更多&gt;&gt;</a>
          <div className="in-rise-tab ui-right" id="in-rise-tab2">
          {gx1html}
          </div>
        </div>
        <div className="in-rise-con2">
          <div className="bx-wrapper" >
            <div className="bx-viewport"  >
              <ul id="in-rise-list2" className="in-rise-list2 clearfix" >
                <li className="in-rise-li">
                  <div className="in-rise-ta-wrap">
                    <table border="0" cellSpacing="1" cellPadding="0" className="in-rise-ta">
                      <tbody>
                        {gxhtml}

                      </tbody>
                    </table>
                  </div>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="in-side-wr ui-right">
  <div className="in-phlist-wrap ui-mb30">
    <div className="in-phlist-top clearfix">
      <h2 className="in-phlist-tit ui-left">打赏大豪</h2>
      <a title="打赏大豪"><span className="in-phlist-tit-right in-phlist-right-span">全部榜单</span></a>
    </div>
    <ul className="in-phlist-middle">
      <li className="no1">排名</li>
      <li className="no2">昵称</li>
      <li className="no3">累计打赏（点券）</li>
    </ul>
    <ul className="in-award-list">
    <li className="li-spe">
        <a title="寡言花瓶萌" className="mod-rank-name1 ui-left">
          <img width="45" height="45" src="https://thirdqq.qlogo.cn/g?b=sdk&amp;k=MTtNdYLzFSSPzgAmVLyUIw&amp;s=640&amp;t=1483327051"
            alt="头像"/>
          <span className="rank-award-name">寡言花瓶萌</span>
          <i className="mod-icos-plays-1 rank-ico-plays"></i>
        </a>
        <b className="award-num">20,400,000</b>
      </li>
      <li className="li-spe">
        <a title="洛黎岚" className="mod-rank-name1 ui-left">
          <img width="45" height="45" src="https://thirdqq.qlogo.cn/g?b=sdk&amp;k=qjJhmPtllZOJiaohz6cEShw&amp;s=640&amp;t=1520866387"
            alt="头像"/>
          <span className="rank-award-name">洛黎岚</span>
          <i className="mod-icos-plays-2 rank-ico-plays"></i>
        </a>
        <b className="award-num">2,307,000</b>
      </li>
      <li className="li-spe li-three">
        <a title="Y²" className="mod-rank-name1 ui-left">
          <img width="45" height="45" src="https://thirdqq.qlogo.cn/g?b=sdk&amp;k=Ja39HRIWqkwdRwZia1ZmVFg&amp;s=640&amp;t=1483372795"
            alt="头像"/>
          <span className="rank-award-name">Y²</span>
          <i className="mod-icos-plays-3 rank-ico-plays"></i>
        </a>
        <b className="award-num">1,367,000</b>
      </li>
      <li className="">
        <sub className="ui-border-em ui-left">4</sub>
        <a title="道然" className="in-award-name ui-left ">道然</a>
        <b className="award-num">1,200,088</b>
      </li>
      <li className="">
        <sub className="ui-border-em ui-left">5</sub>
        <a title="快乐的螃蟹" className="in-award-name ui-left ">快乐的螃蟹</a>
        <b className="award-num">1,183,608</b>
      </li>
      <li className="">
        <sub className="ui-border-em ui-left">6</sub>
        <a title="就是个刀子" className="in-award-name ui-left ">就是个刀子</a>
        <b className="award-num">945,000</b>
      </li>
      <li className="">
        <sub className="ui-border-em ui-left">7</sub>
        <a title="　　　　　" className="in-award-name ui-left ">　　　　　</a>
        <b className="award-num">772,000</b>
      </li>
      <li className="">
        <sub className="ui-border-em ui-left">8</sub>
        <a title="荸荠头" className="in-award-name ui-left ">荸荠头</a>
        <b className="award-num">613,496</b>
      </li>
      <li className="">
        <sub className="ui-border-em ui-left">9</sub>
        <a title="jx_T" className="in-award-name ui-left ">jx_T</a>
        <b className="award-num">610,000</b>
      </li>
      <li className="">
        <sub className="ui-border-em ui-left">10</sub>
        <a title="我的天哪！好大一颗柠檬！" className="in-award-name ui-left ">我的天哪！好大</a>
        <b className="award-num">600,152</b>
      </li>
    </ul>
  </div>

  <div className="in-phlist-wrap">
    <div className="in-phlist-top clearfix">
      <h2 className="in-phlist-tit ui-left">月票榜贡献榜</h2>
      <a  target="_blank" className="in-phlist-tit-right in-phlist-right-a" title="更多">更多&gt;&gt;</a>
    </div>
    <ul className="in-phlist-middle">
      <li className="no1">排名</li>
      <li className="no2">昵称</li>
      <li className="no3">累计投放月票</li>
    </ul>
    <ul className="in-phvip-list">
      {/* <!-- i<=2 边框为红色 --> */}
     { dashanghtml }
    </ul>
  </div>

  <div id="in-read-wrap" className="in-read-wrap">
  </div>
</div>
</div>
 


</div>
)
}

}
export default Com