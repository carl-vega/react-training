import React, { useEffect, useState } from 'react'

export default function HeaderAstronaut() {
    const [rando, setRando] = useState('')
    useEffect(() => {
        console.log("useEffect astronaut")

        return () => {
            console.log("cleanup astronaut")
        }
    }, [rando])
    return (
        <>
            <h1>I am Astronaut, doing Astronaut things.</h1>
            <span style={{ fontSize: "100px" }}>👨🏻‍🚀</span>
        </>
    )
}
