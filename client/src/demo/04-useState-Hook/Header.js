
export default function Header({ name, children }) {
    return (
        <>
            <h1>I am {name}, doing {name} things.</h1>
            {children}
        </>
    )
}
