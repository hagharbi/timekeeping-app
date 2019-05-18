import {
    UPDATE_PROJECTDROPS_DETAILS,
    PROJECTDROPS_EDIT_LOADING,
    GET_ERRORS
} from "../../actions/types";

const initialState = {
    editDropdowns: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROJECTDROPS_DETAILS:
            return {
                ...state,
                editDropdowns: action.payload,
            };
        case PROJECTDROPS_EDIT_LOADING:
            return {
                ...state,
                editDropdowns: action.payload,
                loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
};