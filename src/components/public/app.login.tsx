'use client'
import { useRouter } from 'next/navigation'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function AppLogin() {
    const router = useRouter()
    const login = () => {
        alert('login')
    }
    const register = () => {
        router.push('/register')
    }
    return (
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
                        <Button className='me-2 w-50' onClick={() => register()} variant="primary">Register</Button>
                    </ButtonGroup>
                </Container>
            </Form>
        </Container>
    )
}