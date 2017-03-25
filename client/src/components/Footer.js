import React, { Component } from 'react'
import '../css/shared/footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='inner-footer container'>
          <div className="nav">
            <a href="#">关于踢围</a>
            <a href="#">加入踢围</a>
            <a href="#">联系踢围</a>
          </div>
          <div className='record-number'>冀ICP备15007992号-3</div>
        </div>
      </footer>
    )
  }
}

export default Footer
