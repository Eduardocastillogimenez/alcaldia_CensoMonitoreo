import React, { useState, useContext, useEffect } from 'react';
import { Container, Title, Containerform  } from './styles'
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { Button, Row, Col, Form, Input, Checkbox, Select } from 'antd';
import { Auth } from "context";

import { withRouter } from "react-router";
import { requestDatosSaludActual, requestSintomasAdicinal, requestGetSintomas } from 'api';

const DatosSaludActual = ({history}) => {
    const [sintomas, setSintomas] = useState([]);
    const [sintomaAdicional, setSintomaAdicional] = useState("");
    const { Option } = Select;
    const  usuario  = JSON.parse(localStorage.getItem('usuario'));

    useEffect(() => {
        if(!usuario){
            history.push('/');
        }else{
            if (usuario.data) {
                if (usuario.data.admin) {
                    history.push('/dashboard');
                }else{
                    if (usuario.data.symptoms[0]) {
                        history.push('/home');
                    }
                }
            }
        }     
    }, []);

    useEffect(() => {
        if(usuario){
            requestGetSintomas(setSintomas,usuario.token);
        }
    }, []);
    
    const onFinish = (values) => {
        console.log('Success:', values);
        requestDatosSaludActual(values, usuario.token, usuario.data.id);
        history.push('/home');
    };

    const guardarSintomaAdicional = () => {
        if(sintomaAdicional !== ""){
            requestSintomasAdicinal({name: sintomaAdicional}, usuario.token);
            requestGetSintomas(setSintomas,usuario.token);
            setSintomaAdicional("");
        }
    };
    
return(
    <Container style={{minWidth: "auto"}}>
        <Row justify="space-around" align="middle">
            <Col span={24} style={{background: "white"}}>
                <Containerform>
                    <div>
                        <Title><h3>Registra tus datos de salud actual</h3></Title>
                        <Form 
                            name="basic"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            {/*  Tipo de virus */}
                                <Form.Item name="disease" 
                                    label="Tipo de virus (opcional)" rules={[{ required: true }]}
                                >
                                    <Select style={{backgroundColor: "#EFEFEF"}}
                                        placeholder="Select a option and change input text above"
                                        allowClear
                                    >
                                        <Option value="covid19" >Covid-19</Option>
                                        <Option value="variante" >Covid con variante</Option>
                                        <Option value="viruela" >Viruela del mono</Option>
                                    </Select>
                                </Form.Item>

                            {/*  Indicar centro de salud */}
                                <Form.Item
                                    label={<span>Indicar centro de salud, si fue atentido</span>}
                                    name="hospital"
                                >
                                    <Input placeholder="centro de salud"/>
                                </Form.Item>
                            {/*  sintomas */}
                                <Form.Item name="symptoms" label="¿Cúales son tús síntomas?">
                                    <Checkbox.Group>
                                        <Row>
                                            {sintomas.map((e) => (
                                                <Col span={8} key={e.id}>
                                                    <Checkbox value={e.id} style={{ lineHeight: '32px' }}>
                                                        {e.name}
                                                    </Checkbox>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Checkbox.Group>
                                </Form.Item>
                            {/*  sintoma adicional */}
                                <Input.Group compact style={{ padding: "20px" }}>
                                    <Input style={{ width: 'calc(100% - 200px)' }} value={sintomaAdicional} onChange={(e)=>setSintomaAdicional(e.target.value)} />
                                    <Button type="primary" onClick={guardarSintomaAdicional}>Guardar</Button>
                                </Input.Group>
                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    Crear cuenta
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Containerform>
            </Col>
        </Row>
    </Container>
);
}

export default withRouter(DatosSaludActual);