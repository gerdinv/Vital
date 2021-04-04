import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'


class Login extends Component {


    userAuthenticated = () => {
        axios.get('http://localhost:4000/app/authorizedUser', {
            headers: {
                "token": localStorage.getItem("token"),
            },
        }).then((res) => {
            console.log(res)
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const signin = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/signin', signin).then(res => {
            if (!res.data.authorized) {
                this.setLoginStatus(false)

            } else {
                localStorage.setItem("token", res.data.token)
                this.setLoginStatus(false)
                this.setLoginStatus(true)
            }
            // localStorage.setItem('token', res.data.token)
            console.log(res.data)
            // console.log(this.state.loginStatus)

        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        console.log(this.state.loginStatus)
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
                <Button variant="contained" color="secondary" onClick={this.userAuthenticated}>HEYYY</Button>

            </form>
        );
    }
}

export default Login;