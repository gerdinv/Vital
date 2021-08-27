import React, { Component, useEffect, useState, useMemo } from 'react'
import Signup from './components/Splashpage/signup'
import Signin from './components/Splashpage/signin'
import Home from './components/Home/home'
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import NavigationBar from './components/Home/navigationBar'
import CreatePost from './components/Posts/createPost'
import MessagePage from './components/Messages/messagePage'
import axios from 'axios'
import { UserContext } from './UserContext';


function App () {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({user, setUser}), [user, setUser]);

      useEffect(() => {
          (async () => {
            axios.defaults.withCredentials = true;
            const response = await fetch(
              "http://localhost:4000/app/getUserInfo",
              {
                headers: { "Content-Type": "application/json" },
                credentials: "include",
              }
            );
            const content = await response.json();
            if(content.message === 'Success') setUser(content.user)
          })();
      }, []);

    return (
      <UserContext.Provider value={value}>
        <BrowserRouter>
          <NavigationBar />
          <Route exact path="/" />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
          <Route path="/post" component={CreatePost} />
          <Route path="/message" component={MessagePage} /> 
        </BrowserRouter>
      </UserContext.Provider>
    );
}

export default App