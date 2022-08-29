import React from 'react'
const styles = { width: 'fit-content', backgroundColor: 'coral', fontFamily: 'cursive', padding: '10px 20px', borderRadius: '5px' }
export default function ObjectStyle() {
    return (
        <div>
            <h2 style={styles} onMouseEnter={e => e.target.style.backgroundColor = 'cadetblue'} onMouseLeave={e => e.target.style.backgroundColor = 'coral'}>Inline Style</h2>
        </div >
    )
}
