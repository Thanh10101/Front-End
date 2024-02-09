'use client'

import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdbreact';
import Button from 'react-bootstrap/Button'

export default function AppFooter() {
    return (
        <MDBFooter MDBFooter className='bg-dark border border-dark border-top-100 text-center' >
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
        </MDBFooter >
    )
}