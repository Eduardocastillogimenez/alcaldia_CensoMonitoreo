import React, { useState, useContext, useEffect } from 'react';

import { Button, Row, Col, Form, Input, Divider, Checkbox, Select } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Container, Title, ContainerChange, Containerform } from './styles'
import DatosSaludActual from './datosSaludActual';
import { requestRegistrarnUsurios, requestGetMunicipios } from 'api';
import { Auth } from "context";
import { withRouter } from "react-router";

const Registrarse = ({setRegistrarse}) => {
    const [municipios, setMunicipios] = useState([{
        id:0,
        name:""
    },]);
    const { Option } = Select;

    useEffect(() => {
        requestGetMunicipios(setMunicipios);
    }, []);

    const onFinish = (values) => {
        console.log('Success:', values);
        values.admin = 0;
        values.disease = null;
        values.personal_id = parseInt(values.personal_id);
        requestRegistrarnUsurios(values);
        setRegistrarse(false);
    };


    const styleRow = {background: "rgb(28,7,100)",
            background: "linear-gradient(25deg, rgba(28,7,100,1) 57%, rgba(255,255,255,1) 100%)", borderRadius: "12px"};

    return(
        <Row justify="space-around" align="middle" style={styleRow}>
            <Col span={12}>
                <ContainerChange style={{background: "none"}}>
                    <div>
                        <Title><h3>¡Bienvenido de vuelta!</h3></Title>
                        <p>¿Ya estas registrado?    
                            Entonces por favor inicia sesión con tú cuenta</p>  
                        <Button type="primary" onClick={()=>setRegistrarse(false)}>
                            Iniciar sesion
                        </Button>
                    </div>
                </ContainerChange>
            </Col>  
            <Col span={12} style={{background: "white"}}>
                <Containerform style={{borderRadius: "0px 12px 12px 0px"}} >
                    <div>
                        <Title><h3>Crear una cuenta</h3></Title>
                        <Form 
                            name="basic"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            {/*  Grupo 1 (nombre,apellido,correo,telefonios) */}
                                <Form.Item
                                    label={<span><MailOutlined />{" "}Nombre</span>}
                                    name="name"
                                    rules={[{ required: true, message: 'Es necesario el Nombre!' }]}
                                >
                                    <Input placeholder="Nombre"/>
                                </Form.Item>
                                <Form.Item
                                    label={<span><MailOutlined />{" "}Apellido</span>}
                                    name="lastname"
                                    rules={[{ required: true, message: 'Es necesario el Apellido!' }]}
                                >
                                    <Input placeholder="Apellido"/>
                                </Form.Item>
                                <Form.Item
                                    label={<span><MailOutlined />{" "}Correo Electronico</span>}
                                    name="email"
                                    rules={[{ required: true, message: 'Es necesario el Correo Electronico!' }]}
                                >
                                    <Input placeholder="Correo Electronico"/>
                                </Form.Item>
                                <Form.Item
                                    label={<span><MailOutlined />{" "}Telefono Celular</span>}
                                    name="phone_home"
                                    rules={[{ required: true, message: 'Es necesario el Telefono Celular!' }]}
                                >
                                    <Input placeholder="Telefono Celular"/>
                                </Form.Item>
                                <Form.Item
                                    label={<span><MailOutlined />{" "}Telefono Fijo</span>}
                                    name="phone_mobile"
                                >
                                    <Input placeholder="Telefono Fijo"/>
                                </Form.Item>
                            
                                <Divider />
                            {/*  Grupo 2 (mayor de edad y cedula) */}

                                <Form.Item name="under_age" valuePropName="checked" >
                                    <Checkbox>¿Eres menor de edad?</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    label={<span><MailOutlined />{" "}Cedula de identidad</span>}
                                    name="personal_id"
                                    rules={[{ required: true, message: 'Es necesario el Cedula!' }]}
                                >
                                    <Input placeholder="Cedula"/>
                                </Form.Item>
                          
                                <Divider />
                            {/*  Grupo 3 (Municipio,localidad,direccion) */}                               
                                <Form.Item name="township_id" 
                                    label={<span><MailOutlined />{" "}Municipio</span>} 
                                    rules={[{ required: true, message: 'Es necesario el Municipio!'  }]}
                                >
                                    <Select
                                        placeholder="Select a option the Municipio"
                                        allowClear
                                    >
                                        {municipios.map((e) => (
                                            <Option value={e.id} key={e.id}>{e.name}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label={<span><MailOutlined />{" "}Localidad</span>}
                                    name="address_1"
                                    rules={[{ required: true, message: 'Es necesario el Localidad!' }]}
                                >
                                    <Input placeholder="Localidad"/>
                                </Form.Item>
                                <Form.Item
                                    label={<span><MailOutlined />{" "}Direccion</span>}
                                    name="address_2"
                                    rules={[{ required: true, message: 'Es necesario el Direccion!' }]}
                                >
                                    <Input placeholder="Direccion"/>
                                </Form.Item>

                                <Divider />
                            {/*  Grupo 4 (contrasenas) */}

                                <Form.Item
                                    label={<span><LockOutlined />{" "}Contraseñas</span>}
                                    name="password"
                                    rules={[{ required: true, message: 'Es necesaria la Contraseñas!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item
                                    label={<span><LockOutlined />{" "}Repita su Contraseñas</span>}
                                    name="password_confirmation"
                                    rules={[{ required: true, message: 'Es necesaria la Contraseñas!' }]}
                                >
                                    <Input.Password />
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
    );
}

const Logear = (props) => {
    const onFinish = (values) => {
        //const data = requestLoginUsurios(values);
        console.log("hola");
        props.setUsuario(values);
        
    };

    return(
        <Row justify="space-around" align="middle">
            <Col span={12}>
                <Containerform>
                    <div>
                        <Title><h3>Iniciar sesion</h3></Title>
                        <Form 
                            name="basic"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                label={<span><MailOutlined />{" "}Correo Electronico</span>}
                                name="email"
                                rules={[{ required: true, message: 'Es necesario el Correo Electronico!' }]}
                            >
                                <Input placeholder="Correo Electronico"/>
                            </Form.Item>

                            <Form.Item
                                label={<span><LockOutlined />{" "}Contraseñas</span>}
                                name="password"
                                rules={[{ required: true, message: 'Es necesaria la Contraseñas!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    Ingresa Ahora
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Containerform>
            </Col>
            <Col span={12}>
                <ContainerChange>
                    <div>
                        <Title><h3>Iniciar sesion</h3></Title>
                        <p>¿No tienes una cuenta aún?
                            Ingresa tus datos personales para empezar ahora</p>
                        <Button type="primary" onClick={()=>{props.setRegistrarse(true)}}>
                            Registrate
                        </Button>
                    </div>
                </ContainerChange>
            </Col>
        </Row>
    );
}

const Login = (props) => {
    const [registrarse, setRegistrarse] = useState(false);
    const [regisDatosSalud, setRegisDatosSalud] = useState(false);

    const  usuario  = JSON.parse(localStorage.getItem('usuario'));

    useEffect(() => {
        console.log(usuario)
        if (usuario) {
            if (usuario.ok) {
                setRegisDatosSalud(true);
            }else{
                localStorage.clear();
                props.history.push('/');
                window.location.reload();
            }
        }
    }, []);
    
    // si regisDatosSalud muestra el form de datos de la salud de la persona
    // si registrarse muestra en form de registro y si no el de inicio
return(
    <Container>
        {regisDatosSalud?<DatosSaludActual/>
        :registrarse?<Registrarse setRegistrarse={setRegistrarse}/>
            :<Logear setRegistrarse={setRegistrarse} setUsuario={props.setUsuario}/>}
    </Container>
);
}

export default withRouter(Login);