// Import our actions. Actions are in all caps.
import { UPDATE_COLOR } from './actions';

// Reducer accepts state and an action, returns a new state
export default function reducer(state, action) {
  switch (action.type) {
    case UPDATE_COLOR: {
      return {
        ...state,
        context: action.payload
      };
    }
    default:
      return state;
  }
}
