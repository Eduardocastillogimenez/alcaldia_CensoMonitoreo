import React, { useState, useEffect } from 'react';
import { InfoTablaNombreLink, Container, LineaVertical, SpanDatos, Popovercontent } from './styles';
import Usuario from './usuario';

import { Table, Button, Row, Col, Popover, } from 'antd';
import { UserOutlined, MailOutlined, SolutionOutlined, RocketOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

import { requestUsuarios  } from 'api';
import { Auth } from "context";

const dataAPI = [
    {
      key: '1',
      id: 0,
      nombre: 'John Brown',
      cedula: 322,
      correo: '.@New York No. 1 Lake Park',
    },
    {
      key: '2',
      id: 1,
      nombre: 'Jim Green',
      cedula: 424242,
      correo: '@London No. 1 Lake Park',
    },
    {
      key: '3',
      id: 2,
      nombre: 'Joe Black',
      cedula: 222,
      correo: '@Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      id: 3,
      nombre: 'Jim Red',
      cedula: 324234,
      correo: '@London No. 2 Lake Park',
    },
];


const infoTabla = (dataAPI, path,setData) => {

    const infoTablaNombreLink = (nombre, id, path) => {
        return <InfoTablaNombreLink onClick={()=>setData(id)} ><Button>{nombre}</Button></InfoTablaNombreLink>
    };

    const data = dataAPI.map((element, i) => (
        {
            key: i,
            name: infoTablaNombreLink(element.name, element.id, path),
            personal_id: element.personal_id,
            email: element.email,
            address_1: element.address_1,
            address_2: element.address_2,
            admin: element.admin,
            created_at: element.created_at,
            disease: element.disease,
            hospital: element.hospital,
            id: element.id,
            lastname: element.lastname,
            phone_home: element.phone_home,
            phone_mobile: element.phone_mobile,
            township_id: element.township_id,
            under_age: element.under_age,
            updated_at: element.updated_at,
        }
    ));
    
    const filters = {
        nombre: dataAPI.map((element) => (
                {
                    text: element.nombre,
                    value: element.nombre,
                }
        )),
        correo: dataAPI.map((element) => (
            {
                text: element.correo,
                value: element.correo,
            }
        )),
    };


    const columns = [
        {
        title: <span><UserOutlined/>{" "}Nombre</span>,
        dataIndex: 'name',
        filters: filters.name,
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        filterSearch: true,
        },
        {
            title: <span><SolutionOutlined />{" "}Cedula</span>,
            dataIndex: 'personal_id',
            sorter: (a, b) => a.personal_id - b.personal_id,
        },
        {
        title: <span><MailOutlined/>{" "}correo</span>,
        dataIndex: 'email',
        filters: filters.email,
        onFilter: (value, record) => record.email.indexOf(value) === 0,
        filterSearch: true,
        },
    ];

    return {data,columns};
}



const Usuarios = () => {
    const { path } = useRouteMatch();
    const [dataAP, setDataAPI] = useState([]);
    const [data, setData] = useState(false);

    const  usuario  = JSON.parse(localStorage.getItem('usuario'));

    useEffect(() => {
        if(usuario){
            requestUsuarios(setDataAPI,usuario.token);
        }      
    }, []);

    

    const infoTablaVar = infoTabla(dataAP[0]?dataAP:[], path, setData);

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    let dataA = infoTablaVar.data.filter((ele)=>{return ele.id === parseInt(data)});

    useEffect(() => {
        dataA = infoTablaVar.data.filter((ele)=>{return ele.id === parseInt(data)});
    }, [data]);

    const content = (
        <Popovercontent>
          <Button type="primary" onClick={()=>alert}>Hacer Admin a este usuario</Button>
          <Button type="primary" onClick={()=>alert} className='bagraamar'>Crear Notificacion</Button>
        </Popovercontent>
    );

    return(
        <>
            {!data?
                    <Table columns={infoTablaVar.columns} dataSource={infoTablaVar.data} onChange={onChange} />
                :
                    <Container>
                        <Row justify="space-around" align="middle">
                            <Col span={24}>
                                <h1>{dataA[0]?dataA[0].name:""}{" "}{dataA[0]?dataA[0].apellido:""}</h1>
                            </Col>
                            <Col span={12}>
                                <SpanDatos>
                                    <h3><UserOutlined />{" "}Nombre:</h3>
                                    <p>{dataA[0]?dataA[0].name:""}</p>
                                </SpanDatos>
                                <SpanDatos>
                                    <h3><UserOutlined />{" "}Apellido:</h3>
                                    <p>{dataA[0]?dataA[0].lastname:""}</p>
                                </SpanDatos>
                                <SpanDatos>
                                    <h3><SolutionOutlined />{" "}Cédula:</h3>
                                    <p>{dataA[0]?dataA[0].personal_id:""}</p>
                                </SpanDatos>
                                <SpanDatos>
                                    <h3><RocketOutlined />{" "}Mayor de edad:</h3>
                                    <p>{dataA[0]?dataA[0].under_age===0?"si":"no":""}</p>
                                </SpanDatos>
                            </Col>
                            <Col span={12}>
                                <LineaVertical/>
                                <div style={{paddingLeft:"20px"}}>
                                    <SpanDatos>
                                        <h3><MailOutlined />{" "}Correo electronico:</h3>
                                        <p>{dataA[0]?dataA[0].email:""}</p>
                                    </SpanDatos>
                                    <SpanDatos>
                                        <h3><EnvironmentOutlined />{" "}Dirección:</h3>
                                        <p>{dataA[0]?dataA[0].address_2:""}</p>
                                    </SpanDatos>
                                    <SpanDatos>
                                        <h3><EnvironmentOutlined />{" "}Localidad:</h3>
                                        <p>{dataA[0]?dataA[0].address_1:""}</p>
                                    </SpanDatos>
                                    <SpanDatos>
                                        <h3><PhoneOutlined />{" "}Teléfono:</h3>
                                        <p>{dataA[0]?dataA[0].phone_home:""}</p>
                                        <p>{dataA[0]?dataA[0].phone_mobile:""}</p>
                                    </SpanDatos>
                                </div>
                            </Col>
                            <Col span={24} style={{textAlign:"end"}}>
                                <Popover content={content} title="Opciones especiales" placement="topRight">
                                    <Button type="primary">Opciones especiales</Button>
                                </Popover>
                            </Col>
                        </Row>  
                    </Container>}
        </>
    );
}

export default Usuarios;