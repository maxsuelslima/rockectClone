import styled from "styled-components";
interface ButtonProps{
    gradient:string
}
interface TextContainerProps{
    accentColor:string
}
export const Button=styled.button<ButtonProps>`
    border-radius:8px;
    margin-top:18px;
    background:linear-gradient(90deg,${p=>p.gradient},rgba(18,18,20,0));
    width:384px;
    height:95px;
    flex-shrink: 0;
    transition: all 0.2s;
    &:nth-child(1){
        margin-top:0;
    }
`
export const TextContainer = styled.div<TextContainerProps>`
    border-bottom:1px white solid;
    border-image: var(--darker-gradient) 1;
    margin-left:16px; 
    margin-top:16px; 
    text-align:left;
    padding-bottom:16px;
    width: 100%;
    h4{
        font-weight: bold;
        strong{
            color: ${p=>p.accentColor};
        }
    }
`