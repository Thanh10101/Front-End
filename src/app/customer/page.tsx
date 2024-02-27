'use client'

interface Iprops {
    data: string
}


export default function CustomerHomePage(props: Iprops) {
    const { data } = props
    return (
        <h1>Hi </h1>
    )
}