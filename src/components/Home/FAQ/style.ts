import styled from "styled-components";

export const Container = styled.div`
max-width: 1120px;
color: var(--gray);
width: 100%;
padding: 160px 0px;
transition:height .5s ease-in-out;
.expand{
    max-height: 300px;
}
`

export const TitleContainer = styled.div`
display: flex;
width: 100%;
color: var(--gray);
justify-content: space-between;
padding-bottom:80px;
h1{
    font-size: 48px;
    padding-bottom: 80px;
    width: 50%;
}
p{
    font-size: 16px;
    strong{
        font-weight: bold;
    }
}
button{
    font-size:16px;
    color: var(--green);
}
`
export const FAQArea = styled.div`
width: 100%;
`
export const Card = styled.button`
border-radius:0;
margin: 0;
padding: 0;
width: 100%;
height: 80px;
display: flex;
align-items: center;
font-size: 20px;
justify-content: space-between;
box-shadow: 0px 0.5px 0px #29292e, 0px -0.5px 0px #29292e;
font-weight: bold;
z-index: 100;

.rotate{
    animation: rotateDown 0.5s;
    transform: rotate(0);
}
svg{
    transform: rotate(180deg);
}
@keyframes rotateDown{
    0%{
        transform: rotate(180deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
`
export const AnswerArea = styled.div`
color:#A8A8B3;
background-image:linear-gradient(90deg, rgb(32, 32, 36), rgba(32, 32, 36, 0.25));
border-bottom-left-radius:7px;
border-bottom-right-radius:7px;
transition: all .5s ease-in-out;
max-height: 0px;
overflow: hidden;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
p{
    margin-top: 20px;
    align-self: center;
    width:90%;
    padding-bottom:20px;
}
a{
    color: var(--primary);
}
`
