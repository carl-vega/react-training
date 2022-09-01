import {
    UPDATE_COLOR
} from "./actions";

const initialState = {
    redux: '#e66465',
    newKey: "old value"
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COLOR: {
            return {
                ...state,
                redux: action.redux,
                newKey: 'new value'
            };
        }
        default:
            return state;
    }
};

export default reducers;