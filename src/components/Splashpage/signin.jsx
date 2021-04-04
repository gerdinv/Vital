import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { Redirect } from 'react-router';
import Cookies from 'js-cookie'

function Login () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)


    const submit = async (e) => {
        e.preventDefault()

        const signin = {
            username,
            password
        }

        axios.defaults.withCredentials = true

        await axios.post('http://localhost:4000/app/signin', signin, {withCredentials: true}).then(res => {
            if (!res.data.authorized) {

            } else {
                localStorage.setItem("token", res.data.token)
            }
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })

        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to='/home' />
    }

    return (
        console.log("HEY"),
        <form onSubmit={submit}>
            <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid container item justify="center" xs={12} >
                    <TextField id="standard-basic" label="Username" style={{ minWidth: '17%' }} onChange={e => setUsername(e.target.value)} />
                </Grid>
                <Grid container item justify="center" xs={12} >
                    <TextField id="standard-basic" label="Password" style={{ minWidth: '17%' }} onChange={e => setPassword(e.target.value)} />
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
        </form>
    );
}

export default Login;