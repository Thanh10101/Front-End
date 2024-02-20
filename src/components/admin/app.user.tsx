'use client'
import useSWR from "swr"
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
    const [add, addShow] = useState<boolean>(false);
    const handleAddUser = (value: string) => {
        addShow(true);
        buttonClick(value)
    }
    return (
        <Container>
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
                        Users?.map(user => (
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
                                        <Button variant='primary' onClick={() => handleAddUser("Add user")}>Add</Button>
                                        <Button variant='warning' className="mx-2">Edit</Button>
                                        <Button variant='danger'>Delete</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <AppModal
                    state={add}
                    stateShow={addShow}
                    titileShow={button}
                />

            </Table>
        </Container>

    )
}