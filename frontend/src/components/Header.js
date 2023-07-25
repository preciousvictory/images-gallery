import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const navebarStyle = {
    backgroundColor: '#002255',
    padding: '10px 20px',
    color: '#04f3f5'
}

const Header = () => {
    return (
        <Navbar style={navebarStyle} data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Images Gallery</Navbar.Brand>
                <Nav style={{color: '#04f3f5'}}>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;