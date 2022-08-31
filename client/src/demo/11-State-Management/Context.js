import { useReducer } from 'react';
// Import type variables
import { UPDATE_COLOR } from './Context/actions';

// Import reducer from our Context folder
import reducer from './Context/reducers';

import { useColorContext } from './Context/ColorContext';

export default function Context() {
    const initialState = useColorContext();
    // Initialize `useReducer` hook. Returns state and a dispatch function. Accepts arguments of our reducer and initial state
    const [state, dispatch] = useReducer(reducer, initialState);
    const { context } = state;
    const handleColorChange = ({ target: { value } }) => {
        dispatch({
            type: UPDATE_COLOR,
            payload: { context: value }
        });
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
