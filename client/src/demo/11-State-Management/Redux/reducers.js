import {
    UPDATE_COLOR
} from "./actions";

const initialState = {
    redux: '#e66465'
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return {
                ...state,
                redux: action.redux,
            };
        default:
            return state;
    }
};

export default reducers;