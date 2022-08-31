/*
 * ADD_CLIENT:
 * - takes a client object as payload with name and product parameters
 * - creates new ID for client with Data.now()
 * - pushes new client to the end of copy of client array
 * - updates client array
 */
export const ADD_CLIENT = 'ADD_CLIENT';

export const ADD_CLIENT_PRODUCT = 'ADD_CLIENT_PRODUCT';

/*
 * REMOVE_CLIENT:
 * - takes a client ID as payload
 * - finds client based on ID and removes via filter() the targeted user
 * - updates client array
 */
export const REMOVE_CLIENT = 'REMOVE_CLIENT';

/*
 * UPDATE_CLIENT:
 * - takes object with id and updated values for client parameter(s)
 * - finds client based on ID and updates object
 * - updates object in-place within copy of client array
 * - updates client array
 */
export const UPDATE_CLIENT = 'UPDATE_CLIENT';

/*
 * ADD_PRODUCT:
 * - takes a string as name of new product to be added
 * - pushes new product to end of copy of products array
 * - updates products array
 */
export const ADD_PRODUCT = 'ADD_PRODUCT';

/*
 * REMOVE_PRODUCT:
 * - takes a string of product to be removed
 * - creates copy of products array
 * - filters new copy to only return non-matching (to parameter) products
 * - updates products array
 */
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const SET_PRODUCT_NAME = 'SET_PRODUCT_NAME';

export const SET_CLIENT_NAME = 'SET_CLIENT_NAME';

export const SET_CLIENT_PRODUCT = 'SET_CLIENT_PRODUCT';

export const SET_CLIENT_PRODUCTS = 'SET_CLIENT_PRODUCTS';
