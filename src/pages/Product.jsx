import styled from "styled-components"
import Announcement from "../component/Announcement"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import Newsletter from "../component/Newsletter"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {mobil1} from "../responsive"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { publicRequest } from "../requestMethods";
import {useDispatch} from "react-redux"
import {addProduct} from "../redux/cartRedux"
const Container =styled.div`

`
const Wrapper = styled.div`
padding:30px;
display:flex;
${mobil1({ padding: "40px", flexDirection:"column" })}
`
const ImgContainer = styled.div`
flex:1;
max-width:500px;
`

const Img = styled.img`
width:100%;
height:90vh;
${mobil1({ height: "50vh" })}
`
const InfoContainer=styled.div`
flex:1;
padding: 0px 50px;
${mobil1({ padding: "10px" })}
`
const Title=styled.h1`
`
const Desc =styled.p`
`
const Price =styled.span`
font-weight: 100;
  font-size: 40px;
`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
width:50%;
margin:30px 0px;
${mobil1({ width: "100%" })}
`
const Filter = styled.div`
display:flex;
`
const FilterTitle = styled.span`
`
const FilterColor = styled.div`

background-color:${(props)=>props.color};
width:30px;
height:30px;
border-radius:50%;
margin-left:10px;
cursor:pointer;
`
const FilterSize = styled.select`
padding:5px;
margin-left:5px;
`
const FilterSizeOption = styled.option`
`

const AddContainer = styled.div`
display:flex;
justify-content:space-between;
width:50%;
${mobil1({ width: "100%" })}
`
const AmountContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid black;
display:flex;
justify-content:center;
align-items:center;

`

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;
&:hover{
    background-color: #f8f4f4;
}
`

const Product = ()=>{
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product,setProduct] = useState({})
    const [quantity,setQuantity] = useState(1)
    const [color,setColor] = useState("")
    const [size,setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
       const getProduct = async ()=>{
        try{
            const res = await publicRequest.get("/product/find/"+id)
            setProduct(res.data)
        }catch{}
       }
       getProduct()
    },[id])
    const handleQuantity =(type)=>{
        if(type==="dec"){
          quantity>1 && setQuantity(quantity-1)
        }else(
            setQuantity(quantity+1)
        )
    }
   const handleClick =()=>{
    dispatch(addProduct({...product,quantity,color,size}))
    
       
   }
    return(
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
            <ImgContainer>
            <Img src={product.img}  />
            </ImgContainer>
            <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>$ {product.price}</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                   
                    {product.color?.map((c)=>(
                        <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                    ))}
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize onClick={(e)=>setSize(e.target.value)}>
                    {product.size?.map((s)=>(
                        <FilterSizeOption key={s} >{s}</FilterSizeOption>
                        
                    ))}
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <RemoveIcon onClick = {()=>handleQuantity("dec")}/>
                    <Amount> {quantity} </Amount>
                    <AddIcon onClick = {()=>handleQuantity("inc")}/>
                </AmountContainer>
                <Button onClick={handleClick}>ADD TO CARD</Button>
            </AddContainer>
            </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
                
        </Container>
    )
}

export default Product