import styled from "styled-components"
import {categories} from "../data"
import CategoriItem from "./CategoriItem"

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
`

const Categories = ()=>{
return(
    <Container>
        {categories.map((ctg)=>(
          <CategoriItem ctg={ctg} key={ctg.id} />
        ))}
    </Container>
)

}

export default Categories