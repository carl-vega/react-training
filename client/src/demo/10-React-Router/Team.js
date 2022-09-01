import React from 'react'
import { useParams } from 'react-router-dom';

export default function Team() {
    const { teamId } = useParams()
    return (
        <div>
            <h2> Team</h2>
            <h3>{teamId}</h3>
        </div>
    )
}
