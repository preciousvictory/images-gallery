import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const navebarStyle = {
    backgroundColor: 'darkblue',
    padding: '10px 20px'
}

const Header = () => {
    return (
        <Navbar style={navebarStyle} data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Images Gallery</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;