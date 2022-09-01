import { useState } from 'react'
export default function ObjectStyle() {
    const [hover, setHover] = useState(false);
    const onHover = () => hover ? 'cadetblue' : 'coral';
    const styles = { width: 'fit-content', backgroundColor: onHover(), fontFamily: 'Monoton', fontSize: '100px', padding: '10px 20px', borderRadius: '5px' };
    return (
        <>
            <h2 style={styles} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Object Style</h2>
        </ >
    )
}
