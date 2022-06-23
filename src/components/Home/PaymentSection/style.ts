import styled from "styled-components";

export const Container = styled.div`
max-width: 1120px;
margin-top: 83px;
height: 712px;
width: 100%;
color: var(--gray);
border-radius: 5px;

display: flex;
h1{
    font-size: 48px;
    line-height: 60px;
    margin: 16px 0px 26px;
}
li{
    font-size: 15px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    :nth-child(1){
        margin: 0;
    }
}
`
export const EspecialOffer = styled.div`
    background-image:url("https://www.rocketseat.com.br/images/ignite/background-pricing-ignite.png"); 
    height:100%; 
    width:42%;
    flex-shrink:0;
    padding: 80px 20px;
    display: flex;
    justify-content: center;
`
export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
h1{
    font-size: 24px;
    margin-bottom: 25px;
    line-height: 33.6px;
    font-weight: bold;
}
.banner{
    color: black;
    font-weight: bold;
    font-size: 12px;
    background: white;
    margin: 0 0 16px;
    width: 118px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    align-self: flex-start;
}
.annual{
    font-size: 18px;
    font-weight: bold;
    line-height: 28.8px;
}
.price{
    font-weight: bold;
    font-size: 24px;
    margin-top: 8px;
    strong{
        font-size: 40px;
    }
}
.button{
    width: 100%;
    height: 68px;
    border-radius: 5px;
    background-color: var(--warning-light);
    color: black;
    font-weight: bold;
    font-size: 16px;
    margin-top: 40px;
}
.boleto{
    margin-top: 16px;
}
li{
    font-weight: bold;
    margin-top: 12px;
    margin-left: 12px;

    :nth-child(1){
        margin-left: 12px;
    }
    img{
        margin-right: 12px;
    }

}
`
export const PaymentOption = styled.div`
    box-shadow:rgb(41, 41, 46) 0px 0px 0px 1px inset;
    border-radius: 3px;
    width:100%;
    max-width:1120px;
    height: 122px;
    margin: 40px 0px 60px;
    padding:40px 32px;
    display: flex;
    color: var(--gray);
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    h4{
        font-weight: bold;
        display: flex;
        align-items: center;
    }
    img{
        margin-right: 10px;
    }
    strong{
        color:var(--ignite-green);
    }
`
export const CertificationContainer = styled.div`
display: flex;
max-width: 1120px;
margin: 60px 0px;
width: 100%;
color: var(--gray);
align-content: center;
h1{
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 24px;
}
.textContainer{
    margin-left: 88px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
`