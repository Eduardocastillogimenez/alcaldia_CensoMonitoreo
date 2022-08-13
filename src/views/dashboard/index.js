import React, { useState, useEffect } from 'react';
import MyMenu from './myMenu';
import Contenido from './contenido';
import Noticias from './noticias';
import Usuarios from './usuarios';
import CrearNotificacion from './crearNoti';
import { Container } from './styles';

import { withRouter, Switch, Route, useRouteMatch } from "react-router";

const Dashboard = ({history}) => {
    const [cargar, setCargar] = useState(0);
    const { path } = useRouteMatch();
    const data = true;

    useEffect(() => {
        if (data===null) {
            history.push("/home");
        }
       
    }, [history, data]);

return(
    <>
        <Switch>
            <Route exact path={path}>
                <MyMenu path={path}/>
                <Container>
                    <div className='miniContainerDashbo'>
                        <Contenido/>
                    </div>
                </Container>
            </Route>
            <Route path={`${path}/usuarios`}>                
                <MyMenu path={path} usuarios/>
                <Container>
                    <div className='miniContainerDashbo'>
                        <Usuarios usuarios/>
                    </div>
                </Container>
            </Route>
            <Route path={`${path}/noticias`}>              
                <MyMenu path={path} noticias/>
                <Container>
                    <div className='miniContainerDashbo'>
                        <Noticias />
                    </div>
                </Container>
            </Route>
            <Route exact path={`${path}/crearNotificacion`}>
                <MyMenu path={path} crearNotificacion/>
                <Container>
                    <div className='miniContainerDashbo'>
                        <CrearNotificacion />
                    </div>
                </Container>
            </Route>
        </Switch>
    </>
);
}

export default withRouter(Dashboard);