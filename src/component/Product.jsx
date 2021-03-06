import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.2);
transition:all 0.5s ease;
cursor:pointer;
z-index:3;
`


const Container = styled.div`
flex:1;
min-width:250px;
height:350px;
display:flex;
margin:3px;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;
&:hover ${Info}{
    opacity:1;
}
`
const Img = styled.img`
height:230px;
width:200px;
z-index:2;
`
const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.5s ease;
&:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
}
`
const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:white;
position:absolute;
`

const Product = ({pdt})=>{
    return(
        <Container key={pdt._id} >
            <Circle />
            <Img src={pdt.img} />
            <Info>
                <Icon>
                <ShoppingCartOutlinedIcon />
                </Icon>
                <Icon>
                <Link to ={`/ecommerce-react/product/${pdt._id}`}>
                <SearchOutlinedIcon />
                </Link>
                </Icon>
                <Icon>
                <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>


        </Container>
    )
}

export default Product