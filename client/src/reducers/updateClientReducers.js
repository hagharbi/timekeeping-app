import {
    UPDATE_CLIENT_DETAILS,
    CLIENT_EDIT_LOADING,
    GET_ERRORS
} from "../actions/types";

const initialState = {
    clientDetails: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_CLIENT_DETAILS:
            return {
                ...state,
                clientDetails: action.payload,
            };
        case CLIENT_EDIT_LOADING:
            return {
                ...state,
                clientDetails: action.payload,
                loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
};