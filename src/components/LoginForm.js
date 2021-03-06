import React, { Component } from 'react'
import { TextInput, Button } from 'grommet';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleLogin = async () => {
    const {
      login,
      history,
    } = this.props;
    try {
      await login(this.state)
      alert('login success')
      history.push('/profile')
    } catch (e) {
      alert('login fail')
    }
  }
  render() {
    return (
      <div>
        <TextInput name="email" placeholder="Email" onChange={this.handleChange}/>
        <TextInput name="password" placeholder="password" type="password" onChange={this.handleChange}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));