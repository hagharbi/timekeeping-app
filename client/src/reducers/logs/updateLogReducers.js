import {
    UPDATE_LOG_DETAILS,
    LOG_EDIT_LOADING,
    GET_ERRORS
} from "../../actions/types";

const initialState = {
    editLog: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_LOG_DETAILS:
            return {
                ...state,
                editLog: action.payload,
            };
        case LOG_EDIT_LOADING:
            return {
                ...state,
                editLog: action.payload,
                loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
};