'use client'
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import AppRegister from './app.register';
import { title } from 'process';
import AddUser from '../modal/add.user';
import EditUser from '../modal/edit.user';
import DeleteUser from '../modal/delete.user';
import { Container, Spinner } from 'react-bootstrap';
import React from 'react';
import useSWR from 'swr';

interface Iprop {
    state: boolean;
    stateShow: (value: boolean) => void;
    titileShow: string;

}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function AppModal(props: Iprop) {
    const { state, stateShow, titileShow } = props;
    // Get user by id
    const [user, setUser] = React.useState<IUser | undefined>();
    //fecth data

    if (titileShow === 'Edit user') {
        const { data, error, isLoading } = useSWR('http://localhost:2002/1', fetcher, {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        })
        setUser(data)
        if (!user) {
            return (
                <Container className="text-center mt-5">
                    <Spinner animation="border" role="status" className="mt-5">
                        <span className="visually-hidden ">
                            Loading
                        </span>
                    </Spinner>

                </Container>
            )
        }
    }

    return (
        <>
            <Modal
                size="lg"
                show={state}
                onHide={() => stateShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {titileShow}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        (() => {
                            switch (titileShow) {
                                case 'Add user': return <AddUser />

                                case 'Edit user': return (
                                    user && <EditUser User={user} />
                                )

                                case 'Delete user': return <DeleteUser />

                                default:
                                    return (
                                        <div>Null</div>
                                    )
                            }
                        })()
                    }
                </Modal.Body>
            </Modal>
        </>

    )
}