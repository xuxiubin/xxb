import React, { Component } from 'react';
import Header from '@/components/common/Header'



class Com extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {tabName:'个人中心',id:1,className:"h_l_home fb f14 db",position:' 5px -176px'},
                {tabName:'我的书架',id:2,className:"h_l_books fb f14 db",position:'  5px -192px'},
                {tabName:'我购买的作品',id:3,className:"h_l_buy fb f14 db",position:'5px -208px'},
                {tabName:'投票记录',id:4,className:"h_l_record fb f14 db",position:' 5px -224px'},
                {tabName:'小纸条',id:5,className:"h_l_papers fb f14 db",position:'  -164px -708px'},
                {tabName:'付费设置',id:6,className:"h_l_pay fb f14 db",position:' 5px -240px'},
                {tabName:'FAQ',id:7,className:"h_l_faq fb f14 db",position:' 5px -336px'}
                
            ],
            current:1,
          changelist: ['读者','作者'],
          changenum: 0,
            
        }
    }

    componentDidMount() {
        
    }
    tabChoiced=(id)=>{
        //tab切换到方法
        this.setState({
            current:id
        });
    }

    change(index){
        this.setState({
          changenum: index
        })
    
      }

render(){
    var _this=this;
    var isBox1Show=this.state.current===1 ? 'block' : 'none';
    var isBox3Show=this.state.current===3 ? 'block' : 'none';
    var isBox2Show=this.state.current===2 ? 'block' : 'none';  
    var isBox4Show=this.state.current===4 ? 'block' : 'none';
    var isBox5Show=this.state.current===5 ? 'block' : 'none';
    var isBox6Show=this.state.current===6 ? 'block' : 'none';
    let changehtml = []


      var tabList= this.state.tabs.map(function(res,index) {
          // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
        var tabStyle=res.id==this.state.current ? 'current' : '';
        

       return <li key={index} onClick={this.tabChoiced.bind(_this,res.id)} className={tabStyle}><a title={res.tabName} className={res.className} >{res.tabName}</a></li>

    }.bind(_this));

    this.state.changelist.map((item,index) => {
        changehtml.push(
         <a title={item}  className={ this.state.changelist == index? 'h_top_tab_r fl db txtid h_top_tab_r_current' : 'h_top_tab_r fl db txtid h_top_tab_r_current' }  onClick={this.change.bind(this,index)}>{ item }</a>
        )                                                             
    
      })

return (
<div className="index">
<div className="home_container" style={{height:'777px'}}>
    <div id="loginframe" style={{display:'none'}}>
    <iframe id="login_ifr" name="login_ifr"  height="100%" scrolling="no" frameBorder="0" width="100%"></iframe>
</div>


<div className="mod-top-small-wr">
    <div className="ui-wm mod-top-small-head">
        <h1 className="mod-top-small-logo ui-left"><a title="腾讯动漫" href="/">腾讯动漫</a></h1>
        <ul className="mod-top-small-nav ui-left active">
            <li><a href='' title="首页">首页</a></li>
            <li><a  title="全部作品">全部作品</a></li>
            <li><a  title="日漫">日漫</a></li>
            <li><a  title="轻小说">轻小说</a></li>
            <li><a  title="福利社">福利社</a></li>
            <li><a  title="资讯">资讯</a></li>
            <li><a  title="动画">动画</a></li>
            <li><a  title="排行榜">排行榜</a></li>
            <li className="active"><a title="个人中心">个人中心</a></li>
            <li><a  title="手机版" >手机版</a></li>
        </ul>
    </div>
</div>   
 
 <div className="mod_960wr h_top_tab_nav mod_of db">
 {changehtml}

        {/* <a  className="h_top_tab_r fl db txtid h_top_tab_r_current">我是读者</a>
        <a  title="我是作者" className="h_top_tab_w fl db txtid">我是作者</a> */}
    </div>
      {/* <!-- 修改  --> */}


      <div className="replace-width mod_960wr">
    {/* <!-- 左侧菜单 --> */}
    <div className="h_nav_l fl">
<ul className="mod_h_l_nav db mt10 mod_wbg">
    {tabList}
</ul>
</div>    
{/* <!--Right Begin--> */}
    <div className="h_main fl mod_wbg mod_of" style={{"display":isBox1Show}}>
        <div className="h_mid" style={{width: '710px'}}>
            <div className="h_m_user mod_of mod_bbd">
                <dl className="mod_of">
                    <dt className="fl mod_of" style={{width: "100px"}}>
                        <img id="user_image" src="https://thirdqq.qlogo.cn/g?b=sdk&amp;k=5sS0bqrRcicQP0nTsuDX6kA&amp;s=640&amp;t=1526957704" alt="K." style={ {width: '80px', height: '80px'}} />
                    </dt>
                    <dd className="fl mod_of" style={{ marginLeft: '10px'}}>
                        <div className="h_m_user_info mod_bbd clearfix">
                            <strong className="fl">K.</strong>
                        </div>
                        <div className="h_vip_wrap clearfix">
                            <div className="fl" id="balanceList">
                                <p className="h_balance_pone h_balance_coupon"><span className="ico"></span>
                                我的点券：
                                <span className="fb for f14">0</span>
                                <a className="detail-btn">查看详单</a>
                                </p>
                                <p className="h_balance_pone h_balance_readpoint">
                                我的阅点：<span className="fb for f14">0</span>
                                <a  className="detail-btn" title="查看详单">查看详单</a>
                                </p>
                                <p className="h_balance_pone h_balance_monthticket">
                                我的月票：<span className="fb for f14">0张</span>
                                <a  className="detail-btn" title="查看详单">查看详单</a>
                                </p>
                             </div>
                            <div className="h_vip_right fr">
                                <p className="h_balance_pone" style={{display: "none"}}>累计投放月票：<span className="fb for f14">0张</span></p>
                                <a data-ping="NEW.AC_PAY.HOME.PAY-DQ" title="充值点券" className="h_btn_ktvip fr db ui-radius3 ml10" target="_blank">充值点券</a>
                                <div className="h_balance_pone h_balance_ic fr">
                                    <a className="h_ic_href">如何获得月票</a>
                                    <p className="h_ic_tip">下载腾讯动漫APP可购买月票</p>
                                </div>
                            </div>
                        </div>
                        <p className="h_m_user_works mod_of clearfix">
                            <span className="fl h_ic_notes">新小纸条：
                            <a href="/Home/inbox" className="fb for f14">0</a> 条
                            </span>
                            <span className="fl h_ic_bookself">我的书架：<a className="fb for f14">0</a> 部</span>
                            <span className="fl h_ic_buy">购买作品数：<a className="fb for f14">0</a> 部</span>
                            <span className="fl h_ic_plays" style={{marginLeft: "20px"}}><a href="/MyComic/myWalletSingle" className="" title="打赏提现">打赏钱包&gt;&gt;</a></span>
                        </p>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
    <div class="h_main fl mod_of" style={{"display":isBox2Show}}>
        <div class="h_main mod_wbg mod_of">
            <div class="h_a_bookshelf_wr">
                <div class="mod_title">
                    <h3 class="title txtid fl h_wdsj">我的收藏</h3>
                    <p class="h_r_fav_tips fl mod_of">
                        我已收藏 <span id="sp_now" class="fred">0</span> 部作品，还可收藏 <span id="sp_remain" class="fred">500</span> 部作品
                    </p>
                </div>
                <div class="h_r_books_list h_r_nobook" id="div_book_none"></div>
            </div>
        </div>
    </div>
    <div class="h_main fl mod_wbg mod_of" style={{"display":isBox3Show}}>
        <div class="h_a_works_wr">
            <div class="mod_title">
                <h3 class="title txtid fl h_wgmcp">我购买的作品</h3>
                <span class="buy_total_no">共<em class="for">0</em>部作品</span>
            </div>
        </div>
        <div class="mod_lgbg mod_of mod_btd mod_bbd">
            <a class="home_buy_no_book_au db">暂时没有购买作品</a>
        </div>
    </div>
    <div class="h_main fl mod_wbg mod_of" style={{"display":isBox4Show}}>
        <div class="h_a_works_wr">
            <div class="mod_title">
                <h3 class="title txtid fl h_voterecord">投票记录</h3>
            </div>
        </div>
		<div class="mod_lgbg mod_of mod_btd mod_bbd h_r_note_wr h_r_record">
			<div class="h_r_note_nav mod_of tc h_r_note_nav_two">
				<a class="current db fl" title="月票" >月票</a>
				<a class=" db fl" title="打赏">打赏</a>
			</div>
			<div class="voterecord-wrap">
				<p>我的月票：<span class="voterecord-font-org">0</span></p>
				<div class="voterecord-txt clearfix">
					<p class="ui-left">我的投票记录</p>
					<p class="ui-right voterecord-p">总计投票：<span class="voterecord-font-org">0</span></p>
				</div>
				<div class="voterecord-table">
					<table border="0" cellspacing="1" cellpadding="0" class="h_tb_list h_r_note_list">
						<thead>
							<tr>
								<th>投票时间</th>
								<th>投票漫画</th>
								<th>票数</th>
							</tr>
						</thead>
						<tbody id="voteRecord_content">
												</tbody>
					</table>
					<div id="pagination1" class="mod_page mod_page_record"></div>
				</div>
			</div>

		</div>
    </div>
    <div class="h_main fl mod_wbg mod_of" style={{"display":isBox5Show}}>
        <div class="h_a_works_wr">
            <div class="mod_title">
                <h3 class="title txtid fl h_xzt">小纸条</h3>
            </div>
        </div>
        <div class="mod_lgbg mod_of mod_btd mod_bbd h_r_note_wr">
            <div class="h_r_note_nav fl mod_of tc">
                <a href="/Home/inbox" title="私人信息" class="current db fl">
                    私人信息                </a>
                <a href="/Home/inbox/type/1" title="系统消息" class=" db fl">
                    系统消息                </a>
                <a href="/Home/outbox" title="发件箱" class=" db fl">发件箱</a>
            </div>
            <a href="/Home/write" title="新建小纸条" class="mod_btn mr20 mt15 db fr">新建小纸条</a>
            <div class="mod_of ma h_r_w686 h_r_note_list_wr">
                <a id="checkAll" href="javascript:void(0);" title="全选" class="mod_h_btn h_btn_selectall mb15 mr10  db txtid fl">全选</a>
                <a href="javascript:void(0);" title="删除" class="mod_h_btn h_btn_del mr20 mb15 db txtid fl" onclick="del_msg_list(2)">删除</a>
                <table class="h_tb_list h_r_note_list" width="686">
                    <tbody>
                        <tr>
                            <th width="10%">
                                <input id="select_all" type="checkbox"/>
                            </th>
                            <th width="10%">状态</th>
                            <th width="66%">主题</th>
                            <th width="14%">状态</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="pagination1" class="mod_page"></div>
    </div>
    <div class="h_main fl mod_wbg mod_of" style={{"display":isBox6Show}}>
			<div class="h_a_works_wr">
				<div class="mod_title">
					<h3 class="title txtid fl h_payconf">付费设置</h3>
				</div>
			</div>

            <div class="pay-wrap mod_lgbg mod_of mod_btd mod_bbd">
				<div class="pay-mod">
					<div class="pay-title">
						<span class="title">取消作品自动购买</span>
					</div>
					<div class="pay-joins" id="comicList">
							<p class="item-none">一部作品也没买哦~</p>
						</div>
				</div>
			</div>
	    <div id="pagination" class="mod_page"></div>
    </div>
</div>
  
</div>

</div>



)
}

}
export default Com