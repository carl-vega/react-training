import React, { createContext, useContext } from 'react';

// Initialize new context for colors
const ColorContext = createContext();

// We create a custom hook to provide immediate usage of the color context value (colors) in other components
export const useColorContext = () => useContext(ColorContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const ColorProvider = ({ children }) => {
  const context = '';

  // The value prop expects an initial state object
  return (
    <ColorContext.Provider
      value={{ context }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </ColorContext.Provider>
  );
};
