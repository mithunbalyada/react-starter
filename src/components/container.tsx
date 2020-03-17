import React from 'react';
import { Row, Container as Cont } from 'react-bootstrap';
import { SideNav } from './sidenav';
import {Content} from './content';


export const Container = () => {
    return (
      <React.Fragment>
        <Cont fluid>
          <Row>
              <SideNav />
              <Content contentTitle='Dashboard'>
                <p>Conent goes here</p>
              </Content>
          </Row>
        </Cont>
      </React.Fragment>
    );
}