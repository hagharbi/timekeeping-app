import {
    REMOVE_CLIENT_DETAILS,
    CLIENT_REMOVE_LOADING,
    GET_ERRORS
} from "../actions/types";

const initialState = {
    removeClient: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REMOVE_CLIENT_DETAILS:
            return {
                ...state,
                removeClient: action.payload,
            };
        case CLIENT_REMOVE_LOADING:
            return {
                ...state,
                removeClient: action.payload,
                loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
};