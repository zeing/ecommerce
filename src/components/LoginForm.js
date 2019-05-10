import React, { Component } from 'react'
import { TextInput, Button } from 'grommet';
import { connect } from 'react-redux'

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
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
                <TextInput name="username" placeholder="Username" onChange={this.handleChange}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
