import { useEffect, useState } from "react";
import Section from "../../UI/Section"
import { Card, Container, NewContentBanner } from "./style"


const FourthSection = () =>{

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
        
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return(
        <Section background='gradient'>
            <Container>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div className={scrollPosition>=1700?'fadeIn':'fadeOut'}>
                        <img src="/higher-videos-jake.webp" alt="" />
                    </div>
                    <div style={{width:'46%', display:'flex', flexDirection:'column'}}>
                        <h1 className={scrollPosition>=1750?'fadeIn':'fadeOut'}>Com o Ignite, você vai avançar além do código</h1>
                        <h2 className={scrollPosition>=1800?'fadeIn':'fadeOut'}>O objetivo do Ignite é formar profissionais completos, com habilidades técnicas e comportamentais.</h2>
                        <h3 className={scrollPosition>=1900?'fadeIn':'fadeOut'}>O Ignite Higher é uma trilha de desenvolvimento de habilidades comportamentais (soft skills), para você se destacar como profissional. No Higher você irá evoluir em assuntos como comunicação, criatividade, solução de problemas, pensamento crítico, tomada de decisão, marca pessoal e muito mais.</h3>
                    </div>
                </div>
                <Card>
                    <div className="icon">
                        <img src="/logo-higher.svg"/>
                    </div>
                    <h3>Ignite Higher</h3>
                    <NewContentBanner>NOVOS CONTEÚDOS EM BREVE</NewContentBanner>
                    <span>
                        <strong>Vá além do código:</strong> Trilha exclusiva para desenvolver habilidades comportamentais.
                    </span>
                </Card>
            </Container>
        </Section>
    )
}
export default FourthSection