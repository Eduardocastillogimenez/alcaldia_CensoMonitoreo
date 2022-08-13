import styled from 'styled-components';

export const ContainerInfo = styled.div`
    background-color: #CE8964;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1,h2,h3,h4{
        margin-left: 10%;
        margin-bottom: 0;
    }
`;

export const Container = styled.div`
    .ant-btn-primary{
        background-color: #1C0764;
    }

    .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark, .ant-menu.ant-menu-dark .ant-menu-sub{
        background-color: #1C0764;
    }

    .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected{
        background-color: #CE8964;
    }
`;