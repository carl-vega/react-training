// Import type variables
import { useColorContext } from './Context/ColorContext';

export default function Context() {
    const { context, setContext } = useColorContext();
    // Initialize `useReducer` hook. Returns state and a dispatch function. Accepts arguments of our reducer and initial state
    const handleColorChange = ({ target: { value } }) => {
        setContext(value)
    }
    return (
        <div style={{ display: 'grid', justifyItems: 'center' }}>
            <h2>Context</h2>
            <div>
                <h3>Color</h3>
                <input
                    type="color"
                    value={context}
                    onChange={handleColorChange} />
            </div>
        </div>
    )
}
