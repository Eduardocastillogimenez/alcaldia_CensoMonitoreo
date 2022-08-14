import React, { useState, useContext, useEffect } from 'react';
import { ContainerInfo } from './styles'

import { Row, Col, Card, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import { useParams } from "react-router-dom";
import { withRouter } from "react-router";

import { requestNoticia } from 'api';

const Noticia = (props) => {
    const [loading, setLoading] = useState(false);
    const [usuario, setUsuario] = useState("");
    const [noticia, setNoticia] = useState({ title: "",body:"",id:""});
    const { id } = useParams();

    useEffect(() => {
        if(!props.usuario && noticia.title === ""){
            setUsuario(JSON.parse(localStorage.getItem('usuario')));
        }
        if (props.usuario && noticia.title === "") {
            if (props.usuario.message === "Error. Usuario y/o contraseña equivocados") {
                props.history.push('/');
            }
            requestNoticia(setNoticia,props.usuario.token,id);
        }    
        if (usuario!=="" && noticia.title === "") {
            if (usuario.message === "Error. Usuario y/o contraseña equivocados") {
                props.history.push('/');
            }
            requestNoticia(setNoticia,usuario.token,id);
        }    
    }, [props.usuario,loading]);
    
return(
    <>
        <Row justify="space-around" align="middle" style={{padding: "20px"}}>
            <Col span={22}>
                <ContainerInfo>
                    <Card title={noticia.title}
                        loading={loading} style={{margin: "15px"}}
                    >
                        <p>{noticia.body}</p>                       
                    </Card>
                </ContainerInfo>
            </Col>
        </Row>
    </>
);
}

export default withRouter(Noticia);