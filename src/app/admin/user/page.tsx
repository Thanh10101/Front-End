'use client'
import AppUser from "@/components/admin/app.user";
import useSWR from 'swr';
import Spinner from 'react-bootstrap/Spinner';
import { Container } from "react-bootstrap";
import React from "react";

export default function AdminUser() {
    const [user, setUser] = React.useState<Array<IUser> | undefined>();
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const fetchData = async () => {
        const { data, error, isLoading } = await useSWR('http://localhost:2002/', fetcher, {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        })

        setUser(data)
    };
    fetchData();

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

    return (
        user && <AppUser Users={user} />
    )

}