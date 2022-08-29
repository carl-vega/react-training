import React, { createContext, useContext } from 'react';

// Initialize new context for clients
const ClientContext = createContext();

// We create a custom hook to provide immediate usage of the client context value (clients) in other components
export const useClientContext = () => useContext(ClientContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const ClientProvider = ({ children }) => {
  const clients = [
    {
      id: 1,
      name: 'Chloe',
      products: ['Telepathic Reading'],
    },
    {
      id: 2,
      name: 'Caleb',
      products: ['Empathic Reading'],
    },
  ];

  const products = [
    'Super Strength',
    'Telepathic Reading',
    'Empathic Reading',
    'Mental Suggestion',
    'Time Travel',
    'Molecular Transmutation',
  ];

  const clientProduct = '';
  const clientName = '';
  const addProduct = '';
  const addClientProduct = {};
  // The value prop expects an initial state object
  return (
    <ClientContext.Provider
      value={{ clients, products, clientName, clientProduct, addProduct, addClientProduct }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </ClientContext.Provider>
  );
};
