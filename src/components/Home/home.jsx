import React, { Component, useEffect } from 'react'
import axios from 'axios'


function Home() {
    useEffect(() => {
        (
            async () => {
                axios.defaults.withCredentials = true;
                axios.get('http://localhost:4000/app/getUserInfo', {withCredentials: true}).then(res => {
                    if (!res.data.authorized) {
                        console.log(res)
                    } else {
                        localStorage.setItem("token", res.data.token)
                    }
                    console.log(res.data)
                }).catch(err => {
                    console.log(err)
                })
            }
        )();
    })
    return (
        <h1>hey</h1>
    );
}

export default Home;