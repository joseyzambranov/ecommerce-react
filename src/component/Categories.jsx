import styled from "styled-components"
import {categories} from "../data"
import CategoriItem from "./CategoriItem"
import {mobil} from "../responsive"

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${mobil({ padding: "0px", flexDirection:"column" })}
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