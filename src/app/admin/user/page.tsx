'use client'
import AppUser from "@/components/admin/app.user";
import useSWR from 'swr';
import Spinner from 'react-bootstrap/Spinner';
import { Container } from "react-bootstrap";


export default function AdminUser() {
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR('http://localhost:2002/', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })
    if (isLoading) {
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
    if (!data) {
        return (

            <Container className="text-center mt-5">
                <div>None data</div>
            </Container>
        )
    }
    return (
        <AppUser Users={data} />
    )
}