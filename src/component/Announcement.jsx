import styled from 'styled-components';
import {mobil} from "../responsive"

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:50px;
background:#3590f3;
color:white;
font-size:14px;

`
const Announcement=()=>{

    return(
     <Container>
   Super Deal! Free Shipping on Orders Over $50
     </Container>
    );
};

export default Announcement