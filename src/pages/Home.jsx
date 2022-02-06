import Navbar from '../component/Navbar';
import Announcement from '../component/Announcement';
import React from "react";
import Slide from '../component/slide'

const Home =()=>{
    return(
        <div>
        <Announcement />
        <Navbar />
        <Slide />
        </div>
        
    );
}

export default Home