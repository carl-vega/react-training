
import '../../App.css';
import InlineStyle from './InlineStyle'
import ObjectStyle from './ObjectStyle'
import CSSStyle from './CSSStyle'
import ModuleStyle from './ModuleStyle'
export default function App() {
    const styles = {
        display: 'grid',
        justifyContent: 'center'
    }
    return (
        <div className="App">
            <h1>Stylish</h1>
            <div style={styles}>
                <InlineStyle />
                <ObjectStyle />
                <CSSStyle />
                <ModuleStyle />
            </div>
        </div>
    )
}


