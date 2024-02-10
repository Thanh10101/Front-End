'use client'
import { Container, Nav, Navbar, NavDropdown, Button, Form, ButtonGroup } from 'react-bootstrap'
import Link from 'next/link'
import AppLogin from './app.login'
import AppRegister from "@/components/public/app.register"

export default function AppHeader() {
    return (
        <Navbar expand="lg" className="bg-white sticky-top d-flex">
            <Container fluid className=' d-flex'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand>
                    <Link href={'/'} className='navbar-brand'>Bookstore</Link>
                </Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link as={Link} href="/">Home</Nav.Link>
                        <Nav.Link as={Link} href="#link">Catalog</Nav.Link>
                        <NavDropdown className='me-auto' title="Catagory" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} href="#action/3.1" color='red'>Action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="#action/3.2">
                                Romantic
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="#action/3.3">Novel</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} href="#action/3.4">
                                ...
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

                <Container className="d-flex justify-content-end">
                    <Form className="d-flex ">
                        <Form.Control
                            type="search"
                            style={{ marginRight: 6 }}
                            placeholder="Search"
                            className="me-2 border border-success bg-light"
                            aria-label="Search"
                        />
                        <Button className='m-0' variant="success">Search</Button>
                    </Form>
                    <ButtonGroup>
                        <AppLogin />
                        <AppRegister />
                    </ButtonGroup>
                </Container>
            </Container>
        </Navbar>
    )
}