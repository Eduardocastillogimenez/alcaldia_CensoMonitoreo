import React, { useState, useEffect } from 'react';
import { SpanDatos } from './styles';

import { Table, Button, Row, Col } from 'antd';
import { UserOutlined, MailOutlined, SolutionOutlined, BugOutlined } from '@ant-design/icons';
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

import { requestUsuariosEstadisticas  } from 'api';


const Contenido = () => {
    const [dataAP, setDataAPI] = useState([]);
    const  usuario  = JSON.parse(localStorage.getItem('usuario'));

    useEffect(() => {
        if(usuario){
            requestUsuariosEstadisticas(setDataAPI,usuario.token);
        }      
    }, []);

    console.log(dataAP);

    const infoTabla = (dataAPI) => {
    
        const data = dataAPI.map((element, i) => (
            {
                key: i,
                covid19: element.covid19,
                total: element.total,
                variante: element.total,
                viruela: element.total,

            }
        ));
    
    
        const columns = [
            {
            title: <span><UserOutlined/>{" "}Nombre</span>,
            dataIndex: 'name',
            },
            {
                title: <span><SolutionOutlined />{" "}Cedula</span>,
                dataIndex: 'personal_id',
            },
            {
            title: <span><MailOutlined/>{" "}correo</span>,
            dataIndex: 'email',
            },
        ];
    
        return {data,columns};
    }

   // const infoTablaVar = infoTabla(dataAP?[dataAP.by_disease]:[]);
  //  const infoTablaVar2 = infoTabla(dataAP?[dataAP.by_symptoms]:[]);



return(
    <>
        <Row justify="space-around" >
        <Col span={12}>
        <h1> Por enfermedad:</h1>
        <SpanDatos>
            <h3><BugOutlined />{" "}Personas con{" "}covid-19</h3>
            <p>{dataAP.by_disease?dataAP.by_disease.covid19:""}</p>
        </SpanDatos>
        <SpanDatos>
            <h3><BugOutlined />{" "}Personas con{" "}covid con variante</h3>
            <p>
         {dataAP.by_disease?dataAP.by_disease.variante:""}</p>
        </SpanDatos>
         <SpanDatos>
            <h3><BugOutlined />{" "}Personas con{" "}viruela del mono</h3>
            <p>
         {dataAP.by_disease?dataAP.by_disease.viruela:""}</p>
        </SpanDatos>
         <SpanDatos>
            <h3><BugOutlined />total usarios registradas:</h3>
            <p>
         {dataAP.by_disease?dataAP.by_disease.total:""}</p>
        </SpanDatos>
        </Col>
        <Col span={12}>
        <h1> Por sintomas:</h1>

         {dataAP.by_symptoms?dataAP.by_symptoms.map((e)=>
            (
                <SpanDatos>
                    <h3><BugOutlined />{" "}Personas con{" "}{e.name}</h3>
                    <p>{e.count}</p>
                </SpanDatos>
            )
        ):""}
</Col>
        </Row>
    </>
);
}

export default Contenido;