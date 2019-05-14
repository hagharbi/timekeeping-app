import {
    UPDATE_USER_DETAILS,
    USER_EDIT_LOADING,
    GET_ERRORS
} from "../actions/types";

const initialState = {
    clientDetails: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_DETAILS:
            return {
                ...state,
                clientDetails: action.payload,
            };
        case USER_EDIT_LOADING:
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