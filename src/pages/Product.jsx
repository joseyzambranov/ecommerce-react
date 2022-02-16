import styled from "styled-components"
import Announcement from "../component/Announcement"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import Newsletter from "../component/Newsletter"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container =styled.div`
`
const Wrapper = styled.div`
padding:50px;
display:flex;
`
const ImgContainer = styled.div`
flex:1;
`

const Img = styled.img`
width:100%;
height:90vh;
`
const InfoContainer=styled.div`
flex:1;
padding: 0px 50px;
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
    return(
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
            <ImgContainer>
            <Img src="https://i.ibb.co/S6qMxwr/jean.jpg"  />
            </ImgContainer>
            <InfoContainer>
            <Title>Lorem ipsum</Title>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.</Desc>
            <Price>$ 20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="green" />
                    <FilterColor color="blue" />
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <RemoveIcon />
                    <Amount> 1 </Amount>
                    <AddIcon />
                </AmountContainer>
                <Button>ADD TO CARD</Button>
            </AddContainer>
            </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
                
        </Container>
    )
}

export default Product