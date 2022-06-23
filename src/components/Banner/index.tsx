import { useEffect, useState } from "react";
import { Container, List } from "./style";

const Banner = () =>{

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

        

        <Container style={{
            transform: scrollPosition>=736?'':'translateY(-72px)'
            }}>
            <div style={{maxWidth:'1120px',width:'100%', display:'flex', alignContent:'center', justifyContent:'space-between'}}>
                <div>
                    <img height='40px' src="/ignite-logo.svg" alt="" />
                </div>
                <div style={{color:'var(--text)', display:'flex', width:'100%', alignContent:'center'}}>
                    <List>
                        <li> 
                            Sobre o Ignite
                        </li>
                        <li>
                            Trilhas
                        </li>
                        <li>
                            Estrutura
                        </li>
                        <li>
                            Depoimentos
                        </li>
                        <li>
                            Perguntas Frequentes
                        </li>
                    </List>
                </div>
                <button>
                    ACELERAR MINHA CARREIRA
                </button>
            </div>
        </Container>
    )
}
export default Banner