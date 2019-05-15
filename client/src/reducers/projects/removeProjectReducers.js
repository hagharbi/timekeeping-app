import {
    PROJECT_REMOVE_LOADING,
    REMOVE_PROJECT_DETAILS,
    GET_ERRORS
} from "../../actions/types";

const initialState = {
    removeProject: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REMOVE_PROJECT_DETAILS:
            return {
                ...state,
                removeProject: action.payload,
            };
        case PROJECT_REMOVE_LOADING:
            return {
                ...state,
                removeProject: action.payload,
                loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
};