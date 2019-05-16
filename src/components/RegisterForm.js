import React, { Component } from 'react'
import { TextInput, Button } from 'grommet';
import { connect } from 'react-redux'

class RegisterForm extends Component {
  state = {
    type: 'customer',
    name: '',
    email: '',
    password: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleLogin = async () => {
    const {
      register
    } = this.props;
    try {
      await register(this.state)
      alert('register success')
    } catch (e) {
      alert('register fail')
    }
  }
  render() {
    return (
      <div>
        <TextInput name="name" placeholder="Name" onChange={this.handleChange}/>
        <TextInput name="email" placeholder="Email" onChange={this.handleChange}/>
        <TextInput name="password" placeholder="Password" type="password" onChange={this.handleChange}/>
        <Button label="Sign up" onClick={this.handleLogin}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
}
const mapDispatchToProps = dispatch => {
  return {
    register: dispatch.user.register
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);