import React from 'react';
import { Container } from './styles';

import { Button, Row, Col, Form, Input, Divider, Checkbox, Select } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const CrearNotificacion = () => {
    const { TextArea } = Input;

    const onFinish = (values) => {
        console.log('Success:', values);
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
                label={<span><MailOutlined />{" "}Correo Electronico</span>}
                name="correo_electronico"
                rules={[{ required: true, message: 'Es necesario el Correo Electronico!' }]}
            >
                <Input placeholder="Correo Electronico"/>
            </Form.Item>

            <Form.Item
                label={<span><LockOutlined />{" "}Mensaje</span>}
                name="mensaje"
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