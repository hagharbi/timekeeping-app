import {
    REMOVE_LOG_DETAILS,
    LOG_REMOVE_LOADING,
    GET_ERRORS
} from "../../actions/types";

const initialState = {
    removeLog: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REMOVE_LOG_DETAILS:
            return {
                ...state,
                removeLog: action.payload,
            };
        case LOG_REMOVE_LOADING:
            return {
                ...state,
                removeLog: action.payload,
                loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
};