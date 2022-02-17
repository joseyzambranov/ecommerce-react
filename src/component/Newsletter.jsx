import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';
import {mobil} from "../responsive"

const Container=styled.div`
background-color:#fcf5f5;
height:60vh;
display:flex;
text-align:center;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Title=styled.h1`
font-size:50px;
margin-bottom:20px;

`
const Desc=styled.div`
font-size:20px;
font-weight:300;
margin-bottom:20px;
`
const InputContainer=styled.div`
width:50%;
height:40px;
background-color:white;
border:1px solid lightgray;
display:flex;
${mobil({ width:"80%"})}
`
const Input=styled.input`
border:none;
flex:8;
padding-left:20px;

`
const Button=styled.button`
flex:1;
border:none;
background-color:#3590f3;
cursor:pointer;
color:white;`

const Newsletter=()=>{
    return(
        <Container>
            <Title>Newsletter</Title>
            <Desc>is simply dummy text of the printing and typesetting industry</Desc>
                <InputContainer>
                <Input placeholder="Your mail"/>
                <Button>
                    <SendIcon/>
                </Button>
                </InputContainer>
                

            
        </Container>
    )
}

export default Newsletter