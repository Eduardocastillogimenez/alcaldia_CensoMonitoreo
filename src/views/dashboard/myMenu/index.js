import React, { useState } from 'react';
import { Container } from './styles';

import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
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


const MyMenu = ({setCargar}) => {
    const [collapsed, setCollapsed] = useState(false);

    const items = [
        getItem(<a onClick={()=>setCargar(0)}>Dashboard </a>, '0', <PieChartOutlined />),
        getItem(<a onClick={()=>setCargar(1)}>Usuarios </a>, '1', <AppstoreOutlined />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
        ]),
        getItem(<a onClick={()=>setCargar(2)}>Noticias </a>, '2', <ContainerOutlined />),
        getItem(<a onClick={()=>setCargar(3)}>CrearNotificacion </a>, '3', <ContainerOutlined />),      
    ];

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

return(
    <>
        
        <Affix offsetTop={0} style={{ position: "absolute", marginLeft: "20px" }}>
        <div style={{ width: 200 }}>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
        </Affix>
        <Container>
            <h2>Dashboard</h2>
        </Container>
    </>
);
}

export default MyMenu;