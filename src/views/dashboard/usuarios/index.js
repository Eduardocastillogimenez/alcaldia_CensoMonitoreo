import React from 'react';
import { InfoTablaNombreLink } from './styles';
import Usuario from './usuario';

import { Table, Button } from 'antd';
import { UserOutlined, MailOutlined, SolutionOutlined} from '@ant-design/icons';
import { Switch, Route, useRouteMatch } from "react-router-dom";


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


const infoTabla = (dataAPI, path) => {

    const infoTablaNombreLink = (nombre, id, path) => {
        return <InfoTablaNombreLink href={`${path}/${id}`} ><Button>{nombre}</Button></InfoTablaNombreLink>
    };

    const data = dataAPI.map((element, i) => (
        {
            key: i,
            nombre: infoTablaNombreLink(element.nombre, element.id, path),
            cedula: element.cedula,
            correo: element.correo,
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
        dataIndex: 'nombre',
        filters: filters.nombre,
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.nombre.indexOf(value) === 0,
        filterSearch: true,
        },
        {
            title: <span><SolutionOutlined />{" "}Cedula</span>,
            dataIndex: 'cedula',
            sorter: (a, b) => a.cedula - b.cedula,
        },
        {
        title: <span><MailOutlined/>{" "}correo</span>,
        dataIndex: 'correo',
        filters: filters.correo,
        onFilter: (value, record) => record.correo.indexOf(value) === 0,
        filterSearch: true,
        },
    ];

    return {data,columns};
}



const Usuarios = () => {
    const { path } = useRouteMatch();

    const infoTablaVar = infoTabla(dataAPI[0]?dataAPI:[], path);

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return(
        <>
            <Switch>
                <Route exact path={path}>
                    <Table columns={infoTablaVar.columns} dataSource={infoTablaVar.data} onChange={onChange} />
                </Route>
                <Route path={`${path}/:id`}>
                    <Usuario />
                </Route>
            </Switch>
        </>
    );
}

export default Usuarios;