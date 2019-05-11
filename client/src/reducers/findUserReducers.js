import {
    SET_USER_DETAILS,
    USER_INFO_LOADING,
    GET_ERRORS
} from "../actions/types";

const initialState = {
    userDetails: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.payload,
            };
        case USER_INFO_LOADING:
            return {
                ...state,
                userDetails: action.payload,
                loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}