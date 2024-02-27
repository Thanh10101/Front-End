'use client'
import { useState } from "react";
import { Container, Button, ButtonGroup, Form } from "react-bootstrap";
import AppModal from "../public/app.modal";
import { toast } from "react-toastify"
import { mutate } from "swr";


export default function AddUser() {
    const [firstName, firstNameAdd] = useState<string>("");
    const [lastName, lastNameAdd] = useState<string>("");
    const [email, emailAdd] = useState<string>("");
    const [phone, phoneAdd] = useState<string>("");
    const [address, addressAdd] = useState<string>("");
    const [password, passwordAdd] = useState<string>("")

    const addUser = () => {
        fetch('http://localhost:2002/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, phone, email, address, password })
        }).then(res => res.json())
            .then(res => {
                if (res) {
                    mutate("http://localhost:2002/")
                    toast.success('Create success')
                }
                else {
                    toast.warning('Create fail !')
                }
            });

    }
    const exit = () => {

    }
    return (
        <Container className='min-vh-100 bg-body-tertiary d-grid gap-3'>
            <Form className='p-2' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" onChange={(e) => { firstNameAdd(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" onChange={(e) => { lastNameAdd(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => { emailAdd(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" onChange={(e) => { passwordAdd(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone" onChange={(e) => { phoneAdd(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" onChange={(e) => { addressAdd(e.target.value) }} />
                </Form.Group>
                <Container className='text-center w-100'>
                    <ButtonGroup className='me-2 w-50'>
                        <Button className='me-2 w-50' onClick={() => addUser()} variant="primary">Add</Button>
                    </ButtonGroup>
                </Container>
            </Form >
        </Container >

    )
}