import React, { useState, useEffect } from 'react';
import { Container } from './styles';

import { Button, Row, Col, Form, Input, Divider, Checkbox, Select, message, Space } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';


import { requestnotificacioness  } from 'api';

const CrearNotificacion = () => {
    const { TextArea } = Input;

    const  usuario  = JSON.parse(localStorage.getItem('usuario'));

    const onFinish = (values) => {
        console.log('Success:', values); 
        if(usuario){
            requestnotificacioness(usuario.token,values);
            message.success('This is a success');
        }
        
    };

return(
    <Container>
        <Form 
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label={<span>{" "}Escriba el Correo Electronico de la persona </span>}
                name="email"
                rules={[{ required: true, message: 'Es necesario el Correo Electronico!' }]}
            >
                <Input placeholder="Correo Electronico"/>
            </Form.Item>
            <Form.Item
                label={<span><MailOutlined />{" "}Escriba el titulo de la notificacion</span>}
                name="title"
                rules={[{ required: true, message: 'Es necesario el Correo titulo!' }]}
            >
                <Input placeholder="Correo Electronico"/>
            </Form.Item>

            <Form.Item
                label={<span><LockOutlined />{" "}Escriba el Mensaje</span>}
                name="body"
                rules={[{ required: true, message: 'Es necesaria el Mensaje!' }]}
            >
                <TextArea rows={4} />
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Ingresa Ahora
                </Button>
            </Form.Item>
        </Form>
    </Container>
);
}

export default CrearNotificacion;