import Navbar from '../component/Navbar';
import Announcement from '../component/Announcement';
import React from "react";
import Slide from '../component/slide'
import Categories from '../component/Categories'
import Products from '../component/Products';
import Newsletter from '../component/Newsletter';
import Footer from "../component/Footer"

const Home =()=>{
    return(
        <div>
        <Navbar />
        <Announcement />
        <Slide />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
        </div>
        
    );
}

export default Home