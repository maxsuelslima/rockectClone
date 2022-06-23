import { useEffect, useState } from "react";
import Section from "../../UI/Section"
import { cardList } from "./cardDataList"
import { Card, Elevator } from "./style"

const FifithSection = () =>{

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
            <div style={{width:'100%', maxWidth:'1120px', marginTop:'160px',display:"flex", justifyContent:'space-between'}}>
                <Elevator>
                    <h1>Estrutura completa para evoluir</h1>
                    <h3>Nosso propósito é impulsionar pessoas através da educação.</h3>
                    <p>Queremos dar e elas o poder de acessar as melhores oportunidades de suas carreiras. Não medimos esforços para fazer isso acontecer.</p>
                </Elevator>
                <div style={{width:'65%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                {cardList.map(
                    (card, index) =>{
                        return(
                            <Card key={index}>
                                <div className="icon">
                                    <img src={card.imgSrc}/>
                                </div>
                                <div>
                                    <h1>
                                        {card.title}
                                    </h1>
                                    <p>
                                        {card.body}
                                    </p>
                                </div> 
                            </Card>
                        )
                    }
                )}
                </div>
            </div>

        </Section>
    )
}
export default FifithSection