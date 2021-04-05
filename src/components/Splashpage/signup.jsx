import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { Redirect } from 'react-router';


function Signup () {
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submit = async(e) => {
        e.preventDefault()
        
        const Signup = {
            fullname,
            username,
            email,
            password
        }

        await axios.post('http://localhost:4000/app/signup', Signup).then(res => {
            setRedirect(true)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    if(redirect){
        return <Redirect to='/signin' />
    }
    
    return (
        <form onSubmit={submit}>
            <Grid container justify="center" alignContent="center" alignItems="center" spacing={5}>
                <Grid container item justify="center" xs={12} >
                    <TextField id="standard-basic" label="Fullname" style={{ minWidth: '17%' }} onChange={e => setFullname(e.target.value)}/>
                </Grid>
                <Grid container item justify="center" xs={12} >
                    <TextField id="standard-basic" label="Username" style={{ minWidth: '17%' }} onChange={e => setUsername(e.target.value)}/>
                </Grid>
                <Grid container item justify="center" xs={12} >
                    <TextField id="standard-basic" label="Email" style={{ minWidth: '17%' }} onChange={e => setEmail(e.target.value)}/>
                </Grid>
                <Grid container item justify="center" xs={12} >
                    <TextField id="standard-basic" label="Password" style={{ minWidth: '17%' }} onChange={e => setPassword(e.target.value)}/>
                </Grid>
                <Grid container item justify="center" xs={12} >
                    <Button type="submit" value="Submit" style={{ minWidth: '17%' }}
                        variant="contained" color="primary" >
                        SignUp</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default Signup;