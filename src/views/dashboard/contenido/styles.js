import styled from 'styled-components';

export const Container = styled.div`
 
`;

export const SpanDatos = styled.span`
    padding: 10px;
    h1{
        text-align: center;
        color: aqua;
    }
    h2,h3,h4,h4{
        margin-left: 10px;
    }
    p{
        margin-left: 50px;
    }
    Button{
        display:inline-block;
        background: #CE8964;
        color: white;
        border-radius: 12px; 
        border: none;
        &:hover{
            background-color: #1C0764;
        }
    }
`;
