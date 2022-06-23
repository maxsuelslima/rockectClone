import Content from "./Content"
import ContentSelector from "./ContentSelector"
import { Container, Wrapper } from "./style"

interface GridProps{
    selected:'#2ac7e3' | '#8cc84b' |'#4763ff'
    onSelect:(_value:'#2ac7e3' | '#8cc84b' |'#4763ff')=>void
}

const GridSelector = ({selected, onSelect}:GridProps) =>{
    return(
        <Container>
            <Wrapper>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <ContentSelector 
                    imageSrc="/react-js-icon.webp" 
                    title="Ignite <strong>ReactJs</strong>" 
                    subtitle="Front-End" selected={selected} 
                    onSelect={onSelect} 
                    gradient="#182328" 
                    accentColor="#2ac7e3"/>

                    <ContentSelector 
                    imageSrc="/node-js-icon.webp" 
                    title="Ignite <strong>Node.js</strong>" 
                    subtitle="Back-End" 
                    selected={selected} 
                    onSelect={onSelect} 
                    gradient="#21381b" 
                    accentColor="#8cc84b"/>

                    <ContentSelector 
                    imageSrc="/react-native-icon.webp" 
                    title="Ignite <strong>React Native</strong>" 
                    subtitle="Mobile" 
                    selected={selected} 
                    gradient="#2e2340" 
                    accentColor="#4763ff" 
                    onSelect={onSelect}/>
                </div>
                <Content selected={selected} gradient="#182328" accentColor="#2ac7e3"/>
            </Wrapper>
        </Container>
    )
}
export default GridSelector