'use client'
import { Container, Button, Modal, ButtonGroup, Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AppRegister() {
    const router = useRouter()
    const register = () => {
        alert("registerd")
    }
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button className='me-2 w-50' variant='primary' onClick={() => setLgShow(true)}>Register</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Register
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className='min-vh-100 bg-body-tertiary d-grid gap-3'>
                        <Form className='p-2' >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password repeat</Form.Label>
                                <Form.Control type="password" placeholder="Password repeat" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Container className='text-center w-100'>
                                <ButtonGroup className='me-2 w-50'>
                                    <Button className='me-2 w-50' onClick={() => register()} variant="primary">Register</Button>
                                </ButtonGroup>
                            </Container>
                        </Form>
                    </Container>
                </Modal.Body>
            </Modal>
        </>

    )

}