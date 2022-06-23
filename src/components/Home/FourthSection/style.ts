import styled from "styled-components";

export const Container = styled.div`
max-width:1120px;
width: 100%;
padding:131px 0px; 
display:flex;
color:var(--gray);
justify-content: space-between;
flex-direction: column;


h1{
    font-weight: bold;
    font-size:48px;
    line-height: 54px;
}
h2{
    margin: 24px 0px 0px;
    font-size: 24px;
    line-height: 34px;
}
h3{
    font-size: 16px;
    margin: 24px 0px 0px;
    line-height: 26px;
    color: var(--text);
}
img{
    object-fit: cover;
    width: 520px;
    height: 412px;
}
.fadeIn{
    animation: fadeIn 0.5s;
    opacity: 1;
}
.fadeOut{
    animation: fadeOut 0.3s;
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
export const Card = styled.div`
width: 100%;
height: 120px;
border-radius: 7.5px;
background-image:linear-gradient(90deg, rgb(32, 32, 36), rgba(32, 32, 36, 0.25));
display: flex;
align-items: center;
font-size:16px;
margin-top: 125px;
padding-right: 40px;
h3{
        font-size:32px;
        font-weight: bold;
        color: var(--gray);
        margin: 0;
        flex-shrink: 0;
        margin-left:40px;
    }
span{
    color: var(--text);
    strong{
        color:#e1e1e6
    }
}
.icon{
    flex-shrink: 0;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 120px;
    background: var(--ignite-green);
    border-top-left-radius: 7.5px;
    border-bottom-left-radius: 7.5px;
    img{
        width: 54px;
        height: 64px;
    }

}
`
export const NewContentBanner = styled.div`
margin:0px 24px;
padding: 4px 8px;
box-sizing: border-box;
border:1px solid var(--warning-light);
border-radius: 3px;
color:var(--warning-light);
flex-shrink: 0;
`


