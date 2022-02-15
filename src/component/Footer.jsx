import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container=styled.div`
display:flex;
`
const Left=styled.div`
flex:1;
display flex;
flex-direction:column;
padding:20px;
`

const Center=styled.div`
flex:1;
padding:20px;
`

const Right=styled.div`
flex:1;
padding:20px;
`
const Title=styled.h3`
`
const Desc=styled.p`
margin:20px 0px;
`
const Socialcontainer=styled.div`
display:flex;
`
const Socialicon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${(props)=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:5px;
`
const List =styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;

`
const Listitems= styled.li`
width:50%;
padding-bottom:10px;
`
const Contactitems=styled.div`
margin-bottom:20px;
display:flex;

`
const Payment=styled.img`
width:60%;
`

const Footer = ()=>{
    return(
        <Container>
            <Left>
                <Title>SumerShop</Title>
                <Desc>is simply dummy text of the printing and typesetting industry.</Desc>
                <Socialcontainer>
                    <Socialicon color="3B5999">
                    <FacebookIcon />
                    </Socialicon>
                    <Socialicon color="55ACEE">
                    <TwitterIcon />
                    </Socialicon>
                    <Socialicon color="E4405F">
                    <InstagramIcon />
                    </Socialicon>
                </Socialcontainer>
            </Left>
            <Center>
                <Title>User full Link</Title>
                <List>
                    <Listitems>Home</Listitems>
                    <Listitems>Cart</Listitems>
                    <Listitems>Man fashion</Listitems>
                    <Listitems>Women fashion</Listitems>
                    <Listitems>Accesories</Listitems>
                    <Listitems>My account</Listitems>
                    <Listitems>Order Tracking</Listitems>
                    <Listitems>Wishlist</Listitems>
                    <Listitems>Terms</Listitems>

                </List>

            </Center>
            <Right>
                <Title>Contact</Title>
                <Contactitems>
                <RoomIcon style={{marginRight:"5px"}} /> 622 Dixie Path , South Tobinchester 98336
                </Contactitems>
                <Contactitems>
                <PhoneIcon style={{marginRight:"5px"}} /> +1 234 56 78
                </Contactitems>
                <Contactitems>
                <MailOutlineIcon style={{marginRight:"5px"}} /> contact@lama.dev
                </Contactitems>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>

    )
}

export default Footer