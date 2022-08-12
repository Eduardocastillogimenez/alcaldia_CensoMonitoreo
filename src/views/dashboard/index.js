import React, { useState, useEffect } from 'react';

import { withRouter } from "react-router";

const Dashboard = ({history}) => {

    const data = null;

    useEffect(() => {
        if (data===null) {
            history.push("/home");
        }
       
    }, [history, data]);

return(
    <>
       <h1>aaa</h1>
    </>
);
}

export default withRouter(Dashboard);;