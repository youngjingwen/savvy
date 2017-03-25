import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import '../../../css/pages/dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <Header />
        <div className='main'>
          <Sidebar />
          <div>{this.props.children}</div>
        </div>
      </div>
    )
  }
}

export default Dashboard
