import React, { useState } from 'react';
import { Container } from './styles';

import { useParams } from "react-router-dom";

import { Card, Button } from 'antd';

const Noticia = ({dataAPI}) => {
    const [loading, setLoading] = useState(dataAPI?false:true);

    return(
        <Container>
            <h1>{dataAPI.titulo}</h1>
            <Card loading={loading} style={{margin: "15px"}}>
                <p>{dataAPI.body}</p>
            </Card>
        </Container>
    );
}

export default Noticia;