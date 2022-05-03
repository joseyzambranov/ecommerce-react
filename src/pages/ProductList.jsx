import styled from "styled-components";
import Navbar from "../component/Navbar";
import Announcement from "../component/Announcement";
import Products from "../component/Products";
import Footer from "../component/Footer";
import {mobil} from "../responsive"
import { useLocation } from "react-router-dom";
import { useState } from "react";


const Container = styled.div`
`
const Title =styled.h1`
margin-left:15px;
`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between
`
const Filter = styled.div`
margin:20px;
${mobil({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterTitle = styled.span`
font-size:20px;
font-weight:600;
margin-right:5px;
${mobil({ marginRight: "0px" })}
`
const Select = styled.select`
padding:10px;
margin-right:20px;
${mobil({ margin: "10px 0px" })}
`
const Option = styled.option`
`

const ProductList = ()=>{
    const location = useLocation()
    const cat = location.pathname.split("/ecommerce-react")[2]
    const [filters,setfilters] = useState({})
    const [sort,setSort] = useState("newest")
    const handleFilter = (e)=>{
        const value = e.target.value
        setfilters({
            ...filters,
            [e.target.name]:value
        })
    }
   
    
    return(
        <Container>
            <Navbar />
            <Announcement />
            <Title> {cat}</Title>
            <FilterContainer>
                <Filter>
                <FilterTitle>Filter Products:</FilterTitle>
                <Select name ="color" onChange={handleFilter}>
                    <Option disabled >Color</Option>
                    <Option>black</Option>
                    <Option>white</Option>
                    <Option>red</Option>
                    <Option>green</Option>
                    <Option>yellow</Option>

                </Select>
                <Select name ="size" onChange={handleFilter}>
                    <Option disabled >Size</Option>
                    <Option>xs</Option>
                    <Option>s</Option>
                    <Option>m</Option>
                    <Option>l</Option>
                    <Option>xl</Option>

                </Select>
                </Filter>
                
                <Filter>
                <FilterTitle>Sort Products:</FilterTitle>
                <Select onChange={(e)=>{setSort(e.target.value)}}>
                    <Option value="newest" >Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="dsc">Price (dsc)</Option>
                </Select>
                </Filter>


            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Footer />
        </Container>
    )
}

export default ProductList