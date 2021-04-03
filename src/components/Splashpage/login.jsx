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
            password: ''
        }
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
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

        axios.post('http://localhost:4000/app/login', signin).then(res => {
            console.log(res.data)
            window.location = '/home'
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid container item justify="center" xs={12} >
                    <TextField id="standard-basic" label="Username" style={{ minWidth: '17%' }} onChange={this.changeUsername} value={this.state.username}/>
                </Grid>
                <Grid container item justify="center" xs={12} >
                    <TextField id="standard-basic" label="Password" style={{ minWidth: '17%' }} onChange={this.changePassword} value={this.state.password}/>
                </Grid>
                <Grid container item justify="center" xs={12} >
                    <Button style={{ minWidth: '17%' }}
                        variant="outlined" color="primary" >
                        signup</Button>
                </Grid>
                <Grid container item justify="center" xs={12} >
                    <Button style={{ minWidth: '17%' }}
                        variant="contained" color="primary" >
                        signin</Button>
                </Grid>
            </Grid>
        );
    }
}

export default Login;