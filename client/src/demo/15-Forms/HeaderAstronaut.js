import React, { useEffect, useState } from 'react'

export default function HeaderAstronaut() {
    const [name, setName] = useState('Valentina')
    const [formState, setFormState] = useState({ sign: '', bark: '', mineral: '' })
    const [listState, setListState] = useState({ sign: '', bark: '', mineral: '' })
    console.log(formState)
    const { sign, bark, mineral } = formState;
    useEffect(() => {
        console.log("useEffect astronaut")
        const localState = JSON.parse(localStorage.getItem('astronautState'))
        if (!localState) return
        setFormState(localState)
        setListState(localState)
        return () => {
            console.log("cleanup astronaut")
        }
    }, [])
    const handleInputChange = ({ target: { name, value } }) => {
        setFormState({ ...formState, [name]: value })
        setListState({ ...listState, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        localStorage.setItem('astronautState', JSON.stringify(formState))
        setFormState({ sign: '', bark: '', mineral: '' })
    }
    return (
        <>
            <h1>I am Astronaut, doing Astronaut things.</h1>
            <span style={{ fontSize: "100px" }}>👨🏻‍🚀 ⇒{name}</span>
            <form>
                <label>
                    Name of Astronaut:
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />
                </label>
            </form>
            <form onSubmit={handleSubmit}>
                <label style={{ display: 'block' }}>
                    Favorite Road Sign:
                    <input type="text" name='sign' value={sign} onChange={handleInputChange} />
                </label>
                <label style={{ display: 'block' }}>
                    Favorite Tree Bark:
                    <input type="text" name='bark' value={bark} onChange={handleInputChange} />
                </label>
                <label style={{ display: 'block' }}>
                    Favorite Mineral:
                    <input type="text" name='mineral' value={mineral} onChange={handleInputChange} />
                </label>
                <input type='submit' />
            </form>
            <ul style={{ listStyle: "none" }}>
                <li>{listState.sign}</li>
                <li>{listState.bark}</li>
                <li>{listState.mineral}</li>
            </ul>
        </>
    )
}
