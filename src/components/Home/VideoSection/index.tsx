import Section from "../../UI/Section"
import { TitleContainer, VideoContainer } from "./style"

const VideoSection = () =>{

    const list = []

    for(let i=0; i<9; i++){
        list.push(
            <li>
            <img src="https://www.rocketseat.com.br/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FzvtShzuXQvE%2Fmqdefault.jpg&w=1920&q=75" alt="" />
            <h4>Fulana blabla</h4>
        </li>
        )
    }

    return(
        <Section style={{padding:'160px 0px 200px'}}>
            <div style={{width:'100%', maxWidth:'1120px', display:'flex', flexDirection:'column'}}>
                <TitleContainer>
                    <h1>O seu resultado é o nosso combustível.</h1>
                    <p>Tudo o que fazemos tem como objetivo impulsionar a sua evolução, para que você acesse as melhores oportunidades da sua carreira. O seu resultado nos move.</p>
                </TitleContainer>
                <VideoContainer>
                    <ul>
                        {list.map(item => item)}
                    </ul>
                </VideoContainer>
            </div>
        </Section>
    )
}
export default VideoSection