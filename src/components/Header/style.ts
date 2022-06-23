import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88px;
    color:var(--text);
    box-shadow: rgb(41, 41, 46) 0px -1px 0px 0px inset;
`;
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    width: 100%;
`;
export const Logo = styled.div`
    height: 88px;
    width: 150px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 88px;
    border-bottom: 3px solid transparent;
    margin: 0 20px;
    transition: all 0.2s ease-in-out;
    :hover{
        border-bottom: 3px solid var(--primary-hover);
        color: white;
    }
`;
export const CreateAccountButton = styled.button`
border: 1px solid var(--primary-hover);
font-size: 12px;
background: transparent;
border-radius: 3px;
color:white;
height: 38px;
padding: 12px 24px;
cursor: pointer;
transition: all 0.2s ease-in-out;
:hover{
    background: var(--primary-hover);
}
`;
export const LoginButton = styled.button`
font-size: 12px;
border: 0px;
background: transparent;
color:white;
height: 38px;
padding: 12px 24px;
cursor: pointer;
`;