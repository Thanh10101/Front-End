import Link from 'next/link'
import app from '@/style/app.module.scss'

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link style={{ color: app.primaryColor }} href={"/login"}>login</Link>
        </li>

        <li>
          <Link href={"/logout"}>logout</Link>
        </li>
      </ul>
    </div >
  )
}
