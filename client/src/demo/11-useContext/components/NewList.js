import { useReducer } from 'react';
import reducer from '../utils/reducers';
import { useClientContext } from '../utils/ClientContext';
export default function NewList() {
    const initialState = useClientContext();
    const [state] = useReducer(reducer, initialState);
    return (
        <ul>
            {state?.clients ? state.clients.map((client) => (<li key={client.id}>{client.name}</li>)) : <li><h2>Nope</h2></li>}
        </ul>
    )
}
