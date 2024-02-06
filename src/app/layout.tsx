'use client'
// import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


//
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdbreact';
//import boostrap
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import app from "@/style/app.module.scss"

//boostrap
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" >
      <body className={inter.className}>
        <Navbar expand="lg" className="bg-white sticky-top d-flex">
          <Container fluid className=' d-flex'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand as={Link} href="/">Bookstore</Navbar.Brand>
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
                <Button as={Link} variant="info" href='/login'>Login</Button>
                <Button as={Link} variant="primary" href="/register">Register</Button>
              </ButtonGroup>
            </Container>
          </Container>
        </Navbar>

        {children}

        <MDBFooter className='bg-dark border border-dark border-top-100 text-center'>
          <MDBContainer className='p-4 pb-0 ' >
            <section className='mb-4'>
              <MDBBtn
                floating
                className=' m-1'
                color="primary"
                href='https://www.facebook.com/Thanh.NT2002/'
                role='button'
                as={Button}
              >
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>
              <MDBBtn
                floating
                className='m-1'
                color="dark"
                href='https://github.com/Thanh10101?tab=repositories'
                role='button'
                as={Button}
              >
                <MDBIcon fab icon='github' />
              </MDBBtn>
            </section>
          </MDBContainer>
          <div className='text-center p-3 border border-dark ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className='text-white' href='http://localhost:3000/'>
              Bookstore.com
            </a>
          </div>
        </MDBFooter>
      </body>
    </html >
  )
}
