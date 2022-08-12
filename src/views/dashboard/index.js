import React, { useState, useEffect } from 'react';
import MyMenu from './myMenu';
import Contenido from './contenido';
import Noticias from './noticias';
import Usuarios from './usuarios';
import CrearNotificacion from './crearNoti';
import { Container } from './styles';

import { withRouter } from "react-router";

const Dashboard = ({history}) => {
    const [cargar, setCargar] = useState(0);
    const data = true;

    useEffect(() => {
        if (data===null) {
            history.push("/home");
        }
       
    }, [history, data]);

return(
    <>
        <MyMenu setCargar={setCargar} cargar={cargar}/>
        <Container>
            <div className='miniContainerDashbo'>
                {cargar===3?<CrearNotificacion/>:cargar===2?<Noticias/>:cargar===1?<Usuarios/>:<Contenido/>}
            </div>
        </Container>
    </>
);
}

export default withRouter(Dashboard);