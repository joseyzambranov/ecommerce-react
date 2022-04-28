import styled from "styled-components"
import {popularProducts} from "../data"
import Product from '../component/Product'
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const Container = styled.div`
display:flex;
padding:20px;
flex-wrap:wrap;
justify-content:space-between;

`

const Products = ({cat,filters,sort})=>{
    const [product,setProduct] = useState([])
    const [filterPoduct,setFilterProduct] = useState([])

    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const res = await axios.get(
                    cat ? `https://nodejs-ecommerce-api-mongodb.joseyzambranov.repl.co/api/product?category=${cat}`
                        :"https://nodejs-ecommerce-api-mongodb.joseyzambranov.repl.co/api/product")
            setProduct(res.data)
            
            }catch(err){

            }
        }
        getProduct()
    },[cat])

useEffect(()=>{
    cat && 
    setFilterProduct(
        product.filter((item)=>Object.entries(filters).every(([key,value])=>
            item[key].includes(value)
        ))
    )
    
},[product,cat,filters])


useEffect(()=>{
if(sort==="newest"){
    setFilterProduct((prev)=>
    [...prev].sort((a,b)=>a.createAt-b.createAt))
}else if(sort==="asc"){
    setFilterProduct((prev)=>
    [...prev].sort((a,b)=>a.price-b.price))
}else{
    setFilterProduct((prev)=>
    [...prev].sort((a,b)=>b.price-a.price))
}
},[sort])

    return(
        <Container>
            {cat 
            ? filterPoduct.map((pdt)=>(<Product pdt={pdt} key={pdt.id} />))
            : product.slice(0,8).map((pdt)=>(<Product pdt={pdt} key={pdt.id} />))}
        </Container>
    )
}

export default Products