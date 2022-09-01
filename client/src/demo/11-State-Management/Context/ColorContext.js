import { createContext, useContext, useReducer, useMemo } from 'react';
import { reducer } from './reducers'
import { UPDATE_COLOR } from './actions';
// Initialize new context for colors
const ColorContext = createContext();

// We create a custom hook to provide immediate usage of the color context value (colors) in other components
export const useColorContext = () => useContext(ColorContext);

const initialState = {
  context: '#ef4234'
}
// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const ColorProvider = ({ children }) => {
  const [{ context }, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({
    context,
    setContext: (color) => {
      dispatch({ type: UPDATE_COLOR, color })
    }
  }), [context])
  console.log(value)
  // The value prop expects an initial state object
  return (
    <ColorContext.Provider
      value={value}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </ColorContext.Provider>
  );
};
