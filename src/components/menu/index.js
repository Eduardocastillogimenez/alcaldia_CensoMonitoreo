import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, BellOutlined, ExceptionOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu, Row, Col, Badge, Modal, Card } from 'antd';
import {Container,Nav} from './styles'

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

const App = (props) => {
  const [current, setCurrent] = useState('mail');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [elementoNotificacionVer, setElementoNotificacionVer] = useState({
    id: 0,
    sing: 0,
    titulo: '',
    body: '',
  },);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const onClickCardModal = (element) => {
    console.log(element);
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
            {dataAPI.map((element) => (
              <div key={element.id}>
                <Card title={element.titulo} style={{margin: "15px", backgroundColor:element.sing===0?"none":"#04040428"}} 
                    hoverable={element.sing===0?true:false} onClick={()=>onClickCardModal(element)}
                >
                  <p>{element.body}</p>
                </Card>
              </div>
            ))}
            
          </Modal>
          <Nav>
            <a href="/home" style={props?props.home?{color:"#0017c7"}:{}:{}}><BellOutlined />{" "}Noticias </a>
            <Badge count={5}>
              <a onClick={showModal} style={props?props.notificaciones?{color:"#0017c7"}:{}:{}}>
                <ExceptionOutlined />{" "}Notificaciones
              </a>
            </Badge>
            <a href="/perfil" style={props?props.perfil?{color:"#0017c7"}:{}:{}}><UserOutlined />{" "}Perfil</a>
            <a id='cerrarSesionMenu' ><LogoutOutlined />{" "}Cerrar sesion</a>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default App;