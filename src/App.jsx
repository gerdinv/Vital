import React, { Component } from 'react'
import Signup from './components/Splashpage/signup'
import Login from './components/Splashpage/login'
import Home from './components/Home/home'
import { BrowserRouter, Route} from "react-router-dom";

function App () {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/home" component={Home} />
        </BrowserRouter>
    );
}

export default App