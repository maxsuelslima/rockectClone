import { useState } from "react"
import Section from "../../UI/Section"
import { FAQData } from "./FAQData"
import { AnswerArea, Card as CardStyle, Container, FAQArea, TitleContainer } from "./style"

const FAQ = () =>{

    const data = FAQData

    return(
        <Section background='gradient'>
            <Container>
                <TitleContainer>
                    <h1>Perguntas e respostas mais frequentes</h1>
                    <div style={{display:'flex', flexDirection:'column', width:'23%', textAlign:'right'}}>
                        <p><strong>Dificuldade em assinar o Ignite?</strong></p>
                        <p>Entre em contato com nosso time</p>
                        <button style={{alignSelf:'flex-end'}}>Abrir chat</button>
                    </div>
                </TitleContainer>
                <FAQArea>
                    {
                        data.map(
                            (cardData, index)=>{
                                return <Card key={index} index={index} data={cardData}/>
                            }
                        )
                    }
                </FAQArea>
            </Container>
        </Section>
    )
}
export default FAQ


const DownArrow = ({isClicked}:any) =>{
    return(
        <svg className={isClicked?'rotate':''} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"></path></g></svg>
    )
}
const Card = ({data, index}:any) =>{
    const [answerVisble, setAwnserVisibility] = useState(false)
    return(
        <div>
            <CardStyle onClick={()=>setAwnserVisibility(!answerVisble)}>
                <div>
                    <span style={{paddingRight:'40px', paddingLeft:'32px', color:'var(--text)'}}>{index+1}</span>
                    <span>{data.title}</span>
                </div>
                <span style={{paddingRight:'16px'}}><DownArrow isClicked={answerVisble}/></span>
            </CardStyle>
            <AnswerArea className={answerVisble?'expand':''}>
                {
                    data.body.map(
                        (x:string, index:number)=><p key={index} dangerouslySetInnerHTML={{__html:x}}/>
                        )
                }
            </AnswerArea>
        </div>
    )
}

