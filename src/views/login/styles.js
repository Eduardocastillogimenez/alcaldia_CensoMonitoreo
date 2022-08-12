import styled from 'styled-components';

export const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    padding: 70px;
    text-align: center;
    background: #EFEFEF;
    background: linear-gradient(29deg, #EFEFEF 69%, rgba(255,255,255,1) 100%);

    input{
        border-radius: 12px;
        background: #EFEFEF;
        &:hover{
            background: white;
        }      
    }
    .ant-input-affix-wrapper{
        border-radius: 12px;
        background: #EFEFEF;
        &:hover{
            background: white;
        }   
        input{
            background: none;
        }   
    }
    .ant-select:not(.ant-select-customize-input) .ant-select-selector{
        background-color: #EFEFEF;
        text-align: start;
        &:hover{
            background: white;
        }   
        input{
            background: none;
        }   
    }
`;

export const Title = styled.div`
    margin-top: 10px;
    font-weight: 900;
    font-size: 1.8rem;
    color: #1DA1F2;
    letter-spacing: 1px;
    width: 100%;
`;

export const Containerform = styled.div`
    width: 100%;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 20px;
    border-radius: 12px;
    background: white;

    div{
        width: 100%;
    }
    Button{
        background-color: #EAF27F;
        color: black;
        border-radius: 12px;
        border: none;
        &:hover{
            background-color: #1C0764;
            color: white;
        }
    }
    
    
`;


export const ContainerChange = styled.div`
    width: 100%;
    min-height: 60vh;
    background: rgb(28,7,100);
    background: linear-gradient(29deg, rgba(28,7,100,1) 69%, rgba(255,255,255,1) 100%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 12px;

    h3{
        color: white;
    }
    Button{
        background: none;
        color: white;
        border-radius: 12px;
        &:hover{
            background-color: #CE8964;
            border: none;
        }
    }
    
`;

