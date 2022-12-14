import React from 'react';
import { Container, LineaVertical, SpanDatos } from './styles';

import Menu from '../../components/menu';
import Footer from '../../components/footer';

import { Row, Col, Popover, Button } from 'antd';
import { UserOutlined, MailOutlined, SolutionOutlined, RocketOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const dataAPI = [
    {
      key: '1',
      id: 0,
      nombre: 'Brown',
      apellido: 'Brown',
      cedula: 322,
      mayor: false,
      correo: '.@New York No. 1 Lake Park',
      direccion: 'John BrownBrown',
      telefono1: '24241214',
      telefono2: '08787653',
    },
    {
      key: '2',
      id: 1,
      nombre: 'Jim Green',
      cedula: 424242,
      mayor: true,
      correo: '@London No. 1 Lake Park',
      direccion: 'John BrownBrown',
      telefono1: '24241214',
      telefono2: '08787653',
    },
    {
      key: '3',
      id: 2,
      nombre: 'Joe Black',
      cedula: 222,
      mayor: false,
      correo: '@Sidney No. 1 Lake Park',
      direccion: 'John BrownBrown',
      telefono1: '24241214',
      telefono2: '08787653',
    },
    {
      key: '4',
      id: 3,
      nombre: 'Jim Red',
      cedula: 324234,
      mayor: false,
      correo: '@London No. 2 Lake Park',
      direccion: 'John BrownBrown',
      telefono1: '24241214',
      telefono2: '08787653',
    },
];

const Perfil = () => {
return(
    <>
    <Menu perfil/>
        <Container>
            <Row justify="space-around" align="middle">
                <Col span={24}>
                    <h1>{dataAPI[0].nombre}{" "}{dataAPI[0].apellido}</h1>
                </Col>
                <Col span={12}>
                    <SpanDatos>
                        <h3><UserOutlined />{" "}Nombre:</h3>
                        <p>{dataAPI[0].nombre}</p>
                    </SpanDatos>
                    <SpanDatos>
                        <h3><UserOutlined />{" "}Apellido:</h3>
                        <p>{dataAPI[0].apellido}</p>
                    </SpanDatos>
                    <SpanDatos>
                        <h3><SolutionOutlined />{" "}C??dula:</h3>
                        <p>{dataAPI[0].cedula}</p>
                    </SpanDatos>
                    <SpanDatos>
                        <h3><RocketOutlined />{" "}Mayor de edad:</h3>
                        <p>{dataAPI[0].mayor?"si":"no"}</p>
                    </SpanDatos>
                </Col>
                <Col span={12}>
                    <LineaVertical/>
                    <div style={{paddingLeft:"20px"}}>
                        <SpanDatos>
                            <h3><MailOutlined />{" "}Correo electronico:</h3>
                            <p>{dataAPI[0].correo}</p>
                        </SpanDatos>
                        <SpanDatos>
                            <h3><EnvironmentOutlined />{" "}Direcci??n:</h3>
                            <p>{dataAPI[0].direccion}</p>
                        </SpanDatos>
                        <SpanDatos>
                            <h3><PhoneOutlined />{" "}Tel??fono:</h3>
                            <p>{dataAPI[0].telefono1}</p>
                            <p>{dataAPI[0].telefono2}</p>
                        </SpanDatos>
                    </div>
                </Col>
            </Row>  
        </Container>
    <Footer/>
    </>
);
}

export default Perfil;