import {
    CREATE_PROJECT_DETAILS,
    PROJECT_CREATE_LOADING,
    GET_ERRORS
} from "../../actions/types";

const initialState = {
    newProject: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_PROJECT_DETAILS:
            return {
                ...state,
                newProject: action.payload,
            };
        case PROJECT_CREATE_LOADING:
            return {
                ...state,
                newProject: action.payload,
                loading: true
            };
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
};