import React, { useState } from 'react';
import { Container, Title, Containerform  } from './styles'
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { Button, Row, Col, Form, Input, Checkbox, Select } from 'antd';

const DatosSaludActual = () => {
    const { Option } = Select;
    
    const onFinish = (values) => {
        console.log('Success:', values);
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
                                <Form.Item name="virus" 
                                    label="Tipo de virus (opcional)" rules={[{ required: true }]}
                                >
                                    <Select style={{backgroundColor: "#EFEFEF"}}
                                        placeholder="Select a option and change input text above"
                                        allowClear
                                    >
                                        <Option value="male">male</Option>
                                        <Option value="female">female</Option>
                                        <Option value="other">other</Option>
                                    </Select>
                                </Form.Item>

                            {/*  Indicar centro de salud */}
                                <Form.Item
                                    label={<span><MailOutlined />{" "}Nombre</span>}
                                    name="nombre"
                                    rules={[{ required: true, message: 'Es necesario el Nombre!' }]}
                                >
                                    <Input placeholder="Nombre"/>
                                </Form.Item>
                            {/*  sintomas */}
                                <Form.Item name="sintomas_group" label="¿Cúales son tús síntomas?">
                                    <Checkbox.Group>
                                        <Row>
                                            <Col span={8}>
                                                <Checkbox value="A" style={{ lineHeight: '32px' }}>
                                                    A
                                                </Checkbox>
                                            </Col>
                                            <Col span={8}>
                                                <Checkbox value="E" style={{ lineHeight: '32px' }}>
                                                    E
                                                </Checkbox>
                                            </Col>
                                            <Col span={8}>
                                                <Checkbox value="F" style={{ lineHeight: '32px' }}>
                                                    F
                                                </Checkbox>
                                            </Col>
                                        </Row>
                                    </Checkbox.Group>
                                </Form.Item>
                            {/*  sintoma adicional */}
                                <Form.Item
                                    label={<span><MailOutlined />{" "}Apellido</span>}
                                    name="apellido"
                                    rules={[{ required: true, message: 'Es necesario el Apellido!' }]}
                                >
                                    <Input placeholder="Apellido"/>
                                </Form.Item>
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

export default DatosSaludActual;