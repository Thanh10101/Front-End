'use client'
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import Spinner from 'react-bootstrap/Spinner';
import { Container } from "react-bootstrap";
import React from "react";
import Loading from "@/components/public/loading";
const AppUser = dynamic(() => import('@/components/admin/app.user'), {
    loading: () => <Loading />,
    ssr: false
})

export default function AdminUser() {
    const [user, setUser] = React.useState<Array<IUser> | undefined>(null);
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
    // const fecthData = () => {
    //     fetch('http://localhost:2002/')
    //         .then(res => res.json())
    //         .then(res => {
    //             setUser(res);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }
    // fecthData()
    if (!user) {
        return (
          <Loading/>
        )
    }

    return (
       <AppUser Users={user} />
    )

}