import styled from 'styled-components';

export const Container = styled.div`
display: flex;
box-sizing: border-box;
height: 648px;
padding: 0 24px;
background: linear-gradient(270deg, #060A08 0%, #121214 100%);

justify-content: center;
box-shadow: rgb(41, 41, 46) 0px -1px 0px 0px inset;
`
export const Wrapper = styled.div`
max-width: 1120px;
width: 100%;
height: 100%;
display: flex;
`

export const ContainerItem = styled.div`
height: 648px;
display: flex;
min-width: 468px;
flex-direction: column;
color:#e1e1e6;
padding: 98px 0px;
h1{
    font-size: 52px;
    margin: 0 0 24px;
}
img{
    max-height: 500px;
    object-fit: contain;
}
p{
    font-size: 18px;
    margin: 0px 0px 40px;
}
`;
export const Button= styled.button`
background: transparent;
border:none;
height: 64px;
max-width: 296px;
font-size: 16px;
line-height: 18.75px;
padding: 0;
margin: 0;
color: #e1e1e6;
background: var(--ignite-green);
`;