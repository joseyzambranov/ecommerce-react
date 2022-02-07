import styled from "styled-components"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
width:100%;
height:100vh;
position:relative;
display:flex;
`

const Wrapper = styled.div`
width:100vw;
height:100vh;
background-color:#f3356b;
display:flex;
transform:translateX()
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
`
const Slides = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
`
const ImgContainer = styled.div`
height:100%;
flex:1;
`
const Img = styled.img`
height:100%;

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
    return(
        <Container>
            <Arrow position="left">
            <ArrowBackIosNewIcon/>
            </Arrow>
            <Wrapper>
                <Slides>
                    <ImgContainer>
                    <Img src="https://i.postimg.cc/J4b7zbCb/sincerely-media-uu-Rw-SS1hx-Q-unsplash-removebg-preview.png"/>
                    </ImgContainer>
                    <InfoContainer>
                    <Title>Lorem Ipsum</Title>
                    <Desc>is simply dummy text of the printing and typesetting industry.</Desc>
                    <Button>Buy now</Button>
                    </InfoContainer>
                </Slides>
            </Wrapper>
            <Wrapper>
                <Slides>
                    <ImgContainer>
                    <Img src="https://i.postimg.cc/J4b7zbCb/sincerely-media-uu-Rw-SS1hx-Q-unsplash-removebg-preview.png"/>
                    </ImgContainer>
                    <InfoContainer>
                    <Title>Lorem Ipsum 2</Title>
                    <Desc>is simply dummy text of the printing and typesetting industry.</Desc>
                    <Button>Buy now</Button>
                    </InfoContainer>
                </Slides>
            </Wrapper><Wrapper>
                <Slides>
                    <ImgContainer>
                    <Img src="https://i.postimg.cc/J4b7zbCb/sincerely-media-uu-Rw-SS1hx-Q-unsplash-removebg-preview.png"/>
                    </ImgContainer>
                    <InfoContainer>
                    <Title>Lorem Ipsum 3</Title>
                    <Desc>is simply dummy text of the printing and typesetting industry.</Desc>
                    <Button>Buy now</Button>
                    </InfoContainer>
                </Slides>
            </Wrapper>

            <Arrow position="right">
            <ArrowForwardIosIcon/>
            </Arrow>
        </Container>
    )
}

export default Slide