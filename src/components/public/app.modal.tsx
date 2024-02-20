'use client'
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import AppRegister from './app.register';
import { title } from 'process';
import AddUser from '../modal/add.user';

interface Iprop {
    state: boolean;
    stateShow: (value: boolean) => void;
    titileShow: string;

}

export default function AppModal(props: Iprop) {
    const { state, stateShow, titileShow } = props;


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
                                case 'Add user':
                                    return (
                                        <AddUser />
                                    );
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