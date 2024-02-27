'use client'

import { Container, Table, Button, ButtonGroup } from "react-bootstrap"
import AppModal from "../public/app.modal";
import { useState } from "react";
import { log } from "console";

interface IProps {
    Users: IUser[]
}



export default function AppUser(props: IProps) {
    const { Users } = props;
    const [button, buttonClick] = useState<string>("")
    const [modal, modalShow] = useState<boolean>(false);

    const handleButton = (value: string) => {
        modalShow(true)
        buttonClick(value)
    }
    return (
        <Container>
            <Container className="mt-5 mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>User</h3>
                <Button variant='primary' onClick={() => handleButton("Add user")}>Add</Button>
            </Container>
            <Table bordered hover size="sm" responsive="sm lg md" className="text-center w-100">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Create Date</th>
                        <th>Updated Date</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Users && Users?.map((user: IUser) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.updatedAt}</td>
                                <td>{user.roleId}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button variant='warning' className="mx-2" onClick={() => handleButton('Edit user')}>Edit</Button>
                                        <Button variant='danger' onClick={() => handleButton('Delete user')} > Delete</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <AppModal
                    state={modal}
                    stateShow={modalShow}
                    titileShow={button}
                />

            </Table>
        </Container >

    )
}