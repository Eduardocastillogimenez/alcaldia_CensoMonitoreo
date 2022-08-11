import React from 'react';

import Menu from '../../components/menu';
import Footer from '../../components/footer';

import { Row,Col } from 'antd';

const App = () => {
return(
    <>
    <Menu inicio/>
    <Row justify="space-around"align="middle">
        <Col span={24}>
            <div/>
            <h1>jdjdjdjj</h1>
        </Col>
    </Row>
    <Footer/>
    </>
);
}

export default App;