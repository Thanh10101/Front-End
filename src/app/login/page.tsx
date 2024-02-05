'use client'
import { useRouter } from 'next/navigation'
import Button from 'react-bootstrap/Button';

export default function Login() {
    const router = useRouter()
    return (
        <div>
            <div>
                <span>Login</span>

            </div>
            <div>
                <Button variant='success'>Login</Button>
                <Button onClick={() => { router.push('/') }} variant='danger'> Back</Button>
            </div>
        </div>

    )
}
