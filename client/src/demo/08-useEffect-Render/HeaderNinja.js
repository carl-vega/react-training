import React, { useEffect, useState } from 'react'

export default function HeaderNinja() {
    const [rando, setRando] = useState(true)
    useEffect(() => {
        console.log("useEffect ninja")
        return () => {
            console.log("cleanup ninja")
        }
    }, [])
    useEffect(() => {
        console.log("another useEffect ninja")
        return (() => {
            console.log("re-render useEffect ninja")
        })
    }, [rando])

    return (
        <>
            <h1>I am Ninja, doing Ninja things.</h1>
            <input type='radio' onClick={() => setRando(!rando)} />
            <span style={{ fontSize: "100px" }}>🥷🏻</span>
        </>
    )
}
