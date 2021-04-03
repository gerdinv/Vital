import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            loginStatus: false
        }
        this.loginStatus = this.setLoginStatus.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    setLoginStatus(val){
        this.setState(({
            loginStatus: [val]
        }))
    }

    changeUsername(event){
        this.setState({
            username: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const signin = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/signin', signin).then(res => {
            if(!res.data.authorized) {
                this.setLoginStatus(false)
            } else {
                this.setLoginStatus(true)
            }
            // localStorage.setItem('token', res.data.token)
            console.log(res.data.token)
            console.log(this.state.loginStatus)
            
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} setLoginStatus={this.setLoginStatus}>
                <Grid container justify="center" alignItems="center" spacing={2}>
                    <Grid container item justify="center" xs={12} >
                        <TextField id="standard-basic" label="Username" style={{ minWidth: '17%' }} onChange={this.changeUsername} value={this.state.username} />
                    </Grid>
                    <Grid container item justify="center" xs={12} >
                        <TextField id="standard-basic" label="Password" style={{ minWidth: '17%' }} onChange={this.changePassword} value={this.state.password} />
                    </Grid>
                    <Grid container item justify="center" xs={12} >
                        <Button style={{ minWidth: '17%' }}
                            variant="outlined" color="primary" >
                            signup</Button>
                    </Grid>
                    <Grid container item justify="center" xs={12} >
                        <Button type="submit" value="Submit" style={{ minWidth: '17%' }}
                            variant="contained" color="primary" >
                            signin</Button>
                    </Grid>
                </Grid>
                
                {this.state.loginStatus && (
                    <Button variant="contained" color="secondary">HEYYY</Button>
                )}
          
            </form>
        );
    }
}

export default Login;