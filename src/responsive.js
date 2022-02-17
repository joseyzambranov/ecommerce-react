import {css} from "styled-components"

export const mobil =(props)=>{
return css`
@media only screen and (max-width:380px){
    ${props}
}
`;
}
export const mobil1 =(props)=>{
    return css`
    @media only screen and (max-width:605px){
        ${props}
    }
    `;
};

export const mobil2 =(props)=>{
    return css`
    @media only screen and (max-width:800px){
        ${props}
    }
    `;
};

