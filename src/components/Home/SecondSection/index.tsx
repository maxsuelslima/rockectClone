import Frame from "./frame"
import { Container, ContainerItem, Wrapper } from "./style"

const SecondSection = () =>{
    return(
        <Container>
            <Wrapper>
                <ContainerItem>
                    <h3>
                        <strong>Evolua na direção certa,</strong><br/>
                        com foco no que<br/>
                        importa para você.<br/>
                    </h3>
                    <Frame />
                </ContainerItem>
                <ContainerItem>
                    <h1>
                    O Ignite  <br/>
                    é pra mim?

                    </h1>
                    <p>
                    <strong>
                        O Ignite é um programa de aceleração com foco na sua especialização, para quem já domina programação.
                    </strong>
                    </p>
                    <p>
                        Se você já domina os fundamentos da programação, o Ignite vai te ajudar a dominar tecnologias alinhadas com o que o mercado precisa e te aproximar das melhores oportunidades da sua carreira.<br/>
                    </p>
                    <p>
                        Através de uma metodologia prática, você vai se preparar para os desafios do mundo real, além de desenvolver habilidades comportamentais para se destacar no mercado.
                    </p>
                </ContainerItem>
            </Wrapper>
        </Container>
    )
}
export default SecondSection