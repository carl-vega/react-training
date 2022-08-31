// Import useReducer
import { useReducer } from 'react';
// Import type variables
import {
  ADD_CLIENT,
  ADD_CLIENT_PRODUCT,
  REMOVE_CLIENT,
  ADD_PRODUCT,
  SET_PRODUCT_NAME,
  SET_CLIENT_NAME,
  SET_CLIENT_PRODUCT,
  SET_CLIENT_PRODUCTS,
} from '../utils/actions';

// Import reducer from our utils folder
import reducer from '../utils/reducers';

import { useClientContext } from '../utils/ClientContext';

export default function ClientList() {
  const initialState = useClientContext();
  // Initialize `useReducer` hook. Returns state and a dispatch function. Accepts arguments of our reducer and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* Now accessing clients from our state object returned from the useReducer hook */}
      {state.clients ? (
        <>
          <section className="client-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th style={{ width: "50%" }}>Products</th>
                  <th>Add Product</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {/* Access clients from our state object returned from useReducer */}
                {state.clients.map((client) => (
                  <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td >{client.products[1] ? client.products.join(', ') : client.products}</td>
                    <td>
                      <select
                        onChange={(e) =>
                          dispatch({ type: SET_CLIENT_PRODUCT, payload: { id: client.id, product: e.target.value } })
                        }
                        value={state.addClientProduct[client.id] ? state.addClientProduct[client.id].product : 'Choose Product...'}
                      >
                        <option>Choose Product...</option>
                        {/* Access our products array from our state object returned from useReducer */}
                        {state.products.map((product) => (
                          <option key={product} value={product}>
                            {product}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() => {
                          console.log('🚀 ClientList.js: Dispatched add client product! ');
                          return dispatch({
                            type: ADD_CLIENT_PRODUCT,
                            payload: {
                              ...state.addClientProduct[client.id]
                            },
                          });
                        }}
                      >
                        Add Product
                      </button>
                    </td>
                    <td>
                      {/* Add dispatch function passing the type and payload */}
                      <button
                        type="button"
                        onClick={() => {
                          console.log('🚀 ClientList.js: Dispatched remove!');
                          return dispatch({
                            type: REMOVE_CLIENT,
                            payload: client.id,
                          });
                        }}
                      >
                        <span role="img" aria-label="delete">
                          ✖️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="add-client">
              <input
                value={state.clientName}
                onChange={(e) =>
                  dispatch({ type: SET_CLIENT_NAME, payload: e.target.value })
                }
                placeholder="New Client name..."
                type="text"
              />

              <select
                onChange={(e) =>
                  dispatch({ type: SET_CLIENT_PRODUCTS, payload: e.target.value })
                }
                value={state.clientProduct}
              >
                <option>Choose Product...</option>
                {/* Access our products array from our state object returned from useReducer */}
                {state.products.map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => {
                  console.log('🚀 ClientList.js: Dispatched add client! ');
                  return dispatch({
                    type: ADD_CLIENT,
                    payload: {
                      name: state.clientName,
                      products: [state.clientProduct],
                    },
                  });
                }}
              >
                Add client
              </button>
            </div>
            <div className="add-product">
              <input
                onChange={(e) =>
                  dispatch({ type: SET_PRODUCT_NAME, payload: e.target.value })
                }
                value={state.addProduct}
                placeholder="New Product..."
                type="text"
              />
              <button
                type="button"
                onClick={() => {
                  console.log('🚀 ClientList.js: Dispatched add new product! ');
                  return dispatch({ type: ADD_PRODUCT, payload: state.addProduct });
                }}
              >
                Add Product
              </button>
            </div>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no clients here!</span>
      )
      }
    </div >
  );
}