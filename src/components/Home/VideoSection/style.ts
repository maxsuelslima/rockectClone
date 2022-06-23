import styled from "styled-components";

export const TitleContainer = styled.div`
display: flex;
margin-bottom: 80px;
h1{
    font-weight: bold;
    font-size:48px;
    color: var(--gray);
    margin-bottom: 24px;
}
p{
    padding-top: 10px;
    font-size: 16px;
    color: var(--text);
    width: 50%;
    text-align: right;
}
`
export const VideoContainer = styled.div`

h4{
    margin-top: 16px;
    color: var(--gray);
    font-weight: bold;
    font-size: 24px;
}
ul{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
}
img{
    border-radius: 6px;
}
`