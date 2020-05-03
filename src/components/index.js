import React from 'react'
// import Navbar from './Navbar';
// import Header from './Header';

import Particles from "react-particles-js";
import {makeStyles} from '@material-ui/styles';
import { lightGreen } from '@material-ui/core/colors';


const useStyles = makeStyles ({
    particlesCanvas: {
        position: "absolute",
        opacity: "0.3"
    }
})

const Home = () => {
    const classes = useStyles();
    return (
    <div>
        <h1>HAPPY BIRTHDAY HOPE!</h1>
            <h2>This is a gift certificate to buy books today on Amazon Japan</h2>
        
    </div> 
    )
}

export default Home;