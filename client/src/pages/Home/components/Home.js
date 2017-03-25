import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Modal from '../../../components/modal/Modal'
import '../../../css/home/wall.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false, title: '' }
  }
  openModal(value) {
    this.setState({ isModalOpen: true, title: value })
  }
  closeModal() {
    this.setState({ isModalOpen: false })
  }
  render() {
    return (
      <div className="home-page">
        <Header />
        <div className='wall'>
          <section className='wall-inner'>
            <div className='box b-box bgc-3' onClick={() => this.openModal('大色块')}>
              <div className="box-inner">
                <div className='subtitle'>自由自在</div>
                <div>
                  <img src="https://coding.net/api/share/image/13e03cff-0151-4720-afcf-b7f384281023?width=1440&amp;type=2" alt="" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box m-box bgc-1" onClick={() => this.openModal('中色块')}>
                <div className="box-inner">
                  <div className="subtitle">自由自在</div>
                  <div>
                    <img src="https://coding.net/api/share/image/13e03cff-0151-4720-afcf-b7f384281023?width=1440&amp;type=2" alt="" />
                  </div>
                </div>
              </div>
              <div className="box m-box bgc-2" onClick={() => this.openModal('游戏开发')}>
                <div className="box-inner">
                  <div className="subtitle">游戏开发</div>
                  <div>
                    <img src="https://coding.net/api/share/image/13e03cff-0151-4720-afcf-b7f384281023?width=1440&amp;type=2" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box m-box s-box-wrapper">
                <div className="box s-box bgc-4" onClick={() => this.openModal('小色块')}>
                  <div className="box-inner">
                    <div className="subtitle">自由自在</div>
                    <div>
                      <img src="https://coding.net/api/share/image/13e03cff-0151-4720-afcf-b7f384281023?width=1440&amp;type=2" alt="" />
                    </div>
                  </div>
                </div>
                <div className="box s-box bgc-2"></div>
                <div className="box s-box bgc-2"></div>
                <div className="box s-box bgc-4"></div>
              </div>
              <div className="box m-box bgc-1" onClick={() => this.openModal('教育科技')}>
                <div className="box-inner">
                  <div className="subtitle">教育科技</div>
                  <div>
                    <img src="https://coding.net/api/share/image/13e03cff-0151-4720-afcf-b7f384281023?width=1440&amp;type=2" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box m-box bgc-3" onClick={() => this.openModal('人工智能')}>
                <div className="box-inner">
                  <div className="subtitle">人工智能</div>
                  <div>
                    <img src="https://coding.net/api/share/image/13e03cff-0151-4720-afcf-b7f384281023?width=1440&amp;type=2" alt="" />
                  </div>
                </div>
              </div>
              <div className="box m-box s-box-wrapper">
                <div className="box s-box bgc-4"></div>
                <div className="box s-box bgc-2"></div>
                <div className="box s-box bgc-2"></div>
                <div className="box s-box bgc-4"></div>
              </div>
            </div>
          </section>
        </div>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <div className='modal-content'>
            <div className='title'>{this.state.title}</div>
            <div className='intro'>简介</div>
            <Link to='/post' className='link-area'>阅读文章</Link>
          </div>
        </Modal>
        <Footer />
      </div>
    )
  }
}

export default Home
