import Link from "next/link";
import { Container, CreateAccountButton, List, ListItem, LoginButton, Logo, Wrapper } from "./style";
import {IoPersonOutline} from 'react-icons/io5';

const Header = () =>{
    return(
        <Container>
            <Wrapper>
                <div>
                    <Link href={`/`}>
                        <Logo>
                            <img alt='home' src='/rocketseat.svg'/>
                        </Logo>
                    </Link>
                </div>
                <div>
                    <List>
                        <ListItem>
                            Home
                        </ListItem>
                        <ListItem>
                            Plus
                        </ListItem>
                        <ListItem>
                            Programas
                        </ListItem>
                        <ListItem>
                            Blog
                        </ListItem>
                        <ListItem>
                            A Rocketseat
                        </ListItem>
                    </List>
                </div>
                <div>
                    <List>
                        <LoginButton style={{fontSize:'12px'}}>
                            <IoPersonOutline style={{marginRight:'10px'}} color="var(--primary-hover)"/>
                            ENTRAR
                        </LoginButton>
                        <CreateAccountButton style={{fontSize:'12px'}}>
                            CRIAR CONTA
                        </CreateAccountButton>
                    </List>
                </div>
            </Wrapper>
        </Container>
    )
}
export default Header;