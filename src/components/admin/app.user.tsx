'use client'
import useSWR from "swr"
interface IProps {
    Users: IUser[]
}
export default function AppUser(props: IProps) {
    const { Users } = props;
    console.log('check', Users)

    return (
        <div>
            <div>
                {Users?.map(user => (
                    <div key={user.id}>{user.id}</div>
                ))}
            </div>
        </div>
    )
}