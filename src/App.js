import Header from './components/Header';


import City from './City';
import Tags from './Tags';
import './App.css';
import Footer  from './components/Footer';
import React from "react";

import Classes from './components/Sidemenu.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import FormValidationCity from './components/FormValidationCity';
import FormValidationTag from './components/FormValidationTag';

const routes = [
 
  {
    path: "/",
    exact: true,
    sidebar: () => <div>tags!</div>,
    main: () => <Tags/>
  },
  {
    path: "/city",
    sidebar: () => <div>city!</div>,
    main: () => <City/>
  },
  {
    path: "/FormValidationCity",
    main: () => <FormValidationCity/>
  },
  {
    path: "/FormValidationTag",
    main: () => <FormValidationTag/>
  }
];

 function App() {



  return (
    <div>
      <Header/>
    <Router >
    
      <div >
      <Container fluid className={Classes.padding_remove}>
        <Row>
          <Col md={2}>
          <div className={Classes.side_menu}>
          <ul >
            <li>
              <Link to="/">Tag</Link>
            </li>
           
            <li>
              <Link to="/city">city</Link>
            </li>
          </ul>

        
        </div>
          </Col>
          <Col md={10}>
          <div >
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
          </Col>
        </Row>
        </Container>
       
       
      </div>
    </Router>
    <Footer />
    </div>
  );
}
export default App;