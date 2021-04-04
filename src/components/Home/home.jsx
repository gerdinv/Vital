import React from 'react'
import { Redirect } from 'react-router';

function Home (props) {
    
    return (
        <h1> {props.name ? "Welcome " + props.name : "You must log in!"}</h1>
    );
}

export default Home;