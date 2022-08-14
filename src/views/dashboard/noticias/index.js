import React, { useState,useContext, useEffect } from 'react';
import { InfoTablaNombreLink, ContainerNoticias } from './styles';
import Noticia from './noticia';

import { Table, Button, Modal, Form, Input } from 'antd';
import { UserOutlined, EditOutlined, SolutionOutlined} from '@ant-design/icons';
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

import { requestNoticias,requestCrearNoticias  } from 'api';

const dataAPI = [
    {
        id: 0,
        titulo: 'perjudica a las remesas que se envían a Latinoamérica',
        body: 'ca debido a que sus ahs menos», recalca el experto.',
    },
    {
        id: 1,
        titulo: 'La inflan a Latinoamérica',
        body: 'Loos», recalca el experto.',
    },
    {
        id: 2,
        titulo: 'La inflación en EEUU perjudica a las remesas que se envían a Latinoamérica',
        body: 'Loperto.',
    },
    {
        id: 3,
        titulo: 'La inflación',
        body: 'Los inmigrant% de crecimiento, es decir, casi 11 puntos porcentuales menos», recalca el experto.',
    },
    {
        id: 4,
        titulo: 'EEUU se envían a Latinoamérica',
        body: 'Los inmigrantes en EEUU cada vez tienen más difícil mandar remesas arcentuales menos», recalca el experto.',
    },
];


const infoTabla = (dataAPI, path) => {

    const infoTablaNombreLink = (nombre, id, path) => {
        return <InfoTablaNombreLink href={`${path}/${id}`} ><Button>{nombre}</Button></InfoTablaNombreLink>
    };

    const data = dataAPI.map((element, i) => (
        {
            key: i,
            id: element.id,
            title: infoTablaNombreLink(element.title, element.id, path),
            abstract: element.abstract,
        }
    ));
    
    const filters = {
        titulo: dataAPI.map((element) => (
                {
                    text: element.title,
                    value: element.title,
                }
        ))
    };


    const columns = [
        {
            title: <span><UserOutlined/>{" "}Titulo</span>,
            dataIndex: 'title',
        },
        {
            title: <span><SolutionOutlined />{" "}Body</span>,
            dataIndex: 'abstract',
        },
    ];

    return {data,columns};
};

const Noticias = () => {

    const { TextArea } = Input;
    const { path } = useRouteMatch();
    const [notificacion, setNotificacion] = useState([]);

    const  usuario  = JSON.parse(localStorage.getItem('usuario'));

    useEffect(() => {
      if (usuario) {       
        requestNoticias(setNotificacion,usuario.token);
      };
    }, [usuario]);

    const infoTablaVar = infoTabla(notificacion[0]?notificacion:[], path);

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (value) => {
        if(value){
            alert(value);
            requestCrearNoticias(usuario.token,value);
        };
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return(
        <ContainerNoticias>
            <Switch>
                <Route exact path={path}>
                
                    <Button type="primary" onClick={showModal}>
                        Crear Noticia
                    </Button>
                    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <Form 
                            name="basic"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={handleOk}
                            autoComplete="off"
                        >
                            <Form.Item
                                label={<span><EditOutlined />{" "}Titulo</span>}
                                name="title"
                                rules={[{ required: true, message: 'Es necesario el Titulo!' }]}
                            >
                                <Input placeholder="Titulo"/>
                            </Form.Item>

                            <Form.Item
                                label={<span><EditOutlined />{" "}Body</span>}
                                name="body"
                                rules={[{ required: true, message: 'Es necesaria el Body!' }]}
                            >
                                <TextArea rows={4} />
                            </Form.Item>

                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    enviar
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                    <Table columns={infoTablaVar.columns} dataSource={infoTablaVar.data} onChange={onChange} />
                </Route>
                <Route path={`${path}/:id`}>
                    <Noticia dataAPI={dataAPI.filter((ele)=>{return `${path}/${ele.id}`=== window.location.pathname})[0]}/>
                </Route>
            </Switch>
        </ContainerNoticias>
    );
}

export default Noticias;