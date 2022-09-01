import React from 'react'

export default function InlineStyle() {
    return (
        <>
            <h2 style={{ width: 'fit-content', backgroundColor: 'coral', fontFamily: 'Monoton', fontSize: '100px', padding: '10px 20px', borderRadius: '5px' }} onMouseEnter={e => e.target.style.backgroundColor = 'cadetblue'} onMouseLeave={e => e.target.style.backgroundColor = 'coral'}>Inline Style</h2>
        </ >
    )
}
