'use client'
import { useRouter } from 'next/navigation';
import { Container, Button, Modal, ButtonGroup, Form } from 'react-bootstrap';
import { useState } from 'react';
import AppRegister from './app.register';

export default function AppLogin() {
    const login = () => {
        // const login = fecht
    }
    const register = () => {
        setLgShow(false)
        return (
            <AppRegister />
        )
    }
    const [lgShow, setLgShow] = useState(false);
    return (
        <>

            <Button variant='info' onClick={() => setLgShow(true)}>Login</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className='min-vh-100 bg-body-tertiary d-grid gap-3 '>
                        <Form className='p-2' >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Container className='text-center'>
                                <ButtonGroup className='me-2 w-100'>
                                    <Button className='me-2 w-50' onClick={() => login()} variant="success">Login</Button>
                                    {/* <Button className='me-2 w-50' onClick={() => register()} variant="primary">register</Button> */}
                                    <AppRegister />
                                </ButtonGroup>
                            </Container>
                        </Form>
                    </Container>
                </Modal.Body>
            </Modal>
        </>

    )
}