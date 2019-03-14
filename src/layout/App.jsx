import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Index from '@/pages/Index.jsx';
import Riman from '@/pages/Riman.jsx';
import Kind from '@/pages/Kind.jsx'
import Flash from '@/pages/Flash.jsx'
import Detail from '@/pages/Detail.jsx'
import Rank from '@/pages/Rank.jsx'
import Qxs from '@/pages/Qxs.jsx';
import Center from '@/pages/Center.jsx';

class App extends Component {

  render () {
    return (
      <div className = "box">			
        <Switch>
          <Route path="/index" component = { Index } />
					<Route path="/riman" component = { Riman } />
					<Route path="/kind" component = { Kind } />

					<Route path="/flash" component = { Flash } />
					<Route path="/detail" component = { Detail } />
					<Route path="/rank" component = { Rank } />
					<Route path="/qxs" component = { Qxs } />
					<Route path="/center" component = { Center } />

				  <Redirect path='/' to= '/index'></Redirect>
        </Switch>
        <div className="mod-footer-wr">
					<div className="mod-footer-main-wr">
							<div className="mod-footer-main ui-wm">
									<ul className="mod-footer-scan ui-ma">
											<li>
													<img src="//ac.gtimg.com/media/images/ac_qr_img.jpg" title="腾讯动漫客户端" alt="腾讯动漫客户端"/>
													<p >腾讯动漫客户端</p>
											</li> 
											<li>
													<img src="//ac.gtimg.com/media/images/ac_wx_img.jpg" title="腾讯动漫微信" alt="腾讯动漫微信"/>
													<p >腾讯动漫微信</p>
											</li>
									</ul>
									<p className="mod-footer-info">
											<a href="/"  title="网站地图">网站地图</a>
											<a href="/"  title="站内帮助">站内帮助</a>
											<a href="/" >官方微博</a>
											<a href="/" >邮箱推荐</a>
											<a href="/">服务协议</a>
											<a href="/">侵权反馈指引</a>
											<span className="ui-pl10" >联系方式：<a className="mod-footer-mail" href="/">ac_copyright@qq.com</a></span>
									</p>
									<p className="mod-footer-info">Copyright<span className="mod-copyright" >©</span>1998 - 2019 Tencent. All Rights Reserved</p>
															<p className="mod-footer-info">腾讯公司 版权所有</p>
													</div>
				</div>
				<div className="mod-footer-border"></div>
				</div>
      </div>
    )
  }
}

export default App

