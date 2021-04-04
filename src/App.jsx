import React, { Component, useEffect, useState } from 'react'
import Signup from './components/Splashpage/signup'
import Signin from './components/Splashpage/signin'
import Home from './components/Home/home'
import { BrowserRouter, Route} from "react-router-dom";
import NavigationBar from './components/Home/navigationBar'
import axios from 'axios'

function App () {
    const [name, setName] = useState('')

    useEffect(() => {
        (
            async () => {
                axios.defaults.withCredentials = true;
                const response = await fetch('http://localhost:4000/app/getUserInfo', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                });

                const content = await response.json()
                setName(content.user.username)
            }
        )();
    }, [])

    return (
        <BrowserRouter>
            <NavigationBar name={name} setName={setName}/>
            <Route exact path="/" />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup}/>
            <Route path="/home" component={() => <Home name={name}/>} />
        </BrowserRouter>
    );
}

export default App