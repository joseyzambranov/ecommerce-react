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
`
const Right = styled.div`
flex:1;
aline-item:flex-end;
`
const Language = styled.div`
`
const ContentLeft = styled.div`
display:flex;
justify-content:flex-start;
gap: 10px;
`
const Input = styled.input`
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
         <Center>title</Center>
         <Right>login
         <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
         </Badge>
         </Right>
     </Container>   
    )
}


export default Navbar