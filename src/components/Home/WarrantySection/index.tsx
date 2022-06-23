import Section from "../../UI/Section"
import { TextContainer } from "./style"



const WarrantySection = () =>{
    return(
        <Section style={{background:'linear-gradient(90deg, rgba(1, 95, 67, 0.2) 0%, #005239 100%)', height:'550px'}}>
            <div style={{maxWidth:'1120px', display:'flex', justifyContent:'space-between', width:'100%'}}>
                <TextContainer>
                    <h1>Garantia incondicional de 15 dias</h1>
                    <p>Ao se matricular no Ignite e, por qualquer razão, perceber que não é para você, não importa o motivo, você tem 15 dias a partir do início das aulas para nos enviar um e-mail e receber 100% do seu investimento de volta.</p>
                    <p>Além disso, ninguém irá te ligar ou perguntar o motivo do cancelamento nem tentar te convencer do contrário.</p>
                </TextContainer>
                <img src="/seal.svg" alt="" />
            </div>
        </Section>
    )
}
export default WarrantySection