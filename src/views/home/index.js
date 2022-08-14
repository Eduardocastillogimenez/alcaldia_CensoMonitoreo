import React, { useState, useContext, useEffect } from 'react';
import { ContainerInfo, ContainerPag } from './styles'

import Menu from 'components/menu';
import Footer from 'components/footer';
import Noticia from 'views/noticia';

import { Row, Col, Pagination, Card, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import { Switch, Route, useRouteMatch } from "react-router-dom";
import { withRouter } from "react-router";

import { Auth } from "context";
import { requestNoticias } from 'api';

const Noticias = (props) => {
    const [loading, setLoading] = useState(false);
    const [length, setLength] = useState(10);
    const [noticias, setNoticias] = useState([]);
    const { path } = useRouteMatch();

    useEffect(() => {
        if(!props.usuario){
            props. history.push('/');
        }
        if (props.usuario) {
            if (props.usuario.message === "Error. Usuario y/o contraseña equivocados") {
                props.history.push('/');
            }
            requestNoticias(setNoticias,props.usuario.token);

        }       
    }, [props.usuario]);

    const onChangePagination = (pageNumber) => {
        setLength(10 * pageNumber);
    };

return(
    <>
        <Row justify="space-around" align="middle" style={{padding: "20px"}}>
            <Col span={22}>
                <ContainerInfo>
                    <h1>Últimas Noticias</h1>
                    {noticias.map((e,i) => {
                        if(i<length && i>length-11){

                        return(
                        <Card title={e.title}
                            hoverable loading={loading} style={{margin: "15px"}} key={e.id}
                        >
                            <p>{e.abstract}</p>
                            <a href={`${path}/${e.id}`}>
                                <Button type="primary">
                                    Ver mas {" "}<ArrowRightOutlined />
                                </Button>
                            </a>
                        </Card>)
                        }else{
                            return ""
                        }
                    })}
                </ContainerInfo>
            </Col>
            <Col span={22}>
                <ContainerPag>
                    <Pagination defaultCurrent={1} total={noticias.length+1} onChange={onChangePagination}/>
                </ContainerPag>
            </Col>
        </Row>
    </>
);
}

const Home = ({history}) => {
    const { path } = useRouteMatch();
    const  usuario  = JSON.parse(localStorage.getItem('usuario'));

return(
    <>
        <Menu home/>
            <Switch>
                <Route exact path={path}>
                    <Noticias history={history} usuario={usuario}/>
                </Route>
                <Route path={`${path}/:id`}>
                    <Noticia usuario={usuario}/>
                </Route>
            </Switch>
        <Footer/>
    </>
);
}

export default withRouter(Home);