import styled from 'styled-components';

export const Container = styled.div`
display: flex;
box-sizing: border-box;
height: 648px;
align-items: center;
justify-content: center;
padding: 160px 10px;
box-shadow: rgb(41, 41, 46) 0px -1px 0px 0px inset;
`
export const Wrapper = styled.div`
max-width: 1120px;
width: 100%;
height: 100%;
display: flex;
`
export const ContainerItem = styled.div`
height: 100%;
display: flex;
min-width: 468px;
flex-direction: column;
width: 100%;
h1{
    font-size: 52px;
    margin: 0 0 24px;
    font-weight: bold;
    color: #e1e1e6;
}
img{
    max-height: 500px;
    object-fit: contain;
}
p{
    font-size: 18px;
    margin: 0px 0px 40px;
    color: var(--text);
    margin: 24px 0px 0px;
    &:nth-child(1){
        margin: 0;
    }
    strong{
        color: #e1e1e6;
    }
}
h3{
    font-size: 32px;
    color: #e1e1e6;
    strong{
        color: var(--ignite-green);
    }
}
`;