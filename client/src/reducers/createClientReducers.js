import {
    CREATE_CLIENT_DETAILS,
    CLIENT_CREATE_LOADING,
    GET_ERRORS
} from "../actions/types";

const initialState = {
    newClient: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_CLIENT_DETAILS:
            return {
                ...state,
                newClient: action.payload,
            };
        case CLIENT_CREATE_LOADING:
            return {
                ...state,
                newClient: action.payload,
                loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
};