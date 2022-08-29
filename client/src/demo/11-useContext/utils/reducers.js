// Import our actions. Actions are in all caps.
import {
  ADD_CLIENT,
  ADD_CLIENT_PRODUCT,
  REMOVE_CLIENT,
  UPDATE_CLIENT,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_PRODUCT_NAME,
  SET_CLIENT_NAME,
  SET_CLIENT_PRODUCT,
  SET_CLIENT_PRODUCTS
} from './actions';

// Reducer accepts state and an action, returns a new state
export default function reducer(state, action) {
  switch (action.type) {
    case ADD_CLIENT: {
      const newClientId = state.clients[state.clients.length - 1].id + 1;
      const newClient = { ...action.payload, id: newClientId };

      return {
        ...state,
        clients: [...state.clients, newClient],
      };
    }
    case ADD_CLIENT_PRODUCT: {
      const clientIndex = state.clients.findIndex(
        (client) => client.id === action.payload.id
      );
      if (state.clients[clientIndex].products.includes(action.payload.product)) return state;
      const updatedClient = {
        ...state.clients[clientIndex],
        products:
          [...state.clients[clientIndex].products, action.payload.product],
      };
      const newClientsList = [...state.clients];
      newClientsList[clientIndex] = updatedClient;
      return {
        ...state,
        clients: newClientsList,
      };
    }
    case REMOVE_CLIENT: {
      return {
        ...state,
        clients: [...state.clients].filter(
          (client) => client.id !== action.payload
        ),
      };
    }
    case UPDATE_CLIENT: {
      const clientIndex = state.clients.findIndex(
        (client) => client.id === action.payload.id
      );

      // Variable to hold our client object
      const updatedClient = {
        ...state.clients[clientIndex],
        ...action.payload,
      };

      // Make a copy of our current clients array
      const newClientsList = [...state.clients];

      // Assign the updated client to their existing position in the newClientsList
      newClientsList[clientIndex] = updatedClient;

      return {
        ...state,
        clients: newClientsList,
      };
    }
    case ADD_PRODUCT: {
      if (state.products.includes(action.payload)) return { ...state, addProduct: 'Already included' };
      return {
        ...state,
        addProduct: '',
        products: [...state.products, action.payload],
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...state,
        products: [...state.products].filter((product) => product !== action.payload),
      };
    }
    case SET_PRODUCT_NAME: {
      return {
        ...state,
        addProduct: action.payload,
      };
    }

    case SET_CLIENT_NAME: {
      return {
        ...state,
        clientName: action.payload,
      };
    }
    case SET_CLIENT_PRODUCT: {
      if (!state.addClientProduct[action.payload.id]) return {
        ...state, addClientProduct: { ...state.addClientProduct, [action.payload.id]: { ...action.payload } }
      }
      const newProductList = { ...state.addClientProduct }
      newProductList[action.payload.id] = { ...action.payload }
      return {
        ...state,
        addClientProduct: newProductList
      }
    }
    // Take a copy of existing state and modify the `clientProducts` property (initially an empty string). Used for dropdown field in the UI.
    case SET_CLIENT_PRODUCTS: {
      return {
        ...state,
        clientProduct: action.payload,
      };
    }
    default:
      return state;
  }
}
