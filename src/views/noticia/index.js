import React, { useState } from 'react';
import { ContainerInfo } from './styles'

import { Row, Col, Card, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import { useParams } from "react-router-dom";

const Noticia = () => {
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
return(
    <>
        hola {id}
        <Row justify="space-around" align="middle" style={{padding: "20px"}}>
            <Col span={22}>
                <ContainerInfo>
                    <Card title="La inflación en EEUU perjudica a las remesas que se envían a Latinoamérica"
                         loading={loading} style={{margin: "15px"}}
                    >
                        <p>Los inmigrantes en EEUU cada vez tienen más difícil mandar remesas a países de Latinoamérica debido a que sus ahorros van menguando a medida que aumentan los precios de la comida y la energía por la inflación, la más alta en el país norteamericano desde 1981.

                            «La inflación en Estados Unidos está mermando la capacidad de gasto de las personas. Es como si la gente se hubiera empobrecido y eso disminuye la cantidad de dinero que pueden enviar al exterior», explica a Efe el profesor de economía para la Universidad de Nueva York, Profesora de economía Nicholas Economides.

                            <h4>LA INFLACIÓN CAMBIA COMPORTAMIENTOS</h4>

                            Según un estudio de la empresa de remesas WorldRemit, el 78 % de los inmigrantes encuestados que viven en Estados Unidos han notado un incremento en el costo de vida; como resultado, el 63 % envían dinero al extranjero a menos personas como resultado del aumento del costo de vida y el 74 % ahora solo lo envía a familiares cercanos.

                            «Lo primero que nos dijeron nuestros usuarios es que antes de sacrificar el dinero que envían a sus familiares, están cambiando sus hábitos de consumo en Estados Unidos; por ejemplo, en lugar de salir a un restaurante, ahora tratan de cocinar en casa para gastar menos y seguir cumpliendo con sus obligaciones», indica a Efe Jorge Godínez, director de WorldRemit para las Américas.

                            Las proyecciones de esta empresa de pagos son que este año se desacelerará el crecimiento de envío de remesas que el sector venía registrando en los años anteriores.

                            «El año pasado Latinoamérica recibió 131 mil millones de dólares en concepto de remesas y eso fue un 25 % más del año anterior. Pero para este año se está proyectando ya únicamente un 14 % de crecimiento, es decir, casi 11 puntos porcentuales menos», recalca el experto.

                            Pero Godínez puntualiza que dentro de la región cada país se comporta de manera distinta. «En República Dominicana la proyección es que este año decrezca más o menos 7 %, mientras que en México se espera que todavía crezca 18 %», añade.
                        </p>
                        
                    </Card>
                </ContainerInfo>
            </Col>
        </Row>
    </>
);
}

export default Noticia;