import React, { useState } from 'react';
import { ContainerInfo, ContainerPag } from './styles'

import Menu from 'components/menu';
import Footer from 'components/footer';
import Noticia from 'views/noticia';

import { Row, Col, Pagination, Card, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import { Switch, Route, useRouteMatch, } from "react-router-dom";

const Noticias = () => {
    const [loading, setLoading] = useState(false);
    const { path } = useRouteMatch();

    const onChangePagination = (pageNumber) => {
        console.log('page:', pageNumber);
    };

return(
    <>
        <Row justify="space-around" align="middle" style={{padding: "20px"}}>
            <Col span={22}>
                <ContainerInfo>
                    <h1>Últimas Noticias</h1>
                    <Card title="La inflación en EEUU perjudica a las remesas que se envían a Latinoamérica"
                        hoverable loading={loading} style={{margin: "15px"}}
                    >
                        <p>Los inmigrantes en EEUU cada vez tienen más difícil mandar remesas a países de Latinoamérica debido a que sus ahorros van menguando a medida que aumentan los precios de la comida y la energía por la inflación, la más alta en el país norteamericano desde 1981.«La inflación en Estados Unidos está mermando la capacidad de gasto de las personas. Es como si la gente se hubiera...</p>
                        <a href={`${path}/${0}`}>
                            <Button type="primary">
                                Ver mas {" "}<ArrowRightOutlined />
                            </Button>
                        </a>
                    </Card>
                    <Card title="La inflación en EEUU perjudica a las remesas que se envían a Latinoamérica"  
                        hoverable loading={loading} style={{margin: "15px"}}
                    >
                        <p>Los inmigrantes en EEUU cada vez tienen más difícil mandar remesas a países de Latinoamérica debido a que sus ahorros van menguando a medida que aumentan los precios de la comida y la energía por la inflación, la más alta en el país norteamericano desde 1981.«La inflación en Estados Unidos está mermando la capacidad de gasto de las personas. Es como si la gente se hubiera...</p>
                        <a href={`${path}/${1}`}>
                            <Button type="primary">
                                Ver mas {" "}<ArrowRightOutlined />
                            </Button>
                        </a>
                    </Card>
                    <Card title="La inflación en EEUU perjudica a las remesas que se envían a Latinoamérica"  
                        hoverable loading={loading} style={{margin: "15px"}}
                    >
                        <p>Los inmigrantes en EEUU cada vez tienen más difícil mandar remesas a países de Latinoamérica debido a que sus ahorros van menguando a medida que aumentan los precios de la comida y la energía por la inflación, la más alta en el país norteamericano desde 1981.«La inflación en Estados Unidos está mermando la capacidad de gasto de las personas. Es como si la gente se hubiera...</p>
                        <a href={`${path}/${2}`}>
                            <Button type="primary">
                                Ver mas {" "}<ArrowRightOutlined />
                            </Button>
                        </a>
                    </Card>
                </ContainerInfo>
            </Col>
            <Col span={22}>
                <ContainerPag>
                    <Pagination defaultCurrent={1} total={30} onChange={onChangePagination}/>
                </ContainerPag>
            </Col>
        </Row>
    </>
);
}

const Home = () => {
    const { path } = useRouteMatch();
return(
    <>
        <Menu home/>
            <Switch>
                <Route exact path={path}>
                    <Noticias/>
                </Route>
                <Route path={`${path}/:id`}>
                    <Noticia />
                </Route>
            </Switch>
        <Footer/>
    </>
);
}

export default Home;