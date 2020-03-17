import React from 'react';
import { Navbar } from 'react-bootstrap';

interface HeaderProps{
    title: string;
}

export const Header: React.FC<HeaderProps> = ({title}) => {

    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">None</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
}