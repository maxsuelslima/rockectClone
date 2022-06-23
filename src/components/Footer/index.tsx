import Section from "../UI/Section"
import { Container, SocialMediaButton } from "./style"
import { AiFillYoutube,AiFillInstagram, AiFillFacebook, AiFillTwitterSquare, AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Footer = () =>{
    return(
        <div>
            <Section background='gradient'>
                <Container>
                    <div style={{display:'flex', flexDirection:'column', width:'23%',fontSize:'14px' ,color:'var(--text)'}}>
                        <img src="/boosting.svg" alt="" style={{marginBottom:'50px'}} />
                        <label>
                        Rocketseat 2022
                        Todos os direitos reservados
                        </label>
                    </div>
                    <ul>
                        <li>Programas</li>
                        <li><a href="">Discover</a></li>
                        <li><a href="">Ignite</a></li>
                        <li><a href="">Explorer</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                    <ul>
                        <li>Sobre</li>
                        <li><a href="">A Rocketseat</a></li>
                        <li><a href="">Direitos autorais</a></li>
                        <li><a href="">Termos de uso</a></li>
                        <li><a href="">Políticas de privacidade</a></li>
                    </ul>
                    <ul>
                        <li>Dúvidas</li>
                        <li><a href="">Comunidade</a></li>
                        <li><a href="">Central de ajuda</a></li>
                    </ul>
                </Container>
                </Section>
            <Section>
                <div style={{height:'112px', display:'flex', alignItems:'center', width:'100%', maxWidth:'1120px', justifyContent:'space-between'}}>
                    <div style={{ width:'328px', display:'flex', justifyContent:'space-between'}}>
                        <SocialMediaButton>
                            <AiFillYoutube size={33}/>
                        </SocialMediaButton>
                        <SocialMediaButton>
                            <AiFillInstagram size={28}/>
                        </SocialMediaButton>
                        <SocialMediaButton>
                            <AiFillFacebook size={28}/>
                        </SocialMediaButton>
                        <SocialMediaButton>
                            <AiFillTwitterSquare size={28}/>
                        </SocialMediaButton>
                        <SocialMediaButton>
                            <AiFillGithub size={28}/>
                        </SocialMediaButton>
                        <SocialMediaButton>
                            <AiFillLinkedin size={28}/>
                        </SocialMediaButton>
                    </div>
                </div>
            </Section>
        </div>
    )
}
export default Footer