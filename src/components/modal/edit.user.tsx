'use client'
import { useState } from "react";
import { Container, Button, ButtonGroup, Form } from "react-bootstrap";
import { toast } from "react-toastify"
import { mutate } from "swr";

const [firstName, firstNameAdd] = useState<string>("");
const [lastName, lastNameAdd] = useState<string>("");
const [email, emailAdd] = useState<string>("");
const [phone, phoneAdd] = useState<string>("");
const [address, addressAdd] = useState<string>("");


const editUser = () => {
    fetch('http://localhost:2002/post/edit', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, phone, email, address })
    }).then(res => res.json())
        .then(res => {
            if (res) {
                mutate("http://localhost:2004/")
                toast.success('Create success')
            }
            else {
                toast.warning('Create fail !')
            }
        });

}
const exit = () => {

}
interface Iprops {
    User: IUser
}

export default function EditUser(props: Iprops) {
    const { User } = props
    return (
        <Container className='min-vh-100 bg-body-tertiary d-grid gap-3'>
            <Form className='p-2' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control value={User.firstName} type="text" placeholder={User.firstName} onChange={(e) => { firstNameAdd(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control value={User.lastName} type="text" placeholder={User.lastName} onChange={(e) => { lastNameAdd(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={User.email} type="email" placeholder={User.email} onChange={(e) => { emailAdd(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control value={User.phone} type="text" placeholder={User.phone} onChange={(e) => { phoneAdd(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={User.address} type="text" placeholder={User.address} onChange={(e) => { addressAdd(e.target.value) }} />
                </Form.Group>
                <Container className='text-center w-100'>
                    <ButtonGroup className='me-2 w-50'>
                        <Button className='me-2 w-50' onClick={() => editUser()} variant="primary">Add</Button>
                    </ButtonGroup>
                </Container>
            </Form >
        </Container >

    )
}