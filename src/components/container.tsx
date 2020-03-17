import React from 'react';
import { Row, Col, Container as Cont } from 'react-bootstrap';
import { SideNav } from './sidenav';


export const Container = () => {
    return (
      <React.Fragment>
        <Cont fluid>
          <Row>
            <Col sm="2">
              <SideNav />
            </Col>
            <Col>
                <div className="page-content">      
                    
                </div>
            </Col>
          </Row>
        </Cont>
      </React.Fragment>
    );
}