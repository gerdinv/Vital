import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

//Ignore container component, Grid also has a property called container

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            fullname: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullname: event.target.value
        })
    }

    changeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered).then(res => {
            console.log(res.data)
            window.location = '/home'
        }).catch(err =>{
            console.log(err)
        })


    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <Grid container justify="center" alignContent="center" alignItems="center" spacing={5}>
                    <Grid container item justify="center" xs={12} >
                        <TextField id="standard-basic" label="Fullname" style={{ minWidth: '17%' }} onChange={this.changeFullName} value={this.state.fullname} />
                    </Grid>
                    <Grid container item justify="center" xs={12} >
                        <TextField id="standard-basic" label="Username" style={{ minWidth: '17%' }} onChange={this.changeUsername} value={this.state.username} />
                    </Grid>
                    <Grid container item justify="center" xs={12} >
                        <TextField id="standard-basic" label="Email" style={{ minWidth: '17%' }} onChange={this.changeEmail} value={this.state.email} />
                    </Grid>
                    <Grid container item justify="center" xs={12} >
                        <TextField id="standard-basic" label="Password" style={{ minWidth: '17%' }} onChange={this.changePassword} value={this.state.password} />
                    </Grid>
                    <Grid container item justify="center" xs={12} >
                        <input type="submit" value="Submit"/>
                        {/* <Button style={{ minWidth: '17%' }}
                            variant="contained" color="primary" value='submit'>
                            SignUp</Button> */}
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default Signup;