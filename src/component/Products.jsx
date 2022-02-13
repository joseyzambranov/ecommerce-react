import styled from "styled-components"
import {popularProducts} from "../data"
import Product from '../component/Product'

const Container = styled.div`
display:flex;
padding:20px;
flex-wrap:wrap;
justify-content:space-between;

`

const Products = ()=>{
    return(
        <Container>
            {popularProducts.map((pdt)=>(
                <Product pdt={pdt} key={pdt.id} />
            ))}
        </Container>
    )
}

export default Products