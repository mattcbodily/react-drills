import React, { Component } from 'react'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUpdateUsername(val){
        this.setState({username: val})
    }

    handleUpdatePassword(val){
        this.setState({password: val})
    }

    render(){
        return(
            <div>
                <input onChange = {(e) => this.handleUpdateUsername(e.target.value)}/>
                <input onChange = {(e) => this.handleUpdatePassword(e.target.value)}/>
                <button onClick = {() => alert('Username: ' + this.state.username + ' ' + 'Password: ' + this.state.password)}>Login</button>
            </div>
        )
    }
}

export default Login