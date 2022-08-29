
import '../../App.css';
import Inline from './InlineStyle'
export default function App() {
    const styles = {
        display: 'grid',
        justifyContent: 'center'
    }
    return (
        <div className="App">
            <h1>Stylish</h1>
            <div style={styles}>
                <Inline />

            </div>
        </div>
    )
}


