import React from 'react';

import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

import 'antd/dist/antd.min.css';
//import './app.css';

import Home from './views/home';
import Error from './views/error404';
import Cargando from './components/cargando';

const App = () => {
return(
<>
  <Router>
    <React.Suspense fallback={<Cargando/>}>
      <Switch>
        <Route exact path="/">
          <Home/>
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