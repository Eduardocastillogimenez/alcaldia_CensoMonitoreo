import React from 'react';

import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

import 'antd/dist/antd.min.css';
//import './app.css';

import Home from 'views/home';
import Notificaciones from 'views/notificaciones';
import Perfil from 'views/perfil';
import Login from 'views/login';
import Dashboard from 'views/dashboard';
import Error from 'views/error404';
import Cargando from 'components/cargando';

const App = () => {
return(
<>
  <Router>
    <React.Suspense fallback={<Cargando/>}>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/notificaciones">
          <Notificaciones/>
        </Route>
        <Route exact path="/perfil">
          <Perfil/>
        </Route>
        <Route path="*">
            <Error />
        </Route>
      </Switch>
    </React.Suspense>
  </Router>
</>
);
}

export default App;