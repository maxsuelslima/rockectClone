import { Button, Container, ContainerItem, Wrapper } from "./style";

const FirstSection = () => {
    return(
        <Container>
            <Wrapper>
                <ContainerItem>
                    <div style={{width:'100%', margin:'0px 0px 24px'}}>
                        <img src="/ignite-logo.svg">
                        </img>
                    </div>
                    <h1>
                    Acelere sua carreira <br/>
                    em programação.
                    </h1>
                    <p>
                    Evolua através de um método eficiente, uma grade curricular alinhada com o mercado e as atitudes que vão te destacar como profissional.  
                    </p>
                    <Button>
                        ACELERAR MINHA CARREIRA
                    </Button>
                </ContainerItem>
                <ContainerItem style={{width:'100%', marginLeft:'20px'}}>
                    <img src='/9sKYvgtpSqStjAkIexRA.webp'></img>
                </ContainerItem>
            </Wrapper>
        </Container>
    )
}
export default FirstSection;
