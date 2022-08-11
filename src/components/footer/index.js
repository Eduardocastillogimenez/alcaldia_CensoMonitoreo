import React from 'react';
import {Container, ContainerContactos, ContainerMenuFooter} from './styles';
import { Row, Col, Image } from 'antd';
import { BellOutlined, ExceptionOutlined, UserOutlined, TwitterOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';
import logo from 'img/Logo.png';


const Footer = () => {
return (
    <Container>
        <Row justify="space-around" align="middle">
            <Col span={12}>
                <ContainerMenuFooter>
                    <h3>Alcaldia San Cristobal</h3>
                    <div className='linea'></div>
                    <p><a href="/home" ><BellOutlined />{" "}Noticias </a></p>
                    <p><a href="/notificaciones" ><ExceptionOutlined />{" "}Notificaciones</a></p>
                    <p><a href="/perfil" ><UserOutlined />{" "}Perfil</a></p>
                </ContainerMenuFooter>
            </Col>
            <Col span={12}>
                <ContainerContactos>
                    <Image width={100} src={logo}/><span>Siguenos en:</span>
                    <p><a href="/home" ><TwitterOutlined />{" "}Twitter </a></p>
                    <p><a href="/notificaciones" ><YoutubeOutlined />{" "}Youtube</a></p>
                    <p><a href="/perfil"><FacebookOutlined />{" "}Facebook</a></p>
                </ContainerContactos>
            </Col>
        </Row>
    </Container>
)
};

export default Footer;
