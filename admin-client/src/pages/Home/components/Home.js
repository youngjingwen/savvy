import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../../redux/actions/auth'
import '../../../css/pages/home.css'

class Home extends Component {
  handleSubmit(event) {
    event.preventDefault()
    const email = this.refs.email.value
    const password = this.refs.password.value
    this.props.login({email, password})
  }

  render() {
    return (
      <div className='home'>
        <div className='title'>踢围后台管理系统</div>
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='block'>
            <label className='label'>邮箱</label>
            <input className='input' ref='email' />
          </div>
          <div className='block'>
            <label className='label'>密码</label>
            <input className='input' ref='password' type='password' />
          </div>
          <div className='action'>
            <button type='submit' className='button'>登录</button>
          </div>
        </form>
      </div>
    )
  }
}

Home.propTypes = {
  login: React.PropTypes.func.isRequired
}

export default connect(null, { login })(Home)
