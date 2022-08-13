import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;   
    h1{
    text-align: center; 
    }
    Button{
        background: #1C0764;
        color: white;
        border: none;
        border-radius: 12px;
        &:hover{
            background-color: #CE8964;
        }
    }
`;

export const ContainerNoticias = styled.div`
    Button{
        background: #1C0764;
        color: white;
        border: none;
        border-radius: 12px;
        &:hover{
            background-color: #CE8964;
        }
    }
`;

export const InfoTablaNombreLink = styled.a`
    Button{
        background: #CE8964;
        color: white;
        border-radius: 12px; 
        border: none;
        &:hover{
            background-color: #1C0764;
        }
    }
`;