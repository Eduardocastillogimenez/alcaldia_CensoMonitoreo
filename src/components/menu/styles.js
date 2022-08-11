import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #CE8964;
    padding: 10px;
    text-align: center;
`;

export const Nav = styled.nav`
    a{
        text-decoration: none;
        color: black;
        margin-right: 20px;
        margin-left: 20px;

        &:hover{
            color: #EAF27F;
        }
    }
    #cerrarSesionMenu{
        color: white;

        &:hover{
            color: #EAF27F;
        }
    }
`;
