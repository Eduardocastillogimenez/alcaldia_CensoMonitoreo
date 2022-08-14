import React, { useState, useContext, useEffect } from 'react';
import { Container, LineaVertical, SpanDatos, Popovercontent } from '../styles';

import { Row, Col, Popover, Button } from 'antd';
import { UserOutlined, MailOutlined, SolutionOutlined, RocketOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

import { requestUsuarios  } from 'api';

const Usuarios = () => {
    const [dataAP, setDataAPI] = useState([]);

    const  usuario  = JSON.parse(localStorage.getItem('usuario'));

    useEffect(() => {
        console.log(" efectooooo");
             
    }, []);

    if(usuario && !dataAP[0]){              
        requestUsuarios(setDataAPI,usuario.token);
        console.log(" wdawdwd w dwadw ");
        setDataAPI("ayudaaaa");
        console.log("maaaa",dataAP,usuario);
    } 
    
    const dataA = dataAP.filter((ele)=>{return ele.id === parseInt(0)});

    const content = (
        <Popovercontent>
          <Button type="primary" onClick={()=>alert}>Hacer Admin a este usuario</Button>
        </Popovercontent>
    );

    return(
        <Container>
            <Row justify="space-around" align="middle">
                <Col span={24}>
                    <h1>{dataA[0].name}{" "}{dataA[0].apellido}</h1>
                </Col>
                <Col span={12}>
                    <SpanDatos>
                        <h3><UserOutlined />{" "}Nombre:</h3>
                        <p>{dataA[0].name}</p>
                    </SpanDatos>
                    <SpanDatos>
                        <h3><UserOutlined />{" "}Apellido:</h3>
                        <p>{dataA[0].lastname}</p>
                    </SpanDatos>
                    <SpanDatos>
                        <h3><SolutionOutlined />{" "}Cédula:</h3>
                        <p>{dataA[0].personal_id}</p>
                    </SpanDatos>
                    <SpanDatos>
                        <h3><RocketOutlined />{" "}Mayor de edad:</h3>
                        <p>{dataA[0].under_age===0?"si":"no"}</p>
                    </SpanDatos>
                </Col>
                <Col span={12}>
                    <LineaVertical/>
                    <div style={{paddingLeft:"20px"}}>
                        <SpanDatos>
                            <h3><MailOutlined />{" "}Correo electronico:</h3>
                            <p>{dataA[0].email}</p>
                        </SpanDatos>
                        <SpanDatos>
                            <h3><EnvironmentOutlined />{" "}Dirección:</h3>
                            <p>{dataA[0].address_2}</p>
                        </SpanDatos>
                        <SpanDatos>
                            <h3><EnvironmentOutlined />{" "}Localidad:</h3>
                            <p>{dataA[0].address_1}</p>
                        </SpanDatos>
                        <SpanDatos>
                            <h3><PhoneOutlined />{" "}Teléfono:</h3>
                            <p>{dataA[0].phone_home}</p>
                            <p>{dataA[0].phone_mobile}</p>
                        </SpanDatos>
                    </div>
                </Col>
                <Col span={24} style={{textAlign:"end"}}>
                    <Popover content={content} title="Opciones especiales" placement="topRight">
                        <Button type="primary">Opciones especiales</Button>
                    </Popover>
                </Col>
            </Row>  
        </Container>
    );
}

export default Usuarios;