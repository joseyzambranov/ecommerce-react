import styled from "styled-components";
import Navbar from "../component/Navbar";
import Announcement from "../component/Announcement";
import Products from "../component/Products";
import Footer from "../component/Footer";

const Container = styled.div`
`
const Title =styled.h1`
`

const ProductList = ()=>{
    return(
        <Container>
            <Navbar />
            <Announcement />
            <Products />
            <Footer />
        </Container>
    )
}

export default ProductList