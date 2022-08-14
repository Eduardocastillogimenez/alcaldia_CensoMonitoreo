import React, { useState } from 'react';
import { ContainerInfo, Container } from './styles';

import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,LogoutOutlined,
} from '@ant-design/icons';
import { Button, Menu, Affix } from 'antd';
 

    function getItem(label, key, icon, children, type) {
        return {
        key,
        icon,
        children,
        label,
        type,
        };
    }


const MyMenu = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const items = [
        getItem(<a href={`${props.path}/`}>Dashboard </a>, '0', <PieChartOutlined />),
        getItem(<a href={`${props.path}/usuarios`}>Usuarios </a>, '1', <AppstoreOutlined />),
        getItem(<a href={`${props.path}/noticias`}>Noticias </a>, '2', <ContainerOutlined />),
        getItem(<a href={`${props.path}/crearNotificacion`}>CrearNotificacion </a>, '3', <ContainerOutlined />),      
        getItem(<a href={`/`} onClick={()=>localStorage.removeItem('usuario')}>Cerrar sesion </a>, '4', <LogoutOutlined  />),
    ];

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

return(
    <Container>
        
        <Affix offsetTop={0} style={{ position: "absolute", marginLeft: "20px", marginTop: "20px", zIndex: "1000" }}>
        <div style={{ width: 200 }}>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={[props.crearNotificacion?"3":props.noticias?"2":props.usuarios?"1":"0"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
        </Affix>
        <ContainerInfo>
            <h2> {props.crearNotificacion?"CrearNotificacion":props.noticias?"Noticias":props.usuarios?"Usuarios":"Dashboard"}</h2>
        </ContainerInfo>
    </Container>
);
}

export default MyMenu;