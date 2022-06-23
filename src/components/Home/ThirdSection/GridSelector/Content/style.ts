import styled from "styled-components";

interface ContainerBodyProps{
    gradient:string
}

export const Container = styled.div<ContainerBodyProps>`
    display:flex;
    height:552px; 
    width:100%;
    background:linear-gradient(180deg,${p=>p.gradient},rgba(18,18,20,1));
    border-radius:7.5px;
    font-size: 18px;
    img{
        border-top-right-radius:7.5px;
        border-bottom-right-radius:7.5px;
        object-fit:cover;
        width:35.5%;
        height: 100%;
    }
`
export const ContentBody = styled.div`
    padding: 40px;
    line-height: 28px;
    p{
        font-size: 18px;
        strong{
            font-weight: bold;
        }
    }
    h4{
        margin: 24px 0px 8px;
        font-size:24px;
    }
    h6{
        font-size: 16px;
        margin: 0px 0px 16px;
    }
`;

export const SocialMediaButton = styled.button`
width: 152px;
height: 52px;
display: flex;
align-items: center;
border-radius: 7.5px;
background-color: #202024;
margin-right: 10px;
padding:0;
transition: all 0.2 ease-in-out;
:hover{
    background-color: #29292e;
}
div{
    border-bottom-left-radius: 7.5px;
    border-top-left-radius: 7.5px;
    background-color: #29292e;
    height: 52px;
    width: 48px;
    margin-right: 10px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
a{
    all: unset;
    display: flex;
    align-items: center;
    
}
`;