import React, { useEffect, useState } from 'react'

export default function HeaderKnight() {
    const [rando, setRando] = useState('')
    useEffect(() => {
        console.log("useEffect knight")

        return () => {
            console.log("cleanup knight")
        }
    }, [rando])
    return (
        <>
            <h1>I am Knight, doing Knight things.</h1>
            <span style={{ fontSize: "100px" }}>♞</span>
        </>
    )
}
