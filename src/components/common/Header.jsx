import React from 'react';
import PropTypes from 'prop-types';
const Header = ({ hnum, pagename }) => (
  <div className="box">
    <div className="mod-top-small-wr">
      <div className="ui-wm mod-top-small-head">
          <h1 className="mod-top-small-logo ui-left"><a title="腾讯动漫" href="/">腾讯动漫</a></h1>
          <ul className="mod-top-small-nav ui-left active">
              {
              ['首页', '全部作品', '日漫', '轻小说', '福利社', '资讯', '动画', '排行榜', '个人中心', '手机版'].map((item, index) =>{
                return (
                  <li key={index} className={hnum*1 === index ? 'active' : ''}><a href={pagename[index]} title={item}>{item}</a></li>
                )
              })
              }
          </ul>
      </div>
    </div>
    <div className="top-border"></div>
  </div>
)

Header.propTypes = {
  hnum: PropTypes.string,
  pagename: PropTypes.array
}

export default Header
