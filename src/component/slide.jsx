import styled from "styled-components"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {data} from '../data';
import { useState } from "react";

const Container = styled.div`
overflow:hidden;
width:100%;
height:100vh;
position:relative;
display:flex;
`

const Wrapper = styled.div`

height:100%;
display:flex;
transition: all 1.5s ease;
transform:translateX(${(props)=>props.sliderIndex * -100}vw);
`
const Arrow = styled.div`
width:50px;
height:50px;
border-radius:50%;
background:white;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
margin:auto;
top:0;
bottom:0;
position:absolute;
left:${props=>props.position === "left"&&"10px"};
right:${props=>props.position === "right"&&"10px"};
z-index:2;
`
const Slides = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:#${(props)=>props.bg};
`
const ImgContainer = styled.div`
height:100%;
flex:1;
`
const Img = styled.img`
height:90%;

`
const InfoContainer = styled.div`
flex:1;
padding:10px;
`
const Title = styled.h2`
font-size:40px;
`
const Desc = styled.p`
margin:30px 0;
font-size:18px;
font-weight:500;
letter-spacing:3px;
`
const Button = styled.button`
padding:10px;
font-size:15px;
cursor:pointer;
background-color:#3590f3;
text-decoration:none;
color:white;
`

const Slide =()=>{

    const[sliderIndex,setSliderIndex]=useState(0)

    const handleClick = (position)=>{
        if(position==="left"){
            setSliderIndex(sliderIndex > 0? sliderIndex -1:3)
        }else{
            setSliderIndex(sliderIndex < 3? sliderIndex +1:0)
        }
    }
 
    return(
        <Container>
            <Arrow position="left" onClick={()=>handleClick("left")}>
            <ArrowBackIosNewIcon/>
            </Arrow>
            <Wrapper sliderIndex={sliderIndex}>
                {data.map((data)=>(

                        <Slides bg={data.bg} key={data.id}>
                        <ImgContainer>
                        <Img src={data.img}/>
                        </ImgContainer>
                        <InfoContainer>
                        <Title>{data.title}</Title>
                        <Desc>{data.desc}</Desc>
                        <Button>Buy now</Button>
                        </InfoContainer>
                        </Slides>

                ))
                    

                }
            </Wrapper>
            <Arrow position="right" onClick={()=>handleClick("right")}>
            <ArrowForwardIosIcon/>
            </Arrow>
        </Container>
    )
}

export default Slide