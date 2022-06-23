import styled from "styled-components";

export const Container = styled.div`
max-width: 1120px;
width: 100%;
padding: 80px 0px;
display: flex;
justify-content: space-between;
color: var(--text);
line-height: 36px;
flex-shrink: 0;
a{
    all: unset;
    cursor: pointer;
}
ul{
    li{
        :nth-child(1){
            color: var(--gray);
            font-weight: bold;
        }
    }
}
`
export const SocialMediaButton = styled.button`
height: 48px;
width: 48px;
color: #8257e5;
flex-shrink: 0;
padding: 0;
background: var(--shape-hover);
border-radius: 4.5px;
transition: all 0.3s;
:hover{
    background: #8257e5;
    color: var(--gray);
}
`