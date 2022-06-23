import styled from "styled-components";

interface ContainerProps{
    background:'default'|'gradient'
}

export const Container = styled.div<ContainerProps>`
width:100%; 
display:flex; 
justify-content:center;
background:${p=>p.background==='default'?'var(--background)':'linear-gradient(270deg, #121214 0%,#09090A 100%)'};
background-image: ${p=>p.background==='default'?'':'background-image:linear-gradient(270deg, rgb(18, 18, 20), rgb(9, 9, 10))'};
box-shadow: #29292e 0px -1px 0px 0px inset;
align-items: center;
`