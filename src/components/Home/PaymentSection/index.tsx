import Section from "../../UI/Section"
import { CertificationContainer, Container, Content, EspecialOffer, PaymentOption } from "./style"

const CorrectIcon = () =>{
    return(
        <div style={{marginRight:'8px'}}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="var(--ignite-green)" className="styles_icon__nlIyc" style={{color:'var(--ignite-green)'}} height="26" width="26" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"></path></svg>
        </div>
    )
}

const PaymentSection = ()=>{
    return(
        <Section style={{flexDirection:'column', boxShadow:'none'}}>
            <Container>
                <div style={{padding:'60px',boxShadow:'rgb(41, 41, 46) 0px 0px 0px 1px inset'}}>
                    <span>🚀 Evolua na direção certa</span>
                    <h1>Acelere sua carreira em programação através de um método eficiente</h1>
                    <ul>
                        <li><CorrectIcon/>Comunidade Exclusiva</li>
                        <li><CorrectIcon/>Atualizações inclusas</li>
                        <li><CorrectIcon/>Encontros ao vivo</li>
                        <li><CorrectIcon/>Desafios</li>
                        <li><CorrectIcon/>Trilha Higher</li>
                        <li><CorrectIcon/>Fórum exclusivo</li>
                        <li><CorrectIcon/>Workshops</li>
                        <li><CorrectIcon/>Certificado</li>
                        <li><CorrectIcon/>Navigation</li>
                    </ul>
                </div>
                <EspecialOffer>
                    <Content>
                        <span className="banner">OFERTA ESPECIAL</span>
                        <h1>
                            Adquirindo o Ignite até <br/> 26/06 às 23h59h você garante:
                        </h1>
                        <ul>
                            <li>
                                <img src="/yellow-star.svg"/>  Bônus 1 - Uma camiseta exclusiva
                            </li>
                            <li>
                                <img src="/yellow-star.svg"/> Bônus 2 – Curso de posicionamento <br/> estratégico para devs em redes sociais
                            </li>
                            <li>
                                <img src="/yellow-star.svg"/> Bônus 3 – Experiência - Carreira internacional
                            </li>
                        </ul>
                        <span className="annual">
                            Assinatura anual por 1.774,80
                        </span>
                        <span className="price">
                            12x de R$ <strong>147,90</strong>
                        </span>
                        <button className="button">
                            GARANTIR MINHA VAGA
                        </button>
                        <span className="boleto">
                            Parcele em até 24X no boleto
                        </span>
                    </Content>
                </EspecialOffer>
            </Container>
            <PaymentOption>
                <h4>Formas de pagamento</h4>
                <div>
                    <img src="/visa.svg"/>
                    <img src="/mastercard.svg"/>
                    <img src="/american-express.svg"/>
                    <img src="/pay-pal.svg"/>
                    <img src="/boleto.svg"/>
                </div>
                <div style={{display:'flex', alignContent:'center', height:'30px',justifyContent:'space-between'}}>
                    <img src="/shield.svg"/>
                    <h4>Compra <strong>100% segura</strong></h4>
                </div>
            </PaymentOption>
            <CertificationContainer>
                <img src="/ignite-certificate-illustration.svg" alt="" />
                <div className="textContainer">
                    <h1>Certificação da Rocketseat</h1>
                    <p>Ao chegar ao fim da formação, você poderá emitir sua certificação oficial da Rocketseat, para evidenciar sua conquista e fortalecer o seu posicionamento no mercado.</p>
                </div>
            </CertificationContainer>
        </Section>
    )
}
export default PaymentSection