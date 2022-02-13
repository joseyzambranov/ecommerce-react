import Navbar from '../component/Navbar';
import Announcement from '../component/Announcement';
import React from "react";
import Slide from '../component/slide'
import Categories from '../component/Categories'
import Products from '../component/Products';

const Home =()=>{
    return(
        <div>
        <Announcement />
        <Navbar />
        <Slide />
        <Categories />
        <Products />
        </div>
        
    );
}

export default Home