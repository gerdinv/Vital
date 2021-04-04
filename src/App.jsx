import React from 'react';
import Signup from './components/Splashpage/signup'
import Signin from './components/Splashpage/signin'
import Home from './components/Home/home'
import { BrowserRouter, Route} from "react-router-dom";
import NavigationBar from './components/Home/navigationBar'


function App () {
    return (
        <BrowserRouter>
            <NavigationBar/>
            <Route exact path="/" />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup}/>
            <Route path="/home" component={Home} />
        </BrowserRouter>
    );
}

export default App