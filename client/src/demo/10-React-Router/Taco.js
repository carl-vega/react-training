import React from 'react'
import {
    Outlet
} from "react-router-dom";

export default function Taco() {
    return (
        <div>
            <h2>Taco</h2>
            <Outlet />
        </div>
    )
}
