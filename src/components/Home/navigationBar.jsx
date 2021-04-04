import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Redirect } from 'react-router';
import axios from 'axios'


function NavigationBar(props) {
    const [redirect, setRedirect] = useState(false)

    const onLogout = () => {
        axios.get('http://localhost:4000/app/logout').then(res => {
            setRedirect(true)
            console.log(res.data)
        }).catch(err => {
            console.log('Error logging out: ' + err)
        })
    }

    if (redirect) {
        return <Redirect to='/' />
    }

    let menu;

    if(props.name === '') {
        menu = (
            <Nav className="ml-auto">
                <Nav.Link href="signup">Register</Nav.Link>
                <Nav.Link href="signin">Login</Nav.Link>
            </Nav>
        )
    } else {
        menu = (
            <Nav className="ml-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="messages">Messages</Nav.Link>
                <Nav.Link href="post">Create Post</Nav.Link>
                <Nav.Link href="" onClick={onLogout}>Logout</Nav.Link>
            </Nav>
        )
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            {menu}
        </Navbar>
    );

}

export default NavigationBar;