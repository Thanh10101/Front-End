'use client'
import { useRouter } from 'next/navigation'


const Login = () => {
    const router = useRouter()
    return (
      <div>
          <div>
            <span>Login</span>

        </div>
        <div>
            <button onClick={() => { router.push('/') }}>back</button>
        </div>
      </div>

    )
}
export default Login