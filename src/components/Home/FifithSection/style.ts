import styled from "styled-components";

export const Elevator = styled.div`
color: var(--gray);
width: 23%;
flex-shrink: 0;
position: sticky;
top:102px;
align-self: flex-start;
margin-bottom: 50px;
h1{
    font-size: 48px;
    padding-bottom: 48px;
    line-height: 54px;
    font-weight: bold;
}
h3{
    font-size: 24px;
    color: var(--ignite-green);
    margin-bottom: 24px;
    line-height: 34px;
}
p{
    font-size: 16px;
    line-height: 26px;
}
`
export const Card = styled.div`
display: flex;
width: 100%;
margin-bottom: 30px;
background: var(--background);
color: var(--gray);
height: 216px;
border-radius: 7.5px;
border: 1px solid #292A2E;
flex-shrink: 0;
align-self: flex-end;
transition: all 0.5s;
h1{
    padding: 32px 0px 16px 32px;
    font-size: 24px;
    font-weight: bold;
}
p{
    color: var(--text);
    padding: 0px 32px 32px;
}
.icon{
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    width: 23%;
    border-right: 1px solid #292A2E;
    img{
        width: 57%;
        object-fit: contain;
    }
}
.fadeIn{
    animation: fadeIn 0.5s;
    opacity: 1;
}
.fadeOut{
    opacity: 0;

}
@keyframes fadeIn {
  0% { opacity: 0;
        transform: translateY(20%);
}
  100% { opacity: 1; 
    transform: translateY(0);}
}

`
