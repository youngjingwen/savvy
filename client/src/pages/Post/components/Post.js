import React, { Component } from 'react'
import PostHeader from '../../../components/PostHeader'
import Footer from '../../../components/Footer'
import SocialShareIcons from './SocialShareIcons'
import '../../../css/post/post.css'
import $ from 'jquery'

class Post extends Component {
  componentDidMount(){
    $(document).ready(function(){
      let range = 50
      let maxNum = 100
      let num = 1
      let totalHeight = 0
      let main = $("#more-posts")

      $(window).scroll(function(){
        let srollPos = $(window).scrollTop()
        totalHeight = parseFloat($(window).height()) + parseFloat(srollPos)
        if(($(document).height() - range) <= totalHeight && num != maxNum) {
          $("#next-post").addClass("next-post-show")
        }
      })

      $(".next-post-button").click(function(){
        $("#next-post").removeClass("next-post-show")
        let more = $("#post").clone(true)
        main.append(function(){
          return more
        })
        let height = parseFloat($(document).scrollTop()) + 490
        $(window).scrollTop(height)
        num++
      })
    });
  }

  render() {
    return (
      <div className="posts-page" ref="bodyBox">
        <PostHeader />
        <div className="banner">
          <div className='cat'>无人系统</div>
          <div className='cat'>人工智能</div>
        </div>
        <div className="post container" id="post">
          <div className="metadata">
            <div className='title'>文章标题</div>
            <div className='digest'>一句话摘要</div>
            <div className="author-date">
              <span className='author'>凯文.凯利</span>
              <span className='date'>2017年3月9日</span>
            </div>
          </div>
          <div className='bg-image'></div>

          <div className="main">
            <section className="sidebar">
              <SocialShareIcons />
              <div className='latest-posts'>
                <div className="header">最新文章</div>
                <a href="#" className='item'>
                  <div className="thumbnail"></div>
                  <div className="title">文章标题</div>
                </a>
                <a href="#" className='item'>
                  <div className="thumbnail"></div>
                  <div className="title">文章标题</div>
                </a>
              </div>
            </section>

            <section className="content-right">
              <div className="content">文章内容</div>
              <div className="author-intro">
                <div className="avatar"></div>
                <div className="profile">
                  <div className="name">
                    凯文.凯利
                  </div>
                  <div className="intro">作者简介</div>
                </div>
              </div>
            </section>
          </div>

          <div className="post-dividing">
            <div className="facebook"> </div>
            <div className="subscribe">
              <input type="text" name="" placeholder="邮件订阅踢围" />
              <button type="button" name="button">订阅</button>
            </div>
          </div>
        </div>

        <div id="more-posts"></div>

        <div className="next-post post container" id="next-post">
          <div className="metadata">
            <div className='title'>文章标题</div>
            <div className='digest'>一句话摘要</div>
            <div className="author-date">
              <span className='author'>凯文.凯利</span>
              <span className='date'>2017年3月9日</span>
            </div>
          </div>
          <div className='bg-image'></div>
          <div className="content">
            文章内容...
          </div>
          <button className="next-post-button" type="button">
            阅读全文
          </button>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Post
