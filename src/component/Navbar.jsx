import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import {mobil} from '../responsive'
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


const Container = styled.div`
height: 30px ;
display:flex;
justify-content:space-between;
padding:15px 15px;
${mobil({ padding:"10px 0px"})}
`
const Left = styled.div`
flex:1;

`
const Center = styled.div`
flex:1;
justify-content:center;
`
const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
${mobil({justifyContent:"center"})}

`
const Language = styled.div`
${mobil({display:"none"})}
`
const ContentLeft = styled.div`

display:flex;
justify-content:flex-start;
gap: 10px;
${mobil({justifyContent:"center", gap:"5px"})}
`
const Input = styled.input`
width:40%;

`
const ContentRight=styled.div`
display:flex;
gap:10px;
margin-right:10px;
${mobil({marginRight:"5px",gap:"1px"})}
`
const ContentItemRight = styled.div`
font-size: 14px;
${mobil({fontSize:"10px"})};
cursor:pointer;

`

const Logo =styled.h1`
display:flex;
justify-content:center;
font-weight: bold;
margin-top:-2%;
text-align:center;
font-size:18px;
${mobil({fontSize:"12px",marginTop:"-3px" })}
`
const Navbar = ()=>{
    
    const quantity = useSelector(state=>state.cart.quantity)
    
    return(
     <Container>
         <Left>
             <ContentLeft>
             <Language>EN</Language>
             <Input/>
             <SearchIcon/>
            </ContentLeft>
         </Left>
             <Center>
                 <Logo>SUMER SHOP</Logo>
             </Center>
         <Right>
             <ContentRight>
             <ContentItemRight>LOGIN</ContentItemRight>
            <ContentItemRight>REGISTER</ContentItemRight>
            <Link to="/cart">
            <ContentItemRight>
            <Badge badgeContent={quantity} color="primary">
                 <LocalGroceryStoreOutlinedIcon color="action" />
            </Badge>
            </ContentItemRight>
            </Link>
         </ContentRight>
         </Right>
     </Container>   
    )
}


export default Navbar