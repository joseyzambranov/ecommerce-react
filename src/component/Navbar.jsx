import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const Container = styled.div`
height: 60px ;
display:flex;
justify-content:space-between;
padding:15px 15px;
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

`
const Language = styled.div`
`
const ContentLeft = styled.div`

display:flex;
justify-content:flex-start;
gap: 10px;
`
const Input = styled.input`
width:100px;
`
const ContentRight=styled.div`
display:flex;
gap:10px;
margin-right:20px;
`
const Login = styled.div`
`
const Register = styled.div`
`
const Logo =styled.h1`
display:flex;
justify-content:center;
font-size:24px;
margin-top:-5px;
text-aling:center;
`
const Navbar = ()=>{
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
             <Login>LOGIN</Login>
            <Register>REGISTER</Register>
            <Badge badgeContent={4} color="primary">
                 <MailIcon color="action" />
              </Badge>
         </ContentRight>
         </Right>
     </Container>   
    )
}


export default Navbar