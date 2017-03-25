import React, { Component } from 'react'
import { Link } from 'react-router'
import '../css/shared/header.css'

class PostHeader extends Component {
  render() {
    return (
      <header>
        <div className="header-inner container">
          <div className="header-left">
            <div className="logo">
              <Link to='/'>踢围Tech-Savvy</Link>
            </div>
          </div>
          <div className='header-right'>
            <Link to='/' className="hot-post">热门文章</Link>
            <Link to='/' className="all-post">全部文章</Link>
            <Link to='/'>注册</Link>
            <Link to='/' className="login">登录</Link>
          </div>
        </div>
      </header>
    )
  }
}

export default PostHeader
