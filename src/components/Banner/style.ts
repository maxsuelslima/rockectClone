import styled from "styled-components";

export const Container = styled.div`
    z-index: 2;
    display:flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    top:0;
    width:100%;
    height:72px;
    background:red;
    transition: all 0.2s;
    background: rgba(255, 255, 255, 0.01);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    button{
        width: 210px;
        height: 40px;
        font-size: 12px;
        background: var(--ignite-green);
        flex-shrink: 0;
        border-radius: 5px;
        font-weight: bold;
    }
`
export const List = styled.ul`
    display:flex; 
    justify-content:center; 
    width:100%;
    li{
        display: flex;
        align-items: center;
        margin: 0px 0px 0px 22px;
        :nth-child(1){
            margin: 0;
        }
    }
`