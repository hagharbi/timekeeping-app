import {
    LOG_CREATE_LOADING,
    CREATE_LOG_DETAILS,
    GET_ERRORS
} from "../../actions/types";

const initialState = {
    newLog: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_LOG_DETAILS:
            return {
                ...state,
                newLog: action.payload,
            };
        case LOG_CREATE_LOADING:
            return {
                ...state,
                newLog: action.payload,
                loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
};