import React from 'react'

export default function InlineStyle() {
    return (
        <div>
            <h2 style={{ width: 'fit-content', backgroundColor: 'coral', fontFamily: 'cursive', padding: '10px 20px', borderRadius: '5px' }} onMouseEnter={e => e.target.style.backgroundColor = 'cadetblue'} onMouseLeave={e => e.target.style.backgroundColor = 'coral'}>Inline Style</h2>
        </div >
    )
}
