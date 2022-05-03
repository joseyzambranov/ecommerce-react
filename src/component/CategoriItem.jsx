import styled from "styled-components"
import {mobil} from "../responsive"
import {
    Link,
  } from "react-router-dom";

const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;

`
const Img = styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobil({ height: "27vh" })}
`
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Title = styled.h1`
color:white;
font-size:14px;
text-align:center;
margin-bottom: 20px;
`

const Button = styled.button`
border:none;
padding:10px;
cursor:pointer;
background-color:#3590f3;
text-decoration:none;
color:white;
`

const CategoriItem =({ ctg })=>{
return (
<Container>
    <Link to={`/ecommerce-react/products/${ctg.cat}`}>
    <Img src={ctg.img} />
    <Info>
        <Title>{ctg.title}</Title>
        <Button>Shop Now</Button>
    </Info>
    </Link>
</Container>
)
   

}

export default CategoriItem