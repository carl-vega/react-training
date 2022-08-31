import React, { useEffect, useState } from 'react'

export default function HeaderNinja() {
    const [rando, setRando] = useState('')
    useEffect(() => {
        console.log("useEffect ninja")

        return () => {
            console.log("cleanup ninja")
        }
    }, [rando])
    return (
        <>
            <h1>I am Ninja, doing Ninja things.</h1>
            <span style={{ fontSize: "100px" }}>🥷🏻</span>
        </>
    )
}
