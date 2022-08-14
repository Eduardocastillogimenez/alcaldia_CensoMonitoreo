import React, { useState,useContext, useEffect } from 'react';
import { AppstoreOutlined, MailOutlined, BellOutlined, ExceptionOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu, Row, Col, Badge, Modal, Card } from 'antd';
import {Container,Nav} from './styles';

import { Auth } from "context";
import { requestNotificaciones, requestNotificacionesVista } from 'api';

import { withRouter } from "react-router";

const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label:  <a href="/app" >
              Navigation Four - Link
            </a>,
    key: 'app',
    icon: <AppstoreOutlined />
  },
];

const dataAPI = [
  {
    id: 0,
    sing: 0,
    titulo: 'érica',
    body: 'ca debido a que sus ahs menos», recalca el experto.',
  },
  {
    id: 1,
    sing: 1,
    titulo: 'perjudicaue se envían a Latinoamérica',
    body: 'ca debido a que sus ahs menos», recalca el experto.',
  },
  {
    id: 2,
    sing: 1,
    titulo: 'perjudinoamérica',
    body: 'ca debido a que sus ahs menos», recalca el experto.',
  },
  {
    id: 3,
    sing: 1,
    titulo: 'perjudica a las remesas que se envían a Latinoamérica',
    body: 'ca debido a que », recalca el experto.',
  },
];

const Menuu = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [notificacion, setNotificacion] = useState([]);
  const [elementoNotificacionVer, setElementoNotificacionVer] = useState({
    id: 0,
    sing: 0,
    titulo: '',
    body: '',
  },);

  const { usuario } = useContext(Auth);
  const  usuarioo  = JSON.parse(localStorage.getItem('usuario'));

  useEffect(() => {
    if (usuario ) {       
        requestNotificaciones(setNotificacion,usuario.token,usuario.data.id)
    }
  }, [usuario]);

  useEffect(() => {
    if (usuarioo ) {       
        requestNotificaciones(setNotificacion,usuarioo.token,usuarioo.data.id)
    }
  }, [!notificacion]);


  const onClickCardModal = (element) => {
    requestNotificacionesVista(usuarioo.token,element.id);
    setIsModalVisible(false);
    setIsModalVisible2(true);
    setElementoNotificacionVer(element);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (value) => {
      if(value){

      };
      setIsModalVisible(false);
  };
  const ocultarmodal2 = () => {
    setIsModalVisible2(false);
};

  const handleCancel = () => {
      setIsModalVisible(false);
  };

  (console.log(notificacion))

//<Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
  return (
    <Container>
      <Row justify="space-around" align="middle">
        <Col span={6}>
          <h3>Alcaldia San Cristobal</h3>
        </Col>
        <Col span={15}>
          <Modal title="Basic Modal" style={{maxWidth: "80vw", overflowY: "auto"}}
            visible={isModalVisible2} onOk={ocultarmodal2} onCancel={ocultarmodal2}
          >
            <>
              <Card title={elementoNotificacionVer.titulo} style={{margin: "15px"}} hoverable>
                <p>{elementoNotificacionVer.body}</p>
              </Card>
            </>          
          </Modal>
          <Modal title="Basic Modal" style={{maxWidth: "80vw", overflowY: "auto"}}
            visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
          >
            {notificacion.map((element) => (
              <div key={element.id}>
                <Card title={element.title} style={{margin: "15px", backgroundColor:element.seen?"none":"#04040428"}} 
                    hoverable={element.seen?true:false} onClick={()=>onClickCardModal(element)}
                >
                  <p>{element.body}</p>
                </Card>
              </div>
            ))}
            
          </Modal>
          <Nav>
            <a href="/home" style={props?props.home?{color:"#0017c7"}:{}:{}}><BellOutlined />{" "}Noticias </a>
            <Badge count={notificacion.length}>
              <a onClick={showModal} style={props?props.notificaciones?{color:"#0017c7"}:{}:{}}>
                <ExceptionOutlined />{" "}Notificaciones
              </a>
            </Badge>
  
            <a id='cerrarSesionMenu' onClick={()=>{localStorage.clear();props.history.push('/');}} ><LogoutOutlined />{" "}Cerrar sesion</a>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Menuu);