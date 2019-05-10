import React, { Component } from 'react'
import { TextInput, Button } from 'grommet';
import { connect } from 'react-redux'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    })
  }
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    })
  }
  handleLogin = async () => {
    const {
      login
    } = this.props;
    try {
      await login(this.state)
      alert('login success')
    } catch (e) {
      alert('login fail')
    }
  }
  render() {
    return (
      <div>
        <TextInput placeholder="Username" onChange={this.handleUsernameChange}/>
        <TextInput placeholder="password" type="password" onChange={this.handlePasswordChange}/>
        <Button label="Sign in" onClick={this.handleLogin}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
}
const mapDispatchToProps = dispatch => {
  return {
    login: dispatch.user.login
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);