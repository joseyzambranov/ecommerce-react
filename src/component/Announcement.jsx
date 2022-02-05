import styled from 'styled-components';

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:50px;
background:#3590f3;
color:white;

`

const Announcement=()=>{

    return(
    <div>
     <Container>
    It was popularised in the 1960s with
    the release of Letraset sheets containing
    Lorem Ipsum p
     </Container>
</div>

    );
};

export default Announcement