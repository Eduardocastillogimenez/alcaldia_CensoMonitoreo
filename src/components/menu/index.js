import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, BellOutlined, ExceptionOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu, Row, Col } from 'antd';
import {Container,Nav} from './styles'

const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label:  <a href="/app" >
              Navigation Four - Link
            </a>,
    key: 'app',
    icon: <AppstoreOutlined />
  },
];

const App = (props) => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    setCurrent(e.key);
  };
//<Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
  return (
    <Container>
      <Row justify="space-around" align="middle">
        <Col span={6}>
          <h3>Alcaldia San Cristobal</h3>
        </Col>
        <Col span={15}>
          <Nav>
            <a href="/home" style={props?props.home?{color:"#0017c7"}:{}:{}}><BellOutlined />{" "}Noticias </a>
            <a href="/notificaciones" style={props?props.notificaciones?{color:"#0017c7"}:{}:{}}><ExceptionOutlined />{" "}Notificaciones</a>
            <a href="/perfil" style={props?props.perfil?{color:"#0017c7"}:{}:{}}><UserOutlined />{" "}Perfil</a>
            <a id='cerrarSesionMenu' ><LogoutOutlined />{" "}Cerrar sesion</a>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default App;