import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

class Login extends Component {

    constructor() {
        super()
        this.state = {
            fullname: '',
            username: '',
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid container item justify="center" xs={12} >
                    <TextField id="standard-basic" label="Fullname" style={{ minWidth: '17%' }} />
                </Grid>
                <Grid container item justify="center" xs={12} >
                    <TextField id="standard-basic" label="Username" style={{ minWidth: '17%' }} />
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