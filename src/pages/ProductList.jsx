import styled from "styled-components";
import Navbar from "../component/Navbar";
import Announcement from "../component/Announcement";
import Products from "../component/Products";
import Footer from "../component/Footer";


const Container = styled.div`
`
const Title =styled.h1`
`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between
`
const Filter = styled.div`
margin:20px;
`
const FilterTitle = styled.span`
font-size:20px;
font-weight:600;
margin-right:5px;
`
const Select = styled.select`
padding:10px;
margin-right:20px;
`
const Option = styled.option`
`

const ProductList = ()=>{
    return(
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                <FilterTitle>Filter Products:</FilterTitle>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    <Option>Red</Option>
                    <Option>Green</Option>
                    <Option>Yellow</Option>

                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>

                </Select>
                </Filter>
                
                <Filter>
                <FilterTitle>Sort Products:</FilterTitle>
                <Select>
                    <Option disabled selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (dsc)</Option>
                </Select>
                </Filter>


            </FilterContainer>
            <Products />
            <Footer />
        </Container>
    )
}

export default ProductList