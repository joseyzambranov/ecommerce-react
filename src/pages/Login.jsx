import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import {mobil1} from "../responsive"


const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
background-sie:cover;    

`

const Wapper =styled.div`
width:30%;
padding:20px;
background-color:white;
border-radius:20px;
${mobil1({width:"75%"})}
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display:flex;
flex-direction:column;
`

const Input = styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding: 15px;
`

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
color:white;
background:#3590f3;
&:disabled{
    background:green;
    cursor:not-allowed;
}

`
const Link =styled.a`
margin: 5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`
const Error = styled.span`
color:red
`

const Login =()=>{
    const [username,setUserName]= useState("");
    const [password,setUserPassword]= useState("");
    const dispatch = useDispatch();
    const {isFetching,error} = useSelector((state)=>state.user);
    const handleClick=(e)=>{
        e.preventDefault()
        login(dispatch,{username,password})
    }
    return(
        <Container>
             <Wapper>
                <Title>SING IN</Title>
                <Form>
                    <Input placeholder="username"
                    onChange={(e)=>setUserName(e.target.value)} />
                    <Input placeholder="password"
                    type="password"
                    onChange={(e)=>setUserPassword(e.target.value)}/>
                    <Button onClick={handleClick} disabled={isFetching}>
                        LOGIN
                    </Button>
                    {error && <Error>Somenthing went wrong...</Error>}
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wapper>
        </Container>
    )
}

export default Login