import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { withRouter } from 'react-router-dom';
import { Header } from './components/header';
import { Container } from './components/container';

const App = () =>{

  return(
    <React.Fragment>
      <Header title='fitdevops-console' />
      <Container/>
    </React.Fragment>
  );
}

export default withRouter(App);
