import styled from 'styled-components';

export const Container = styled.div`
    h1{
        text-align: center;
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

export const SpanDatos = styled.span`
    padding: 10px;
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

export const LineaVertical = styled.div`
    position: absolute;
    height: 80%;
    width: 4px;
    top: 10%;
    background-color: black;
`;

export const Popovercontent = styled.div`
    display:inline-block;
    Button{
        margin: 10px;
        display:inline-block;
        background: #CE8964;
        color: white;
        border-radius: 12px; 
        border: none;
        &:hover{
            background-color: #1C0764;
        }
    }
    .bagraamar{
        background-color: #EAF27F;
    }
`;