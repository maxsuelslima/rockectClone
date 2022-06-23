import { useEffect, useState } from "react"
import GridSelector from "./GridSelector"
import { Container, ContainerItem, Wrapper } from "./style"

const ThirdSection = () =>{
    const [selected, setSelected]=useState<'#2ac7e3' | '#8cc84b' |'#4763ff'>('#2ac7e3')
    useEffect(()=>{console.log(selected)},[selected])
    return(
        <Container>
            <Wrapper>
                <ContainerItem style={{height:'198px', flexShrink:0}}>
                    <div style={{display:"flex", width:'100%', justifyContent:'space-between'}}>
                        <h1 style={{width:'100%'}}>
                            Acesso ilimitado em<br/>
                            todas as trilhas
                        </h1>
                        <p>
                            Como assinante do Ignite, você poderá escolher a trilha que está mais alinhada com seu objetivo e acelerar sua evolução na direção certa.
                        </p>
                    </div>
                </ContainerItem>
                <ContainerItem>
                    <GridSelector selected={selected} onSelect={setSelected}/>
                </ContainerItem>
            </Wrapper>
        </Container>
    )
}
export default ThirdSection