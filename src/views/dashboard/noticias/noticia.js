import React, { useState } from 'react';
import { Container } from './styles';


import { Card, Button } from 'antd';

const Noticia = ({dataAPI}) => {
    const [loading, setLoading] = useState(dataAPI?false:true);
    console.log(dataAPI);

    return(
        <Container>
            <h1>{dataAPI.title}</h1>
            <Card loading={loading} style={{margin: "15px"}}>
                <p>{dataAPI.body}</p>
            </Card>
        </Container>
    );
}

export default Noticia;