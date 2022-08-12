import styled from 'styled-components';

export const ContainerInfo = styled.div`
    padding: 15px;   
    Button{
        background: #1C0764;
        color: white;
        border: none;
        border-radius: 12px;
        &:hover{
            background-color: #CE8964;
        }
    }
    .ant-card-head{
        background-color: #1C0764;
        color: white;
        border-radius: 20px 20px 0px 0px;
        text-align: center;
    }
    .ant-card-bordered{
        border-radius: 20px 20px 20px 20px;
    }
`;